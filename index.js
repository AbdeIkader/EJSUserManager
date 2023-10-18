import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import { dbConnection } from './DB/dbConnection.js';
import { userModel } from './DB/models/user.model.js';

const app = express()

const PORT = 3000;

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.sendFile(path.join(path.resolve(),'index.html'))
})

app.post('/addUser',async(req,res)=>{
    console.log(req.body);
    let result = new userModel(req.body)
    await result.save()
    res.redirect('/')
})

dbConnection()
app.listen(process.env.PORT || PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT || PORT}`);
})