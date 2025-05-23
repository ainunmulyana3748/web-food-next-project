"use client";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const CardDetailMenu = ({ food }) => {
  const router = useRouter();

  const handleDeteledMenu = async () => {
    const confirm = await Swal.fire({
      title: "<strong>Yakin ingin menghapus?</strong>",
      html: `
    <p class="text-sm text-gray-600">
      Menu ini akan <b>permanen dihapus</b> dan tidak bisa dikembalikan.
    </p>`,
      icon: "warning",
      showCancelButton: true,
      focusConfirm: false,
      background: "#fff",
      backdrop: `rgba(0,0,0,0.4) left top no-repeat`,
      confirmButtonText: `<i class="fa fa-trash"></i> Hapus Sekarang`,
      cancelButtonText: "Batal",
      customClass: {
        popup: "rounded-xl shadow-xl p-6",
        title: "text-xl text-red-600 font-semibold",
        confirmButton:
          "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all",
        cancelButton:
          "bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all",
      },
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        return Swal.fire("Gagal", "Gagal menghapus menu.", "error");
      }

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Menu berhasil dihapus.",
        confirmButtonText: "OK",
        customClass: {
          confirmButton:
            "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all",
        },
      }).then(() => router.push("/menu"));
    } catch (error) {
      console.error("Delete error:", error);
      Swal.fire("Error", "Terjadi kesalahan saat menghapus.", "error");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-3xl mt-10">
      <button
        onClick={() => router.back()}
        className="absolute top-4 right-4 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-full shadow-sm transition"
      >
        ← Back
      </button>
      <img
        src={food.imageUrl}
        alt={food.name}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold text-green-700 mb-2">{food.name}</h1>
      <p className="text-gray-700 text-lg mb-4">{food.description}</p>

      <div className="flex flex-wrap items-center justify-between mb-4">
        <div>
          <p className="text-orange-500 text-2xl font-bold">
            Rp
            {typeof food?.price === "number"
              ? food.price.toLocaleString("id-ID")
              : "0"}
          </p>
          {food.priceDiscount > 0 && (
            <p className="text-sm text-gray-500 line-through">
              Rp
              {typeof food?.price === "number"
                ? food.price.toLocaleString("id-ID")
                : "0"}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 text-yellow-500 text-lg font-semibold">
          ⭐ {food.rating}/5
          <span className="text-gray-500 text-sm">
            ({food.totalLikes} suka)
          </span>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold text-green-600 mb-2">
          Bahan-bahan:
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          {food.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap justify-end gap-4">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition shadow"
          onClick={() => router.push(`/menu/update-food/${food.id}`)}
        >
          Edit Menu
        </button>

        <button
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition shadow"
          onClick={handleDeteledMenu}
        >
          Hapus Menu
        </button>
      </div>
    </div>
  );
};

export default CardDetailMenu;
