document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const form = new URLSearchParams(formData);

  const okEl = document.getElementById("ok");
  const erroEl = document.getElementById("erro");

  okEl.textContent = "";
  erroEl.textContent = "";

  try {
    const resp = await fetch("salvar.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: form.toString() 
    });

    const msg = await resp.text();
    if (msg.includes("sucesso")) {
      okEl.textContent = msg;
      okEl.style.color = "green";
      setTimeout(() => { window.location.href = "login.html"; }, 1500);
    } else {
      erroEl.textContent = msg;
      erroEl.style.color = "red";
    }

  } catch (err) {
    erroEl.textContent = "Erro no servidor.";
    erroEl.style.color = "red";
    console.error(err);
  }
});
