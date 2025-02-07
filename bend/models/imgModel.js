let mongoose=require("mongoose")

let sch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "url":String
})

let md=mongoose.model("imgs",sch)

module.exports=md