import Image from "next/image";
import Link from "next/link";
import { MouseEventHandler } from "react";

const cssbt = "bg-amber-700 mx-1 p-1 text-center rounded-2xl";

type BotaoProps = {
  img: string,
  alt: string,
  hei: number,
  wid: number,
  onClick: MouseEventHandler,
}

export function Botao(props: BotaoProps) {
  return (
    <button className={cssbt}>
      <Image
        src={props.img}
        alt={props.alt}
        height={props.hei}
        width={props.wid}
        onClick={props.onClick}
      />
    </button>
  );
}


type BotaoLinkProps = {
  img: string,
  alt: string,
  hei: number,
  wid: number,
  ref: string,
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link href={props.ref} >
      <button className={cssbt}>
        <Image
          src={props.img}
          alt={props.alt}
          height={props.hei}
          width={props.wid}
        />
      </button>
    </Link>
  );
}