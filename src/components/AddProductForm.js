"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProductForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    description: "",
    imageUrl: "",
    ingredients: "",
    price: "",
    priceDiscount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      description: form.description,
      imageUrl: form.imageUrl,
      ingredients: form.ingredients.split(",").map((item) => item.trim()),
      price: Number(form.price),
    };

    if (form.priceDiscount.trim() !== "") {
      payload.priceDiscount = Number(form.priceDiscount);
    }

    try {
      const res = await fetch(
        "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q`,
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal menambahkan makanan.");
      }

      Swal.fire("Sukses", "Menu berhasil ditambahkan!", "success").then(() => {
        router.push("/menu");
      });
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-bold text-green-700 mb-4">
        Tambah Menu Baru
      </h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nama Makanan"
        className="w-full p-2 border rounded"
        required
      />

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Deskripsi"
        className="w-full p-2 border rounded"
        rows={3}
        required
      />

      <input
        type="text"
        name="imageUrl"
        value={form.imageUrl}
        onChange={handleChange}
        placeholder="URL Gambar (harus online)"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="text"
        name="ingredients"
        value={form.ingredients}
        onChange={handleChange}
        placeholder="Bahan-bahan (pisahkan dengan koma)"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Harga"
        className="w-full p-2 border rounded"
        required
      />

      <input
        type="number"
        name="priceDiscount"
        value={form.priceDiscount}
        onChange={handleChange}
        placeholder="Diskon Harga (opsional)"
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded"
      >
        Tambah Menu
      </button>
    </form>
  );
}
