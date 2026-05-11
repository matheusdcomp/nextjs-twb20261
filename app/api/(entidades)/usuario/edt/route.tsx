import { edtUsuario } from "@/app/lib/data/usuarioDAO";
import Usuario from "@/app/(entidades)/usuario/usuario";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.id && req.nome && req.email) {
    const a = new Usuario(Number(req.id), req.nome, req.email);
    try {
      const b = await edtUsuario(a);
      return Response.json({ mensagem: a.id === b.id });
    }
    catch (e) {
      return Response.json({ mensagem: false });
    }
  }
  else return Response.json({ mensagem: false });
}