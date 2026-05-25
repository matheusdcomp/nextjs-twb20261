'use client';
import Tabela from "@/app/ui/tabela";
import { User } from "@/generated/prisma/client";
import { useEffect, useState } from "react";
import { obtUsuarios } from "./action";

export default function PaginaUsuario() {

  const [usuarios, setUsuarios] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    obtUsuarios().then(
      value => {
        setUsuarios(value);
        setIsLoading(false);
      },
      error => setIsLoading(false),
    );
  }, []);

  if (isLoading) return usuarioLoading();
  if (usuarios) return usuarioData(usuarios);
  return usuarioError();
}

function usuarioLoading() {
  return (
    <div className={"text-5xl text-cor1 text-left text-bold"}>
      <h1>Usuarios</h1>
      <h1>Carregando...</h1>
    </div>
  );
}

function usuarioError() {
  return (
    <div className={"text-5xl text-cor1 text-left text-bold text-red-700"}>
      <h1>Usuarios</h1>
      <h1>Erro ao carregar os usuários.</h1>
    </div>
  );
}

function usuarioData(usuarios: User[]) {
  return (
    <>
      <h1 className="text-amber-800 font-bold text-3xl inline-block">
        Usuários
      </h1>
      <Tabela
        entidade={"usuario"}
        colunas={["Id", "Nome", "Email", "Tipo"]}
        linhas={usuarios.map(u => [`${u.id}`, u.nome, u.email, u.tipo])}
      />
    </>
  );
}