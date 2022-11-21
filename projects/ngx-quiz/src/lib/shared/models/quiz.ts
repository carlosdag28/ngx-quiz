import { Question } from './question';

export enum QuizStatus {
  Started = 'started',
  OnGoing = 'on-going',
  Finished = 'finished'
}

export interface StartScreen {
  title: string;
  description: string;
  displayImage: string;
  buttonText: string;
}

export interface EndScreen {
  title: string;
  description: string;
  displayImage?: string;
  buttonText: string;
}

export interface Quiz {
  name: string;
  level: string;
  duration: number;
  automaticAdvance: boolean;
  returnAllowed: boolean;
  repeatAllowed: boolean;
  emitReport: boolean;
  startScreen?: StartScreen;
  endScreen?: EndScreen;
  questions: Question[];
}
