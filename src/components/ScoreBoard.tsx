'use client';

import { useEffect, useState } from 'react';

interface ScoreBoardProps {
  score: number;
  total: number;
}

export default function ScoreBoard({ score, total }: ScoreBoardProps) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const progressPercentage = total > 0 ? (score / total) * 100 : 0;

  useEffect(() => {
    if (score > animatedScore) {
      const timer = setTimeout(() => {
        setAnimatedScore(prev => Math.min(prev + 1, score));
      }, 100);
      return () => clearTimeout(timer);
    } else if (score < animatedScore) {
      setAnimatedScore(score);
    }
  }, [score, animatedScore]);

  return (
    <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-w-3xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center justify-between mb-4 cursor-default">
        <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text transition-all duration-300 hover:scale-105 transform origin-left">
          Big O Notation Guessr
        </h2>
        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-full shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2">
              <span className="text-gray-700 dark:text-gray-300 text-sm md:text-base">คะแนน:</span>
              <span className="font-bold text-blue-600 dark:text-blue-400 text-lg md:text-xl transition-all duration-300">
                {animatedScore}/{total}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {Math.round(progressPercentage)}% เสร็จสิ้น
            </span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transition-all duration-700 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
