const image =['01.webp','02.webp','03.webp','04.webp','05.webp'];
//CREO UN ARRAY E INSERISCO LE IMMAGGINI IN QUELL'ARRAY
// console.log(image.map(element=> element+30));
// AGGIUNGO IL RESTO DELL'LINK A OGNI ELEMENTO DELL'ARRAY
const imgLink = image.map(element => `http://127.0.0.1:5500/img/${element}` );


let index = 0;
console.log(imgLink.length)
const imglenght = imgLink.length -1;
console.log (imglenght);


const next = document.querySelector('.next');
next.addEventListener ('click' ,function(){
    if (index === imglenght){
        index = 0;
    }else{

        index++
    }
    
    imgsrc.src = imgLink[index];
    console.log(image[index]);
    
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
    
   
    
});












const imgsrc = document.querySelector('img');

