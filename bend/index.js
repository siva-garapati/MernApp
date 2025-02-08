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

app.listen(5000)