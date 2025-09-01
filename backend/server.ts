import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express()

const port = process.env.PORT;


app.get("/",(req:Request, res:Response)=>{
    res.status(200).send("api working");
});

app.listen(port, ()=>`http:localhost:${port}`);
