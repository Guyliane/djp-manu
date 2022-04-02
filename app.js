var btn = document.getElementById('btnNav');
var content = document.getElementById('menuContent');

btn.addEventListener('click', function () {
    content.classList.toggle('is-active');
})

function slide(){
    let slideValue = document.getElementById("slider_new").value;
    document.getElementById("my-img_new").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    
}

let img1 = document.querySelector('.img1');
//let slider_after = document.querySelector('.slider_after');
//let slider_Before = slider.querySelector('.slider_before');
let imgBefore = document.getElementById("before_img")
let imgAfter = document.getElementById("my-img_new")

function img1Choose(){

    console.log("OK")
    document.getElementById("before_img").src="/ressources/flower1.jpg";
    document.getElementById("my-img_new").src="/ressources/flower2.jpg";
}

img1.addEventListener('click', img1Choose);







/* #region  SLIDER */
let sliders = document.querySelectorAll('.slider_container');

sliders.forEach(function (slider) {
    let sliderRange = slider.querySelector('.slider_range');
    let sliderBefore = slider.querySelector('.slider_before');
    let sliderSeparator = slider.querySelector('.slider_separator');

    function updateSliderPosition() {
        sliderBefore.style = `width:${sliderRange.value}%`;
        sliderSeparator.style = `left:${sliderRange.value}%`;
    }

    sliderRange.addEventListener('input', updateSliderPosition);

    let isDragging = false;

    sliderSeparator.addEventListener('mousedown', function () {
        isDragging = true;
    });

    sliderSeparator.addEventListener('touchstart', function () {
        isDragging = true;
    });
    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
    document.addEventListener('touchend', function () {
        isDragging = false;
    });

    document.addEventListener('mousemove', function (e) {
        processMove(e.clientX);
    });

    document.addEventListener('touchmove', function (e) {
        processMove(e.touches[0].clientX);
    });

    function processMove(x) {
        if (isDragging) {
            let sliderRect = slider.getBoundingClientRect();
            let newWidth = (x - sliderRect.left) /
                sliderRect.width * 100;
            sliderRange.value = newWidth;
            updateSliderPosition();
        }
    }
});
/* #endregion */