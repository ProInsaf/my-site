export interface Test {
  id: number;
  title: string;
  questions: Question[];
  completed: boolean;
  experiencePoints: number;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface LearningMaterial {
  id: number;
  title: string;
  content: string;
  category: string;
}

export interface UserProgress {
  experience: number;
  level: number;
  completedTests: number[];
}

export interface LevelThreshold {
  level: number;
  expRequired: number;
  title: string;
}