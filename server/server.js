import express from "express";
import cors from "cors"; //connect backend with frontend
import 'dotenv/config';
import cookieParser from "cookie-parser"; //help us to send the cookies in the api response

import connectDB from './config/mongodb.js';
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}))

// API ENDPOINTS 
app.get('/', (req, res)=> res.send("API Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)


app.listen(port, ()=> console.log(`Server started at PORT:${port}`));