import Login from "./login";

export default function Topo() {
  return (
    <div className="col-span-7 row-span-1 flex flex flex-row content-center justify-between items-center bg-amber-700 text-zinc-200 text-4xl font-bold">
      <h1>Título da Minha Página</h1>
       <Login />
    </div>
  );
}