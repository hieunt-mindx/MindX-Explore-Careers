export type TrackType = 'game' | 'web';

export interface Option {
  id: 'A' | 'B' | 'C';
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export interface QuizData {
  game: Question[];
  web: Question[];
}

export type ResultType = 
  | 'Software Engineer' 
  | 'AI Engineer' 
  | 'Air Traffic Controller' // Per prompt for Web C
  | 'Business Analyst' 
  | 'Content Creator';

export interface ScoreProfile {
  A: number;
  B: number;
  C: number;
}
