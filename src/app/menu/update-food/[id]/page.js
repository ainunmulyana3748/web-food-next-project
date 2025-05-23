// app/menu/edit/[id]/page.js

import EditMenuForm from "@/components/EditMenuForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function EditMenuPage({ params }) {
  const { id } = params;
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  const res = await fetch(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${id}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return <div>Gagal mengambil data makanan.</div>;
  }

  const data = await res.json();
  const food = data.data;

  return <EditMenuForm food={food} />;
}
