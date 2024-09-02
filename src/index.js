import "./styles.css";
import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");
const content = document.querySelector("#content");


home.addEventListener('click', () => {
    content.innerHTML = '';
    loadHomePage();
});

menu.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenuPage();
});

about.addEventListener('click', () => {
    content.innerHTML = '';
    loadAboutPage();
});

loadHomePage(); // Show homepage by default when visiting the site