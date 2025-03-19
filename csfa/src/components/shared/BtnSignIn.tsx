import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export default function Login() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center p-2 w-full">
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Entrar</Button>


      <Button
            variant="outline"
            className="w-full flex items-center justify-center"
            onClick={() => signIn("google")}
          >
            <Icon icon="mdi:google" className="mr-2" /> Entrar com o Google
       </Button>
    </div>
  );
}
