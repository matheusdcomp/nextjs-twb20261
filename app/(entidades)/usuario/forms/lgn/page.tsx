"use client";
import { BotaoLink, BotaoSubmit } from "@/app/ui/botoes";
import { efetuarLogin } from "@/app/(entidades)/usuario/action";
import { useActionState } from "react";

export default function SignIn() {
  const [state, formAction] = useActionState(efetuarLogin, { mensagem: "" });

  const cssLabel = "w-full block m-2 text-zinc-800";
  const cssSpan = "inline-block w-1/10 font-bold";
  const cssInput = "w-8/10 border border-amber-800 ml-1 p-1";
  const cssMensagemF = "w-full bg-red-900 text-zinc-100 text-bold p-2";

  return (
    <form className="w-full text-left" action={formAction}>
      <h1 className={"font-black text-2xl txt-cor1"}>Login</h1>
      <label className={cssLabel}>
        <span className={cssSpan}>Email:</span>
        <input className={cssInput} name="email" type="email" />
      </label>
      <label className={cssLabel}>
        <span className={cssSpan}>Senha:</span>
        <input className={cssInput} name="password" type="password" />
      </label>
      <div className="my-5 w-full flex flex-row content-center justify-around items-center">
        <BotaoSubmit tamimg={36} wbtn="w-20" />
        <BotaoLink
          imagem="/adc.svg"
          texto="Registrar-se"
          tamimg={36}
          wbtn="w-20"
          href="/usuario/forms/adc"
        />
        <BotaoLink
          imagem="/cnc.svg"
          texto="Cancelar"
          tamimg={36}
          wbtn="w-20"
          href="/"
        />
      </div>
      <p className={cssMensagemF} aria-live="polite" role="status">
        {state?.mensagem}
      </p>
    </form>
  );
}
