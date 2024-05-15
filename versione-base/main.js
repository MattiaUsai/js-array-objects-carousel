const image =['01.webp','02.webp','03.webp','04.webp','05.webp'];
//CREO UN ARRAY E INSERISCO LE IMMAGGINI IN QUELL'ARRAY
// console.log(image.map(element=> element+30));
// AGGIUNGO IL RESTO DELL'LINK A OGNI ELEMENTO DELL'ARRAY
const imgLink = image.map(element => `http://127.0.0.1:5500/img/${element}` );
console.log (imgLink);

let index = 0;
const prev = document.querySelector('.prev');
prev.addEventListener ('click' ,function(){
    index++
    imgsrc.src = imgLink[index];
});

const next = document.querySelector('.next');
next.addEventListener ('click' ,function(){
    index--
    imgsrc.src = imgLink[index];
});





if (prev){
    index--
    console.log (index);
}else if (next){
    index++
    console.log (index);
}
console.log (index);





const imgsrc = document.querySelector('img');
console.log (imgsrc.src)
