import CardWhyChooseUs from "./CardWhyChooseUs";

const WhyChooseUsSection = () => {
  const cardData = [
    {
      id: 1,
      title: "Healthy Cooking",
      desc: "Healthy cooking is a blend of creativity and nutrition, where vibrant ingredients",
      img: "/images/iconCardOne.png",
    },
    {
      id: 2,
      title: "#1 Healthy Cooked Food",
      desc: "Recognized as the number one ingredient for vitality and well-being for our customers",
      img: "/images/iconCardTwo.png",
    },
    {
      id: 3,
      title: "100 Top Food Brand",
      desc: "We are one of the best brands in the Food and for our beloved customers in the world",
      img: "/images/iconCardThree.png",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white to-green-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:flex md:flex-col md:items-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose us for <br />
            Your <span className="text-green-600">Healthy</span> Food
          </h2>
          <p className="text-[#6C6C6C] max-w-xl mx-auto">
            We&apos;re committed to cook healthy to ensure they retain their
            freshness and nutritional value, guaranteeing a delightful
            experience
          </p>
        </div>

        <CardWhyChooseUs data={cardData} />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
