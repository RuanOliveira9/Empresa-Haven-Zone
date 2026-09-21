function moverDireita(id) {
    const lista = document.getElementById(id);

    if (lista.scrollLeft + lista.clientWidth >= lista.scrollWidth - 10) {
        animarScroll(lista, 0);
    } else {
        animarScroll(lista, lista.scrollLeft + 550);
    }
}

function moverEsquerda(id) {
    const lista = document.getElementById(id);

    if (lista.scrollLeft <= 10) {
        animarScroll(lista, lista.scrollWidth - lista.clientWidth);
    } else {
        animarScroll(lista, lista.scrollLeft - 550);
    }
}


function animarScroll(elemento, destino) {
    const inicio = elemento.scrollLeft;
    const distancia = destino - inicio;
    const duracao = 700; // duração em milissegundos
    let inicioTempo = null;

    function animacao(tempoAtual) {

        if (!inicioTempo) inicioTempo = tempoAtual;

        const progresso = Math.min(
            (tempoAtual - inicioTempo) / duracao,
            1
        );

        // Suavização
        const suavizado = 1 - Math.pow(1 - progresso, 3);

        elemento.scrollLeft = inicio + distancia * suavizado;

        if (progresso < 1) {
            requestAnimationFrame(animacao);
        }
    }

    requestAnimationFrame(animacao);
}