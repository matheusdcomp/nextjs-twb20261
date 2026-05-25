"use client"
import { remUsuario } from "@/app/(entidades)/usuario/action";
import { useRouter } from "next/navigation";
import { use } from "react";
import { Botao, BotaoLink } from "@/app/ui/botoes";

export default function RemUsuario({ params }: { params: Promise<{ id: string }> }) {

  const args = use(params);
  const router = useRouter();

  async function cliqueConfirmar() {
    await remUsuario(args.id);
    router.push("/usuario");
  }

  return (
    <div
      className="m-auto w-1/2 border-4 border-amber-600"
    >
      <h1 className="text-xl text-center my-5">
        Deseja realmente apagar o usuário de id {args.id}?
      </h1>
      <div className="my-5 w-full flex flex-row content-center justify-around items-center">
        <Botao
          imagem="/rem.svg"
          texto="Confirmar"
          tamimg={36}
          wbtn="w-30"
          onClick={cliqueConfirmar}
        />
        <BotaoLink
          imagem="/cnc.svg"
          texto="Cancelar"
          tamimg={36}
          wbtn="w-30"
          href="/usuario"
        />
      </div>
    </div>
  );
}
