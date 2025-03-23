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
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden w-full max-w-3xl border border-gray-100 dark:border-gray-700">
      <div className="p-6">
        <div className={`mb-6 p-5 rounded-lg shadow-sm ${isCorrect ? 'bg-green-50 dark:bg-green-900/50 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/50 border border-red-200 dark:border-red-800'}`}>
          <h2 className={`text-2xl font-bold ${isCorrect ? 'text-green-600 dark:text-green-300' : 'text-red-600 dark:text-red-300'}`}>
            {isCorrect ? 'ถูกต้อง! 🎉' : 'ผิด! 😢'}
          </h2>
          <div className="mt-3 space-y-2">
            <p className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span className="font-semibold bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-full text-sm">คำตอบของคุณ:</span> {userGuess}
            </p>
            <p className="text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <span className="font-semibold bg-gray-100 dark:bg-gray-700 py-1 px-3 rounded-full text-sm">คำตอบที่ถูกต้อง:</span> {algorithm.complexity}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white inline-flex items-center gap-2 bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-lg">
            <span className="text-blue-500">📄</span> โค้ดภาษา {algorithm.language}:
          </h3>
          <div className="rounded-lg overflow-hidden border border-gray-100 dark:border-gray-700">
            <CodeBlock code={algorithm.code} language={algorithm.language} />
          </div>
        </div>

        <div className="mb-6 bg-gray-50 dark:bg-gray-700/30 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white inline-flex items-center gap-2">
            <span className="text-purple-500">💡</span> คำอธิบาย:
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {algorithm.explanation}
          </p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onNext}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 font-medium flex items-center gap-2"
          >
            ต่อไป <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
