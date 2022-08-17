"use strict";
var _a;
var photo = document.querySelector('.photo_img');
var bg_bussines = document.getElementById('bg_container');
var menu_bar = document.getElementById('main_header');
var array = ["./assets/images/assets_gallery/EG corpo todo tratada.jpeg",
    "./assets/images/assets_gallery/EG corpo todo.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.48.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.50.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.51.jpeg",
    "./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.53.jpeg"];
var array_bg = [
    "./assets/images/assets_gallery_bg/Edu_palestrando_no_WTW.png",
    "./assets/images/assets_gallery_bg/Foto2.png",
    "./assets/images/assets_gallery_bg/Foto_3_WTW.jpeg"
];
var i = 0;
console.log(array_bg.length);
console.log((_a = bg_bussines === null || bg_bussines === void 0 ? void 0 : bg_bussines.firstElementChild) === null || _a === void 0 ? void 0 : _a.getAttribute("src"));
setInterval(function () {
    var _a, _b;
    if (i > (array.length) || i < 0) {
        i = 0;
    }
    else {
        i = i + 1;
    }
    photo === null || photo === void 0 ? void 0 : photo.classList.remove('teste');
    (_b = (_a = document.querySelector('.photo')) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute('src', array[i]);
    photo === null || photo === void 0 ? void 0 : photo.classList.toggle('teste');
}, 15000);
setInterval(function () {
    var _a, _b;
    bg_bussines === null || bg_bussines === void 0 ? void 0 : bg_bussines.classList.remove('teste');
    if (i >= (array_bg.length) || i < 0) {
        i = 0;
        (_a = bg_bussines === null || bg_bussines === void 0 ? void 0 : bg_bussines.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute("src", array_bg[i]);
    }
    else {
        (_b = bg_bussines === null || bg_bussines === void 0 ? void 0 : bg_bussines.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute("src", array_bg[i]);
        i = i + 1;
    }
    bg_bussines === null || bg_bussines === void 0 ? void 0 : bg_bussines.classList.toggle('teste');
    console.log(i);
}, 15000);
function active_scroll() {
    var _a;
    var scr_logo = '#';
    menu_bar.classList.toggle('ativo_scroll', scrollY > 0);
    console.log((_a = document.querySelector('.logo_img')) === null || _a === void 0 ? void 0 : _a.getAttribute("src"));
    if (scrollY > 0) {
        // logo.firstElementChild?.setAttribute('src', scr_logo)
    }
}
window.addEventListener('scroll', active_scroll);
