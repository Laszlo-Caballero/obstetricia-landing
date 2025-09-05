import { ReactNode } from "react";
import Image from "next/image";
interface cardTestimonyProps {
  image: string;
  title: string;
  description: string;
}

export default function CardTestimony({
  image,
  title,
  description,
}: cardTestimonyProps) {
  return (
    <div className="bg-white rounded-xl border border-bordeColumn p-[1.5px]">
      <div className="flex items-center gap-[12px] pt-[12px] pl-[12px]">
        <div className=" h-full rounded-xl ">
          <Image
            src={image}
            alt="Avatar"
            width={40}
            height={40}
            className="h-[40px] w-[40px] object-cover rounded-full"
          />
        </div>
        <p className="pt-[8px] font-semibold text-blackBluee">{title}</p>
      </div>
      <p className="pt-[12px] px-[17px] pb-[17px] font-semibold text-grissubtexto">
        {description}
      </p>
    </div>
  );
}
