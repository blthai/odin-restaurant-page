/* eslint-disable quotes */

import bacon from "./images/baconburger.jpg";
import fry from "./images/crinklefry.svg";

const content = document.querySelector("#content");

const createHomePage = () => {
  if (content.children.length > 1) {
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
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent =
    "Mouth-watering burgers made from only the finest ingredients available to us from our supply chain of over a dozen organic vendors.";
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

  const baconBurger = new Image();
  baconBurger.src = bacon;
  baconBurger.classList.add("bacon-burger");
  rightHomePage.appendChild(baconBurger);

  homePage.appendChild(leftHomePage);
  homePage.appendChild(rightHomePage);
  content.appendChild(homePage);
};

export { createHomePage };
