import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">ФизкультУра!</Link>
        <div className="flex gap-4">
          <Link to="/tests" className="hover:text-blue-200">Тесты</Link>
          <Link to="/progress" className="hover:text-blue-200">Прогресс</Link>
          <Link to="/materials" className="hover:text-blue-200">Материалы</Link>
        </div>
      </div>
    </nav>
  );
}