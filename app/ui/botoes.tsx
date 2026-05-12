import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

const cssbt = "bg-amber-700 mx-1 p-1 rounded-2xl ";

type BotaoProps = {
  imagem: string,
  texto: string,
  tamimg: number,
  wbtn?: string,
  onClick: MouseEventHandler,
}

export function Botao(props: BotaoProps) {
  return (
    <button className={cssbt + props.wbtn}>
      <Image
        className="m-auto"
        src={props.imagem}
        alt={props.texto}
        height={props.tamimg}
        width={props.tamimg}
        onClick={props.onClick}
      />
    </button>
  );
}


type BotaoLinkProps = {
  imagem: string,
  texto: string,
  tamimg: number,
  wbtn?: string,
  ref: string,
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link href={props.ref} >
      <button className={cssbt + " " + props.wbtn}>
        <Image
          className="m-auto"
          src={props.imagem}
          alt={props.texto}
          height={props.tamimg}
          width={props.tamimg}
        />
      </button>
    </Link>
  );
}