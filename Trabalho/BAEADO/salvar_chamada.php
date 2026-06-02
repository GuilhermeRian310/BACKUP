<?php
// Recebe a entrada JSON enviada pelo JavaScript
$inputJson = file_get_contents('php://input');
$dadosAlunos = json_decode($inputJson, true);

if (!empty($dadosAlunos)) {
    // Configurações do banco de dados
    $host = 'localhost';
    $usuario = 'seu_usuario';
    $senha = 'sua_senha';
    $banco = 'seu_banco';

    $conexao = new mysqli($host, $usuario, $senha, $banco);

    if ($conexao->connect_error) {
        die("Falha na conexão: " . $conexao->connect_error);
    }

    $erro = false;

    foreach ($dadosAlunos as $aluno) {
        $numero = intval($aluno['numero']);
        $nome = $conexao->real_escape_string($aluno['nome']);
        
        // Converte o array de 9 frequências em strings individuais para o banco
        // Exemplo: $aluno['frequencias'][0] é a primeira aula, [1] a segunda, etc.
        $f1 = $conexao->real_escape_string($aluno['frequencias'][0]);
        $f2 = $conexao->real_escape_string($aluno['frequencias'][1]);
        $f3 = $conexao->real_escape_string($aluno['frequencias'][2]);
        $f4 = $conexao->real_escape_string($aluno['frequencias'][3]);
        $f5 = $conexao->real_escape_string($aluno['frequencias'][4]);
        $f6 = $conexao->real_escape_string($aluno['frequencias'][5]);
        $f7 = $conexao->real_escape_string($aluno['frequencias'][6]);
        $f8 = $conexao->real_escape_string($aluno['frequencias'][7]);
        $f9 = $conexao->real_escape_string($aluno['frequencias'][8]);

        // Exemplo de Query utilizando REPLACE INTO (insere novo ou atualiza se o número já existir)
        // Ajuste o nome da tabela e colunas conforme a sua modelagem real
        $sql = "REPLACE INTO chamada (numero, nome, f1, f2, f3, f4, f5, f6, f7, f8, f9) 
                VALUES ($numero, '$nome', '$f1', '$f2', '$f3', '$f4', '$f5', '$f6', '$f7', '$f8', '$f9')";

        if (!$conexao->query($sql)) {
            $erro = true;
            break;
        }
    }

    if (!$erro) {
        echo "sucesso";
    } else {
        echo "erro_banco: " . $conexao->error;
    }

    $conexao->close();
} else {
    echo "dados_vazios";
}
?>
