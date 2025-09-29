<?php
// salvarPedido.php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe dados do POST
    $marca = $_POST['marca'] ?? '';
    $modelo = $_POST['modelo'] ?? '';
    $ano = $_POST['ano'] ?? '';
    $placa = $_POST['placa'] ?? '';
    $dataInicio = $_POST['dataInicio'] ?? '';
    $dataFim = $_POST['dataFim'] ?? '';
    $credito = isset($_POST['credito']) ? "Sim" : "Não";
    $banco = $_POST['banco'] ?? '';

    // Validação básica de datas
    if (!$dataInicio) {
        echo "Data de início é obrigatória";
        exit;
    }
    if ($dataFim && $dataFim < $dataInicio) {
        echo "Data final não pode ser menor que a data de início";
        exit;
    }

    // Monta a linha para salvar
    $linha = "$marca,$modelo,$ano,$placa,$dataInicio,$dataFim,$credito,$banco\n";

    // Salva no arquivo basePedidos.txt
    $arquivo = __DIR__ . "/basePedidos.txt";
    $resultado = file_put_contents($arquivo, $linha, FILE_APPEND | LOCK_EX);

    if ($resultado !== false) {
        echo "Pedido salvo com sucesso!";
    } else {
        echo "Erro ao salvar pedido";
    }
} else {
    echo "Método inválido";
}
?>