import Link from "next/link";

export default function Menu() {
  const cssLi = "p-2 hover:bg-amber-600";
  return (
    <div className="col-span-1 row-span-8 bg-amber-700 text-zinc-200 text-2xl font-bold">
      <ul>
        <li key="menu0" className="h-19"></li>
        <Link href={"/"}>
          <li key="menu1" className={cssLi}>Home</li>
        </Link>
        <Link href={"/usuario"}>
          <li key="menu2" className={cssLi}>Usuários</li>
        </Link>
      </ul>
    </div >
  );
}