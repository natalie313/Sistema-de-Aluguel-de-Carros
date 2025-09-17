import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";
import Shell from "../components/Shell";
import { listarPedidos, atualizarPedido } from "../services/pedidosService";

export default function PainelAgente() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function carregar() {
    setLoading(true);
    const data = await listarPedidos();
    setPedidos(data);
    setLoading(false);
  }

  useEffect(() => { carregar(); }, []);

  async function mudarStatus(id, status) {
    await atualizarPedido(id, { status });
    await carregar();
  }

  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5 text-purple-600"/><h2 className="text-xl font-bold">Painel do Agente</h2></div>
        {loading ? (
          <div className="text-gray-500">Carregando...</div>
        ) : (
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Nº Pedido</th>
                <th className="border p-2">Cliente</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(r => (
                <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border p-2">{r.id}</td>
                  <td className="border p-2">{r.cliente}</td>
                  <td className="border p-2">{r.status}</td>
                  <td className="border p-2 space-x-2">
                    <button onClick={()=>mudarStatus(r.id, "Em análise")} className="px-2 py-1 border rounded-lg">Analisar</button>
                    <button onClick={()=>mudarStatus(r.id, "Aprovado")} className="bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg">Aprovar</button>
                    <button onClick={()=>mudarStatus(r.id, "Cancelado")} className="px-2 py-1 border rounded-lg">Cancelar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Shell>
  );
}
