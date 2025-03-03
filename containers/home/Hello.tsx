export const Hello = () => {
  return (
    <section className="ml-12 text-white">
      <h3 className="text-white mt-24 text-7xl font-black mb-12">Bienvenue,</h3>
      <p className="w-[40%] text-gray-500">
        Dans ce challenge, tu devras coder un bot Discord en Python et y
        intégrer un jeu de gestion de ressources. Ton bot devra permettre aux
        joueurs de collecter, échanger et gérer différentes ressources au fil du
        temps.
      </p>

      <ul className="mt-24 flex flex-col gap-2 mb-12">
        <h2 className="text-2xl mb-4">🎯Objectifs du challenge</h2>
        <li>✅ Créer un bot Discord avec discord.py ou nextcord.</li>
        <li>✅ Implémenter un système de ressources (bois, pierre, or, etc.).</li>
        <li>✅ Ajouter des commandes interactives (/collect, /trade, /stats...).</li>
        <li>✅ Gérer un inventaire pour chaque joueur.</li>
        <li>✅ (Bonus) Ajouter des événements aléatoires (vols, gains bonus, quêtes...).</li>
      </ul>

      <ul>
        <h2 className="mb-4 text-2xl">Critères de validation :</h2>
        <li>💡 Ton bot doit être fonctionnel et interactif.</li>
        <li>⚡️ Le jeu doit être équilibré et intéressant pour les joueurs.</li>
        <li>🎨 (Bonus) Ajoute une interface visuelle (embeds, images...).</li>
        <li>🛠 Prêt à relever le défi ? Lance-toi et partage ton code ! 🚀</li>
      </ul>
    </section>
  );
};
