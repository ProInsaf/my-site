import React, { useState } from 'react';
import { tests } from '../data/tests';
import { TestCard } from '../components/TestCard';
import { useProgress } from '../hooks/useProgress';
import { XCircle, CheckCircle } from 'lucide-react';

export function TestsPage() {
  const [activeTest, setActiveTest] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { addExperience, markTestCompleted, progress } = useProgress();

  const handleStartTest = (testId: number) => {
    setActiveTest(testId);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newAnswers);
    
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const test = tests.find(t => t.id === activeTest);
      if (test) {
        const correctAnswers = newAnswers.filter(
          (answer, index) => answer === test.questions[index].correctAnswer
        ).length;
        
        const earnedExp = Math.floor((correctAnswers / 5) * test.experiencePoints);
        addExperience(earnedExp);
        markTestCompleted(test.id);
        setShowResults(true);
      }
    }
  };

  const currentTestData = tests.find(t => t.id === activeTest);

  if (activeTest && currentTestData) {
    if (showResults) {
      const correctAnswers = userAnswers.filter(
        (answer, index) => answer === currentTestData.questions[index].correctAnswer
      ).length;
      const earnedExp = Math.floor((correctAnswers / 5) * currentTestData.experiencePoints);
      
      return (
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Результаты теста</h2>
            <div className="space-y-4">
              {currentTestData.questions.map((question, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{question.text}</h3>
                    {userAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div className="grid gap-2">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-2 rounded ${
                          optIndex === question.correctAnswer
                            ? 'bg-green-100 text-green-800'
                            : optIndex === userAnswers[index]
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-50'
                        }`}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-lg">
                  Правильных ответов: <strong>{correctAnswers} из 5</strong>
                </p>
                <p className="text-lg">
                  Получено опыта: <strong>{earnedExp}</strong>
                </p>
              </div>
              <button
                onClick={() => setActiveTest(null)}
                className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Вернуться к списку тестов
              </button>
            </div>
          </div>
        </div>
      );
    }

    const question = currentTestData.questions[currentQuestion];
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">{currentTestData.title}</h2>
          <div className="mb-4">
            <p className="text-gray-600">Вопрос {currentQuestion + 1} из 5</p>
          </div>
          <p className="text-lg mb-6">{question.text}</p>
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-4 rounded border hover:bg-blue-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Тесты</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {tests.map(test => (
          <TestCard
            key={test.id}
            test={test}
            onStart={handleStartTest}
          />
        ))}
      </div>
    </div>
  );
}