import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Car, LogIn, UserPlus, PlusSquare, ListChecks, ClipboardList, ShieldCheck } from "lucide-react";

const brand = {
  bg: "from-blue-600 to-blue-700",
  text: "text-blue-600",
  btn: "bg-blue-600 hover:bg-blue-700 text-white",
};

function Shell({ children }) {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Car className="w-6 h-6" />
            <span>Sistema de Aluguel de Carros</span>
          </div>
          {!isLogin && (
            <nav className="hidden md:flex gap-5 text-sm/none">
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/login"><LogIn className="w-4 h-4"/>Login</Link>
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/cadastro"><UserPlus className="w-4 h-4"/>Cadastro</Link>
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/cliente"><ClipboardList className="w-4 h-4"/>Menu Cliente</Link>
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/pedido/criar"><PlusSquare className="w-4 h-4"/>Criar Pedido</Link>
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/pedido/consultar"><ListChecks className="w-4 h-4"/>Consultar Pedido</Link>
              <Link className="opacity-90 hover:opacity-100 flex items-center gap-1" to="/agente"><ShieldCheck className="w-4 h-4"/>Painel Agente</Link>
            </nav>
          )}
        </div>
      </header>

      {}
      <main className="flex-1">
        <div className="max-w-6xl mx-auto p-6">{children}</div>
      </main>

      <footer className="px-6 py-4 text-sm text-center text-gray-500 bg-gray-100">
  © 2025 Sistema de Aluguel de Carros. Todos os direitos reservados.
</footer>
    </div>
  );
}

function Login() {
  const nav = useNavigate();
  return (
    <Shell>
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow border p-8">
        <div className="flex items-center gap-2 mb-4">
          <LogIn className="w-5 h-5 text-blue-600"/>
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <div className="space-y-3">
          <input className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="CPF ou Email" />
          <input className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Senha" type="password" />
          <button onClick={() => nav('/cliente')} className={`${brand.btn} px-4 py-3 rounded-lg w-full font-medium shadow`}>Entrar</button>
          <div className="flex justify-between text-sm mt-2">
            <Link className={"text-blue-600 hover:underline"} to="/cadastro">Cadastrar-se</Link>
            <button className="text-gray-500" disabled>Esqueci minha senha</button>
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Cadastro() {
  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><UserPlus className="w-5 h-5 text-blue-600"/><h2 className="text-xl font-bold">Cadastro</h2></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input className="border p-3 rounded-lg" placeholder="Nome" />
          <input className="border p-3 rounded-lg" placeholder="CPF" />
          <input className="border p-3 rounded-lg" placeholder="RG" />
          <input className="border p-3 rounded-lg" placeholder="Endereço" />
          <input className="border p-3 rounded-lg" placeholder="Profissão" />
          <input className="border p-3 rounded-lg" placeholder="Empresa" />
          <input className="border p-3 rounded-lg" placeholder="Renda 1" />
          <input className="border p-3 rounded-lg" placeholder="Renda 2" />
          <input className="border p-3 rounded-lg" placeholder="Renda 3" />
        </div>
        <div className="mt-4 flex gap-3">
          <button className={`${brand.btn} px-4 py-2 rounded-lg`}>Salvar</button>
          <Link to="/login" className="px-4 py-2 rounded-lg border">Cancelar</Link>
        </div>
      </div>
    </Shell>
  );
}

function MenuCliente() {
  const Card = ({ icon: Icon, title, desc, to }) => (
    <Link to={to} className="rounded-2xl border bg-white hover:shadow-md transition p-5 flex items-start gap-3">
      <Icon className="w-6 h-6 text-blue-600"/>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500">{desc}</div>
      </div>
    </Link>
  );
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

function CriarPedido() {
  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6 max-w-4xl">
        <div className="flex items-center gap-2 mb-4"><PlusSquare className="w-5 h-5 text-blue-600"/><h2 className="text-xl font-bold">Criar Pedido</h2></div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input className="border p-3 rounded-lg" placeholder="Marca" />
          <input className="border p-3 rounded-lg" placeholder="Modelo" />
          <input className="border p-3 rounded-lg" placeholder="Ano" />
          <input className="border p-3 rounded-lg" placeholder="Placa" />
          <input className="border p-3 rounded-lg" placeholder="Data início" type="date" />
          <input className="border p-3 rounded-lg" placeholder="Data fim" type="date" />
        </div>
        <div className="mt-3 flex items-center gap-3">
          <label className="inline-flex items-center gap-2"><input type="checkbox"/> Contrato com crédito</label>
          <input className="border p-3 rounded-lg" placeholder="Banco" />
        </div>
        <button className={`${brand.btn} px-4 py-2 rounded-lg w-full mt-4`}>Enviar Pedido</button>
      </div>
    </Shell>
  );
}

function ConsultarPedidos() {
  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><ListChecks className="w-5 h-5 text-blue-600"/><h2 className="text-xl font-bold">Consultar Pedidos</h2></div>
        <table className="w-full border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="border p-2">Nº Pedido</th>
              <th className="border p-2">Carro</th>
              <th className="border p-2">Data</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {[{id:'001',carro:'Fiat Uno',data:'10/09/25',status:'Em análise'}].map(r => (
              <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2">{r.id}</td>
                <td className="border p-2">{r.carro}</td>
                <td className="border p-2">{r.data}</td>
                <td className="border p-2">{r.status}</td>
                <td className="border p-2 space-x-2">
                  <button className="px-2 py-1 border rounded-lg">Ver</button>
                  <button className="px-2 py-1 border rounded-lg">Modificar</button>
                  <button className="px-2 py-1 border rounded-lg">Cancelar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

function PainelAgente() {
  return (
    <Shell>
      <div className="bg-white rounded-2xl shadow border p-6">
        <div className="flex items-center gap-2 mb-4"><ShieldCheck className="w-5 h-5 text-blue-600"/><h2 className="text-xl font-bold">Painel do Agente</h2></div>
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
            {[{id:'001',cliente:'Maria',status:'Em análise'}].map(r => (
              <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                <td className="border p-2">{r.id}</td>
                <td className="border p-2">{r.cliente}</td>
                <td className="border p-2">{r.status}</td>
                <td className="border p-2 space-x-2">
                  <button className={`${brand.btn} px-2 py-1 rounded-lg`}>Analisar Financeiramente</button>
                  <button className="px-2 py-1 border rounded-lg">Avaliar Pedido</button>
                  <button className="px-2 py-1 border rounded-lg">Aprovar Pedido</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Shell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cliente" element={<MenuCliente />} />
        <Route path="/pedido/criar" element={<CriarPedido />} />
        <Route path="/pedido/consultar" element={<ConsultarPedidos />} />
        <Route path="/agente" element={<PainelAgente />} />
        <Route path="*" element={<Shell><div className="text-gray-500">Página não encontrada</div></Shell>} />
      </Routes>
    </BrowserRouter>
  );
}