import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import MenuCliente from "./pages/MenuCliente";
import CriarPedido from "./pages/CriarPedido";
import ConsultarPedidos from "./pages/ConsultarPedidos";
import PainelAgente from "./pages/PainelAgente";
import Shell from "./components/Shell";

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
