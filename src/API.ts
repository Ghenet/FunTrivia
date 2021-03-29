import { shuffleArray } from './utils';

//specify the type for the questions
export type Question = {
    category: string,
    correct_answer: string;
    difficulty:string;
    incorrect_answers: string[];
    question:string;
    type: string;
}

export type QuestionState = Question & { answers: string[]};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

//grab the data from the API 
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data)
    return data.results.map((question: Question) => ( 
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers, 
                question.correct_answer]),
        }
        ))
}