let express = require("express")
let multer = require("multer")
let { v4: uuidv4 } = require("uuid")
const { add, data } = require("../controllers/imgController")

let route=new express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage })

route.post('/add', upload.single('file') ,add)
route.get('/get',data)

module.exports=route