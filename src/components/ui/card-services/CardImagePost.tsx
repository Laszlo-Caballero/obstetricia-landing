import { ReactNode } from "react";
import Image from "next/image";
interface CardImagePostProps {
  title: string;
  description: string;
  image: string;
  tiempoDesde: String;
}

export default function CardImagePost({
  title,
  description,
  image,
  tiempoDesde,
}: CardImagePostProps) {
  return (
    <div className="border border-bordeColumn rounded-xl p-[16px]">
      <div className="w-full rounded-xl">
        <Image
          src={image}
          alt="Madre con su bebé"
          width={312}
          height={240}
          className="h-[240px] w-full object-cover rounded-xl"
        />
        <p className="pt-[20px] font-semibold text-post text-xl">{title}</p>
        <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
          {description}
        </p>
        <p className="font-semibold pt-[12px] text-grissubtexto text-[14px]">
          {tiempoDesde}
        </p>
      </div>
    </div>
  );
}
