document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const emailOrCpf = document.getElementById("emailOrCpf").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const errorDiv = document.getElementById("error");

  try {
    const response = await fetch('baseCadastros.txt');
    if (!response.ok) throw new Error('Erro ao acessar base de cadastros');

    const text = await response.text();
    const lines = text.split('\n'); 

    let valid = false;

    for (let line of lines) {
      const [user, pass] = line.split(',');
      if (user.trim() === emailOrCpf && pass.trim() === senha) {
        valid = true;
        break;
      }
    }

    if (valid) {
      window.location.href = 'menu.html';
    } else {
      errorDiv.style.display = 'block';
      errorDiv.innerText = 'Usuário ou login inválidos';
    }

  } catch (err) {
    errorDiv.style.display = 'block';
    errorDiv.innerText = 'Erro ao acessar base de cadastros.';
  }
});
