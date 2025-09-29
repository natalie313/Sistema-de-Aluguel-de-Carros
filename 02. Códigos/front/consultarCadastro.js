document.getElementById("btnConsultar").addEventListener("click", async () => {
  const cpf = document.getElementById("cpfInput").value.trim();
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";

  if (!cpf) {
    resultado.textContent = "Digite um CPF válido!";
    return;
  }

  try {
    const resp = await fetch("baseCadastros.txt");
    if (!resp.ok) throw new Error("Erro ao acessar os dados.");

    const text = await resp.text();
    const linhas = text.split("\n");
    let encontrado = false;

    for (let linha of linhas) {
      const campos = linha.split(",");
      if (campos[1]?.trim() === cpf) {
        resultado.textContent = `
Nome: ${campos[0] || ""}
CPF: ${campos[1] || ""}
RG: ${campos[2] || ""}
Endereço: ${campos[3] || ""}
Profissão: ${campos[4] || ""}
Empresa: ${campos[5] || ""}
Renda 1: ${campos[6] || ""}
Renda 2: ${campos[7] || ""}
Renda 3: ${campos[8] || ""}
        `;
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      resultado.textContent = "CPF não encontrado!";
    }

  } catch (err) {
    resultado.textContent = "Erro ao acessar os dados.";
    console.error(err);
  }
});
