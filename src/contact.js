/* eslint-disable quotes */
const content = document.querySelector("#content");

const createContactPage = () => {
  content.removeChild(content.firstChild.nextSibling);
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");
  const contactTitle = document.createElement("h2");
  contactTitle.textContent = "Contact May";
  contactPage.appendChild(contactTitle);

  const contactBox = document.createElement("div");
  const contactName = document.createElement("div");
  const contactInfo = document.createElement("div");
  const contactNumber = document.createElement("div");
  contactNumber.textContent = "999-999-3333";
  const contactEmail = document.createElement("div");
  contactEmail.textContent = "chefmay@emailsite.com";
  contactInfo.appendChild(contactName);
  contactInfo.appendChild(contactEmail);
  contactBox.appendChild(contactInfo);
  contactPage.appendChild(contactBox);
  content.insertBefore(contactPage, content.lastChild);
};

export { createContactPage };
