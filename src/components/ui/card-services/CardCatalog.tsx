import { ReactNode } from "react";

interface CardCatalogProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  button: string;
}

export default function CardCatalog({
  icon,
  title,
  subtitle,
  description,
  button,
}: CardCatalogProps) {
  return (
    <div className="bg-white rounded-xl border border-bordeColumn p-[16px]">
      <div className="bg-FondoCeleste w-max p-[10px] rounded-xl">{icon}</div>
      <h1 className="pt-[12px] font-semibold text-blackBluee text-xl">
        {title}
      </h1>
      <p className="pt-[12px] text-grissubtexto text-sm pb-3 font-semibold">
        {subtitle}
      </p>
      <div className="  border-bordeColumn border-1"></div>
      <div className="border border-bordeColumn my-[17px] px-[17px] py-[13px] rounded-xl justify-center">
        <p className=" text-[14px] font-semibold text-grissubtexto">
          {description}
        </p>
      </div>
      <button className=" w-full flex font-bold text-[14px] text-letraBlanca items-center bg-FondoAzul rounded-xl px-[17px] py-3 justify-center">
        {button}
      </button>
    </div>
  );
}
