/* eslint-disable quotes */

import bacon from "./images/baconburger.jpg";
import fry from "./images/crinklefry.svg";
import burgerChefSource from "./images/burgerchef.svg";

const content = document.querySelector("#content");

const createHomePage = () => {
  if (content.children.length > 2) {
    content.removeChild(content.firstChild.nextSibling);
  }
  const homePage = document.createElement("div");
  homePage.classList.add("home-page");
  const leftHomePage = document.createElement("div");
  leftHomePage.classList.add("left-homepage");

  const crinkleFryLeft = new Image();
  crinkleFryLeft.src = fry;
  crinkleFryLeft.classList.add("left-fry");
  leftHomePage.appendChild(crinkleFryLeft);

  const homePageDescription = document.createElement("div");
  const descriptionTitle = document.createElement("h2");
  descriptionTitle.textContent = "Thick, Juicy, and CHARBROILED!";
  descriptionTitle.classList.add("description-title");
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Mouth-watering burgers made from only the finest ingredients available to us from our supply chain of over a dozen organic vendors.";
  const locationButton = document.createElement("button");
  locationButton.textContent = "Find a Location";
  homePageDescription.appendChild(descriptionTitle);
  homePageDescription.appendChild(description);
  homePageDescription.appendChild(locationButton);
  homePageDescription.classList.add("home-page-text");
  leftHomePage.appendChild(homePageDescription);

  const crinkleFryRight = new Image();
  crinkleFryRight.src = fry;
  crinkleFryRight.classList.add("right-fry");
  leftHomePage.appendChild(crinkleFryRight);

  const rightHomePage = document.createElement("div");
  rightHomePage.classList.add("right-homepage");

  const burgerChef = new Image();
  burgerChef.src = burgerChefSource;
  burgerChef.classList.add("bacon-burger");
  rightHomePage.appendChild(burgerChef);

  homePage.appendChild(leftHomePage);
  homePage.appendChild(rightHomePage);
  content.insertBefore(homePage, content.lastChild);
};

export { createHomePage };
