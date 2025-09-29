<?php
header('Content-Type: application/json; charset=utf-8');

if (!isset($_GET['cpf'])) {
    echo json_encode(["error" => "Parâmetro 'cpf' não enviado"]);
    exit;
}

$query = trim($_GET['cpf']);

function only_digits($s) {
    return preg_replace('/\D/', '', $s);
}

$busca_digits = only_digits($query);
$arquivo = __DIR__ . "/dadosCadastrados.txt";

if (!file_exists($arquivo)) {
    echo json_encode(["error" => "Arquivo de dados não encontrado"]);
    exit;
}

$linhas = file($arquivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

$result = null;
foreach ($linhas as $linha) {
    $parts = array_map('trim', explode(',', $linha, 2)); 
    if (count($parts) < 1) continue;

    $campo1 = $parts[0];
    $campo2 = $parts[1] ?? "";

    $campo1_digits = only_digits($campo1);

    if ($busca_digits !== "" && $campo1_digits !== "" && $busca_digits === $campo1_digits) {
        $result = ["tipo" => "cpf", "cpf" => $campo1, "senha" => $campo2];
        break;
    }

    if (strcasecmp($campo1, $query) === 0) {
        $result = ["tipo" => "identificador", "identificador" => $campo1, "senha" => $campo2];
        break;
    }
}

if ($result) {
    echo json_encode($result);
} else {
    echo json_encode([]);
}
