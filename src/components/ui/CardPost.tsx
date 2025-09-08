import { ReactNode } from "react";

interface CardPostProps {
  description: string;
}

export default function CardPost({ description }: CardPostProps) {
  return (
    <div className="bg-fondoblanco px-[13px] py-[9px] rounded-2xl border border-bordeColumn">
      <p className="text-[13px] font-bold text-post">{description}</p>
    </div>
  );
}
