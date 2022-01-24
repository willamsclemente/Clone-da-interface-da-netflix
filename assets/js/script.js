$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

function action1(){
    window.location.href = 'https://www.animesonehd.biz/anime/episodio/one-piece-episodio-01/';
    window.open();
}

function action2(){
    window.location.href = 'https://www.animesonehd.biz/lista/123654/';
    window.open();
}


const button1 = document.getElementsByClassName('botao')[0];
button1.addEventListener('click', action1)

const button2 = document.getElementsByClassName('botao')[1];
button2.addEventListener('click', action2);
