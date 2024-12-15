import { Experience as ExperienceType } from "../../types";

interface ExperienceProps {
  data: ExperienceType[];
}

function Experience({}: ExperienceProps) {
  return (
    <div className="flex flex-col items-center justify-center h-48 text-center space-y-4">
      <p className="font-dogica text-[#800000]">
        I still don't have any experience,
      </p>
      <p className="font-dogica text-[#800000]">
        but if you hire me I can fill this window too 🥺
      </p>
    </div>
  );
}

export default Experience;
