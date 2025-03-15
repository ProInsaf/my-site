import React from 'react';
import { Test } from '../types';
import { CheckCircle, XCircle, Circle } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

interface TestCardProps {
  test: Test;
  onStart: (testId: number) => void;
}

export function TestCard({ test, onStart }: TestCardProps) {
  const { progress } = useProgress();
  const isCompleted = progress.completedTests.includes(test.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{test.title}</h3>
        {isCompleted ? (
          <div className="flex items-center text-green-600">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Пройден</span>
          </div>
        ) : (
          <div className="flex items-center text-gray-400">
            <Circle className="w-5 h-5 mr-2" />
            <span>Не начат</span>
          </div>
        )}
      </div>
      <p className="text-gray-600 mt-2">5 вопросов • {test.experiencePoints} опыта</p>
      <button
        onClick={() => onStart(test.id)}
        className={`mt-4 px-4 py-2 rounded w-full ${
          isCompleted 
            ? 'bg-green-100 text-green-700 hover:bg-green-200'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {isCompleted ? 'Пройти заново' : 'Начать тест'}
      </button>
    </div>
  );
}