function limparFiltro() {
    window.location = "ListGroup.aspx?idCanal=" + getIdCanal();
}

function efetuarFiltroAno() {

    var ano = $('select[id*=ddlAnoFiltro] option:selected').val();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');   


    PageMethods.RefreshContent(ano, idCanal, linguagem, onSuccess, onError);

}

function efetuarFiltroCategoria() {
    var categoria = $('select[id*=ddlCategoriaFiltro] option:selected').val();
    var ano = new Date().getFullYear();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');    


    PageMethods.RefreshCategoria(ano, categoria, idCanal, linguagem, onSuccess, onError);

}

function efetuarFiltroCategoriaAno() {

    var categoria = $('select[id*=ddlCategoriaFiltro] option:selected').val();
    var ano = $('select[id*=ddlAnoFiltro] option:selected').val();

    var idCanal = $('input[id*=hdCanal]').val();
    var linguagem = $('input[class*=hidLinguagem]').val();
    $('div[id*=accDocumentosCVM]').attr('style', 'display:none;');
    //$('.loaderMaster').attr('style', 'display:none;');
    $('div[class*=loader]').attr('style', 'display:flex;');


    PageMethods.RefreshCategoriaAno(ano, categoria, idCanal, linguagem, onSuccess, onError);
}

function onSuccess(result) {
    //alert(result);
    $('div#accDocumentosCVM').empty();


    var i;
    var c;
    var text = "";
    var conteudos = "";
    for (i = 0; i < result.length; i++) {
        if (!(typeof result[i].Titulo === "undefined")) {

            var corpoHtmlBase = '<div class="accordion-item" data-aos="fade-up"> <h2 class="accordion-header"> <button class="accordionList accordion-button collapsed" type="button" data-bs-toggle="collapse"  aria-expanded="false"> #TituloCanal </button> </h2> <div id="collapse-" class="accordion-collapse collapse" data-bs-parent="#accDocumentosCVM"> <div class="accordion-body"> <ul class="list-downloads"> #RecebeConteudos </ul> </div> </div> </div>'
            corpoHtmlBase = corpoHtmlBase.replaceAll('#TituloCanal', result[i].Titulo);
            var corpoConteudos = "";

            for (c = 0; c < result[i].Materia.length; c++) {
                if (!(typeof result[i].Materia[c].Titulo === "undefined")) {
                    corpoConteudos = '<li class="ajusteLista"> <div> <span> #trocaData </span> <a href="#trocaLink" id="recebeLink"> <p class="recebeTexto"> #trocaTitulo </p> <div class="imgs-list-download"> <img src="./images/icons/icon-download.svg" alt="Download" class="iconeDownload img-download "> <img src="./images/icons/icon-pdf-simple.svg" alt="PDF" class="iconeDownload img-pdf"> </div> </a> </div> </li>';
                    corpoConteudos = corpoConteudos.replaceAll('#trocaData', result[i].Materia[c].Data);
                    corpoConteudos = corpoConteudos.replaceAll('#trocaTitulo', result[i].Materia[c].Titulo);
                    corpoConteudos = corpoConteudos.replaceAll('#trocaLink', result[i].Materia[c].Link);
                    conteudos += corpoConteudos;
                }
            }
            corpoHtmlBase = corpoHtmlBase.replaceAll('#RecebeConteudos', conteudos);
            conteudos = "";

        }
        text += corpoHtmlBase;
    }

    $('div#accDocumentosCVM').append(text);


    $('a').each(function () {
        var link = $(this);
        var urlLink = $(this).attr('href');
        if (typeof link.attr('href') != 'undefined') {
            if ((link.attr('href').indexOf('/Download/') > -1) || (link.attr('href').indexOf('download.aspx') > -1) || (link.attr('href').indexOf('Download.aspx') > -1)) {
                var descricao = link.text().trim();
                link.attr('target', '_blank');

                if (descricao == '') {
                    descricao = urlLink.split('download.aspx?')[1];
                }

                var url = window.location.href;

                if (url.toLowerCase().indexOf('/listresultados.aspx') > -1) {
                    var ano = $(this).parents('div[id*=divResultados]').attr('ano');

                    if ($(".hidLinguagem").val() == "ptg") {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_PT_" + ano + "'});");
                    } else {
                        link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "_EN_" + ano + "'});");
                    }

                } else {
                    link.attr("onClick", "gtag('event', 'link', {'event_label': '" + descricao + "'});");
                }
            }
        }
    });

    $(".list-downloads").each(function () {

        if ($.trim($(this).html()) == '') {
            $(this).parents('.accordion-item').remove();
        }
    });

    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    if ($('#accDocumentosCVM').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('#accDocumentosCVM').first().html('<p>N&atilde;o existem mat&eacute;rias com esse filtro escolhido.</p>');
        } else {
            $('#accDocumentosCVM').first().html('<p>There are no materials with this chosen filter.</p> ');
        }
    }

    var cont = 0;
    $('h2[id*=heading-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont);
        cont++;
    });

    var cont1 = 0;
    $('button[class*=accordionList]').each(function () {
        $(this).attr('data-bs-target', '#collapse-' + cont1);
        $(this).attr('aria-controls', 'collapse-' + cont1);
        cont1++;
    });

    var cont2 = 0;
    $('div[id*=collapse-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont2);
        $(this).attr('aria-labelledby', 'heading-' + cont2);
        cont2++;
    });


    $('button[class*=accordion-button]').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });

    $('div[class*=loader]').attr('style', 'display:none;');
    $('div[id*=accDocumentosCVM]').attr('style', 'display:block;');

}


