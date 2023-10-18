import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { dbConnection } from './DB/dbConnection.js';

const app = express()

const PORT = 3000;

app.use(express.json())



dbConnection()
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})