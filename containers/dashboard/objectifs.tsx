import { Mission } from "@/data/mission";
import { Clock } from "lucide-react"; // Icône de l'horloge

export const Objectifs = () => {
  return (
    <section className="p-4 mt-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Mission.map((obj, index) => (
          <div
            key={index}
            className="bg-[#111] border border-gray-800 p-6 rounded-lg text-gray-300 w-full cursor-pointer
                       shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
          >
            <h2 className="font-semibold text-lg text-white mb-2">{obj.title}</h2>
            <p className="text-sm text-gray-400 mb-4">{obj.desc}</p>
            <p className="text-sm text-gray-400 flex gap-2 items-center">
              <Clock />
              {obj.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
