'use client'

import { adcUsuario } from "@/app/(entidades)/usuario/action";
import { Botao, BotaoLink } from "@/app/ui/botoes";
import { Usuario } from "@/generated/prisma/client";
import { useRouter } from "next/navigation";

export default function UsuarioAdcForm() {

  const router = useRouter();

  function cliqueConfirmar() {

    const usuario: Usuario = {
      id: 0,
      nome: document.forms[0]["usuarioNome"].value,
      email: document.forms[0]["usuarioEmail"].value,
    };

    adcUsuario(usuario).then(
      usuario => alert("Usuario adiconado: " + usuario.nome)
    );

    router.push("/usuario");
  }

  const cssLabel = "w-full block m-2 text-cor1"
  const cssSpan = "inline-block w-1/10 font-bold"
  const cssInput = "w-8/10 border border-cor1 ml-1 p-1";

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
      <div className="my-5 w-full flex flex-row content-center justify-around items-center">
        <Botao
          imagem="/adc.svg"
          texto="Confirmar"
          tamimg={36}
          wbtn="w-50"
          onClick={cliqueConfirmar}
        />
        <BotaoLink
          imagem="/cnc.svg"
          texto="Cancelar"
          tamimg={36}
          wbtn="w-50"
          ref="/usuario"
        />
      </div>
    </div>
  );
}