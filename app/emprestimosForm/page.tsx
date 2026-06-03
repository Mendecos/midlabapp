"use client";
import "./emprestimosForm.css";
import { useState, useEffect } from "react";
export default function EmprestimosForm() {
  const [emprestimos, setEmprestimos] = useState<Emprestimo[]>([]);
  const [material, setMaterial] = useState("");
  const [marcaModelo, setMarcaModelo] = useState("");
  const [bolsista, setBolsista] = useState("");
  const [aluno, setAluno] = useState("");
  const [matricula, setMatricula] = useState("");
  const [dataAtual, setDataAtual] = useState("");
  const [prazoDevolucao, setPrazoDevolucao] = useState("");

  interface Emprestimo {
    id: number;
    material: string;
    marcaModelo: string;
    bolsista: string;
    aluno: string;
    matricula: string;
    dataAtual: string;
    prazoDevolucao: string;
  }
  function handleEmprestimo() {
    const novoEmprestimo: Emprestimo = {
      id: Date.now(),
      material,
      marcaModelo,
      bolsista,
      aluno,
      matricula,
      dataAtual,
      prazoDevolucao,
    };

    const salvarEmprestimos = [...emprestimos, novoEmprestimo];

    setEmprestimos(salvarEmprestimos);

    localStorage.setItem("emprestimos", JSON.stringify(salvarEmprestimos));

    setMaterial("");
    setMarcaModelo("");
    setBolsista("");
    setAluno("");
    setMatricula("");
    setDataAtual("");
    setPrazoDevolucao("");
  }
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("emprestimos");

    if (!dadosSalvos) return;

    const emprestimosSalvos: Emprestimo[] = JSON.parse(dadosSalvos);

    setEmprestimos(emprestimosSalvos);
  }, []);
  function handdleExcluir(id: number) {
    const novaLista = emprestimos.filter((e) => e.id !== id);
    setEmprestimos(novaLista);
    localStorage.setItem("emprestimos", JSON.stringify(novaLista));
  }
  return (
    <div className="container-formulario">
      <div>
        <form className="max-w-sm mx-auto space-y-4">
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Material
            </label>
            <input
              type="text"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Marca/Modelo
            </label>
            <input
              type="text"
              value={marcaModelo}
              onChange={(e) => setMarcaModelo(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Bolsista
            </label>
            <input
              type="text"
              value={bolsista}
              onChange={(e) => setBolsista(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Aluno
            </label>
            <input
              type="text"
              value={aluno}
              onChange={(e) => setAluno(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Matricula
            </label>
            <input
              type="text"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Data atual
            </label>
            <input
              type="text"
              value={dataAtual}
              onChange={(e) => setDataAtual(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <label className="block mb-2.5 text-sm font-medium text-heading">
              {" "}
              Prazo de devolução
            </label>
            <input
              type="text"
              value={prazoDevolucao}
              onChange={(e) => setPrazoDevolucao(e.target.value)}
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
              placeholder=""
              required
            />
          </div>
          <div>
            <button
              onClick={handleEmprestimo}
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Salvar
            </button>
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Salvar CSV
            </button>
          </div>
        </form>
      </div>

      <div className="h-150 overflow-y-auto ">
        {emprestimos.map((emprestimo) => (
          <div className="cards-itens" key={emprestimo.id}>
            <h1>Material</h1>
            <h2>{emprestimo.material}</h2>
            <h1>Marca/Modelo</h1>
            <h2>{emprestimo.marcaModelo}</h2>
            <h1>Bolsista</h1>
            <h2>{emprestimo.bolsista}</h2>
            <h1>Aluno</h1>
            <h2>{emprestimo.aluno}</h2>
            <h1>Matrícula</h1>
            <h2>{emprestimo.matricula}</h2>
            <h1>Data Atual</h1>
            <h2>{emprestimo.dataAtual}</h2>
            <h1>Prazo de Devolução</h1>
            <h2>{emprestimo.prazoDevolucao}</h2>
            <button
              className="w-full rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
              onClick={() => handdleExcluir(emprestimo.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
