//ativar links menu

const links = document.querySelectorAll(".header-menu a");

function ativarLinks(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLinks); 

// ativar itens orçamento 

const parametros = new URLSearchParams(location.search);

function ativarProduto (parametros){
    const elemento = document.getElementById(parametros);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

//galeria de bicicletas

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeiraContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const img = event.currentTarget;
   const media = matchMedia('(min-width: 1000px)').matches;
   if (media){
    galeiraContainer.prepend(img);
   }
}

function eventosGaleria (img){
    img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);

//animação

if(window.SimpleAnime){

new SimpleAnime();
}