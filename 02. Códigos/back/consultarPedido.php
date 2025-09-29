<?php
// consultarPedido.php
$arquivo = __DIR__ . "/basePedidos.txt";

if (!file_exists($arquivo)) {
    echo json_encode([]);
    exit;
}

$linhas = file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$pedidos = [];

foreach ($linhas as $index => $linha) {
    $cols = explode(",", $linha);
    $pedidos[] = [
        "id" => $index + 1,
        "marca" => $cols[0] ?? "",
        "modelo" => $cols[1] ?? "",
        "ano" => $cols[2] ?? "",
        "placa" => $cols[3] ?? "",
        "dataInicio" => $cols[4] ?? "",
        "dataFim" => $cols[5] ?? "",
        "credito" => $cols[6] ?? "",
        "banco" => $cols[7] ?? ""
    ];
}

header('Content-Type: application/json');
echo json_encode($pedidos);
