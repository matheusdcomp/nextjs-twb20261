"use client";
import { Botao, BotaoLink } from "@/app/ui/botoes";
import { User } from "@/generated/prisma/client";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";
import { edtUsuario, obtUsuarioPorId } from "@/app/(entidades)/usuario/action";

export default function EdtUsuario({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [usuario, setUsuario] = useState<User | null>();
  useEffect(() => {
    obtUsuarioPorId(id).then((value) => setUsuario(value));
  }, []);

  function cliqueConfirmar() {
    const usuario: User = {
      id: id,
      name: document.forms[0]["nome"].value,
      email: document.forms[0]["email"].value,
      password: document.forms[0]["senha"].value,
      tipo: document.forms[0]["tipo"].checked,
    };

    edtUsuario(usuario).then((usuario) =>
      alert("Usuario editado: " + usuario.name),
    );

    router.push("/usuario");
  }

  const cssLabel = "w-full block m-2 text-cor1";
  const cssSpan = "inline-block w-1/10 font-bold";
  const cssInput = "w-8/10 border border-cor1 ml-1 p-1";

  return (
    <div className="w-full">
      <form id="formulario" name="formulario" className="w-full text-left">
        <label className={cssLabel}>
          <span className={cssSpan}>Nome:</span>
          <input
            className={cssInput}
            type="text"
            id="nome"
            name="nome"
            defaultValue={usuario?.name}
            required
          />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Email:</span>
          <input
            className={cssInput}
            type="email"
            id="email"
            name="email"
            defaultValue={usuario?.email}
            required
          />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Senha:</span>
          <input
            className={cssInput}
            type="password"
            id="senha"
            name="senha"
            required
          />
        </label>
        <label className={cssLabel}>
          <span className={cssSpan}>Admin?</span>
          <input
            className="ml-1 accent-amber-700"
            type="checkbox"
            id="tipo"
            name="tipo"
            defaultChecked={usuario?.tipo === "admin"}
          />
        </label>
      </form>
      <div className="my-5 w-full flex flex-row content-center justify-around items-center">
        <Botao
          imagem="/edt.svg"
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
          href={"/usuario"}
        />
      </div>
    </div>
  );
}
