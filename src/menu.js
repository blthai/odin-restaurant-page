/* eslint-disable quotes */
import friesSource from "./images/fries.svg";
import nachoBurgerSource from "./images/nachoburger.svg";
import spicyNachoBurgerSource from "./images/spicyburger.svg";
import milkTeaSource from "./images/tea.svg";
import cheeseBurgerSource from "./images/cheeseburger.svg";

const content = document.querySelector("#content");

const createMenuPage = () => {
  content.removeChild(content.firstChild.nextSibling);
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Menu";
  menuPage.appendChild(menuTitle);

  const fries = new Image();
  fries.src = friesSource;
  fries.classList.add("item-photo");

  const friesTitle = document.createElement("div");
  friesTitle.textContent = "Fries - $3";
  const friesDescription = document.createElement("div");
  friesDescription.textContent = "Fresh sliced potatoes that have been fried to golden perfection";
  const friesInfo = document.createElement("div");
  friesInfo.appendChild(friesTitle);
  friesInfo.appendChild(friesDescription);
  friesInfo.classList.add("item-info");
  const friesMenuEntry = document.createElement("div");
  friesMenuEntry.appendChild(fries);
  friesMenuEntry.appendChild(friesInfo);
  friesMenuEntry.classList.add("menu-entry");

  const nachoBurger = new Image();
  nachoBurger.src = nachoBurgerSource;
  nachoBurger.classList.add("item-photo");

  const spicyBurger = new Image();
  spicyBurger.src = spicyNachoBurgerSource;
  spicyBurger.classList.add("item-photo");

  const milkTea = new Image();
  milkTea.src = milkTeaSource;
  milkTea.classList.add("item-photo");

  const cheeseBurger = new Image();
  cheeseBurger.src = cheeseBurgerSource;
  cheeseBurger.classList.add("item-photo");

  menuPage.appendChild(friesMenuEntry);
  menuPage.appendChild(nachoBurger);
  menuPage.appendChild(spicyBurger);
  menuPage.appendChild(milkTea);
  menuPage.appendChild(cheeseBurger);

  content.appendChild(menuPage);
};

export { createMenuPage };
