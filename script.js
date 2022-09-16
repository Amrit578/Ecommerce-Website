const bar = document.querySelector('#bar')
const nav = document.querySelector('#navbar')
const close = document.querySelector('#close')
const footer = document.getElementsByTagName('footer')
const scroll = document.getElementById('scroll')
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add("active")
    })
}


if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove("active")
    })
}


const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body')

toggle.addEventListener('click', function () {
    this.classList.toggle('bi-moon');

    if (this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s'

    } else {

        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'

    }
})
// Scroll top
const scrollTop = () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
        transition: '10s'
    })
}

scroll.addEventListener('click', scrollTop)



// Shop html 













// Single product 

var mainImg = document.getElementById("MainImage");
var smallImg = document.getElementsByClassName("small-img")

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src
}

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src
    console.log("hello")
}

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src
}

smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src
}