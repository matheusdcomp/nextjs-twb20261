import { remUsuario } from "@/app/lib/data/usuarioDAO";


export async function POST(request: Request) {

  const req = await request.json();

  if (req.id) {
    const id = Number(req.id);
    try {
      const u = await remUsuario(id);
      return Response.json({ mensagem: u.id === id });
    }
    catch (e) {
      return Response.json({ mensagem: false });
    }
  }
  else return Response.json({ mensagem: false });
}