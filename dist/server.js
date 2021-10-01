"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const joke_dao_1 = require("./prisma/joke_dao");
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.get('/joke-of-the-day', (async (_, res) => {
    try {
        const joke = await (0, joke_dao_1.getRandomJoke)();
        res.status(200).send(joke);
    }
    catch (err) {
        res.status(400).send(err);
    }
}));
app.listen(process.env.PORT || 3000, (() => {
    console.log("Server running");
}));
//# sourceMappingURL=server.js.map