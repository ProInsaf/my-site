import { LevelThreshold } from '../types';

export const levelThresholds: LevelThreshold[] = [
  { level: 1, expRequired: 0, title: 'Новичок' },
  { level: 2, expRequired: 50, title: 'Ученик' },
  { level: 3, expRequired: 70, title: 'Спортсмен' },
  { level: 4, expRequired: 100, title: 'Атлет' },
  { level: 5, expRequired: 150, title: 'Мастер' },
  { level: 6, expRequired: 200, title: 'Чемпион' },
  { level: 7, expRequired: 250, title: 'Легенда' },
];

export function calculateLevel(experience: number): LevelThreshold {
  for (let i = levelThresholds.length - 1; i >= 0; i--) {
    if (experience >= levelThresholds[i].expRequired) {
      return levelThresholds[i];
    }
  }
  return levelThresholds[0];
}
