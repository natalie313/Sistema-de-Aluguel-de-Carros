import { Car, LogIn, UserPlus, PlusSquare, ListChecks, ClipboardList, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Shell({ children }) {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header sempre visível; menu só fora do login */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Car className="w-6 h-6" />
            <span>Sistema de Aluguel de Carros</span>
          </div>
          {!isLogin && (
            <nav className="hidden md:flex gap-5 text-sm">
              <Link to="/login" className="flex items-center gap-1 opacity-90 hover:opacity-100"><LogIn className="w-4 h-4"/>Login</Link>
              <Link to="/cadastro" className="flex items-center gap-1 opacity-90 hover:opacity-100"><UserPlus className="w-4 h-4"/>Cadastro</Link>
              <Link to="/cliente" className="flex items-center gap-1 opacity-90 hover:opacity-100"><ClipboardList className="w-4 h-4"/>Menu Cliente</Link>
              <Link to="/pedido/criar" className="flex items-center gap-1 opacity-90 hover:opacity-100"><PlusSquare className="w-4 h-4"/>Criar Pedido</Link>
              <Link to="/pedido/consultar" className="flex items-center gap-1 opacity-90 hover:opacity-100"><ListChecks className="w-4 h-4"/>Consultar Pedido</Link>
              <Link to="/agente" className="flex items-center gap-1 opacity-90 hover:opacity-100"><ShieldCheck className="w-4 h-4"/>Painel Agente</Link>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-6xl mx-auto p-6">{children}</div>
      </main>

      <footer className="px-6 py-4 text-sm text-center text-gray-500 bg-gray-100">
        © 2025 Sistema de Aluguel de Carros. Todos os direitos reservados.
      </footer>
    </div>
  );
}
