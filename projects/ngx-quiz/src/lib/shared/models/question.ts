import { BooleanAnswer, MultipleAnswer, SingleAnswer } from './answer';

export type QuestionType = 'single' | 'multiple' | 'boolean';

export type QuestionDirection = 'prev' | 'next';

export interface Question {
  type: QuestionType;
  title: string;
  description: string;
  displayImage: string;
  answers?: (SingleAnswer | MultipleAnswer | BooleanAnswer)[];
}
