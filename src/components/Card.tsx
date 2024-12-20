import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

function Card({ title, children, className = "", icon }: CardProps) {
  return (
    <div className={`bg-white border-2 border-black p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-dogica text-lg uppercase">{title}</h2>
        {icon && (
          <div className="w-8 h-8 bg-[#2CD3E1] flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
      <div className="space-y-2 font-sans text-md max-w-5xl">{children}</div>
    </div>
  );
}

export default Card;
