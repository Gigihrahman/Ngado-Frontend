import { FormLogin } from "@/features/login/components/FormLogin";
import React from "react";

const LoginPage = () => {
  return (
    <section className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <FormLogin />
      </div>
    </section>
  );
};

export default LoginPage;
