
let mobileMenu = document.getElementsByClassName("mobile-menu")[0];
let showMenuButton = document.getElementsByClassName("js-show-menu")[0];
let hideMenuButton = document.getElementsByClassName("menu-button-close")[0];
let hideMenu_array = document.getElementsByClassName("js-hide-menu");

for (let i = 0; i < hideMenu_array.length; i++) {
    hideMenu_array[i].addEventListener('click', hideMenu)
};


showMenuButton.addEventListener('click', showMenu);
function showMenu() {
    mobileMenu.style.display = 'block';
    hideMenuButton.hidden = false;
    showMenuButton.hidden = true;
};

function hideMenu() {
    mobileMenu.style.display = 'none';
    hideMenuButton.hidden = true;
    showMenuButton.hidden = false;
};



