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
  friesDescription.textContent = "Fresh sliced potatoes that have been fried to golden perfection.";
  friesDescription.classList.add("item-description");
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

  const nachoBurgerTitle = document.createElement("div");
  nachoBurgerTitle.textContent = "Nacho Burger - $6";
  const nachoBurgerDescription = document.createElement("div");
  nachoBurgerDescription.textContent = "Charbroiled beef burger topped with nacho cheese for an ooey-gooey texture sensation.";
  nachoBurgerDescription.classList.add("item-description");
  const nachoBurgerInfo = document.createElement("div");
  nachoBurgerInfo.appendChild(nachoBurgerTitle);
  nachoBurgerInfo.appendChild(nachoBurgerDescription);
  nachoBurgerInfo.classList.add("item-info");
  const nachoBurgerMenuEntry = document.createElement("div");
  nachoBurgerMenuEntry.appendChild(nachoBurger);
  nachoBurgerMenuEntry.appendChild(nachoBurgerInfo);
  nachoBurgerMenuEntry.classList.add("menu-entry");

  const spicyBurger = new Image();
  spicyBurger.src = spicyNachoBurgerSource;
  spicyBurger.classList.add("item-photo");

  const spicyBurgerTitle = document.createElement("div");
  spicyBurgerTitle.textContent = "Spicy Nacho Burger - $7";
  const spicyBurgerDescription = document.createElement("div");
  spicyBurgerDescription.textContent = "Charbroiled beef burger topped with nacho cheese and habanero peppers for an ooey-gooey texture sensation with a spicy kick.";
  spicyBurgerDescription.classList.add("item-description");
  const spicyBurgerInfo = document.createElement("div");
  spicyBurgerInfo.appendChild(spicyBurgerTitle);
  spicyBurgerInfo.appendChild(spicyBurgerDescription);
  spicyBurgerInfo.classList.add("item-info");
  const spicyBurgerMenuEntry = document.createElement("div");
  spicyBurgerMenuEntry.appendChild(spicyBurger);
  spicyBurgerMenuEntry.appendChild(spicyBurgerInfo);
  spicyBurgerMenuEntry.classList.add("menu-entry");

  const milkTea = new Image();
  milkTea.src = milkTeaSource;
  milkTea.classList.add("item-photo");

  const milkTeaTitle = document.createElement("div");
  milkTeaTitle.textContent = "Thai Milk Tea - $4";
  const milkTeaDescription = document.createElement("div");
  milkTeaDescription.textContent = "Refreshing and sweet Thai milk tea with chewy boba pearls.";
  milkTeaDescription.classList.add("item-description");
  const milkTeaInfo = document.createElement("div");
  milkTeaInfo.appendChild(milkTeaTitle);
  milkTeaInfo.appendChild(milkTeaDescription);
  milkTeaInfo.classList.add("item-info");
  const milkTeaMenuEntry = document.createElement("div");
  milkTeaMenuEntry.appendChild(milkTea);
  milkTeaMenuEntry.appendChild(milkTeaInfo);
  milkTeaMenuEntry.classList.add("menu-entry");

  const cheeseBurger = new Image();
  cheeseBurger.src = cheeseBurgerSource;
  cheeseBurger.classList.add("item-photo");

  const cheeseBurgerTitle = document.createElement("div");
  cheeseBurgerTitle.textContent = "Cheese Burger - $5";
  const cheeseBurgerDescription = document.createElement("div");
  cheeseBurgerDescription.textContent = "Classic charbroiled beef burger topped with a slice of American cheese.";
  cheeseBurgerDescription.classList.add("item-description");
  const cheeseBurgerInfo = document.createElement("div");
  cheeseBurgerInfo.appendChild(cheeseBurgerTitle);
  cheeseBurgerInfo.appendChild(cheeseBurgerDescription);
  cheeseBurgerInfo.classList.add("item-info");
  const cheeseBurgerMenuEntry = document.createElement("div");
  cheeseBurgerMenuEntry.appendChild(cheeseBurger);
  cheeseBurgerMenuEntry.appendChild(cheeseBurgerInfo);
  cheeseBurgerMenuEntry.classList.add("menu-entry");

  const menuEntries = document.createElement("div");

  menuEntries.appendChild(cheeseBurgerMenuEntry);
  menuEntries.appendChild(nachoBurgerMenuEntry);
  menuEntries.appendChild(spicyBurgerMenuEntry);
  menuEntries.appendChild(friesMenuEntry);
  menuEntries.appendChild(milkTeaMenuEntry);
  
  menuEntries.classList.add("menu-entries");
  menuPage.appendChild(menuEntries);
  content.appendChild(menuPage);
};

export { createMenuPage };
