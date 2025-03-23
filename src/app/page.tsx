import Game from '@/components/Game';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto py-8">
        <Game />
      </div>
    </div>
  );
}
