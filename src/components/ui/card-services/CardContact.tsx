import { ReactNode } from "react";

interface CardContactProps {
  icon: ReactNode;
  description: string;
}

export default function CardContact({ icon, description }: CardContactProps) {
  return (
    <div className="flex border border-bordeColumn items-center px-[13px] gap-[2px] rounded-xl py-2 mt-3 text-sm text-grissubtexto">
      {icon}
      {description}
    </div>
  );
}
