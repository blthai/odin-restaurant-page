/* eslint-disable quotes */
import "./headerstyle.css";
import "./homestyle.css";
import "./menustyle.css";
import "./footerstyle.css";
import burger from './images/burger.svg';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';

const content = document.querySelector("#content");

const header = document.createElement("div");
header.classList.add("header");
const title = document.createElement("h1");
title.textContent = "May's Burgers";
title.classList.add("title");
header.appendChild(title);

const home = document.createElement("div");
home.textContent = "Home";
const menu = document.createElement("div");
menu.textContent = "Menu";
const outline = document.createElement("div");
outline.textContent = "Contact";
const tabOptions = document.createElement("div");
tabOptions.classList.add("tabs");
tabOptions.appendChild(home);
tabOptions.appendChild(menu);
tabOptions.appendChild(outline);
header.appendChild(tabOptions);

const burgerIcon = new Image();
burgerIcon.src = burger;
burgerIcon.classList.add("burger");
header.appendChild(burgerIcon);
content.appendChild(header);
content.classList.add("content");

const footer = document.createElement("div");
footer.classList.add("footer");
content.appendChild(footer);

createHomePage();
createMenuPage();


