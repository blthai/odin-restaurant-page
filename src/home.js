/* eslint-disable quotes */
const content = document.querySelector("#content");

const createHomePage = () => {
  const homePage = document.createElement("div");
  homePage.classList.add("homepage")
  const leftHomePage = document.createElement("div");
  leftHomePage.classList.add("left-homepage");
  const rightHomePage = document.createElement("div");
  rightHomePage.classList.add("right-homepage");
  homePage.appendChild(leftHomePage);
  homePage.appendChild(rightHomePage);
  content.appendChild(homePage);
};

export { createHomePage };
