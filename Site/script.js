let tamanhoFonte = 32;

const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");
const textos = document.querySelectorAll(".texto");

function aumentarFonte() {
    if (tamanhoFonte < 60) {
        tamanhoFonte += 2;

        const textos = document.querySelectorAll(".texto");

        textos.forEach(function(texto) {
            texto.style.fontSize = tamanhoFonte + "px";
        });
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 20) {
        tamanhoFonte -= 2;

        const textos = document.querySelectorAll(".texto");

        textos.forEach(function(texto) {
            texto.style.fontSize = tamanhoFonte + "px";
        });
    }
}