"use strict";
var photo = document.querySelector('.photo_img');
var array = ["./assets/images/assets_gallery/EG corpo todo tratada.jpeg",
    "./assets/images/assets_gallery/EG corpo todo.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.48.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.50.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.51.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.53.jpeg"];
var i = 0;
setInterval(function () {
    var _a, _b;
    photo === null || photo === void 0 ? void 0 : photo.classList.remove('teste');
    if (i > (array.length - 1)) {
        i = 0;
    }
    console.log(array[i]);
    (_b = (_a = document.querySelector('.photo')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute('src', array[i]);
    photo === null || photo === void 0 ? void 0 : photo.classList.toggle('teste');
    i = i + 1;
    console.log(i);
}, 15000);
var menu_bar = document.getElementById('main_header');
function active_scroll() {
    menu_bar.classList.toggle('ativo_scroll', scrollY > 0);
}
window.addEventListener('scroll', active_scroll);
