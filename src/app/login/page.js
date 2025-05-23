"use client";

import useAuthLogin from "@/hooks/useAuthLogin";
import AuthLayout from "../../components/AuthLayout";

const LoginPage = () => {
  const {
    errorMessageLogin,
    successMessageLogin,
    email,
    password,
    loading,
    handleSubmit,
    setEmail,
    setPassword,
  } = useAuthLogin();

  return (
    <div className="w-full py-52">
      <AuthLayout
        errorMessageLogin={errorMessageLogin}
        successMessageLogin={successMessageLogin}
        email={email}
        password={password}
        loading={loading}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginPage;
