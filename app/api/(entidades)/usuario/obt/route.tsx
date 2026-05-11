import { obtUsuarioPorId, obtUsuarios } from "@/app/lib/data/usuarioDAO";


export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get('id'));

  if (id <= 0) {
    const usuarios = await obtUsuarios();
    return Response.json(usuarios);
  }
  if (id > 0) {
    return Response.json(await obtUsuarioPorId(Number(id)));
  }
  else return Response.json(undefined);
}