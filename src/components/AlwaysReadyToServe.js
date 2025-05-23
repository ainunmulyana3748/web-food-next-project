import React from "react";
import ImageAlwaysReadyToServe from "../assets/ImageAlwaysReadyToServe.png";
import Image from "next/image";
import TwentyFourHour from "../assets/24hours.png";
import Order from "../assets/order.png";

const AlwaysReadyToServe = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 pt-16 md:pt-24 flex flex-col lg:flex-row items-center gap-y-10 lg:gap-x-16">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <Image
            src={ImageAlwaysReadyToServe}
            alt="ImageAlwaysReadyToServe"
            width={600}
            height={600}
            className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left flex flex-col gap-5 lg:w-1/2">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Always ready to
              <br />
              serve you with <span className="text-green-500">best</span>
            </h2>
          </div>

          <div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Your Doorway To Wholesome Goodness. Delight In Fresh,
              <br />
              Nutritious Meals Delivered Right To Your Doorstep.
              <br />
              Elevate Your Health With Every Bite, Hassle-Free
            </p>
          </div>

          <div className="flex sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-10">
            <div className="flex items-center gap-2">
              <Image
                src={TwentyFourHour}
                alt="TwentyFourHour"
                width={36}
                height={36}
              />
              <span className="font-semibold text-sm md:text-base">
                Online Order
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Order} alt="Order" width={36} height={36} />
              <span className="font-semibold text-sm md:text-base">
                24/7 Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlwaysReadyToServe;
