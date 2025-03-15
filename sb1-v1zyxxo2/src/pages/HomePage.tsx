import React from 'react';
import { Trophy, Book, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Добро пожаловать в ФизкультУру!</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/tests" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <ClipboardList className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Тесты</h2>
            <p className="text-gray-600">Проверьте свои знания в области физической культуры</p>
          </Link>

          <Link to="/progress" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <Trophy className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Прогресс</h2>
            <p className="text-gray-600">Отслеживайте свой опыт и достижения</p>
          </Link>

          <Link to="/materials" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
            <Book className="w-12 h-12 text-blue-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Материалы</h2>
            <p className="text-gray-600">Изучайте теорию и методики тренировок</p>
          </Link>
        </div>
      </div>
    </div>
  );
}