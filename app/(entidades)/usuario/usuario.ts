export const API = "http://localhost:3000/api/usuario/";

export default class Usuario {

  public id;
  public nome;
  public email;

  constructor(id: number, nome: string, email: string) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}

/*
type Usuario = {
  id:number,
  nome:string
}
*/