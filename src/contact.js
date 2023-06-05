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
  contactBox.classList.add("contact-box");
  const contactName = document.createElement("div");
  contactName.textContent="Chef May";
  contactName.classList.add("contact-name");
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");
  const contactNumber = document.createElement("div");
  contactNumber.textContent = "Call: 999-999-3333";
  const contactEmail = document.createElement("div");
  contactEmail.textContent = "Email: chefmay@emailsite.com";
  contactInfo.appendChild(contactNumber);
  contactInfo.appendChild(contactEmail);
  contactBox.appendChild(contactName);
  contactBox.appendChild(contactInfo);
  contactPage.appendChild(contactBox);
  content.insertBefore(contactPage, content.lastChild);
};

export { createContactPage };
