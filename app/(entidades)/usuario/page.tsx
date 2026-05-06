'use client';
import Tabela from "@/app/ui/tabela";
import Usuario from "./usuario";

export default function Pagina() {

  const usuarios = [
    new Usuario(1, "ANÚBIS", "anubis@mail.com"),
    new Usuario(2, "ODIN", "odin@mail.com"),
    new Usuario(3, "ZEUS", "zeus@mail.com"),
  ];

  return (
    <>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-amber-800 font-bold text-3xl inline-block">
          Usuários
        </h1>
      </div>
      <Tabela
        entidade={"usuario"}
        cabecalho={["Id", "Nome", "Email"]}
        linhas={usuarios.map(u => u.valores())}
      />
    </>
  );

}