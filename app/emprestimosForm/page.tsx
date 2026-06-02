"use client";
export default function EmprestimosForm() {
  return (
    <div>
      <form className="max-w-sm mx-auto space-y-4">
        <div>
          <label className="block mb-2.5 text-sm font-medium text-heading">
            {" "}
            Material
          </label>
          <input
            type="text"
            id="visitors"
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
            id="visitors"
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
            id="visitors"
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
            id="visitors"
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
            id="visitors"
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
            id="visitors"
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
            id="visitors"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"
            placeholder=""
            required
          />
        </div>
      </form>
      <div>
        <button
          type="submit"
          className="w-full text-white bg-brand hover:bg-brand-hover focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-base text-sm px-5 py-2.5 text-center shadow-xs"
        >
          Salvar
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="w-full text-white bg-brand hover:bg-brand-hover focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-base text-sm px-5 py-2.5 text-center shadow-xs"
        >
          Salvar CSV
        </button>
      </div>
    </div>
  );
}
