export interface Question {
    category: string;
    id: string;
    type: string;
    difficulty: string;
    tags: string[];
    question: string;
    possibleAnswers: string[];
    answer: string;
}