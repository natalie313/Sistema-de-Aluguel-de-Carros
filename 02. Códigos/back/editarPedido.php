<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $arquivo = __DIR__ . "/basePedidos.txt";
    $linhas = file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    if ($id === null || !isset($linhas[$id-1])) {
        echo "Pedido não encontrado";
        exit;
    }

    $linhaNova = [
        $_POST['marca'] ?? "",
        $_POST['modelo'] ?? "",
        $_POST['ano'] ?? "",
        $_POST['placa'] ?? "",
        $_POST['dataInicio'] ?? "",
        $_POST['dataFim'] ?? "",
        isset($_POST['credito']) && $_POST['credito'] ? "Sim" : "Não",
        $_POST['banco'] ?? ""
    ];

    $linhas[$id-1] = implode(",", $linhaNova);
    file_put_contents($arquivo, implode("\n", $linhas) . "\n");
    echo "Pedido atualizado!";
}
