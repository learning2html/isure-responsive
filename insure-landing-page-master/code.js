const navChange = () => {
    const burger = document.querySelector('.nav_burger');
    const nav = document.querySelector('.nav_link');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        nav.classList.toggle('nav-active');
    });
}
navChange();


