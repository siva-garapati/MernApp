let express=require("express")
let mongoose=require("mongoose")
let cors=require("cors")
const route = require("./routes/route")

mongoose.connect("mongodb://localhost:27017/s1mern").then(()=>{
    console.log("db connected")
})

let app=express()
app.use(cors())
app.use('/images',express.static('./uploads'))

app.use('/', route)

// app.post('/add', upload.single('file'),async(req,res)=>{
//     try{
//         let data=new md({...req.body,"_id":uuidv4(),"url":req.file.filename})
//         await data.save()
//         console.log(req.file)
//         res.json({file: req.file})
//     }catch(err){
//         res.send("error in add")
//     }
// })

// app.get("/get",async(req,res)=>{
//     try{
//         let data=await md.find()
//         res.json(data)
//     }catch(err){
//         res.send("failed to get images")
//     }
// })

app.listen(5000)