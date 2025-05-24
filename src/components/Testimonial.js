import React from "react";
import TestimoniOne from "../images/testimonialOne.png";
import TestimoniTwo from "../images/testimonialTwo.png";
import TestimoniThree from "../images/testimonialThree.png";
import CardTestimonial from "./CardTestimonial";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/componentsShacdn/ui/carousel";

const Testimonial = () => {
  const dataCardTestimoni = [
    {
      id: 1,
      img: TestimoniOne,
      name: "Selena Gomz",
      age: "22",
      testimoni:
        "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
    },
    {
      id: 2,
      img: TestimoniTwo,
      name: "David Ken",
      age: "24",
      testimoni:
        "I can't thank Fresh Feast enough for simplifying my busy lifestyle. With their meals, I no longer have to sacrifice health for convenience. Highly recommend!",
    },
    {
      id: 3,
      img: TestimoniThree,
      name: "Selena Gomz",
      age: "22",
      testimoni:
        "Fresh Feast has become my go-to solution for nutritious meals without the hassle. As someone with dietary restrictions, I appreciate the variety and clarity of their menu options",
    },
    {
      id: 4,
      img: TestimoniOne,
      name: "Selena Gomz",
      age: "22",
      testimoni:
        "Fresh Feast has truly revolutionized my approach to eating healthy! Their diverse menu options make it easy to find something delicious and nutritious every time",
    },
    {
      id: 5,
      img: TestimoniTwo,
      name: "David Ken",
      age: "24",
      testimoni:
        "I can't thank Fresh Feast enough for simplifying my busy lifestyle. With their meals, I no longer have to sacrifice health for convenience. Highly recommend!",
    },
    {
      id: 6,
      img: TestimoniThree,
      name: "Selena Gomz",
      age: "22",
      testimoni:
        "Fresh Feast has become my go-to solution for nutritious meals without the hassle. As someone with dietary restrictions, I appreciate the variety and clarity of their menu options",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-green-600 to-green-900 h-auto py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-green-300 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Are People Saying
            <span className="text-green-300 italic">About</span> Us
          </h1>
          <div className="w-24 h-1 bg-green-300 mx-auto mb-6"></div>
          <p className="text-green-100 text-lg">
            We are very happy if you are satisfied with our service and
            products, let's read pure reviews from customers
          </p>
        </div>

        <div className="w-full relative px-4 sm:px-6 lg:px-8  ">
          <Carousel
            opts={{
              align: "center",
            }}
            className="w-full  mx-auto"
          >
            <CarouselContent className="ml-4 md:ml-6">
              {dataCardTestimoni.map((data) => (
                <CarouselItem
                  key={data.id}
                  className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 flex"
                >
                  <div className="w-full h-full grid grid-rows-1 justify-center">
                    <CardTestimonial data={data} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigasi Carousel */}
            <div className="flex justify-center mt-10 gap-5">
              <CarouselPrevious className="relative bg-white hover:bg-green-50 text-green-700 border-none px-14 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200" />
              <CarouselNext className="relative bg-white hover:bg-green-50 text-green-700 border-none px-14 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200" />
            </div>
          </Carousel>

          {/* Bayangan bawah */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-md h-12 bg-green-900 blur-xl opacity-30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
