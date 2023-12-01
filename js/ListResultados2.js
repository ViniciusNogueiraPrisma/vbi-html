$(document).ready(function () {

    createSlideResultados();

    if ($(".hidLinguagem").val() == "ptg") {
        $('.resultadoAno').text('Resultados ' + $("select[id*=ddlAnoFiltro] option:selected").text());
    } else {
        $('.resultadoAno').text('Results ' + $("select[id*=ddlAnoFiltro] option:selected").text());
    }

    var ano = $("select[id*=ddlAnoFiltro] option:selected").text();

    if (ano != "") {
        efetuarFiltroPorAno(ano);
    }


    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').prepend(combo);

    $('a.imagemCentral').each(function () {
        var titulo = $(this).text().toUpperCase();

        if (titulo.indexOf('APRESENTA') != -1 || titulo.indexOf('PRESENTATION') != -1) {
            $(this).prepend('<img src="./images/icons/icon-ppt.svg" alt="' + titulo + '">');
        }
        else if (titulo.indexOf('DEMONS') != -1 || titulo.indexOf('STATEMENTS') != -1) {
            $(this).prepend('<img src="./images/icons/icon-resultados.svg" alt="' + titulo + '">');
        }
        else if (titulo.indexOf('ÁUDIO') != -1 || titulo.indexOf('AUDIO') != -1 || titulo.indexOf('TELECON') != -1 || titulo.indexOf('CONFERE') != -1) {
            $(this).prepend('<img src="./images/icons/icon-audio.svg" alt="' + titulo + '">');
        } else {
            $(this).prepend('<img src="./images/icons/icon-pdf-simple.svg" alt="' + titulo + '">');
        }

    });
});


function createSlideResultados() {
    $('.slider-trimestres-result').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.list-results-trimestres',
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        draggable: false,
        waitForAnimate: true,
        responsive: [
            {
                breakpoint: 475,
                settings: {
                    vertical: true,
                }
            },
        ]
    });

    $('.list-results-trimestres').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
        infinite: false,
        waitForAnimate: false,
        asNavFor: '.slider-trimestres-result',
        speed: 300,
    });
}



function efetuarFiltroPorAno(ano) {
    $('div[ano]').hide();
    $('div[ano=' + ano + ']').show();
    

    if ($(".hidLinguagem").val() == "ptg") {
        $('.resultadoAno').text('Resultados ' + ano);
    } else {
        $('.resultadoAno').text('Results ' + ano);
    }

    $('.slider-trimestres-result').slick('unslick');
    $('.list-results-trimestres').slick('unslick');

    createSlideResultados();
}

function limpaFiltroPorAno() {
    $('div[ano]').hide();
    $('div[ano]').show();
}
