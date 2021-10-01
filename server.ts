import { config } from "dotenv";
import express from 'express';
import { Joke } from "./model/joke";
import { getRandomJoke } from './prisma/joke_dao'

config();

const app = express();

app.get('/joke-of-the-day',(async (_,res) => {
    try {
        const joke = await getRandomJoke() as Joke
        res.status(200).send(joke)
    } catch(err) {
        res.status(400).send(err)
    }
}))

app.listen(process.env.PORT || 3000, (() => {
    console.log("Server running");
}))