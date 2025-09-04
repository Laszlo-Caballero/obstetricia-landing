import { ReactNode } from "react";

interface CardServicesProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function CardServices({
  description,
  icon,
  title,
}: CardServicesProps) {
  return (
    <div className="bg-white rounded-xl border border-bordeColumn m-[24px] p-[16px]">
      <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">{icon}</div>
      <p className="pt-[12px] font-semibold text-blackBluee text-xl">{title}</p>
      <p className="pt-[12px] text-grissubtexto text-sm">{description}</p>
    </div>
  );
}
