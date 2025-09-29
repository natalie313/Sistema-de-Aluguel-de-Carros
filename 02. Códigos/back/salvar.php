<?php
$arquivo = "baseCadastros.txt";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST["nome"] ?? "";
    $cpf = $_POST["cpf"] ?? "";
    $rg = $_POST["rg"] ?? "";
    $endereco = $_POST["endereco"] ?? "";
    $profissao = $_POST["profissao"] ?? "";
    $empresa = $_POST["empresa"] ?? "";
    $renda1 = $_POST["renda1"] ?? "";
    $renda2 = $_POST["renda2"] ?? "";
    $renda3 = $_POST["renda3"] ?? "";

    if (empty($nome) || empty($cpf)) {
        echo "Nome e CPF são obrigatórios.";
        exit;
    }

    $linha = "$nome,$cpf,$rg,$endereco,$profissao,$empresa,$renda1,$renda2,$renda3\n";

    if (file_put_contents($arquivo, $linha, FILE_APPEND | LOCK_EX)) {
        echo "Cadastro realizado com sucesso!";
    } else {
        echo "Erro ao salvar os dados.";
    }

} else {
    echo "Método inválido.";
}
?>
