import { Star, Quote } from "lucide-react";
import Image from "next/image";

export default function CardTestimonial({ data }) {
  return (
    <div className="w-[400px] h-full flex flex-col gap-10 ">
      <div className="bg-gradient-to-br from-green-400 to-emerald-600 p-1 rounded-2xl shadow-xl h-full">
        <div className="bg-white rounded-xl p-6 relative flex flex-col justify-between h-full">
          {/* Quote Icon */}
          <div className="absolute -top-3 -left-3">
            <div className="bg-amber-400 p-2 rounded-full shadow-md">
              <Quote size={16} className="text-white" />
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          {/* Testimoni Text */}
          <p className="text-gray-700 text-sm italic leading-relaxed mb-6">
            “{data.testimoni}”
          </p>

          {/* Profile Section */}
          <div className="flex items-center pt-4 border-t border-gray-100">
            {/* Profile Image with gradient ring */}
            <div className="relative h-14 w-14">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 p-0.5">
                <div className="bg-white rounded-full h-full w-full overflow-hidden">
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={56}
                    height={56}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 text-base">
                {data.name}
              </h3>
              <p className="text-emerald-600 text-sm">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {data.age} Years
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
