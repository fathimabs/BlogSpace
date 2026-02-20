const User = require("../models/userModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const isUserEmail = await User.findOne({ email });
    if (isUserEmail) {
      return res.status(409).json({ message: "Email is already existed" });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashPass
    });

    await newUser.save();

    //generate token
    
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET_KEY,
      { expiresIn: '1h' }
    );

    // return user-info & token
   
    res.status(201).json({
      message: "User Registration Successful",
      userId: newUser._id,
      username: newUser.username,
      email: newUser.email,
      token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getUsers = async (req, res) => {

    try {
        const usersData = await User.find().select('-password')
        res.json(usersData)

    } catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

const profileUpdate = async (req, res) => {

    const userId = req.user.id


    const { username, email } = req.body

    if (req.body.password) {

        return res.status(400).json({ message: "Password update is not allowed" })
    }
    try {

        if (!userId) {

            return res.status(404).json({ message: "User Not Found" })
        }
        const updateField = {}

        if (req.body.username) updateField.username = username
        if (req.body.email) updateField.email = email

        const dataUpdate = await User.findByIdAndUpdate(userId, updateField, {
            new: true,
            runValidators: true
        }).select('-password')

        if (!dataUpdate) {

            return res.status(404).json({ message: "The User not Exist" })
        }
        res.status(200).json({
            message: "User Updated Successfully",
            data: dataUpdate
        })
    } catch (error) {
        res.status(400).json({ error: "Invlid User" })
    }

}

const login = async (req, res) => {

    const { email, password } = req.body;


    try {

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, userExist.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({
            id: userExist.id,
            email: userExist.email
        },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' })


        res.status(200).json({
            message: "Login Successfull",
            userId: userExist.id,
            username: userExist.username,
            email: userExist.email,
            token
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}


module.exports = { createUser, getUsers, profileUpdate, login }