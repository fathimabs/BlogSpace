const express = require('express')

const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const mongodB = require('./config/mongoDb')
const userRoute = require('./routes/userRoute')
const blogRoute = require('./routes/blogRoute')



const app = express()

app.use(cors())

app.use(express.json())

mongodB()

app.use('/user', userRoute)
app.use('/blog', blogRoute)

app.listen(3000, () => {
    console.log("Blog-Platform Server Connected");

})