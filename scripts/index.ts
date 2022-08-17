const photo = document.querySelector('.photo_img');
const bg_bussines = <HTMLElement>document.getElementById('bg_container');
const menu_bar = <HTMLElement>document.getElementById('main_header');


const array = ["./assets/images/assets_gallery/EG corpo todo tratada.jpeg",
"./assets/images/assets_gallery/EG corpo todo.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.48.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.50.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.51.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.53.jpeg"]

const array_bg = [
    "./assets/images/assets_gallery_bg/Edu_palestrando_no_WTW.png",
    "./assets/images/assets_gallery_bg/Foto2.png",
    "./assets/images/assets_gallery_bg/Foto_3_WTW.jpeg"
]

let i:number = 0
console.log(array_bg.length)
console.log(bg_bussines?.firstElementChild?.getAttribute("src"))
setInterval(function(){
    if(i > (array.length) || i < 0){
        i = 0
    }else{
        i = i + 1
    }
    photo?.classList.remove('teste')
    document.querySelector('.photo')?.firstElementChild?.setAttribute('src', array[i])
    
    photo?.classList.toggle('teste')

},15000)

setInterval(function(){
    bg_bussines?.classList.remove('teste')
    if(i >= (array_bg.length) || i < 0){
        i = 0
        bg_bussines?.firstElementChild?.setAttribute("src", array_bg[i])
    }else{
        bg_bussines?.firstElementChild?.setAttribute("src", array_bg[i])
        i = i + 1
    }
    bg_bussines?.classList.toggle('teste')
    console.log(i)
},15000)

function active_scroll(){
    let scr_logo:string = '#'
    menu_bar.classList.toggle('ativo_scroll', scrollY > 0);
    console.log(document.querySelector('.logo_img')?.getAttribute("src"));
    if (scrollY > 0){
        // logo.firstElementChild?.setAttribute('src', scr_logo)
    }
}
window.addEventListener('scroll', active_scroll);


