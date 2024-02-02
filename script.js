window.addEventListener("scroll", function() {
    var barraNavegacao = document.querySelector('.barra-navegacao');

    if (window.scrollY > 0) {
        barraNavegacao.classList.add('scroll-ativo');
    } else {
        barraNavegacao.classList.remove('scroll-ativo');
    }
});