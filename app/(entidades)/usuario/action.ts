"use server"
import prisma from "@/app/lib/data/prisma";
import { Usuario } from "@/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect, RedirectType } from "next/navigation";
import bcrypt from 'bcryptjs'; 


export async function criptografarSenha(senha:string) {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(senha, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error("Erro ao criptografar a senha:", error);
    return "";
  }
}

export async function adcUsuario(prevState: any, formData: FormData) {

  const schema = z.object({
    nome: z.string().min(1, "Informe o nome"),
    email: z.email("Email inválido"),
    senha: z.string()
      .min(1, "A senha é obrigatória")
      .min(8, "A senha deve ter 8 ou mais caracteres")
      .max(32, "A senha deve ter no máximo 32 caracteres"),
    tipo: z.preprocess((val) => val === "on", z.boolean()),
  });

  const parse = schema.safeParse({
    nome: formData.get("nome"),
    email: formData.get("email"),
    senha: formData.get("senha"),
    tipo: formData.get("tipo"),
  });

  if (!parse.success) {
    console.log(parse);
    return {
      status: false,
      mensagem: "Dados do formulário informados incorretamente."
    }
  }

  const res = await prisma.usuario.create({
    data: {
      nome: parse.data.nome,
      email: parse.data.email,
      senha: await criptografarSenha(parse.data.senha),
      tipo: parse.data.tipo ? "admin" : "usuario",
    },
  });

  if (res) {
    revalidatePath("/usuario");
    redirect('/usuario', RedirectType.push)
    /* comente o redirect para a mensagem aparecer
    return {
      status: true,
      mensagem: `Novo usuário adicionado: ${parse.data.nome}`
    };
    */
  }
  else {
    return {
      status: false,
      mensagem: `Não foi possível adicionar o usuário: ${parse.data.nome}`
    };
  }
}

export async function edtUsuario(usuario: Usuario): Promise<Usuario> {
  return await prisma.usuario.update({
    where: {
      id: usuario.id,
    },
    data: {
      nome: usuario.nome,
      email: usuario.email,
      senha: await criptografarSenha(usuario.senha),
      tipo: usuario.tipo ? "admin" : "usuario",
    },
  });
}

export async function obtUsuarios(): Promise<Usuario[]> {
  return await prisma.usuario.findMany({
  orderBy: {
    nome: "asc",
  },
});
}

export async function obtUsuarioPorId(id: number): Promise<Usuario | null> {
  return await prisma.usuario.findUnique({
    where: {
      id: id
    }
  });
}

export async function obtUsuarioPorNome(nome: string): Promise<Usuario | null> {
  return await prisma.usuario.findFirst({
    where: {
      nome: nome
    }
  });
}

export async function remUsuario(id: number): Promise<Usuario> {
  return await prisma.usuario.delete({
    where: {
      id: Number(id),
    }
  });
}