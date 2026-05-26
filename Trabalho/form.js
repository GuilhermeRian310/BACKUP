const coledit = document.querySelectorAll('.alunos'); // Select the first input with class 'alunos'

document.getElementById('edit-button').addEventListener('click', function() {
    document.querySelectorAll('.alunos').forEach(input => {
        input.disabled = !input.disabled; // Toggle the disabled state of each input
    });

    document.getElementById('add-button').disabled = !document.getElementById('add-button').disabled; // Toggle the disabled state of the add button

    if (document.getElementById('add-button').disabled) {
        document.getElementById('add-button').style.backgroundColor = '#5f6e5f'; // Change button text to "Editar"
    } else {
        document.getElementById('add-button').style.backgroundColor = '#afb5aa'; // Change button text to "Adicionar"
    }
});

document.getElementById('add-button').addEventListener('click', function() {
    const table = document.querySelector('table');
    const newRow = table.insertRow(-1); // Insert a new row at the end of the table
    newRow.classList.add('alunos'); // Add the 'alunos' class to the new row

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Create and append input elements to the cells
    const input1 = document.createElement('input');
    input1.type = 'text';
    input1.classList.add('alunos'); // Add the 'alunos' class to the input
    input1.value = table.rows.length - 1; // Set the value to the current number of rows (excluding header)
    input1.disabled = true; // Disable the input
    cell1.appendChild(input1);

    const input2 = document.createElement('input');
    input2.type = 'text';
    input2.classList.add('alunos'); // Add the 'alunos' class to the input
    input2.value = `Aluno ${table.rows.length - 1}`; // Set the value to "Aluno X" where X is the current number of rows
    input2.disabled = true; // Disable the input
    cell2.appendChild(input2);

    const cell3 = newRow.insertCell(2);
    const checkbox1 = document.createElement('input');
    checkbox1.type = 'checkbox';
    checkbox1.classList.add('alunos');
    cell3.appendChild(checkbox1);
    
    const cell4 = newRow.insertCell(3);
    const checkbox2 = document.createElement('input');
    checkbox2.type = 'checkbox';
    checkbox2.classList.add('alunos');
    cell4.appendChild(checkbox2);

    const cell5 = newRow.insertCell(4);
    const checkbox3 = document.createElement('input');
    checkbox3.type = 'checkbox';
    checkbox3.classList.add('alunos');
    cell5.appendChild(checkbox3);

    const cell6 = newRow.insertCell(5);
    const checkbox4 = document.createElement('input');
    checkbox4.type = 'checkbox';
    checkbox4.classList.add('alunos');
    cell6.appendChild(checkbox4);

    const cell7 = newRow.insertCell(6);
    const checkbox5 = document.createElement('input');
    checkbox5.type = 'checkbox';
    checkbox5.classList.add('alunos');
    cell7.appendChild(checkbox5);

    const cell8 = newRow.insertCell(7);
    const checkbox6 = document.createElement('input');
    checkbox6.type = 'checkbox';
    checkbox6.classList.add('alunos');
    cell8.appendChild(checkbox6);

    const cell9 = newRow.insertCell(8);
    const checkbox7 = document.createElement('input');
    checkbox7.type = 'checkbox';
    checkbox7.classList.add('alunos');
    cell9.appendChild(checkbox7);

    const cell10 = newRow.insertCell(9);
    const checkbox8 = document.createElement('input');
    checkbox8.type = 'checkbox';
    checkbox8.classList.add('alunos');
    cell10.appendChild(checkbox8);

    const cell11 = newRow.insertCell(10);
    const checkbox9 = document.createElement('input');
    checkbox9.type = 'checkbox';
    checkbox9.classList.add('alunos');
    cell11.appendChild(checkbox9);

});

document.getElementById('edit-button').addEventListener('click', function() {
    document.querySelectorAll('alunos').forEach(input => {
        alunos.disabled = !alunos.disabled; // Toggle the disabled state of each input
    });
});