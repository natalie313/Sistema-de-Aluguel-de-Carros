import api from "./api";

export async function listarClientes() {
  const { data } = await api.get("/clientes");
  return data;
}

export async function criarCliente(payload) {
  const { data } = await api.post("/clientes", payload);
  return data;
}
