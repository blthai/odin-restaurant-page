/* eslint-disable quotes */
import "./headerstyle.css";
import "./homestyle.css";
import "./menustyle.css";
import "./footerstyle.css";
import "./contactstyle.css";
import burger from "./images/burger.svg";
import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

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
const iconCredit = document.createElement("a");
iconCredit.textContent = "Burger icon in the header was created by Yeoul Kwon from Noun Project";
iconCredit.href = "https://thenounproject.com/icon/burger-1044110/";
footer.appendChild(iconCredit);
const imagesCredit = document.createElement("a");
imagesCredit.textContent = "Burger chef image and all menu images were created by Catalyststuff from Freepik";
imagesCredit.href = "https://www.freepik.com/author/catalyststuff";
footer.appendChild(imagesCredit);

content.appendChild(footer);

createHomePage();
createMenuPage();
createContactPage();
