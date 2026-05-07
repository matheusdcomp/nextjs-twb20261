'use client';
import Tabela from "@/app/ui/tabela";
import Usuario, { API } from "./usuario";
import useSWR from "swr";

export default function PaginaUsuario() {

  const fetcher = (url: string) => fetch(url).then((res => res.json()));

  const { data, error, isLoading } = useSWR<Usuario[]>(
    `${API}obt?id=0`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className={"text-5xl text-cor1 text-left text-bold"}>
        <h1>Usuarios</h1>
        <h1>Carregando...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className={"text-5xl text-cor1 text-left text-bold"}>
        <h1>Usuarios</h1>
        <h1>Erro ao carregar os usuarios.</h1>
      </div>
    );
  }

  const usuarios = data && data.length > 0 ?
    data :
    [new Usuario(0, "Nenhum usuário retornado", "-")];

  return (
    <>
      <h1 className="text-amber-800 font-bold text-3xl inline-block">
        Usuários
      </h1>
      <Tabela
        entidade={"usuario"}
        cabecalho={["Id", "Nome", "Email"]}
        linhas={usuarios.map(u => [`${u.id}`, u.nome, u.email])}
      />
    </>
  );
}