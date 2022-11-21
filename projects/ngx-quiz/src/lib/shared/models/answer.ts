import { Question } from './question';

export interface AnswerData {
  question: Question;
  questionIndex: number;
  answerIndex: number;
}

export interface Answer {
  displayImage: string;
  displayText: string;
  value: number;
}

export interface SingleAnswer extends Answer {}

export interface MultipleAnswer extends Answer {}

export interface BooleanAnswer extends Answer {
  valid: boolean;
}
