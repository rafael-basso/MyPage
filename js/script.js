// MAPA
const options = {
    dragging: true,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: true
}

//create map
const map = L.map('map-id', options).setView([-22.7396591,-47.3497818,16.75], 15); // usar atributo ID e nao CLASS no html (map-id)

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create and add marker
L.marker([-22.7396591,-47.3497818,16.75]).addTo(map)
    .bindPopup('Fatec Americana.').openPopup();

//create icon
const icon = L.icon({
    /*iconUrl: "./Images/arrow.png",*/
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})



// Image Gallery
function selectImage(event){
    const button = event.currentTarget // botao clicado

    //console.log(button.children) // para mostrar no console do devtools

    //remover todas as classes .active (so tem uma)
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass) // para cada botao realizar a funcao

    function removeActiveClass(button){ // esse button nao eh o button do currentTarget
        button.classList.remove('active')
    }

    //selecionar a imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".right > img")

    //atualizar a imagem grande (container)
    imageContainer.src = image.src

    //adicionar a class .active para este botao
    button.classList.add('active')
}

function mostraResposta(id){
    var respostas = document.getElementsByClassName('faq'); //recebe os dados das divs de class="faq"
    for (var i = 0; i < respostas.length; i++) { //pega o tamanho da div, ou seja, cada letra do texto
      respostas[i].style.display = 'none'; 
    }
    
    var clicada = document.getElementById(id); //recebe o id passado como argumento
    clicada.style.display = 'inherit'; //faz ele ser exibido conforme o item pai

    var inicio = document.querySelector('.inicio') //texto da landing page
    inicio.style.display = 'none'  
  }

  