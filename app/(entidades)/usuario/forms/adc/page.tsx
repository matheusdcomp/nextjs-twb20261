'use client'

import { adcUsuario } from "@/app/(entidades)/usuario/action";
import { BotaoLink, BotaoSubmit } from "@/app/ui/botoes";
import { useActionState } from "react";

export default function UsuarioAdcForm() {

  const [state, formAction] = useActionState(
    adcUsuario,
    { status: true, mensagem: "" }
  );

  const cssLabel = "w-full block m-2 text-zinc-800"
  const cssSpan = "inline-block w-1/10 font-bold"
  const cssInput = "w-8/10 border border-amber-800 ml-1 p-1";
  const cssMensagemT = "w-full bg-amber-100 text-amber-800 text-bold p-2";
  const cssMensagemF = "w-full bg-red-900 text-zinc-100 text-bold p-2";

  return (
    <div className="w-full">
      <form className="w-full text-left" action={formAction}>
        <label className={cssLabel}>
          <span className={cssSpan}>Nome:</span>
          <input
            className={cssInput}
            type="text"
            id="nome"
            name="nome"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Email:</span>
          <input
            className={cssInput}
            type="email"
            id="email"
            name="email"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Senha:</span>
          <input
            className={cssInput}
            type="password"
            id="senha"
            name="senha"
            required />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Admin?</span>
          <input
            className="ml-1 accent-amber-700"
            type="checkbox"
            id="tipo"
            name="tipo"
          />
        </label>
        <div className="my-5 w-full flex flex-row content-center justify-around items-center">
          <BotaoSubmit
            tamimg={36}
            wbtn="w-50"
          />
          <BotaoLink
            imagem="/cnc.svg"
            texto="Cancelar"
            tamimg={36}
            wbtn="w-50"
            ref="/usuario"
          />
        </div>
        <p
          className={state.status ? cssMensagemT : cssMensagemF}
          aria-live="polite"
          role="status"
        >
          {state.mensagem}
        </p>
      </form>
    </div>
  );
}