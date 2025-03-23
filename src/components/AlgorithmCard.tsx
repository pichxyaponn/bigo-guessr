'use client';

import { useState } from 'react';
import CodeBlock from './CodeBlock';
import { Algorithm } from '@/data/algorithms';

interface AlgorithmCardProps {
  algorithm: Algorithm;
  onSelect: (complexity: string) => void;
  complexityOptions: string[];
}

export default function AlgorithmCard({
  algorithm,
  onSelect,
  complexityOptions
}: AlgorithmCardProps) {
  const [selectedComplexity, setSelectedComplexity] = useState<string>('');

  const handleSelect = (complexity: string) => {
    setSelectedComplexity(complexity);
    onSelect(complexity);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {algorithm.name}
        </h2>
        <div className="mb-6">
          <CodeBlock code={algorithm.code} language={algorithm.language} />
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            โค้ดชุดนี้ใช้ Big O Notation อันไหน?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {complexityOptions.map((complexity) => (
              <button
                key={complexity}
                onClick={() => handleSelect(complexity)}
                className={`py-2 px-4 rounded-md transition-colors ${selectedComplexity === complexity
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
              >
                {complexity}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
