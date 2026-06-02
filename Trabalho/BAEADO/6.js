const coledit = document.querySelectorAll('.alunos'); // Select the first input with class 'alunos'

const NaoImg = 'nao.png'; // Path to the "Não Presente" image
const PresenteImg = 'sim.png'; // Path to the "Presente" image
const JustImg = 'just.png'; // Path to the "Justificada" image

// Função que reajusta a numeração e os nomes de forma sequencial
function atualizarNumeracao() {
    const table = document.querySelector('table');
    // Seleciona apenas as linhas que possuem a classe 'alunos'
    const rows = table.querySelectorAll('tr.alunos');
    
    rows.forEach((row, index) => {
        const novoNumero = index + 1; // Começa a contagem do 1
        
        // Atualiza o input do número da chamada
        const inputNumero = row.querySelector('.numero');
        if (inputNumero) {
            inputNumero.value = novoNumero;
        }
        
        // Atualiza o input do nome do aluno padrão
        const inputNome = row.querySelector('.nome_com');
        if (inputNome) {
            inputNome.value = `Aluno ${novoNumero}`;
        }
    });
}

document.getElementById('add-button').addEventListener('click', function() {
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1); 
    newRow.classList.add('alunos'); 

    // Coluna 0: Número
    const cell1 = newRow.insertCell(0);
    cell1.classList.add('num_cham'); 
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.classList.add('numero'); 
    input1.value = table.rows.length - 1; 
    input1.disabled = true; 
    cell1.appendChild(input1);

    // Coluna 1: Nome
    const cell2 = newRow.insertCell(1);
    cell2.classList.add('nome'); 
    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.classList.add('nome_com'); 
    input2.value = `Aluno ${table.rows.length - 1}`; 
    input2.disabled = true; 
    cell2.appendChild(input2);

    // Colunas 2 a 10: Frequências
    for (let i = 2; i <= 10; i++) {
        const cell = newRow.insertCell(i);
        cell.classList.add('frequencia'); 
        
        const button = document.createElement('button');
        button.classList.add('freq'); 
        
        const img = document.createElement('img');
        img.src = NaoImg; 
        img.alt = 'Não Presente'; 
        img.classList.add('img-freq'); 
        
        button.appendChild(img);
        cell.appendChild(button);

        button.addEventListener('click', function() {
            const currentImg = this.querySelector('img'); 
            if (currentImg.src.includes(NaoImg)) {
                currentImg.src = PresenteImg; 
                this.style.backgroundColor = '#317f3a'; 
            } else if (currentImg.src.includes(PresenteImg)) {
                currentImg.src = JustImg; 
                this.style.backgroundColor = '#7f7831'; 
            } else {
                currentImg.src = NaoImg; 
                this.style.backgroundColor = '#7f3931'; 
            }
        });
    }

    // COLUNA 11: Novo Botão de Apagar
    const cellDelete = newRow.insertCell(11);
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'X';
    btnDelete.classList.add('btn-apagar');
    cellDelete.appendChild(btnDelete);

    // Evento para apagar a linha
    btnDelete.addEventListener('click', function() {
        if (confirm('Deseja realmente excluir este aluno?')) {
            const idAluno = input1.value; // Usa o número da chamada como ID (ou mude para o ID real do banco)

            // Envia a requisição para o arquivo PHP em segundo plano
            fetch('excluir_aluno.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `id=${idAluno}`
            })
            .then(response => response.text())
            .then(data => {
                if (data.trim() === 'sucesso') {
                    newRow.remove(); // Remove a linha visualmente do HTML apenas se o PHP confirmar
                } else {
                    alert('Erro ao deletar no servidor: ' + data);
                }
            })
            .catch(error => console.error('Erro na requisição:', error));
        }
    });
});


document.getElementById('edit-button').addEventListener('click', function() {
    document.querySelectorAll('.nome_com').forEach(input => {
        input.disabled = !input.disabled; // Toggle the disabled state of each input
    });

    document.querySelectorAll('.numero').forEach(input => {
        input.disabled = !input.disabled; // Toggle the disabled state of each input
    });

    document.getElementById('add-button').disabled = !document.getElementById('add-button').disabled; // Toggle the disabled state of the add button

    document.querySelectorAll('.freq').forEach(button => {
        button.disabled = !button.disabled; // Toggle the disabled state of each frequency button
    });

    if (document.getElementById('add-button').disabled) {
        document.getElementById('add-button').style.backgroundColor = '#5f6e5f'; // Change button text to "Editar"
    } else {
        document.getElementById('add-button').style.backgroundColor = '#afb5aa'; // Change button text to "Adicionar"
    }
});

document.getElementById('save-button').addEventListener('click', function() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr.alunos');
    const dadosChamada = [];

    // Percorre cada linha de aluno para coletar os dados atuais
    rows.forEach(row => {
        const numero = row.querySelector('.numero').value;
        const nome = row.querySelector('.nome_com').value;
        const botoesFreq = row.querySelectorAll('.freq');
        const frequencias = [];

        // Verifica o estado de cada um os 9 botões através da imagem interna
        botoesFreq.forEach(button => {
            const img = button.querySelector('img');
            if (img.src.includes(PresenteImg)) {
                frequencias.push('P'); // Presente
            } else if (img.src.includes(JustImg)) {
                frequencias.push('J'); // Justificada
            } else {
                frequencias.push('F'); // Falta / Não Presente
            }
        });

        // Monta o objeto do aluno
        dadosChamada.push({
            numero: numero,
            nome: nome,
            frequencias: frequencias
        });
    });

    // Envia o array completo via JSON para o arquivo PHP
    fetch('salvar_chamada.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosChamada)
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === 'sucesso') {
            alert('Chamada salva com sucesso!');
        } else {
            alert('Erro ao salvar chamada: ' + data);
        }
    })
    .catch(error => console.error('Erro ao conectar com o servidor:', error));
});
