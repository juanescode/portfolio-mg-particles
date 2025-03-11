import { dataExperience } from "@/data";
import Title from "./shared/title";
import { BadgeCheck } from "lucide-react";

const Experience = () => {
  return (
    <div className="p-6 md:px-12 md:py-44 max-w-5xl mx-auto">
      <Title title="Experiencia" subtitle="Habilidades" />

      <div className="grid md:grid-cols-2 gap-8 mt-5">
        {dataExperience
          .filter((data) => data.title !== "Tools")
          .map((data) => (
            <div
              key={data.id}
              className="p-6 rounded-xl border border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400"
            >
              <h3 className="text-center text-xl font-semibold text-white mb-4">
                {data.title}
              </h3>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {data.experience.map((item) => (
                  <div
                    key={item.name}
                    className="p-2 rounded-lg flex items-center gap-2 border border-gray-300 hover:bg-slate-950 transition-colors"
                  >
                    <BadgeCheck className="text-green-500" />
                    <p className="text-white">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Experience;
