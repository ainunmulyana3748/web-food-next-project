import Image from "next/image";
import heroImage from "../../public/images/heroImage.png";
import playButton from "../../public/images/playButton.png";

const HeroComponents = () => {
  return (
    <section className="min-h-screen bg-[#008a2f] pt-48">
      {/* Container pembungkus agar sejajar dengan navbar */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          {/* Text Content */}
          <div className="text-white space-y-8 text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center lg:items-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800 text-sm font-medium px-3 py-1 rounded-full">
              <span>🔥</span>
              <span>Happy Healthy Eating</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Kick the Diet,
              <br />
              Embrace <span className="text-orange-400">Healthy</span> Food
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-100 max-w-xl mx-auto lg:mx-0">
              Hot Tasty Food Will Reach You In 60 Minutes.
              <br />
              Who Needs A Diet When You Can Enjoy Tasty, Nutritious Meals?
            </p>

            {/* Buttons */}
            <div className="flex flex-row items-center gap-4 justify-center lg:justify-start">
              <button className="bg-orange-400 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-500 transition mt-[-25px]">
                ORDER NOW
              </button>

              <button className="flex items-center text-white">
                <Image
                  src={playButton}
                  alt="Play Button"
                  width={96}
                  height={96}
                />
                <span className="text-base font-medium ms-[-16px] leading-none mt-[-25px]">
                  Watch Video
                </span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block w-full md:w-1/2">
            <Image
              src={heroImage}
              alt="Hero Image"
              width={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponents;
