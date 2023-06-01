/* eslint-disable quotes */

import bacon from './images/baconburger.jpg';

const content = document.querySelector("#content");

const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("homepage")
  const leftHomePage = document.createElement("div");
  leftHomePage.classList.add("left-homepage");

  //const homePageDescription = document.createElement("h2");
  //homePageDescription.textContent = "Thick and Juicy";
  const descriptionTitle = document.createElement("h2");
  descriptionTitle.textContent = ("Thick, Juicy, and CHARBROILED");
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = "Mouth-watering burgers made from only the finest ingredients available to us from our supply chain of over a dozen organic vendors.";
  const locationButton = document.createElement("button");
  locationButton.textContent = "Find a Location";
  //leftHomePage.appendChild(homePageDescription);
  leftHomePage.appendChild(descriptionTitle);
  leftHomePage.appendChild(description);
  leftHomePage.appendChild(locationButton);

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
