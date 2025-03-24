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
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleSelect = (complexity: string) => {
    setSelectedComplexity(complexity);
    onSelect(complexity);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden w-full max-w-3xl border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {algorithm.name}
        </h2>
        <div className="mb-6 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
          <CodeBlock code={algorithm.code} language={algorithm.language} />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-lg inline-block">
              โค้ดชุดนี้ใช้ Big O Notation ตัวไหน?
            </h3>
            {algorithm.hint && (
              <button
                onClick={toggleHint}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors py-2 px-4 rounded-lg flex items-center gap-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800"
              >
                <span className="text-yellow-500">💡</span>
                {showHint ? 'ซ่อนคำใบ้' : 'ดูคำใบ้'}
              </button>
            )}
          </div>

          {showHint && algorithm.hint && (
            <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">คำใบ้:</span> {algorithm.hint}
              </p>
            </div>
          )}

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
