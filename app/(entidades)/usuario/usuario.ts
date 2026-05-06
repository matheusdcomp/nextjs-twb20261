export default class Usuario {

  public id;
  public nome;
  public email;

  constructor(id: number, nome: String, email: String) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  atributos() {
    return Object.keys(this);
  }

  valores() {
    //return [this.id+"", this.nome, this.email];
    return Object.values(this).map(v => typeof v !== 'string' ? `${v}` : v);
  }

}
/*
type Usuario = {
  id:number,
  nome:string
}
*/