function onError(result) {
    alert(result._message);
}

function getIdCanal() {
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}


$(document).ready(function () {
    sleep(1000);
    if ($('#accDocumentosCVM').text().trim() === '') {
        if ($(".hidLinguagem").val() == "ptg") {
            $('#accDocumentosCVM').first().html('<p>N&atilde;o existem mat&eacute;rias com esse filtro escolhido.</p>');
        } else {
            $('#accDocumentosCVM').first().html('<p>There are no materials with this chosen filter.</p> ');
        }
    }

    $('a[id*=linkListaTituloChamada]').each(function () {
        var link = $(this).attr('href');
        $(this).parents('.ajusteLista').find('a#recebeLink').attr('href', link);

        if (link.indexOf("Download") == -1) {
            $(this).parents('.ajusteLista').find('.iconePDF').attr('src', './images/icons/icon-link.svg');
        }

        var textoLink = $(this).text();

        $(this).parents('.ajusteLista').find('.recebeTexto').text(textoLink);

        $(this).remove();
    });

    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').append(combo);
    var categoria = $('div[id*=ddlCategoriaLink]');
    $('div[class*=recebeCombo]').prepend(categoria);
    

    $('a.disabled').remove();
    $('a#lnkAnterior').remove();
    $('a#lnkProximo').remove();

    $('h2').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });

    $('ul').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).remove();
        }
    });


    var cont = 0;
    $('h2[id*=heading-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont);
        cont++;
    });

    var cont1 = 0;
    $('button[class*=accordionList]').each(function () {
        $(this).attr('data-bs-target', '#collapse-' + cont1);
        $(this).attr('aria-controls', 'collapse-' + cont1);
        cont1++;
    });

    var cont2 = 0;
    $('div[id*=collapse-]').each(function () {
        var id = $(this).attr('id');
        $(this).attr('id', id + cont2);
        $(this).attr('aria-labelledby', 'heading-' + cont2);
        cont2++;
    });


    $('button[class*=accordion-button]').each(function () {
        if ($.trim($(this).html()) == "") {
            $(this).parents('.accordion-item').remove();
        }
    });

    var idCanal = $('input[id*=hdCanal]').val();

    if (idCanal.indexOf('CPdLu/ZjJuf9uh/RiKu3og==') != -1) {
        $('.recebeCombo').remove();
    }

    $('div[class*=loader]').attr('style', 'display:none;');
    $('div[id*=accDocumentosCVM]').attr('style', 'display:block;');
    
});

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}