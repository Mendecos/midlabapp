import { useRouter } from "next/navigation";
export default function LoginForm() {
  const navigate = useRouter();
  const handleNavigate = () => {
    navigate.push("/emprestimosForm");
  };
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Usuario
          </label>
          <input
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2.5 text-sm font-medium text-heading">
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          onClick={handleNavigate}
          type="submit"
          className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
