import React from "react";

const CardMenu = ({ food }) => {
  return (
    <div
      key={food.id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:scale-[1.02] flex flex-col"
    >
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-xl font-semibold text-green-800">{food.name}</h2>
          <p className="text-gray-600 text-sm mt-2">{food.description}</p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-bold text-orange-500">
            Rp{" "}
            {typeof food.price === "number"
              ? food.price.toLocaleString()
              : "1.000"}
          </p>
          <a
            href={`menu/${food.id}`}
            className="bg-green-600 text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Detail Product
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
