<%@ Page Language="C#" MasterPageFile="~/Master/Master.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="Modelo.Default" EnableEventValidation="false" %>
<%@ Register Assembly="ComuniqueSe.WebControls, Version=1.0.0.0, Culture=Neutral, PublicKeyToken=5b058f9e1367e870" Namespace="ComuniqueSe.WebControls.ControleBanner" TagPrefix="cbn" %>
<%@ Register Assembly="ComuniqueSe.WebControls, Version=1.0.0.0, Culture=Neutral, PublicKeyToken=5b058f9e1367e870" Namespace="ComuniqueSe.WebControls.ControleMateria" TagPrefix="wcd" %>
<%@ Register Assembly="ComuniqueSe.WebControls, Version=1.0.0.0, Culture=Neutral, PublicKeyToken=5b058f9e1367e870" Namespace="ComuniqueSe.WebControls.Resultados" TagPrefix="wcr" %>
<%@ Register Assembly="ComuniqueSe.WebControls, Version=1.0.0.0, Culture=Neutral, PublicKeyToken=5b058f9e1367e870" Namespace="ComuniqueSe.WebControls.Agenda" TagPrefix="wca" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="ContentHead">
    <script src="js/ics.js"></script>
    <script>

        function fechardhtml() {
            if (navigator.appName == 'Netscape' && document.layers != null) {
				document.layers['Lbanner'].visibility = "hide";
				$('body').attr('style', "");
            } else if (document.all != null) {
				document.all['Lbanner'].style.visibility = "hidden";
				$('body').attr('style', "");
            }
			document.getElementById('Lbanner').style.visibility = "hidden";
			$('body').attr('style', "");
        }  

        function ExportarOutlookHome(titulo, descricao, cidade, datainicio, datafim) {
            var cal_single = new ics();
            cal_single.addEvent(titulo, descricao, cidade, datainicio, datafim);
            cal_single.download(titulo);
        }
    </script>
</asp:Content>

