var parrafo=document.querySelector("#id1");
var titulo=document.querySelector("#id2");
//anadireventos --
parrafo.addEventListener('mouseover' ,function(){
    parrafo.style.color='green';
    parrafo.style.border='solid 2px green';
})
parrafo.addEventListener('mouseout' ,function(){
    parrafo.style.color='black';
    parrafo.style.border='none';
})
titulo.addEventListener('click' ,function(){
    titulo.textContent='cambiando!!!';
    titulo.style.color='red';
})