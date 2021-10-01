export class Joke {
    id?: number
    question?: string
    answer: string

    constructor(answer: string, question?: string, id?: number,) {
        this.id = id
        this.question = question
        this.answer = answer
    }
}