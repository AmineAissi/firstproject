const headerSliderWrapper = document.querySelector('.bg-slide-wrapper'); //definir le contenaire des images comme constant
const images = document.querySelectorAll('.header-bg');                  //definir la table des images a annimer

var counter = 0;                                                         //Inicialiser un compteur a 0

function checkBrowserWidth() {                                           //Definir la fonction qui determin et retourn la largeur du fenetre navigateur
    return window.innerWidth;
}

function move() {
    counter++;
    if(counter >= images.length) counter = 1;
    headerSliderWrapper.style.transition = 'transform 0.9s ease-in-out';
    headerSliderWrapper.style.transform = 'translateX(' + (-counter * checkBrowserWidth()) + 'px';

    headerSliderWrapper.addEventListener('transitionend', () => {
        
        if(images[counter].id == 'bg1-clone'){
            headerSliderWrapper.style.transition = 'none';
            counter = 0;
            headerSliderWrapper.style.transform = 'translateX(' + (-counter * checkBrowserWidth()) + 'px';            
        }
    });

}

setInterval(move, 5000);





