'use client';

import { useState, useEffect } from 'react';
import { Algorithm, algorithms, complexityOptions } from '@/data/algorithms';
import AlgorithmCard from './AlgorithmCard';
import ResultCard from './ResultCard';
import ScoreBoard from './ScoreBoard';

export default function Game() {
  const [currentAlgorithmIndex, setCurrentAlgorithmIndex] = useState<number>(0);
  const [userGuess, setUserGuess] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [gameAlgorithms, setGameAlgorithms] = useState<Algorithm[]>([]);

  useEffect(() => {
    const shuffled = [...algorithms].sort(() => Math.random() - 0.5);
    setGameAlgorithms(shuffled);
  }, []);

  const currentAlgorithm = gameAlgorithms[currentAlgorithmIndex];

  const handleGuess = (complexity: string) => {
    setUserGuess(complexity);
    setShowResult(true);

    if (complexity === currentAlgorithm?.complexity)
      setScore(score + 1);
  };

  const handleNext = () => {
    if (currentAlgorithmIndex < gameAlgorithms.length - 1) {
      setCurrentAlgorithmIndex(currentAlgorithmIndex + 1);
      setUserGuess('');
      setShowResult(false);
    } else {
      // Game over
      alert(`Game Over! คะแนน: ${score}/${gameAlgorithms.length}`);
      // Reset game
      const shuffled = [...algorithms].sort(() => Math.random() - 0.5);
      setGameAlgorithms(shuffled);
      setCurrentAlgorithmIndex(0);
      setScore(0);
      setUserGuess('');
      setShowResult(false);
    }
  };

  if (!currentAlgorithm || gameAlgorithms.length === 0)
    return <div className="flex justify-center items-center h-screen">กำลังโหลด...</div>;

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-4xl mx-auto">
      <ScoreBoard score={score} total={gameAlgorithms.length} />

      {!showResult ? (
        <AlgorithmCard
          algorithm={currentAlgorithm}
          onSelect={handleGuess}
          complexityOptions={complexityOptions}
        />
      ) : (
        <ResultCard
          algorithm={currentAlgorithm}
          userGuess={userGuess}
          isCorrect={userGuess === currentAlgorithm.complexity}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
