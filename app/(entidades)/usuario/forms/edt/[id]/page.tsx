"use client"
import { Botao, BotaoLink } from "@/app/ui/botoes";
import { Usuario } from "@/generated/prisma/client";
import { useRouter } from "next/navigation";
import { use } from "react";
import { edtUsuario } from "@/app/(entidades)/usuario/action";

export default function EdtUsuario({ params }: { params: Promise<{ id: string }> }) {

  const { id } = use(params);
  const router = useRouter();

  function cliqueConfirmar() {

    const usuario: Usuario = {
      id: Number(id),
      nome: document.forms[0]["usuarioNome"].value,
      email: document.forms[0]["usuarioEmail"].value,
    };

    edtUsuario(usuario).then(
      usuario => alert("Usuario editado: " + usuario.nome)
    );

    router.push("/usuario");
  }

  const cssLabel = "w-full block m-2 text-cor1"
  const cssSpan = "inline-block w-1/10 font-bold"
  const cssInput = "w-8/10 border border-cor1 ml-1";

  return (
    <div className="w-full">
      <form
        id="formulario"
        name="formulario"
        className="w-full text-left"
      >
        <label className={cssLabel}>
          <span className={cssSpan}>Nome:</span>
          <input
            className={cssInput}
            type="text"
            id="usuarioNome"
            name="usuarioNome"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Email:</span>
          <input
            className={cssInput}
            type="text"
            id="usuarioEmail"
            name="usuarioEmail"
            required />
        </label>
      </form>
      <div className="w-full bg-amber-200">
        <Botao img="/edt.svg" alt="Confirmar" hei={10} wid={100} onClick={cliqueConfirmar} />
        <BotaoLink img="/rem.svg" alt="Cancelar" hei={10} wid={100} ref="/usuario" />
      </div>
    </div>
  );
}
