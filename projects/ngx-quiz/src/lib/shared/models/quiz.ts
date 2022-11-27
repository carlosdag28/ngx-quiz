import { Question } from './question';

export enum QuizStatus {
  Started = 'started',
  OnGoing = 'on-going',
  Finished = 'finished'
}

export interface Screen {
  title?: string;
  description?: string;
  displayImage?: string;
}

export interface StartScreen extends Screen {}

export interface EndScreen extends Screen {}

export type ButtonType = 'start' | 'prev' | 'next' | 'restart';
export type DisplayType = 'icon' | 'text' | 'both';

export interface ButtonStyleConfig {
  displayType: DisplayType;
  displayText: string;
}

export interface StyleConfig {
  buttons: Record<ButtonType, ButtonStyleConfig>;
}

export interface Quiz {
  name: string;
  level: string;
  duration: number;
  automaticAdvance: boolean;
  returnAllowed: boolean;
  repeatAllowed: boolean;
  emitReport: boolean;
  style: StyleConfig;
  startScreen?: StartScreen;
  endScreen?: EndScreen;
  questions: Question[];
}
