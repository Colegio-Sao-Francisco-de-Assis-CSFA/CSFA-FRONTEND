"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BtnSignIn from "@/components/shared/BtnSignIn";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = {
  email: string;
  password: string;
};

type FormErrors = {
  email: string;
  password: string;
};

export default function AuthForm() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const [errors, setErrors] = useState<FormErrors>({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      toast.error("Credenciais inválidas. Tente novamente.");
    }
  }, [error]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        email: formattedErrors.email?._errors[0] || "",
        password: formattedErrors.password?._errors[0] || "",
      });
      return;
    }
    setErrors({ email: "", password: "" });

    const response = await signIn("credentials", {
      redirect: false,
      email: formData.email,
      password: formData.password,
    });

    if (response?.error) {
      toast.error("Email ou senha incorretos.");
      return;
    }

    toast.success("Login bem-sucedido!");
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-sm p-6 shadow-lg rounded-2xl bg-white">
        <div className="text-center">
          <img src="/logo.webp" alt="CSFA Logo" className="mx-auto w-20 mb-4" />
          <h1 className="text-xl font-semibold">Bem-vindo ao CSFA</h1>
        </div>
        <CardContent className="mt-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Email</label>
              <div className="relative">
                <Icon icon="mdi:email" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  className="pl-10"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Senha</label>
              <div className="relative">
                <Icon icon="mdi:lock" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  className="pl-10"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <BtnSignIn />
          </form>

          <div className="text-center text-sm text-gray-500 mt-4">
            <a href="#" className="text-blue-600 hover:underline">Problemas com o login? Entre em contato com o administrador.</a>
            <br />
            <a href="#" className="text-blue-600 hover:underline">Voltar à página inicial</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}