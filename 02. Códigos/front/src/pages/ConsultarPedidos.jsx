import { useEffect, useState } from "react";
import { ListChecks } from "lucide-react";
import Shell from "../components/Shell";
import { listarPedidos } from "../services/pedidosService";

export default function ConsultarPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await listarPedidos();
        setPedidos(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><ListChecks className="w-5 h-5 text-purple-600"/><h2 className="text-xl font-bold">Consultar Pedidos</h2></div>
        {loading ? (
          <div className="text-gray-500">Carregando...</div>
        ) : (
          <table className="w-full border rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-2">Nº Pedido</th>
                <th className="border p-2">Cliente</th>
                <th className="border p-2">Carro</th>
                <th className="border p-2">Data</th>
                <th className="border p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map(r => (
                <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                  <td className="border p-2">{r.id}</td>
                  <td className="border p-2">{r.cliente}</td>
                  <td className="border p-2">{r.carro}</td>
                  <td className="border p-2">{r.data}</td>
                  <td className="border p-2">{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </Shell>
  );
}
