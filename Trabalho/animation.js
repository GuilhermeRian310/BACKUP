window.onload = function() {
    const card = document.getElementsByClassName('card-container');
    const Curso = document.getElementById('Curso-div');
    card[0].classList.add('hidden');
    card[0].classList.remove('show');
    setTimeout (() => {
        card[0].style.display = 'none';
        document.getElementById('Curso-div').style.display = 'flex';
        document.getElementById('card-voltar').style.display = 'flex';
    }, 400);
    setTimeout (() => {
        document.getElementById('Curso-div').classList.add('show');
        document.getElementsByClassName('curso-botao')[0].classList.add('show');
        document.getElementById('card-voltar').classList.add('show');
        document.getElementById('Curso-div').classList.remove('hidden');
        document.getElementsByClassName('curso-botao')[0].classList.remove('hidden');
        document.getElementById('card-voltar').classList.remove('hidden');
    } , 500);

    document.getElementById('card-titulo').textContent = 'Selecione o curso:';
};

function Voltar() {
    const card = document.getElementsByClassName('card-container');
    const Curso = document.getElementById('Curso-div');
    document.getElementById('Curso-div').classList.add('hidden');
    document.getElementById('Curso-div').classList.remove('show');
    document.getElementById('card-voltar').classList.remove('show');
    document.getElementById('card-voltar').classList.add('hidden');
    setTimeout (() => {
        document.getElementById('Curso-div').style.display = 'none';
        document.getElementById('card-voltar').style.display = 'none';
        card[0].style.display = 'flex';
    }, 400);
    setTimeout (() => {
        card[0].classList.remove('hidden');
        card[0].classList.add('show');
    } , 500);
    document.getElementById('card-titulo').textContent = 'Selecione o ano:';
    setTimeout (() => {
        window.history.back();
    } , 700);
};