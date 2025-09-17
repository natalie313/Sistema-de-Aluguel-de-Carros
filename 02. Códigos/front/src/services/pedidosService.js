import api from "./api";

export async function listarPedidos(params) {
  const { data } = await api.get("/pedidos", { params });
  return data;
}

export async function criarPedido(payload) {
  const { data } = await api.post("/pedidos", payload);
  return data;
}

export async function obterPedido(id) {
  const { data } = await api.get(`/pedidos/${id}`);
  return data;
}

export async function atualizarPedido(id, payload) {
  const existente = await obterPedido(id);
  const { data } = await api.put(`/pedidos/${id}`, { ...existente, ...payload });
  return data;
}
