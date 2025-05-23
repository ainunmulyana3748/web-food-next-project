"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const useAuthRegister = () => {
  const [successMessageRegister, setSuccessMessageRegister] = useState("");
  const [errorMessageRegister, setErrorMessageRegister] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = {
      name,
      email,
      password,
      passwordRepeat,
      role,
    };

    try {
      const res = await fetch(
        "https://api-bootcamp.do.dibimbing.id/api/v1/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6...",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();
      console.log("data", data);
      console.log(body);

      if (!res.ok) {
        throw new Error(data.message || "Register gagal");
      }

      setSuccessMessageRegister("Register Berhasil");
      setErrorMessageRegister("");

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      setErrorMessageRegister(error.message || "Register Gagal");
      setSuccessMessageRegister("");
    } finally {
      setLoading(false);
    }
  };

  return {
    successMessageRegister,
    errorMessageRegister,
    email,
    password,
    loading,
    name,
    role,
    passwordRepeat,
    setPasswordRepeat,
    setRole,
    setName,
    handleSubmit,
    setEmail,
    setPassword,
  };
};

export default useAuthRegister;
