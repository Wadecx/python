import { FC } from "react";
import { Clock } from "lucide-react"; // Tu peux utiliser une icône si tu veux ajouter des éléments visuels comme des horloges par exemple.

export const Documents: FC = () => {
  return (
    <section className="p-4 mt-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-[#111] border border-gray-800 p-6 rounded-lg text-gray-300 w-full cursor-pointer
                     shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <h2 className="font-semibold text-lg text-white mb-2">Visual Studio Code (VSCode)</h2>
          <p className="text-sm text-gray-400 mb-4">
            Utilise <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">VSCode</a> pour une expérience de développement optimale.
            C’est un éditeur de code puissant avec une interface personnalisable et de nombreuses extensions.
          </p>
          <p className="text-sm text-gray-400 flex gap-2 items-center">
            <Clock />
            Temps estimé pour l'installation : 10-15 minutes
          </p>
        </div>

        <div
          className="bg-[#111] border border-gray-800 p-6 rounded-lg text-gray-300 w-full cursor-pointer
                     shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
        >
          <h2 className="font-semibold text-lg text-white mb-2">Discord Developer Portal</h2>
          <p className="text-sm text-gray-400 mb-4">
            Pour intégrer des bots ou utiliser des API sur Discord, explore le <a href="https://discord.com/developers/docs/intro" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Discord Developer Portal</a>.
            C’est l'outil clé pour gérer tes applications et obtenir des clés API.
          </p>
          <p className="text-sm text-gray-400 flex gap-2 items-center">
            <Clock />
            Temps estimé pour la configuration : 5-10 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
