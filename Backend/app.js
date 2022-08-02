import express from 'express';
import mongoose from 'mongoose'
import cors from 'cors'
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';


const app = express();
 app.use(cors());
app.use(express.json());
app.use("/api/user",router) 
app.use("/api/blog",blogRouter)

mongoose.connect("mongodb+srv://Blogapp:Raja@cluster0.tgxd7.mongodb.net/?retryWrites=true&w=majority")
.then(()=> app.listen(5000))
.then(()=>
    console.log("Connected to the Database")
)
.catch((err)=> console.log(err))
// app.listen(5000);