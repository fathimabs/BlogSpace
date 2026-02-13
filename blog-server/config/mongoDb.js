const mongoose = require('mongoose')


async function mongodB() {
    try {
        // console.log(process.env.MONGODB_URL);
        
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Blog-Db Connected");

    } catch (error) {
        console.error("Connection Error", error);
        process.exit(1);
    }
}

module.exports = mongodB