import { PrismaClient } from '@prisma/client'
import { Joke } from '../model/joke'
import { getRandom } from './util';

export async function getRandomJoke() : Promise<Joke> {
    const client = new PrismaClient()
    const res : object[] = await client.joke.findMany()
    if (res.length > 0) {
        const joke = getRandom(res) as Joke
        await client.$disconnect()
        return joke
    } else {
        throw new Error("No jokes found")
    }
}