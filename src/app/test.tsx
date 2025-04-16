export default function TestPage() {
  return (
    <div className="min-h-screen bg-purple-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Test de Tailwind CSS</h1>
        <p className="text-gray-700 mb-4">Si vous voyez cette page avec des styles, Tailwind CSS fonctionne correctement.</p>
        <div className="flex gap-2">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">
            Bouton 1
          </button>
          <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 px-4 py-2 rounded">
            Bouton 2
          </button>
        </div>
      </div>
    </div>
  );
} 