import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-700">
            CSFA | Sign In
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleSignIn}>
              Entrar
            </Button>
            <div className="flex items-center justify-between">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <FcGoogle size={20} /> Entrar com Google
              </Button>
              <Button variant="outline" className="w-full flex items-center gap-2">
                <FaFacebook size={20} className="text-blue-600" /> Entrar com Facebook
              </Button>
            </div>
            <p className="text-center text-sm text-gray-500">
              Não tem uma conta? <a href="/signup" className="text-blue-600">Cadastre-se</a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
