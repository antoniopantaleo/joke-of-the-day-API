"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomJoke = void 0;
const client_1 = require("@prisma/client");
const util_1 = require("./util");
async function getRandomJoke() {
    const client = new client_1.PrismaClient();
    const res = await client.joke.findMany();
    if (res.length > 0) {
        const joke = (0, util_1.getRandom)(res);
        await client.$disconnect();
        return joke;
    }
    else {
        throw new Error("No jokes found");
    }
}
exports.getRandomJoke = getRandomJoke;
// export async function insertJoke(joke: Joke) : Promise<void> {
//     return new Promise(async (resolve, reject) => {
//         const client = new PrismaClient()
//         const res = await client.joke.create({
//             data : joke
//         })
//         if (res) { resolve() } else {
//             reject("Error during insert")
//         }
//     })
// }
//# sourceMappingURL=joke_dao.js.map