let slider = document.getElementById('slider');
let topImage = document.getElementById('top');
slider.addEventListener('input', () => {
    topImage.style.clipPath = `inset(0 ${100 - slider.value}% 0 0)`;
})