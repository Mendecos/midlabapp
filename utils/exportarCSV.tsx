import { Emprestimo } from "../types/emprestimo";

export function exportarCSV(emprestimos: Emprestimo[]) {
  const cabecalho =
    "Material,Marca/Modelo,Bolsista,Aluno,Matrícula,Data Atual,Prazo Devolução\n";
  const linhas = emprestimos.map((emprestimo) =>
    [
      emprestimo.material,
      emprestimo.marcaModelo,
      emprestimo.bolsista,
      emprestimo.aluno,
      emprestimo.matricula,
      emprestimo.dataAtual,
      emprestimo.prazoDevolucao,
    ].join(","),
  );
  const csv = cabecalho + linhas.join("\n");
  console.log(csv);
  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
    
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "emprestimos.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
