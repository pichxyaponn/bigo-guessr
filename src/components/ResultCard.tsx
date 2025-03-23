'use client';

import { Algorithm } from '@/data/algorithms';
import CodeBlock from './CodeBlock';

interface ResultCardProps {
  algorithm: Algorithm;
  userGuess: string;
  isCorrect: boolean;
  onNext: () => void;
}

export default function ResultCard({
  algorithm,
  userGuess,
  isCorrect,
  onNext
}: ResultCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden w-full max-w-3xl">
      <div className="p-6">
        <div className={`mb-6 p-4 rounded-lg ${isCorrect ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
          <h2 className={`text-2xl font-bold ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
            {isCorrect ? 'ถูกต้อง!' : 'ผิด!'}
          </h2>
          <div className="mt-2">
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">คำตอบของคุณ:</span> {userGuess}
            </p>
            <p className="text-gray-800 dark:text-gray-200">
              <span className="font-semibold">คำตอบที่ถูกต้อง:</span> {algorithm.complexity}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            โค้ดภาษา Java:
          </h3>
          <CodeBlock code={algorithm.code} language={algorithm.language} />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            คำอธิบาย:
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {algorithm.explanation}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ต่อไป
          </button>
        </div>
      </div>
    </div>
  );
}
