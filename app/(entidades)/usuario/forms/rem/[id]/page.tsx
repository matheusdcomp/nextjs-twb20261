"use client"
import Link from "next/link";
import { remUsuario } from "@/app/(entidades)/usuario/action";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function RemUsuario({ params }: { params: Promise<{ id: string }> }) {

  const args = use(params);
  const router = useRouter();

  async function cliqueConfirmar() {
    await remUsuario(Number(args.id));
    router.push("/usuario");
  }

  async function cliqueCancelar() {
    router.push("/usuario");
  }

  return (
    <div
      className="m-auto w-1/2 grid grid-cols-4 grid-rows-2 gap-2"
    >
      <h1 className="col-span-4 row-span-1 text-xl text-center">
        Deseja realmente apagar o usuário de id {args.id}?
      </h1>
      <button
        className="col-span-2 row-span-1 p-2 bg-amber-800 text-zinc-200 font-bold"
        onClick={cliqueConfirmar}
      >
        Confirmar
      </button>
      <button
        className="col-span-2 row-span-1 p-2 bg-amber-800 text-zinc-200 font-bold"
        onClick={cliqueCancelar}
      >
        Cancelar
      </button>

    </div>
  );
}
