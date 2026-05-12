import { BotaoLink } from "./botoes";

const csstb = "mb-2 w-full border border-zinc-800 border-collapse text-left";
const csshd = "bg-amber-700";
const csstr = "even:bg-amber-200 hover:bg-amber-400";
const cssth = "p-1 border border-zinc-800 text-zinc-100";
const csstd = "p-1 border border-zinc-800 text-zinc-800";


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

function THCheck() {

  function selecionarTodos() {
    const cba = document.getElementById("checkAll") as HTMLInputElement;
    const cbs = document.querySelectorAll("#tabelaCRUD tbody input[type='checkbox']") as NodeListOf<HTMLInputElement>;
    cbs.forEach(cb => cb.checked = cba.checked);
  }

  return (
    <th
      key={"thcheck"}
      className={cssth + " text-center"}
    >
      <input
        id="checkAll"
        type="checkbox"
        onChange={selecionarTodos}
      />
    </th>
  );
}

function TDAcoes({ entidade, index }: { entidade: string, index: string }) {
  return (
    <td key={"acoes" + index} className={csstd + " text-center"}>
      <BotaoLink
        img="/edt.svg"
        alt="EDT"
        hei={16}
        wid={16}
        ref={`/${entidade}/forms/edt/${index}`}
      />
      <BotaoLink
        img="/rem.svg"
        alt="REM"
        hei={16}
        wid={16}
        ref={`/${entidade}/forms/rem/${index}`}
      />
    </td>
  );
}

function Cabecalho({
  entidade,
  colunas,
}:
  {
    entidade: string,
    colunas: string[],
  }) {
  return (
    <tr key={"trcabecalho"} className={csshd}>
      <THCheck />
      {colunas.map((th, i) =>
        <th key={"th" + i} className={cssth}>
          {th}
        </th>
      )}
      <th key={"thacoes"} className={cssth + " w-1/10"}>
        <BotaoLink
          img="/adc.svg"
          alt="ADC"
          hei={16}
          wid={16}
          ref={`/${entidade}/forms/adc`}
        />
      </th>
    </tr>
  );
}

function Linhas({
  entidade,
  linhas
}:
  {
    entidade: string,
    linhas: string[][]
  }) {
  return linhas.map((tr) =>
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
}

export default function Tabela({
  entidade,
  colunas,
  linhas
}:
  {
    entidade: string,
    colunas: string[],
    linhas: string[][]
  }) {
  return (
    <div className="relative w-full overflow-auto">
      <table id="tabelaCRUD" className={csstb}>
        <thead>
          <Cabecalho entidade={entidade} colunas={colunas} />
        </thead>
        <tbody>
          <Linhas entidade={entidade} linhas={linhas} />
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