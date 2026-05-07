import Image from "next/image";
import Link from "next/link";


const csstb = "mb-2 w-full border border-zinc-800 border-collapse text-left";
const csshd = "bg-amber-700";
const csstr = "even:bg-amber-200 hover:bg-amber-400";
const cssth = "p-1 border border-zinc-800 text-zinc-100";
const csstd = "p-1 border border-zinc-800 text-zinc-800";
const cssbt = "bg-amber-700 mx-1 p-1 text-center rounded-2xl";


function TDCheck({ index }: { index: string }) {
  return (
    <td
      key={"tdcheck" + index}
      className={csstd + " text-center w-8"}
    >
      <input
        id={"check" + index}
        type="checkbox"
      />
    </td>
  );
}

function TDAcoes({ entidade, index }: { entidade: string, index: string }) {
  return (
    <td key={"acoes" + index} className={csstd + " text-center"}>
      <Link href={`/${entidade}/forms/edt/${index}`} >
        <button className={cssbt}>
          <Image
            src="/edt.svg"
            alt="EDT"
            height={16}
            width={16}
          />
        </button>
      </Link>
      <Link href={`/${entidade}/forms/rem/${index}`}>
        <button className={cssbt}>
          <Image
            src="/rem.svg"
            alt="REM"
            height={16}
            width={16}
          />
        </button>
      </Link>
    </td>
  );
}

export default function Tabela({
  entidade,
  cabecalho,
  linhas
}:
  {
    entidade: string,
    cabecalho: string[],
    linhas: string[][]
  }) {

  function selectionarTodos() {
    const cba = document.getElementById("checkAll") as HTMLInputElement;
    const cbs = document.querySelectorAll("#tabelaCRUD tbody input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    cbs.forEach(cb => cb.checked = cba.checked);
  }


  const ths = (
    <tr key={"trcabecalho"} className={csshd}>
      <th key={"thcheck"} className={cssth + " text-center"}>
        <input
          id="checkAll"
          type="checkbox"
          onChange={selectionarTodos}
        />
      </th>
      {cabecalho.map((th, i) =>
        <th key={"th" + i} className={cssth}>
          {th}
        </th>
      )}
      <th key={"thacoes"} className={cssth + " w-1/10"}>
        <Link href={`/${entidade}/forms/adc`}>
          <button className="w-full p-1">
            <Image
              src="/adc.svg"
              alt="NOVO"
              height={20}
              width={20}
              className="m-auto"
            />
          </button>
        </Link>
      </th>
    </tr>
  );

  const trs = linhas.map((tr) =>
    <tr key={"tr" + tr[0]} className={csstr}>
      <TDCheck index={tr[0]} />
      {tr.map((td, j) =>
        <td key={"td" + tr[0] + "-" + j} className={csstd}>
          {td}
        </td>
      )}
      <TDAcoes entidade={entidade} index={tr[0]} />
    </tr>
  );

  return (
    <div className="relative w-full overflow-auto">
      <table id="tabelaCRUD" className={csstb}>
        <thead>
          {ths}
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    </div>
  );
}

export function selecionados(apenasUm: boolean) {

  const linhas: string[][] = [];
  const trs: NodeListOf<HTMLTableRowElement> =
    document.querySelectorAll("#tabelaCRUD tbody tr");

  for (let i = 0; i < trs.length; i++) {

    if ((trs[i].cells[0].firstChild as HTMLInputElement)!.checked) {

      const ln: string[] = [];

      for (let j = 1; j < trs[i].cells.length - 1; j++)
        ln.push(trs[i].cells[j].innerText);

      linhas.push(ln);

      if (apenasUm) break;
    }
  }
  return linhas;
}