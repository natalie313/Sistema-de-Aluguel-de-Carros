import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Shell from "../components/Shell";
import { login } from "../services/authService";

export default function Login() {
  const nav = useNavigate();
  const [emailOrCpf, setUser] = useState("");
  const [senha, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  async function handleLogin() {
    try {
      setLoading(true); setErro("");
      await login({ emailOrCpf, senha });
      nav("/cliente");
    } catch (e) {
      setErro(e.message || "Falha ao entrar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Shell>
      <div className="max-w-lg mx-auto bg-white rounded-2xl shadow border p-8">
        <div className="flex items-center gap-2 mb-4">
          <LogIn className="w-5 h-5 text-purple-600"/>
          <h2 className="text-2xl font-bold">Login</h2>
        </div>
        <div className="space-y-3">
          <input value={emailOrCpf} onChange={e=>setUser(e.target.value)} className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="CPF ou Email" />
          <input value={senha} onChange={e=>setPass(e.target.value)} className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Senha" type="password" />
          <button onClick={handleLogin} disabled={loading} className="bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white px-4 py-3 rounded-lg w-full font-medium shadow">
            {loading ? "Entrando..." : "Entrar"}
          </button>
          {erro && <div className="text-sm text-red-600">{erro}</div>}
          <div className="flex justify-between text-sm mt-2">
            <Link className="text-purple-600 hover:underline" to="/cadastro">Cadastrar-se</Link>
            <button className="text-gray-500" disabled>Esqueci minha senha</button>
          </div>
        </div>
      </div>
    </Shell>
  );
}