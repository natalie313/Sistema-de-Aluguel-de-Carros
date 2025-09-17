import { PlusSquare, ListChecks, ClipboardList, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Shell from "../components/Shell";

const Card = ({ icon: Icon, title, desc, to }) => (
  <Link to={to} className="rounded-2xl border bg-white hover:shadow-md transition p-5 flex items-start gap-3">
    <Icon className="w-6 h-6 text-purple-600"/>
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-gray-500">{desc}</div>
    </div>
  </Link>
);

export default function MenuCliente() {
  return (
    <Shell>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card icon={PlusSquare} title="Criar Pedido" desc="Solicite um novo aluguel" to="/pedido/criar"/>
        <Card icon={ListChecks} title="Consultar Pedido" desc="Acompanhe status e detalhes" to="/pedido/consultar"/>
        <Card icon={ClipboardList} title="Modificar/Cancelar" desc="Gerencie pedidos existentes" to="/pedido/consultar"/>
        <Card icon={ShieldCheck} title="Acessar Conta" desc="Dados e preferências" to="/cliente"/>
      </div>
    </Shell>
  );
}
