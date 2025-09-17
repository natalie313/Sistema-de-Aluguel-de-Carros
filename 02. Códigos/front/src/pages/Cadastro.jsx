import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Shell from "../components/Shell";
import { criarCliente } from "../services/clientesService";

export default function Cadastro() {
  const nav = useNavigate();
  const [form, setForm] = useState({ nome:"", cpf:"", rg:"", endereco:"", profissao:"", empresa:"", renda1:"", renda2:"", renda3:"" });
  const [ok, setOk] = useState(""); const [erro, setErro] = useState("");

  function onChange(e){ setForm(f => ({...f, [e.target.name]: e.target.value})); }

  async function handleSalvar() {
    try {
      setOk(""); setErro("");
      // salva somente campos essenciais no mock:
      await criarCliente({ nome: form.nome, cpf: form.cpf });
      setOk("Cadastro salvo!");
      setTimeout(()=> nav("/login"), 800);
    } catch(e) {
      setErro("Falha ao salvar cadastro");
    }
  }

  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><UserPlus className="w-5 h-5 text-purple-600"/><h2 className="text-xl font-bold">Cadastro</h2></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="nome" value={form.nome} onChange={onChange} className="border p-3 rounded-lg" placeholder="Nome" />
          <input name="cpf" value={form.cpf} onChange={onChange} className="border p-3 rounded-lg" placeholder="CPF" />
          <input name="rg" value={form.rg} onChange={onChange} className="border p-3 rounded-lg" placeholder="RG" />
          <input name="endereco" value={form.endereco} onChange={onChange} className="border p-3 rounded-lg" placeholder="Endereço" />
          <input name="profissao" value={form.profissao} onChange={onChange} className="border p-3 rounded-lg" placeholder="Profissão" />
          <input name="empresa" value={form.empresa} onChange={onChange} className="border p-3 rounded-lg" placeholder="Empresa" />
          <input name="renda1" value={form.renda1} onChange={onChange} className="border p-3 rounded-lg" placeholder="Renda 1" />
          <input name="renda2" value={form.renda2} onChange={onChange} className="border p-3 rounded-lg" placeholder="Renda 2" />
          <input name="renda3" value={form.renda3} onChange={onChange} className="border p-3 rounded-lg" placeholder="Renda 3" />
        </div>
        <div className="mt-4 flex gap-3">
          <button onClick={handleSalvar} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">Salvar</button>
          <Link to="/login" className="px-4 py-2 rounded-lg border">Cancelar</Link>
        </div>
        {ok && <div className="text-green-600 mt-2">{ok}</div>}
        {erro && <div className="text-red-600 mt-2">{erro}</div>}
      </div>
    </Shell>
  );
}
