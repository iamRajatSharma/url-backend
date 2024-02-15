const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DB_URL, (err) => {
    if (err) {
        return res.status(500).send({message:"Database Error"})
    }
    else {
        console.log("DB Connected")
    }
})
