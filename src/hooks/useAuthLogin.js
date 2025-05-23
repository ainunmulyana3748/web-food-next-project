"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const useAuthLogin = () => {
  const [successMessageLogin, setSuccessMessageLogin] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        "https://api-bootcamp.do.dibimbing.id/api/v1/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6...",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await res.json();
      console.log("data", data);
      document.cookie = `token=${data.token}; path=/; max-age=3600`;
      document.cookie = `role=${data.user.role}; path=/; max-age=3600`;

      if (!res.ok) {
        throw new Error(data.message || "Login gagal");
      }

      setSuccessMessageLogin("Login Berhasil");
      setErrorMessageLogin("");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      setErrorMessageLogin(error.message || "Login Gagal");
      setSuccessMessageLogin("");
    } finally {
      setLoading(false);
    }
  };

  return {
    successMessageLogin,
    errorMessageLogin,
    email,
    password,
    loading,
    handleSubmit,
    setEmail,
    setPassword,
  };
};

export default useAuthLogin;
