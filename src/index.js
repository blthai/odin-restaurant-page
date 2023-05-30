/* eslint-disable quotes */
import "./headerstyle.css";

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
outline.textContent = "Outline";
const tabOptions = document.createElement("div");
tabOptions.classList.add("tabs");
tabOptions.appendChild(home);
tabOptions.appendChild(menu);
tabOptions.appendChild(outline);
header.appendChild(tabOptions);
content.appendChild(header);
