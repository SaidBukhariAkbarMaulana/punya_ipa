var swiper = new Swiper('.swiper', {
    slidesPerView: 5,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

let tombol =  document.getElementById("tombol")
let Keranjang = document.getElementById("Keranjang")
const Toggle = () => {
    console.log("mantap")
    if (Keranjang.classList.contains("translate-x-full")){
        Keranjang.classList.remove("translate-x-full")
        Keranjang.classList.add("translate-x-0")
    }
    else if (Keranjang.classList.contains("translate-x-0")){
        console.log("mantap")
        Keranjang.classList.remove("translate-x-0")
        Keranjang.classList.add("translate-x-full")
    }

}