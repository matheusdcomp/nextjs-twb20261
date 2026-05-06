'use client';
import Tabela, { selecionados } from "@/app/ui/tabela";
import Usuario from "./usuario";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Pagina() {

  const [usuarios, setUsuarios] = useState([
    new Usuario(1, "ANÚBIS", "anubis@mail.com"),
    new Usuario(2, "ODIN", "odin@mail.com"),
    new Usuario(3, "ZEUS", "zeus@mail.com"),
  ]);

  const router = useRouter();

  function cliqueCRUD() {
    document.getElementById("divform")!.className = "block";
  }

  function cliqueSalvar() {
    const i = Number((document.getElementById("usuarioid") as HTMLInputElement)!.value);
    const n = (document.getElementById("usuarionome") as HTMLInputElement)!.value;
    const e = (document.getElementById("usuarioemail") as HTMLInputElement)!.value;
    setUsuarios([...usuarios, new Usuario(i, n, e)]);
  }

  function cliqueEditar() {
    const i = Number((document.getElementById("usuarioid") as HTMLInputElement)!.value);
    const n = (document.getElementById("usuarionome") as HTMLInputElement)!.value
    const e = (document.getElementById("usuarioemail") as HTMLInputElement)!.value
    setUsuarios(usuarios.map(u => u.id === i ? new Usuario(i, n, e) : u));
  }

  function cliqueApagar() {
    const ids = selecionados().map(ln => ln[0]);
    setUsuarios(usuarios.filter(u => !ids.includes(u.id + "")));
  }

  function cliqueCancelar() {
    document.getElementById("divform")!.className = "hidden";
  }

  const cssmn = "bg-amber-700 text-zinc-100 p-2 rounded hover:bg-amber-900";
  const cssfr = "m-5 w-100 grid grid-cols-4 grid-rows-4 gap-2 ";
  const csslb = "col-span-1 row-span-1 mt-auto mb-auto";
  const cssin = "p-1 col-span-3 row-span-1 border";
  const cssbt = cssmn + " col-span-1 row-span-1";

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-amber-800 font-bold text-3xl inline-block">
          Usuários
        </h1>
        <button
          className={cssmn}
          onClick={cliqueCRUD}>
          <Image
            src="/menu.svg"
            alt="CRUD"
            height={20}
            width={20}
          />
        </button>
      </div>
      <Tabela
        entidade={"usuario"}
        cabecalho={["Id", "Nome", "Email"]}
        linhas={usuarios.map(u => u.valores())}
      />
      <div id="divform" className="hidden">
        <form name="usuario" className={cssfr}>
          <label className={csslb}>Id:</label>
          <input
            type="text"
            name="usuarioid"
            id="usuarioid"
            className={cssin}
          />
          <label className={csslb}>Nome:</label>
          <input
            type="text"
            name="usuarionome"
            id="usuarionome"
            className={cssin}
          />
          <label className={csslb}>Email:</label>
          <input
            type="email"
            name="usuarioemail"
            id="usuarioemail"
            className={cssin}
          />
          <button type="button" onClick={cliqueSalvar} className={cssbt}>Salvar</button>
          <button type="button" onClick={cliqueEditar} className={cssbt}>Editar</button>
          <button type="button" onClick={cliqueApagar} className={cssbt}>Apagar</button>
          <button type="button" onClick={cliqueCancelar} className={cssbt}>Cancelar</button>
        </form>

      </div>
    </>
  );

}