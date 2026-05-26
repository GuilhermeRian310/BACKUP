<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chamada Online</title>
    <link rel="stylesheet" href="Star.css">
    <script src="animation.js" defer></script>
</head>
<body>
    <header>
        <div class="header-content">
            <h1 id="agenda-titulo">CHAMADA ONLINE</h1>
            <h4 id="escola-titulo">E.E.E.P. Walter Ramos de Araújo</h4>
        </div>
        <div id="imagem">
            <img src="images/WRA.png" alt="" id="logo">
        </div>
    </header>
    <div class="container">
        <h1 id="card-titulo">Selecione o ano:</h1>
        <div class="card-container" id="Serie-div">
            <button class="card-serie" id="Serie-1"><a href="ano1.php">1 ANO</a></button>
            <button class="card-serie" id="Serie-2"><a href="ano2.php">2 ANO</a></button>
            <button class="card-serie" id="Serie-3"><a href="ano3.php">3 ANO</a></button>
        </div>
        <div class="curso-div" style="display: none; position: relative;" id="Curso-div">
            <div id="adm" class="curso-botao" style = "background: linear-gradient(to bottom, rgba(125,185,232,1) 0%,rgba(32,124,202,1) 44%,rgba(30,87,153,1) 100%);">
                <a href="Erro.php">
                    <img src="images/ADM_Icon.png" alt="ADM_Icon.png" class="curso-imagem">
                </a>
            </div>
            <div id="dcc" class="curso-botao" style = "background: linear-gradient(to bottom, rgb(211, 31, 73) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%);">
                <a href="Base_Class.php">
                    <img src="images/DCC_Icon.png" alt="DCC_Icon.png" class="curso-imagem">
                </a>
            </div>
            <div id="enre" class="curso-botao" style = "background: linear-gradient(to bottom, rgba(180,227,145,1) 0%,rgba(97,196,25,1) 50%,rgba(60,178,14,1) 100%);">
                <a href="Base_Class.php">
                    <img src="images/Energias_Icon.png" alt="Energias_Icon.png" class="curso-imagem">
                </a>
            </div>
            <div id="info" class="curso-botao" style = "background: linear-gradient(to bottom, rgb(185, 96, 203) 0%,rgb(147, 18, 173) 50%,rgb(84, 23, 109) 100%);">
                <a href="Base_Class.php">
                    <img src="images/Informatica_Icon.png" alt="Informatica_Icon.png" class="curso-imagem">
                </a>
            </div>
        </div>
        <div id="bottom-div" style="display: flex; position: relative;">
            <button id="card-voltar" style="display: none;" class="voltar" onclick="Voltar()"><b>VOLTAR</b></button>
        </div>
    </div>
</body>
</html>