<asp:Content ID="Content1" runat="server" ContentPlaceHolderID="ContentInternal">
    <cbn:WebControlBanner runat="server" ID="webControlBanner" HasTextoBanner="true"
        TemplateBoxPrincipal="<div id='Lbanner'><div id='banner' style='@StyleBanner'><div><a href='javascript:void(0);' onclick='fechardhtml()'><img src='@SrcImagemBotaoFechar' alt='splash' align='right' style='position: relative;' /></a><a href='@Link' target='@Target'>@ImagensBanner</a></div></div><div id='modalbacknovo' class='modal-backdrop fade in' style='filter: alpha(opacity=90);	opacity: 0.9;	background-color: #626c72;'></div></div>"
        ItemTemplate="<img width='@Width' alt='splash' class='img-fluid' height='@Height' style='margin-right:-30px;' src='@SrcBannerViewImage'/>"
        TemplateBoxPrincipalFlash="<div id='Lbanner'><div id='banner' style='@StyleBanner'>@ImagensBanner</div></div>"
        ItemTemplateFlash="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0' width='@Width' height='@Height'><param name='AllowScriptAccess' value='always'/><param name='movie' value='@SrcImagemBanner'/><param name='wmode' value='transparent'/><embed wmode='transparent' AllowScriptAccess='always' src='@SrcImagemBanner' quality='high' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='@Width' height='@Height'></embed></object>">
    </cbn:WebControlBanner>
    
      <main>
       <%-- <section id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <nav class="footer-banner-utilities">
                <div class="container">
                    <div class="flex-utilities">
                        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                            <span class="icon-arrow-right" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true"
                                aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                            <span class="icon-arrow-right" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </nav>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="7000">
                    <div class="img-banner">
                        <picture>
                            <img  src="./images/banner-01.jpg" alt="Banner 1">
                        </picture>
                    </div>
                    <div class="carousel-content">
                        <div class="container">
                            <div class="div-body-banner">
                                <h1 class="title-banner">Nossa equipe de atendimento <span>está preparada para atende-los</span> </h1>
                                <p class="subtitle-banner">Atendimento 24 horas e assistência nas demandas de RI</p>
                                <a href="#" class="primary-button">primary</a>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="carousel-item" data-bs-interval="7000">
                    <div class="img-banner">
                        <picture>
                            <img loading="lazy" src="./images/banner-01.jpg" alt="Banner 1">
                        </picture>
                    </div>
                    <div class="carousel-content">
                        <div class="container">
                            <div class="div-body-banner">
                                <h2 class="title-banner">Nossa equipe de atendimento <span>está preparada para atende-los</span> </h2>
                                <p class="subtitle-banner">Atendimento 24 horas e assistência nas demandas de RI</p>
                                <a href="#" class="primary-button">primary</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>--%>

        <wcd:WebControlRetrancaSemHtml ID="WebControlRetrancaBanner" runat="server"
			TamanhoTitulo="80" TamanhoTexto="5000" QtdConteudos="1" TemplateBox="@htmlTexto" TemplateTitulo="" TemplateTexto="@textoMateria" TemplateImagem="">
		</wcd:WebControlRetrancaSemHtml>


        <section class="section-destaque-calendar-resultados">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <h2>
                            <asp:Literal runat="server" Text="<%$Resources: calendario %>" ></asp:Literal> 
                        </h2>
                        <ul class="lista-calendar-home">
                            <wca:WebControlAgendaSlide runat="server" ID="WebControlAgenda" 
								TemplateBoxPrincipal="@conteudo" 
								ItemTemplate="<%$resources:TemplateAgenda %>"
								QuantidadeEventos="3"
								QuantidadeCaracteresTitulo="100"
								QuantidadeCaracteresDescricao="100">
							</wca:WebControlAgendaSlide>

                        </ul>
                        <div class="footer-central-result-home">
                            <a id="linkAgenda" runat="server"  class="link-com-arrow">
                               <asp:Literal runat="server" Text="<%$Resources: verTodosEventos %>" ></asp:Literal>  
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-5  mt-5 mt-lg-0 centralHome">
                        <h2>
                            <asp:Literal runat="server" Text="<%$Resources: Central %>" ></asp:Literal>
                        </h2>
                        <div data-aos="fade-up" class="nav-central-result-destaque" id="resultsTitle">
						</div>
                        <div class="list-central-result-home">
                            <wcr:WebControlCentralResultadoSemHtml ID="WebControlCentralResultados" runat="server"
								QuantidadeResultados="4"
								PermiteAnual="True"
								AgruparPorAno="False"
								QuantidadeCaracteresTitulo="80"
								QuantidadeCaracteresSubTitulo="220"
								HasListaArquivo="True"
								TemplateBoxPrincipal="@conteudo"
								ItemTemplate="<div><div class='item-nav-central-result titulosCentral'  onclick='pegaResultado(event)'><h3 dataResultado='@idResultadoCriptografado'>@TituloMateria</h3></div><ul class='list-destaques' ><li data-aos='fade-up' style='display: none' id='LinkVideoResultadoHome'><a href='@LinkVideoResultado' class='recebeImagem' target='_blank'><h4>@VideoResultado</h4></a></li>@ItemTemplateArquivos</ul></div>"
								ItemTemplateArquivos="<li data-aos='fade-up'><a href='@linkListaArquivo' class='recebeImagem'><h4>@TituloArquivo</h4></a></li>">
							</wcr:WebControlCentralResultadoSemHtml>
                        </div>
                        <div class="footer-central-result-home">
                            <a id="linkCentral" runat="server" class="link-com-arrow">
                               <asp:Literal runat="server" Text="<%$Resources: verTodosResultados %>" ></asp:Literal> 
                            </a>
                            <a href='javascript:' onclick='baixarTodosArquivos(event)' class="link-com-download recebeResultado">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="title-flex">
                    <h2>
                        <asp:Literal runat="server" Text="<%$Resources: noticias %>" ></asp:Literal> 
                    </h2>
                    <a id="linkNoticias" runat="server" class="link-com-arrow">
                        <asp:Literal runat="server" Text="<%$Resources: verNoticias %>" ></asp:Literal> 
                    </a>
                </div>
                <ul class="list-noticias">
                    <wcd:WebControlRetrancaSemHtml runat="server" ID="WebControlRetrancaNoticias" QtdConteudos="4"
                        TamanhoTitulo="300" TamanhoTexto="1500" TemplateBox='<%$Resources: templateNoticia %>'
                        TemplateImagem='<img  src="@src" alt="@title">'
                        TemplateTitulo='<span>@dataConteudo</span><p>@tituloChamada</p>'
                        TemplateTexto=''
                        FormatoData='<%$Resources: formataData %>'>
                    </wcd:WebControlRetrancaSemHtml>  
                </ul>
            </div>
        </section>
        <section class="bg-grey section-create-mailing">
            <div class="container">
                <asp:Literal runat="server" Text="<%$Resources: txtMailing %>" ></asp:Literal> 
                
                <div class="form-mailing-home mailing-home-1">
                    <div class="div-input">
                        <input type="text"  id="alertanome" runat="server" placeholder="<%$Resources: nome %>">
                    </div>
                    <div class="div-input">
                        <input type="text" id="alertaemail" runat="server" placeholder="<%$Resources: email %>">
                    </div>
                    <button type="button" onclick="preencheAlertas()" class="primary-button">
                       <asp:Literal runat="server" Text="<%$Resources: enviar %>" ></asp:Literal> 
                    </button>
                </div>
            </div>
        </section>
    </main>

    <asp:HiddenField ID="hdfIdConteudosDownloads" runat="server" />
    <asp:LinkButton ID="btnBaixarTododArquivos" runat="server" Visible="false" OnClick="ImgDownloadsAllKit_Click"></asp:LinkButton>
    <script type="text/javascript">
        window.uniqueIdBaixarTododArquivos = "<%=btnBaixarTododArquivos.UniqueID%>";
    </script>	

    <input type="hidden" id="hdnDefault" value="1" />
</asp:Content>

