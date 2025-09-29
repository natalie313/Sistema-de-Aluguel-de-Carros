<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $arquivo = __DIR__ . "/basePedidos.txt";
    $linhas = file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

    if ($id === null || !isset($linhas[$id-1])) {
        echo "Pedido não encontrado";
        exit;
    }

    unset($linhas[$id-1]);
    file_put_contents($arquivo, implode("\n", $linhas) . "\n");
    echo "Pedido deletado!";
}
