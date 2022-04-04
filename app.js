var btn = document.getElementById('btnNav');
var content = document.getElementById('menuContent');

btn.addEventListener('click', function () {
    content.classList.toggle('is-active');
})


/* #region  SLIDER AVANT APRES */
function slide() {
    let slideValue = document.getElementById("slider_range").value;
    document.getElementById("after_img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";

}

let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');

let imgBefore = document.getElementById("before_img")
let imgAfter = document.getElementById("after_img")

function img1Choose() {

    document.getElementById("before_img").src = "/ressources/flower1.jpg";
    document.getElementById("after_img").src = "/ressources/flower2.jpg";
}

function img2Choose() {

    document.getElementById("before_img").src = "/ressources/city1.jpg";
    document.getElementById("after_img").src = "/ressources/city2.jpg";
}

img1.addEventListener('click', img1Choose);
img2.addEventListener('click', img2Choose);
/* #endregion */


