const User = require("../models/userModel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {

    const { username, email, password } = req.body
    // console.log(req.body);

    try {
        let isUserEmail = await User.findOne({ email })

        if (isUserEmail) {
            return res.status(409).json({ message: "Email is already existed" })
        }

        let hashPass = await bcrypt.hash(password, 10)

        let newUser = await new User({
            username,
            email,
            password: hashPass
        })
        // console.log(newUser)
        await newUser.save()

        res.status(201).json({ message: "User Registration Successfull" })
    } catch (error) {

        res.status(500).json({ message: "Server Error" })
    }

}

const getUsers = async (req, res) => {

    try {
        let usersData = await User.find().select('-password')
        res.json(usersData)

    } catch (error) {
        res.status(500).json({ message: "Error" })
    }
}

const profileUpdate = async (req, res) => {

    let userId = req.user.id
    // console.log(userId);

    let { username, email } = req.body

    if (req.body.password) {

        return res.status(400).json({ message: "Password update is not allowed" })
    }
    try {

        if (!userId) {

            return res.status(404).json({ message: "User Not Found" })
        }
        let updateField = {}

        if (req.body.username) updateField.username = username
        if (req.body.email) updateField.email = email

        let dataUpdate = await User.findByIdAndUpdate(userId, updateField, {
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

    let { email, password } = req.body;
    // console.log(req.body);

    try {

        let userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(404).json({ message: "User not found" });
        }

        let isMatch = await bcrypt.compare(password, userExist.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        let token = jwt.sign({
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