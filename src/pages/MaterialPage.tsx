import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { materials } from '../data/materials';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function MaterialPage() {
  const { id } = useParams<{ id: string }>();
  const material = materials.find((m) => m.id === Number(id));

  if (!material) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-red-500 font-semibold">Упс! Материал убежал 🏃‍♂️</p>
        <Link
          to="/materials"
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться к списку
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/materials"
        className="inline-flex items-center text-blue-600 hover:underline mb-6 transition-all hover:text-blue-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Назад к материалам
      </Link>

      <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {material.title}
        </h1>
        <p className="text-gray-600 mb-6 italic">{material.category}</p>

        <div className="prose max-w-none text-gray-700">
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => (
                <h1
                  className={props.className || 'text-4xl font-bold mb-4'}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  className={
                    props.className || 'text-3xl font-extrabold mt-6 mb-3'
                  }
                  {...props}
                />
              ),
              h3: ({ node, ...props }) => (
                <h3
                  className={
                    props.className || 'text-2xl font-semibold mt-6 mb-3'
                  }
                  {...props}
                />
              ),
            }}
          >
            {material.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
