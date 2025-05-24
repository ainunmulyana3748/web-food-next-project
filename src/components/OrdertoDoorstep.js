import React from "react";
import choose from "../images/choose.png";
import prepareFood from "../images/prepareFood.png";
import deliver from "../images/deliver.png";
import CardOrdertoDoorstep from "./CardOrdertoDoorstep";

const OrdertoDoorstep = () => {
  const dataCard = [
    {
      id: 1,
      img: choose,
      title: "CHOOSE",
      desc: "Explore a diverse menu curated for your tastes and dietary needs. Select your favorites with ease and place order",
    },

    {
      id: 2,
      img: prepareFood,
      title: "PREPARE FOOD",
      desc: "Our culinary artisans spring into action, crafting each dish with meticulous care and the freshest ingredients",
    },

    {
      id: 3,
      img: deliver,
      title: "DELIVER",
      desc: "Sit back and relax as our dedicated team orchestrates a seamless delivery experience. Ready to be savored and enjoyed!",
    },
  ];

  return (
    <section className="w-full pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          <div className="text-center">
            <p className="text-[#008A2F] font-semibold text-2xl">How to work</p>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              From <span className="text-[#008A2F]">Order to Doorstep</span> in
              20 Minutes
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
            {dataCard.map((data) => {
              return <CardOrdertoDoorstep data={data} key={data.id} />;
            })}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default OrdertoDoorstep;
