import React from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";

const CardWhyChooseUs = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {data.map((data) => (
        <div
          key={data.id}
          className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-xs"
        >
          <div className="bg-amber-100 p-5 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
            <Image
              src={data.img}
              alt="icon-card"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            {data.title}
          </h3>

          <p className="text-gray-600 mb-6">{data.desc}</p>

          <a
            href="#"
            className="inline-flex items-center text-gray-700 font-medium hover:bg-[#008a2f] hover:text-white py-1 px-4 rounded-full transition-all ease-in-out"
          >
            Learn More
            <MoveRight className="mt-1 ms-3 hover:text-white" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default CardWhyChooseUs;
