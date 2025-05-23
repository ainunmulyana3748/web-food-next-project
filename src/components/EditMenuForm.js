"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function EditMenuForm({ food }) {
  const router = useRouter();
  console.log(food.id);

  const [form, setForm] = useState({
    name: food?.name || "",
    description: food?.description || "",
    imageUrl: food?.imageUrl || "",
    ingredients: Array.isArray(food?.ingredients)
      ? food.ingredients.join(", ")
      : "",
    price: food?.price || 0,
    priceDiscount: food?.priceDiscount || "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(food.imageUrl || "");
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let imageUrl = form.imageUrl;

    if (imageFile) {
      const imageForm = new FormData();
      imageForm.append("image", imageFile);

      const uploadRes = await fetch(
        "https://api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: imageForm,
        }
      );

      const uploadData = await uploadRes.json();
      imageUrl = uploadData.url;
    }

    const payload = {
      name: form.name,
      description: form.description,
      imageUrl: imageUrl,
      ingredients: form.ingredients.split(",").map((item) => item.trim()),
      price: Number(form.price),
    };

    if (form.priceDiscount.trim() !== "") {
      payload.priceDiscount = Number(form.priceDiscount);
    }

    try {
      const res = await fetch(
        `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${food.id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Gagal memperbarui menu.");
      }

      Swal.fire("Sukses", "Menu berhasil diperbarui!", "success").then(() => {
        router.push("/menu");
      });
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-green-700 mb-6 text-center">
          Edit Menu Makanan
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={form?.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="Nama Makanan"
            required
          />
          <textarea
            name="description"
            value={form?.description}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            rows={3}
            placeholder="Deskripsi"
            required
          />
          <input
            type="number"
            name="price"
            value={form?.price}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="Harga"
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded-md"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="mt-3 h-48 object-cover rounded-md border"
            />
          )}
          <input
            type="text"
            name="ingredients"
            value={form?.ingredients}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            placeholder="Bahan-bahan (pisahkan dengan koma)"
            required
          />
          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-md"
            onClick={handleSubmit}
          >
            {uploading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </form>
      </div>
    </div>
  );
}
