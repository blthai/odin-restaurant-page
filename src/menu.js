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
  fries.classList.add("menu-item");

  const nachoBurger = new Image();
  nachoBurger.src = nachoBurgerSource;
  nachoBurger.classList.add("menu-item");

  const spicyBurger = new Image();
  spicyBurger.src = spicyNachoBurgerSource;
  spicyBurger.classList.add("menu-item");

  const milkTea = new Image();
  milkTea.src = milkTeaSource;
  milkTea.classList.add("menu-item");

  const cheeseBurger = new Image();
  cheeseBurger.src = cheeseBurgerSource;
  cheeseBurger.classList.add("menu-item");

  menuPage.appendChild(fries);
  menuPage.appendChild(nachoBurger);
  menuPage.appendChild(spicyBurger);
  menuPage.appendChild(milkTea);
  menuPage.appendChild(cheeseBurger);

  content.appendChild(menuPage);
};

export { createMenuPage };
