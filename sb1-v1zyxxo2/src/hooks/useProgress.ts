import { useState, useEffect } from 'react';
import { UserProgress } from '../types';
import { calculateLevel } from '../data/levels';

const PROGRESS_KEY = 'user_progress';

const defaultProgress: UserProgress = {
  experience: 0,
  level: 1,
  completedTests: []
};

export function useProgress() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(PROGRESS_KEY);
    return saved ? JSON.parse(saved) : defaultProgress;
  });

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

  const addExperience = (amount: number) => {
    setProgress(prev => {
      const newExp = prev.experience + amount;
      const newLevel = calculateLevel(newExp);
      return {
        ...prev,
        experience: newExp,
        level: newLevel.level
      };
    });
  };

  const markTestCompleted = (testId: number) => {
    setProgress(prev => ({
      ...prev,
      completedTests: [...new Set([...prev.completedTests, testId])]
    }));
  };

  return {
    progress,
    addExperience,
    markTestCompleted
  };
}