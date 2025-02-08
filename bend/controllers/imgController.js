const {v4:uuidv4} =require("uuid")
const md = require("../models/imgModel")

const add=async(req, res) => {
    try {
        let data = new md({ ...req.body, "_id": uuidv4(), "url": req.file.filename })
        await data.save()
        console.log(req.file)
        res.json({ file: req.file })
    } catch (err) {
        res.send("error in add")
    }
}

const filter=async(req,res)=>{
    try{
        let data=await md.find({name:{$regex:req.params.str,$options:"i"}})
        res.send(data)
    }catch(err){
        res.send("error in filter")
    }
}

const data=async (req, res) => {
    try {
        let data = await md.find()
        res.json(data)
    } catch (err) {
        res.send("failed to get images")
    }
}

module.exports={add,data,filter}