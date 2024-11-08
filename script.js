const buttons = document.querySelectorAll('.buttons');
const imgCandidato = document.querySelector('.img-candidato');
const display = document.getElementById('display');
const buttonCorrige = document.querySelector('.button-corrige');
const buttonConfirma = document.querySelector('.button-confirma');
let numeroDoCandidatos = [
    {
        nome: "invalido",
        numero: 0
    },
    {
        nome: "nicolas",
        numero: 24,
        foto: "img/nicolau.jpg"
    },
    {
        nome: "Jaitão",
        numero: 69,
        foto: "img/Jailtao.jpg"

    },
    {
        nome: "Daniel Henry",
        numero: 157,
        foto: "img/dh-do-gera.jpg"
    },
    {
        nome: "Rl Do Grau",
        numero: 244,
        foto: "img/rl-do-grau.jpg"
    },
    {
        nome: "Wendel Lagatixa",
        numero: 22762,
        foto: "img/Wendel-lagartixa.jpg"
    },
]

let votoAtual = "";

function registrarVoto(voto) {
    numeroDoCandidatos.forEach(index => {
        if(index.numero == voto) {
            console.log('candidato encontrado' + index.nome);
            const imagem = document.createElement('img');
            imagem.src = index.foto;
            imagem.style.width = '200px';
            imagem.style.height = '200px';
            imagem.style.borderRadius = '100px'
            imgCandidato.appendChild(imagem);

        }
    })
}

registrarVoto(157);

buttons.forEach(botao => {
    botao.addEventListener('click', () => {
        const valorBotao = botao.getAttribute('value');
        const buttoCorrigeAcao = buttonCorrige.getAttribute('value');
        const buttonConfirmaAcao = buttonConfirma.getAttribute('value');
        console.log(buttoCorrigeAcao);
        console.log(buttonConfirmaAcao);

        if(buttoCorrigeAcao == "CORRIGE") {
            votoAtual = '';
            atualizarDisplay();
        } else if (buttonConfirmaAcao === "CONFIRMA") {
            alert("Seu voto foi Confirmado");
        }
    })
})