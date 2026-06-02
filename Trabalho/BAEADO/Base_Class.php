<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classe : Indefinida</title>
    <link rel="stylesheet" href="mudaessapohafdp.css">
    <script src="6.js" defer></script>
</head>
<body>
    <header>
        <button onclick="window.history.back()">Voltar</button>
        <div id="tools">
            <h1 id="Class-form-Title">Chamada</h1>
            <h1>Hoje é:  <span id="data-atual" class="data-atual">
            <p >Data : <strong class="data-atual"><?php echo date('d/m/Y'); ?></strong></p>            
            </span></h1>
        </div>
    </header>
    <nav>
        <div id="article-container">
            <button id="edit-button">EDITAR</button>
            <button id="add-button" style="font-size: 2.3vh;">ADICIONAR</button>
            <button id="freq-button" style="font-size: 2vh;">FREQUÊNCIA</button>
            <button id="save-button">SALVAR</button>
        </div>
    </nav>
    <article>
        <div id="Class-Form-base">
            <div id="base-Form">
                <table border="7">
                    <tr>
                        <th>Número</th>
                        <th id="nome">Nome</th>
                        <th colspan="9">Frequencias</th>
                        <th>Ações</th> <!-- Nova coluna para o botão de apagar -->
                    </tr>
                </table>
            </div>
        </div>
    </article>
</body>
</html>
