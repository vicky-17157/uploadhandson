const express= require('express');
const multer= require('multer');
const app = express();

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'images');
    },
    filename:(req,file,cb)=>{
        const {originalname} = file;
        cb(null,originalname)
    }
   });

   const upload= multer({ storage });
   
app.post('/images',upload.single('image'),(req,res) =>{
   try{
    const file = req.file;
    console.log(file);
   }catch(err){
       console.log({message:err});
   }    
});

app.listen(8080,()=>{
    console.log("listening port 8080")});
