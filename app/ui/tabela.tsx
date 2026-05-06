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

  const csstb = "mb-2 w-full border border-cor1 border-collapse";
  const csshd = "bg-amber-700";
  const csstr = "even:bg-amber-200 hover:bg-amber-400";
  const cssth = "border border-zinc-800 text-zinc-100 p-1 text-left";
  const csstd = "border border-zinc-800 text-zinc-800 p-1";

  const ths = (
    <tr key={"trcabecalho"} className={csshd}>
      <th key={"thcheck"} className={cssth + "text-center"}>
        <input
          id="checkAll"
          type="checkbox"
          className="w-4 h-4"
          onChange={selectionarTodos}
        />
      </th>
      {cabecalho.map((th, i) =>
        <th key={"th" + i} className={cssth}>
          {th}
        </th>
      )}
    </tr>
  );

  const trs = linhas.map((tr, i) =>
    <tr key={"tr" + i} className={csstr}>
      <td
        key={"tdcheck" + i}
        className={csstd + " text-center w-8"}
      >
        <input
          id={"check" + i}
          type="checkbox"
          className="w-4 h-4"
        />
      </td>
      {tr.map((td, j) =>
        <td key={"td" + i + "-" + j} className={csstd}>
          {td}
        </td>
      )}
    </tr>
  );

  return (
    <div className="relative w-full overflow-auto border-collapse">
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

export function selecionado() {

  const ln: string[] = [];
  const trs = document.querySelectorAll("#tabelaCRUD tbody tr") as NodeListOf<HTMLTableRowElement>;

  for (let i = 0; i < trs.length; i++) {

    if ((trs[i].cells[0].firstChild as HTMLInputElement)!.checked) {

      for (let j = 1; j < trs[i].cells.length - 1; j++) {
        ln.push(trs[i].cells[j].firstChild!.nodeValue + "");
      }
      break;
    }
  }
  return ln;
}

export function selecionados() {

  const linhas: string[][] = [];
  const trs = document.querySelectorAll("#tabelaCRUD tbody tr") as NodeListOf<HTMLTableRowElement>;

  for (let i = 0; i < trs.length; i++) {

    if ((trs[i].cells[0].firstChild as HTMLInputElement)!.checked) {

      const ln: string[] = [];

      for (let j = 1; j < trs[i].cells.length - 1; j++) {
        ln.push(trs[i].cells[j].firstChild!.nodeValue + "");
      }
      linhas.push(ln);
    }
  }
  return linhas;
}