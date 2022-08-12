const photo = document.querySelector('.photo_img');

const array = ["./assets/images/assets_gallery/EG corpo todo tratada.jpeg",
"./assets/images/assets_gallery/EG corpo todo.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.48.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.50.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.51.jpeg",
"./assets/images/assets_gallery/WhatsApp Image 2021-08-05 at 19.23.53.jpeg"]

let i:number = 0
setInterval(function(){
    photo?.classList.remove('teste')
    if(i > (array.length -1) ){
        i = 0
    }
    
    document.querySelector('.photo')?.firstElementChild?.setAttribute('src', array[i])
    photo?.classList.toggle('teste')
    i = i + 1

},15000)


const menu_bar = <HTMLElement>document.getElementById('main_header');

function active_scroll(){
    menu_bar.classList.toggle('ativo_scroll', scrollY > 0);
}
window.addEventListener('scroll', active_scroll);


