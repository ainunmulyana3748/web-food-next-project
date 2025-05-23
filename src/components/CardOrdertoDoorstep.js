import React from "react";
import Image from "next/image";

const CardOrdertoDoorstep = ({ data }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center p-6 border rounded-xl h-full">
      <Image src={data.img} alt="choose" />
      <div className="mt-4">
        <h2 className="font-bold text-lg mb-2">{data.title}</h2>
        <p className="text-gray-600 text-sm">{data.desc}</p>
      </div>
    </div>
  );
};

export default CardOrdertoDoorstep;
