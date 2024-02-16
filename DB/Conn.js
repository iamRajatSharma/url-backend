// const mongoose = require("mongoose")
// require("dotenv").config()

// mongoose.connect(process.env.DB_URL, (err) => {
//     if (err) {
//         return res.status(500).send({message:"Database Error"})
//     }
//     else {
//         console.log("DB Connected")
//     }
// })
const mongoose = require('mongoose')

const url = `mongodb+srv://rajat:HuIdst4OQhwfZmkJ@cluster0.6wrjo.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams = {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true 
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
