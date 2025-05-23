"use client";
import { useRouter } from "next/navigation";

export default function AddProductButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/create-food")}
      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-full shadow transition"
    >
      ➕ Tambah Menu
    </button>
  );
}
