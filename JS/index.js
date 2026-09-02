//declaração de vaiáveis
let indice =0
let imagens =[
    "IMG/bunner_morango.jpg",
    "IMG/bolo_bunner_menta.jpg",
    "IMG/bolo_bunner_amora.jpg",
    "IMG/bolo_bunner_suspiros.jpg"
]

//função para trocar a imagem
function trocar(){
    let img = document.getElementById("img")
    img.src = imagens[indice]
}

//logica para trocar de imagem
setInterval(function(){
   trocar()
   indice++

   if(indice >= imagens.length){
    indice = 0
   }

},2000)

