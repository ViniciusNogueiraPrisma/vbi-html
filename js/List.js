$(document).ready(function () {
    $("a[id*=linkListaTituloChamada]").each(function () {
        var link = $(this).attr('href');
        $(this).parents('.ajusteLista').find('a.recebeLink').attr('href', link);

        if (link.indexOf("Download") == -1) {
            $(this).parents('.ajusteLista').find('.iconeDownload').remove();
            $(this).parents('.ajusteLista').find('.iconePDF').attr('src', './images/icons/icon-link.svg');
        }

        var textoLink = $(this).text();

        $(this).parents('.ajusteLista').find('.recebeTexto').text(textoLink);

        $(this).remove();

    });

    var combo = $('div[id*=ddlAnoLink]');
    $('div[class*=recebeCombo]').prepend(combo);

    $('a.disabled').remove();
    $('a#lnkAnterior').remove();
    $('a#lnkProximo').remove();
    
});


function efetuarFiltroPorAno() {
    window.location = "List.aspx?idCanal=" + getIdCanal() + "&ano=" + $('select[id$=ddlAnoFiltro] option:selected').val();  
}

function limpaFiltroPorAno() {
    window.location = "List.aspx?idCanal=" + getIdCanal();
}

function getIdCanal() {
    var strReturn = "";
    var strHref = window.location.href;
    var strQueryString = strHref.substr(strHref.indexOf("=") + 1);
    var aQueryString = strQueryString.split("&");
    return aQueryString[0];
}




