const mongoose = require('mongoose')

const StartUpSchema = mongoose.Schema({

    

    Company_Name: {
        type: String,
        required: [true, "Please add Company Name "],
    },
    City : {
        type: String,
        required: [true, "please add City Name"]

    },
    Starting_Year: {
        type:  String,
        required: [true, "please add starting year"]
    },
    Founders : {
        type: String,
        required: [true, "please add founders"]

    },
    Industry :{
        type: String,
        required: [true, "please add industry"]

    },
    No_of_Employees :{
        type: Number,
        required: [true, "please add no of employees"]

    },
    Funding_Amount :{
        type: String,
        required: [true, "please add Funding Amount"]

    }




},{
    timestamps : true
})

module.exports = mongoose.model("StartUpdata", StartUpSchema)