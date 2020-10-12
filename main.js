//Select element function
// alert("Fuck!");
var selectElement = function(element){
    return document.querySelector(element);
};


let menuToogler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToogler.addEventListener('click',function(){
    body.classList.toggle('open');
});

// scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    durartion:1000,
    distance:'25rem',
    delay:300,
});

sr.reveal('.animate-right',{
    origin: 'right',
    durartion:1000,
    distance:'25rem',
    delay:600,
});

sr.reveal('.animate-top',{
    origin: 'top',
    durartion:1000,
    distance:'25rem',
    delay:600,
});

sr.reveal('.animate-bottom',{
    origin: 'bottom',
    durartion:1000,
    distance:'25rem',
    delay:600,
});