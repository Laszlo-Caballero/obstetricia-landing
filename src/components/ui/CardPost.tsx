import { ReactNode } from "react";

interface CardPostProps {
  description: string;
}

export default function CardPost({ description }: CardPostProps) {
  return (
    <div className="bg-fondoblanco p-3 rounded-2xl">
      <p className="text-[13px] font-bold text-post">{description}</p>
    </div>
  );
}
