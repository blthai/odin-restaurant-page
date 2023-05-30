const content = document.querySelector("#content");

const header = document.createElement("div");
const title = document.createElement("h1");
title.textContent = "May's Burgers"
header.appendChild(title);

const home = document.createElement("div");
home.textContent = "Home";
const menu = document.createElement("div");
menu.textContent = "Menu";
const outline = document.createElement("div");
outline.textContent = "Outline";
header.appendChild(home);
header.appendChild(menu);
header.appendChild(outline);
content.appendChild(header);