const navigationToggle = document.getElementById("main_header__navigation__toggle__input");
const navigationMenu = document.getElementById("main_header__navigation");
const navigationList = document.querySelector(".main_header__navigation__list");

navigationToggle.addEventListener("click", (e) => {
    const isOn = navigationToggle.checked;

    if (isOn) {
        navigationList.style.left = "0";
    } else {
        navigationList.style.left = "100%";
    }
});

navigationMenu.addEventListener("click", (e) => {
    let isOn = navigationToggle.checked;

    if (isOn) {
        navigationList.style.left = "100%";
        navigationToggle.checked = false;
    } else {
        navigationList.style.left = "0";
        navigationToggle.checked = true;
    }
});
