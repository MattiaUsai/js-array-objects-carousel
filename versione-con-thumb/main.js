'use strict'

const image =['01.webp','02.webp','03.webp','04.webp','05.webp'];
//CREO UN ARRAY E INSERISCO LE IMMAGGINI IN QUELL'ARRAY
// console.log(image.map(element=> element+30));
// AGGIUNGO IL RESTO DELL'LINK A OGNI ELEMENTO DELL'ARRAY
const imgLink = image.map(element => `../img/${element}` );


let index = 0;
console.log(imgLink.length)
const imglenght = imgLink.length -1;
console.log (imglenght);












const imgsrc = document.querySelector('img');
const imgthumbs = document.querySelector('.thumbs');


let imgthumb = imgLink.map((element, ciao) => `<div class="thumb "  data-active= "${ciao}"><img src="${element}" alt=""></div>`)

console.log(imgthumb)

imgthumb.forEach(element => {
    imgthumbs.innerHTML += element;
   
});


const next = document.querySelector('.next');
next.addEventListener ('click' ,function(){
    
    if (index === imglenght){
        index = 0;
    }else{

        index++
    }
    
    imgsrc.src = imgLink[index];
    console.log(image[index]);
    
    const thumbclas = document.querySelectorAll('.thumb');

    const thumbclasat = +thumbclas[index].attributes['data-active'].nodeValue;
// console.dir (thumbclas);
if (thumbclasat===index){

    thumbclas[index].classList += 'active';
    
}else {thumbclas[index].classList = 'thumb';}



    
    
});




const prev = document.querySelector('.prev');
prev.addEventListener ('click' ,function(){
    
    if (index === 0){
        index = 4;
    }else{

        index--
    }
    
    imgsrc.src = imgLink[index];
    console.log(image[index]);
   
    const thumbclas = document.querySelectorAll('.thumb');
   
        const thumbclasat = +thumbclas[index].attributes['data-active'].nodeValue;
    // console.dir (thumbclas);
        console.log(thumbclasat)
    
    
    
        if (thumbclasat===index){

            thumbclas[index].classList+= 'active';
        }else {thumbclas[index].classList = 'thumb';}
    
    
   
    
});



