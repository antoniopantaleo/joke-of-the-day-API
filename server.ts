import { config } from "dotenv";
import express from 'express';
config();

const app = express();

app.get('/joke-of-the-day',((req,res) => {

}))

app.listen(process.env.PORT || 3000, (() => {
    console.log("Server running");
}))