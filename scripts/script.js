let hmenu = document.querySelector(".hamburger-menu");

let hwrap = document.querySelector(".h-wrapper");

let t = document.querySelector(".top");
let m = document.querySelector(".mid");
let b = document.querySelector(".bot");

let menu_modal = document.querySelector(".menu-modal");

let logo = document.querySelector(".logo-container");

hmenu.addEventListener("click", (e) => {
    hwrap.classList.toggle("active-wrap");
    t.classList.toggle("active-top");
    m.classList.toggle("active-mid");
    b.classList.toggle("active-bot");

    logo.classList.toggle("modal-logo");
    menu_modal.classList.toggle("hidden");
});
