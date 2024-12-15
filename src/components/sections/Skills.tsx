import { Skills as SkillsType } from "../../types";

interface SkillsProps {
  data: SkillsType;
}

function Skills({ data }: SkillsProps) {
  return (
    <div className="space-y-4">
      {Object.entries(data).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-lg font-semibold capitalize">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((item: string) => (
              <span key={item} className="bg-white px-2 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
