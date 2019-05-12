document.addEventListener('DOMContentLoaded', function () {
    /* menu button */
    let menu = document.getElementById('menu-header');

    if (document.getElementsByTagName('body')[0].offsetWidth < '649px') {
        menu.classList.add('menu-header-none')

    }
    document.getElementsByClassName('fa-bars')[0].addEventListener('click', function () {
        if (menu.classList.contains('menu-header-none')) {
            menu.classList.add('menu-header-flex')

            menu.classList.remove('menu-header-none')
        }
        else {
            menu.classList.remove('menu-header-flex')

            menu.classList.add('menu-header-none')
        }

    });
})