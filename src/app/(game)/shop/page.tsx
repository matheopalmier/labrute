export default function ShopPage() {
  // Données simulées pour les objets de la boutique
  const items = [
    { id: '1', name: 'Épée en fer', description: 'Une épée basique mais efficace', rarity: 'common', strengthBonus: 2, price: 100 },
    { id: '2', name: 'Bouclier en bois', description: 'Offre une protection minimale', rarity: 'common', healthBonus: 2, price: 100 },
    { id: '3', name: 'Bottes de célérité', description: 'Augmente légèrement votre vitesse', rarity: 'uncommon', speedBonus: 3, price: 250 },
    { id: '4', name: 'Gants de précision', description: 'Améliore votre agilité', rarity: 'uncommon', agilityBonus: 3, price: 250 },
    { id: '5', name: 'Amulette de sagesse', description: 'Renforce votre intelligence', rarity: 'rare', intelligenceBonus: 4, price: 500 },
    { id: '6', name: 'Armure en cuir', description: 'Une armure légère qui protège sans ralentir', rarity: 'uncommon', healthBonus: 3, agilityBonus: 1, price: 300 },
  ];

  // Fonction pour obtenir la couleur de rareté
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'text-gray-200';
      case 'uncommon':
        return 'text-green-400';
      case 'rare':
        return 'text-blue-400';
      case 'epic':
        return 'text-purple-400';
      case 'legendary':
        return 'text-orange-400';
      default:
        return 'text-gray-200';
    }
  };

  // Fonction pour obtenir la traduction de la rareté
  const getRarityName = (rarity: string) => {
    switch (rarity) {
      case 'common':
        return 'Commun';
      case 'uncommon':
        return 'Peu commun';
      case 'rare':
        return 'Rare';
      case 'epic':
        return 'Épique';
      case 'legendary':
        return 'Légendaire';
      default:
        return 'Commun';
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">Boutique</h1>
          <p className="mt-2 text-zinc-300">Achetez des objets pour améliorer vos brutes</p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg bg-white/10 shadow backdrop-blur-sm">
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">{item.name}</h2>
                  <span className={`text-sm font-medium ${getRarityColor(item.rarity)}`}>
                    {getRarityName(item.rarity)}
                  </span>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{item.description}</p>
                
                <div className="mt-4 space-y-2">
                  {item.strengthBonus && (
                    <div className="flex items-center text-sm">
                      <span className="text-red-400">Force</span>
                      <span className="ml-auto text-green-400">+{item.strengthBonus}</span>
                    </div>
                  )}
                  {item.agilityBonus && (
                    <div className="flex items-center text-sm">
                      <span className="text-green-400">Agilité</span>
                      <span className="ml-auto text-green-400">+{item.agilityBonus}</span>
                    </div>
                  )}
                  {item.speedBonus && (
                    <div className="flex items-center text-sm">
                      <span className="text-blue-400">Vitesse</span>
                      <span className="ml-auto text-green-400">+{item.speedBonus}</span>
                    </div>
                  )}
                  {item.healthBonus && (
                    <div className="flex items-center text-sm">
                      <span className="text-yellow-400">Santé</span>
                      <span className="ml-auto text-green-400">+{item.healthBonus}</span>
                    </div>
                  )}
                  {item.intelligenceBonus && (
                    <div className="flex items-center text-sm">
                      <span className="text-purple-400">Intelligence</span>
                      <span className="ml-auto text-green-400">+{item.intelligenceBonus}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-zinc-700 bg-black/20 p-4">
                <span className="font-medium text-white">{item.price} pièces</span>
                <button className="rounded-md bg-purple-700 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-purple-600">
                  Acheter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}