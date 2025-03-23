'use client';

interface ScoreBoardProps {
  score: number;
  total: number;
}

export default function ScoreBoard({ score, total }: ScoreBoardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex items-center justify-between w-full max-w-3xl">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
        Big O Notation Guesser
      </h2>
      <div className="flex items-center gap-2">
        <span className="text-gray-700 dark:text-gray-300">คะแนน:</span>
        <span className="font-bold text-blue-600 dark:text-blue-400">{score}/{total}</span>
      </div>
    </div>
  );
}
