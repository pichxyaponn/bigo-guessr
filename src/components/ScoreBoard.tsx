'use client';

interface ScoreBoardProps {
  score: number;
  total: number;
}

export default function ScoreBoard({ score, total }: ScoreBoardProps) {
  return (
    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg p-5 flex items-center justify-between w-full max-w-3xl border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        Big O Notation Guessr
      </h2>
      <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-700/50 py-2 px-4 rounded-full">
        <span className="text-gray-700 dark:text-gray-300">คะแนน:</span>
        <span className="font-bold text-blue-600 dark:text-blue-400">{score}/{total}</span>
      </div>
    </div>
  );
}
