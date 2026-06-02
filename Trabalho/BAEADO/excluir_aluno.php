<?php
// Verifica se o ID foi enviado via método POST
if (isset($_POST['id'])) {
    $id = intval($_POST['id']); // Segurança: garante que é um número inteiro

    // Configurações do seu banco de dados
    $host = 'localhost';
    $usuario = 'seu_usuario';
    $senha = 'sua_senha';
    $banco = 'seu_banco';

    $conexao = new mysqli($host, $usuario, $senha, $banco);

    if ($conexao->connect_error) {
        die("Falha na conexão: " . $conexao->connect_error);
    }

    // Prepara a query SQL para evitar brechas de segurança (SQL Injection)
    $stmt = $conexao->prepare("DELETE FROM alunos WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "sucesso"; // Resposta que o JavaScript espera ler
    } else {
        echo "erro_deletar";
    }

    $stmt->close();
    $conexao->close();
} else {
    echo "id_nao_enviado";
}
?>
