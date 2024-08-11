export interface FormQuestionsModel {
    title: string,
    minimum_score: number,
    success_message: string,
    failure_message: string,
    questions: Question[]
}

export interface Question {
    id: number,
    question: string,
    choices: string[],
    correct_answer: string,
    complete?: boolean,
    answer?: string
}