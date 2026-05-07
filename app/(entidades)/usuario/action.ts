"use server"

import { API } from "./usuario";

async function get(op: string) {
  const res = await fetch(API+op);
  return res.json();
}

async function post(op: string, obj: string) {

  const res = await fetch(API+op, { method: 'POST', body: obj });

  if (!res.ok) {
    throw new Error('Falha em executar a ação do formulário.');
  }
  return res.json();
}

export async function adcUsuario(props: string[]) {

  const res = await post(
    'adc',
    `{"id":"${props[0]}", "nome":"${props[1]}", "email":"${props[2]}"}`
  );

  if (res.mensagem) {
    return `Novo usuario adicionado: ${props[1]}`;
  }
  else {
    return `Não foi possível adicionar o usuario: ${props[1]}`;
  }
}

export async function edtUsuario(props: string[]) {

  const res = await get(
    `edt?id=${props[0]}&nome=${props[1]}&email=${props[2]}`
  );

  if (res.mensagem) {
    return `O usuario ${props[1]} foi editado.`;
  }
  else {
    return `Não foi possível editar o usuario ${props[0]}`;
  }
}

export async function remUsuario(id: number) {

  const res = await post(
    'rem',
    `{"id":"${id}"}`
  );

  if (res.mensagem) {
    return `O usuario com ID: ${id} foi removido.`;
  }
  else {
    return `Não foi possível remover o usuario com ID: ${id}`;
  }
}