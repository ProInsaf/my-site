import React from 'react';
import { materials } from '../data/materials';
import { Book } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MaterialsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 flex items-center gap-2">
        <Book className="w-8 h-8 text-blue-600" />
        Учебные материалы
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {materials.map((material) => (
          <Link
            key={material.id}
            to={`/materials/${material.id}`}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <Book className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {material.title}
                </h3>
                <p className="text-gray-500">{material.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
