const navigationToggle = document.getElementById("main_header__navigation__toggle__input");
const navigationToggleIcon = document.querySelector(".main_header__navigation__toggle__icon");
const navigationMenu = document.getElementById("main_header__navigation");
const navigationList = document.querySelector(".main_header__navigation__list");

navigationToggle.addEventListener("click", (e) => {
    const isOn = navigationToggle.checked;

    if (isOn) {
        navigationList.style.left = "0";
        navigationToggleIcon.style.color = "#ffffff";
    } else {
        navigationList.style.left = "100%";
        navigationToggleIcon.style.color = "var(--primary-color)";
    }
});

navigationMenu.addEventListener("click", (e) => {
    let isOn = navigationToggle.checked;

    if (isOn) {
        navigationList.style.left = "100%";
        navigationToggleIcon.style.color = "var(--primary-color)";
        navigationToggle.checked = false;
    } else {
        navigationList.style.left = "0";
        navigationToggleIcon.style.color = "#ffffff";
        navigationToggle.checked = true;
    }
});
