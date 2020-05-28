(function() {
    const header = document.querySelector('header');
    window.onscroll = () =>{
        if (window.pageYOffset > 60) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());
// это функция которая вызывает сому себя,
// она сробатывает когда загружаеться страница
// window.onscroll = проверять движения по сайту(скролинг)
// window.pageYOffset = проверять на сколько пикселей сместилось страничка
// = () => {} это стрелочная функция
// header.classList.add('header_active'); обращяеться к тегу header и добавляет в class ещё один класс с эфектом
// header.classList.remove('header_active'); удаляет класс header_active

(function() {
    const burgerItem = document.querySelector('.burger');
    const Menu = document.querySelector('.header_nav');
    const burgerMenuClose = document.querySelector('.header_nav-close');


    burgerItem.addEventListener('click',() => {
        Menu.classList.add('header_nav-active');
    });

    burgerMenuClose.addEventListener('click',() => {
        Menu.classList.remove('header_nav-active');
    });
}());