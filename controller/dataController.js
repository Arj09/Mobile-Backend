const asyncHandler = require("express-async-handler");
const Startup = require("../model/dataModel")



const createData = asyncHandler( async (req, res)=>{

    const {Company_Name, City, Starting_Year, Founders, Industry, No_of_Employees,  Funding_Amount  } = req.body
    console.log(req.body)

    if(!Company_Name || !City || !Starting_Year || !Founders || !Industry || !No_of_Employees || !Funding_Amount ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const data = await Startup.create({
        Company_Name,
        City,
        Starting_Year,
        Founders,
        Industry,
        No_of_Employees,
        Funding_Amount
    
    })
    res.status(202).json(data)
})


const getAllData = asyncHandler( async  (req, res)=>{
    const data = await Startup.find()
    res.status(200).json(data)
    
})


const getData = asyncHandler( async (req, res)=>{

    const data = await Startup.findById(req.params.id);

    if(!data){
        res.status(404);
        throw new Error('data not found');
    }

    
    res.status(200).json(data);
})
const updateData = asyncHandler(async (req, res)=>{

    const data = await Startup.findById(req.params.id);

    if(!data){
        res.status(404);
        throw new Error('data not found');
    }

    const updateData = await Startup.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        } 
    )

    
    res.status(200).json(updateData);
    
})
const deleteData = asyncHandler ( async  (req, res)=>{

    const data = await Startup.findById(req.params.id);
    //console.log("data find", data)

    if(!data){
        res.status(404);
        throw new Error('data not found');
    }
    //console.log("data available", data)
    
    await Startup.findByIdAndRemove(
        req.params.id
    )
    //console.log("data delete succesful")
    res.status(200).json(data);
} )



module.exports ={createData, updateData, deleteData, getAllData, getData}
