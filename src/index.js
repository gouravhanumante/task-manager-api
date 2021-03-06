const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")
const taskRouter = require("./routers/task")

const app = express()
const port = process.env.PORT 
console.log(port);
const multur = require("multer")

const upload = multur({
  dest: "images",
  limits: {
    fileSize: 160000,
  },
  fileFilter(req, file, cb) {

if (!file.originalname.match(/\.(doc|docx|pdf)$/))   {
   return cb(new Error("PDF file format expected!"))    
}

cb(undefined, true)
  },
})

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log("Server is up on port " + port)
})

 

