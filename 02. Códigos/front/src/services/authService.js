import api from "./api";

export async function login({ emailOrCpf, senha }) {
  const { data } = await api.get("/usuarios", { params: { emailOrCpf, senha } });
  if (!data?.length) throw new Error("Credenciais inválidas");
  const user = data[0];
  // token fake (quando o back real chegar, substituir por token real)
  localStorage.setItem("token", "token-fake");
  localStorage.setItem("user", JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  const raw = localStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
}
