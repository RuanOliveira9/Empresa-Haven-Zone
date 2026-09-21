
function moverDireita(id) {
       <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/style_servicos.css">

    const lista = document.getElementById(id);

    lista.scrollBy({
        left: 550,
        behavior: "smooth"
    });

}


function moverEsquerda(id) {

    const lista = document.getElementById(id);

    lista.scrollBy({
        left: -550,
        behavior: "smooth"
    });

}