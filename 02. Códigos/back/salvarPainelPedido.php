<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? null;
    $status = $_POST['status'] ?? '';

    if (!$id || !$status) {
        echo "Dados inválidos";
        exit;
    }

    $linha = "$id,$status\n";
    file_put_contents(__DIR__ . "/painelPedidos.txt", $linha, FILE_APPEND);
    echo "Status atualizado!";
}
