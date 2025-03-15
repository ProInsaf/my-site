import React from 'react';
import { Trophy, Star, Award } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { calculateLevel } from '../data/levels';
import { tests } from '../data/tests';

export function ProgressPage() {
  const { progress } = useProgress();
  const currentLevel = calculateLevel(progress.experience);
  const nextLevel = currentLevel.level < 7 
    ? calculateLevel(currentLevel.expRequired + 1)
    : null;
  
  const completedTests = progress.completedTests.length;
  const totalTests = tests.length;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Ваш прогресс</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Trophy className="w-8 h-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Опыт</h2>
          <p className="text-3xl font-bold text-blue-600">{progress.experience}</p>
          {nextLevel && (
            <p className="text-sm text-gray-600 mt-2">
              До следующего уровня: {nextLevel.expRequired - progress.experience} опыта
            </p>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <Star className="w-8 h-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Завершено тестов</h2>
          <p className="text-3xl font-bold text-blue-600">{completedTests}/{totalTests}</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(completedTests / totalTests) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <Award className="w-8 h-8 text-blue-600 mb-2" />
          <h2 className="text-xl font-semibold mb-2">Уровень</h2>
          <p className="text-3xl font-bold text-blue-600">{currentLevel.title}</p>
          <p className="text-sm text-gray-600 mt-2">Уровень {currentLevel.level}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">История активности</h2>
        {completedTests === 0 ? (
          <div className="text-gray-600 text-center py-8">
            Пройдите свой первый тест, чтобы начать отслеживать прогресс!
          </div>
        ) : (
          <div className="space-y-4">
            {tests
              .filter(test => progress.completedTests.includes(test.id))
              .map(test => (
                <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded">
                  <span>{test.title}</span>
                  <span className="text-green-600">Завершен</span>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
}