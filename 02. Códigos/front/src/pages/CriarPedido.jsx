import { useState } from "react";
import { PlusSquare } from "lucide-react";
import Shell from "../components/Shell";
import { criarPedido } from "../services/pedidosService";
import { getCurrentUser } from "../services/authService";

export default function CriarPedido() {
  const user = getCurrentUser();
  const [form, setForm] = useState({ marca:"", modelo:"", ano:"", placa:"", dataInicio:"", dataFim:"", banco:"", credito:false });
  const [msg, setMsg] = useState("");

  function onChange(e){ const {name, value, type, checked} = e.target; setForm(f => ({...f, [name]: type==='checkbox'? checked : value})); }

  async function handleEnviar() {
    setMsg("");
    await criarPedido({
      id: String(Date.now()).slice(-6),
      cliente: user?.nome || "Cliente",
      carro: `${form.marca} ${form.modelo}`.trim(),
      data: form.dataInicio || new Date().toISOString().slice(0,10),
      status: "Em análise",
      ...form
    });
    setMsg("Pedido enviado!");
  }

  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6 max-w-4xl">
        <div className="flex items-center gap-2 mb-4"><PlusSquare className="w-5 h-5 text-purple-600"/><h2 className="text-xl font-bold">Criar Pedido</h2></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input name="marca" value={form.marca} onChange={onChange} className="border p-3 rounded-lg" placeholder="Marca" />
          <input name="modelo" value={form.modelo} onChange={onChange} className="border p-3 rounded-lg" placeholder="Modelo" />
          <input name="ano" value={form.ano} onChange={onChange} className="border p-3 rounded-lg" placeholder="Ano" />
          <input name="placa" value={form.placa} onChange={onChange} className="border p-3 rounded-lg" placeholder="Placa" />
          <input name="dataInicio" value={form.dataInicio} onChange={onChange} className="border p-3 rounded-lg" type="date" />
          <input name="dataFim" value={form.dataFim} onChange={onChange} className="border p-3 rounded-lg" type="date" />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <label className="inline-flex items-center gap-2"><input name="credito" checked={form.credito} onChange={onChange} type="checkbox"/> Contrato com crédito</label>
          <input name="banco" value={form.banco} onChange={onChange} className="border p-3 rounded-lg" placeholder="Banco" />
        </div>
        <button onClick={handleEnviar} className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg w-full mt-4">Enviar Pedido</button>
        {msg && <div className="text-green-600 mt-2">{msg}</div>}
      </div>
    </Shell>
  );
}
