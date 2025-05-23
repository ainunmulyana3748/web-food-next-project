import AddProductButton from "@/components/AddProductButton";
import CardMenu from "@/components/CardMenu";
import Pagination from "@/components/Pagination";
import SearchMenu from "@/components/SearchMenu";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function MenuPage({ searchParams }) {
  const token = cookies().get("token")?.value;
  if (!token) redirect("/login");

  const query = searchParams.q || "";
  const page = parseInt(searchParams.page) || 1;
  const limit = 6;
  const offset = (page - 1) * limit;

  const res = await fetch("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
      apiKey: "w05KkI9AWhKxzvPFtXotUva-",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return <div>Gagal mengambil data makanan.</div>;
  }

  const data = await res.json();
  const foods = Array.isArray(data.data) ? data.data : [];
  const filtered = foods.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  const paginated = filtered.slice(offset, offset + limit);
  const totalPages = Math.ceil(filtered.length / limit);

  return (
    <main className="min-h-screen bg-gray-50 p-24">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">
        🍽️ Daftar Makanan Lezat
      </h1>

      <div className="max-w-6xl mx-auto mb-6 flex justify-end">
        <AddProductButton />
      </div>

      <div className="max-w-md mx-auto mb-10">
        <SearchMenu />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paginated.map((food) => (
          <CardMenu key={food.id} food={food} />
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} query={query} />
    </main>
  );
}
