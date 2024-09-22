import  express  from "express";
import cors from 'cors'
import User from "./models/userModel.js";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import axios from "axios";
import blogsRoute from './blogsRoute/blogsRoute.js'

dotenv.config()
const app= express()
app.use(express.json());


const PORT= 3000

const corsOptions = {
    origin: 'http://localhost:5173'
  };
  

  app.use(cors(corsOptions));

 
  const connect=async()=>{
    try {
      mongoose.connect(process.env.MONGO_URI)
      console.log("Connected to DB");
    } catch (error) {
      console.log(error);
    }
  }

  //TASK 1: NODEJS HELLO WORLD
app.get('/',(req, res)=>{
    res.send("Hello, World!")
})

 //TASK 2: EXPRESS CREATE SIMPLE REST API USING EXPRESS
const users= [
    {name:'paddy',email:"paddy@gmail.com",age:15},
    {name:'Bhuv',email:"bhuv@gmail.com",age:25},
]

app.get('/users', (req,res)=>{
    res.json(users)
})



//TASK 4: MongoDB: Create a MongoDB schema for storing user data (name, email, age), and write a script to insert a new user into the collection.

app.post('/add-user', async (req, res) => {
    try {
      const { name, email, age } = req.body;
      const newUser = new User({ name, email, age });
      await newUser.save();
      res.json({ message: 'User added successfully' });
    } catch (error) {
      console.error('Error adding user:', error);
      res.status(500).json({ message: 'Error adding user', error });
    }
  });

const simulatePostRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3000/add-user', {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
      });
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

//TASK 5: Express.js + MongoDB: Create an Express.js route to fetch a user by their email from the MongoDB database.

  app.get('/user/:email', async (req, res)=>{
    try {
        const {email}= req.params;
        const user= await User.findOne({email})

        if (!user) {
            return res.status(404).json({message:"user not found"})
        }
        return res.json(user)

    } catch (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ message: 'Internal server error', error });
    }
  })


  app.get('/all-users', async (req, res) => {
    try {
      const users = await User.find({}); 
      res.json(users); 
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  });

  app.use('/api', blogsRoute); 
  

app.listen(PORT, ()=>{

    console.log("Server running on ", PORT);
    connect()
    // simulatePostRequest()
    
})