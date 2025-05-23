"use client";

import useAuthRegister from "@/hooks/useAuthRegister";
import AuthLayout from "../../components/AuthLayout";

const RegisterPage = () => {
  const {
    errorMessageRegister,
    successMessageRegister,
    email,
    password,
    passwordRepeat,
    role,
    loading,
    name,
    setName,
    handleSubmit,
    setEmail,
    setPassword,
    setPasswordRepeat,
    setRole,
  } = useAuthRegister();

  return (
    <div className="w-full py-52">
      <AuthLayout
        errorMessageRegister={errorMessageRegister}
        successMessageRegister={successMessageRegister}
        email={email}
        password={password}
        passwordRepeat={passwordRepeat}
        loading={loading}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
        setPasswordRepeat={setPasswordRepeat}
        role={role}
        setRole={setRole}
        name={name}
        setName={setName}
      />
    </div>
  );
};

export default RegisterPage;
