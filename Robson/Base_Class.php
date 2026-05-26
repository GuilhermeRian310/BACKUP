<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Classe : Indefinida</title>
    <link rel="stylesheet" href="o.css">
    <script src="form.js" defer></script>
</head>
<body>
    <header>
        <button onclick="window.history.back()">Voltar</button>
        <div id="tools">
            <h1 id="Class-form-Title">Classe : Indefinida</h1>
            <h1>Data : 00/00/0000</h1>
        </div>
    </header>
    <nav>
        <div id="article-container">
            <button id="edit-button">EDITAR</button>
            <button id="add-button" style="font-size: 2.3vh;">ADICIONAR</button>
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
                    </tr>
                    <tr class="alunos">
                        <td><input type="text" value="1" class="alunos" disabled></td>
                        <td><input type="text" value="Aluno 1" class="alunos" disabled></td>
                        <td><input type="checkbox" id="aula1"></td>
                        <td><input type="checkbox" id="aula2"></td>
                        <td><input type="checkbox" id="aula3"></td>
                        <td><input type="checkbox" id="aula4"></td>
                        <td><input type="checkbox" id="aula5"></td>
                        <td><input type="checkbox" id="aula6"></td>
                        <td><input type="checkbox" id="aula7"></td>
                        <td><input type="checkbox" id="aula8"></td>
                        <td><input type="checkbox" id="aula9"></td>
                    </tr>
                </table>
            </div>
        </div>
    </article>
    
</body>
</html>