/* eslint-disable quotes */

const content = document.querySelector("#content");

const createMenuPage = () => {
  content.removeChild(content.firstChild.nextSibling);
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
};

export { createMenuPage };
