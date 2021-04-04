function navbar() {
// Appending the navbar
const container = document.querySelector(".container");
const lowerContainer = document.querySelector(".lower-container");
const nav = document.createElement("nav");

container.insertBefore(nav, lowerContainer);

//Writing the navbar
const ul = document.createElement("ul");
ul.classList.add("nav-container");
nav.appendChild(ul);

//Time for the individual li elements
//The 1st one
const li1 = document.createElement("li");

//<em> tags inside li
const em = document.createElement("em");
const logoText = document.createTextNode("Mom's Spaghetti");
em.appendChild(logoText);
li1.appendChild(em);

li1.classList.add("the-logo");
ul.appendChild(li1);

//The 2nd li 
const li2 = document.createElement("li");
const a1 = document.createElement("a")
a1.href = "#";
a1.classList.add("about")
const aboutText = document.createTextNode("About");
a1.appendChild(aboutText);
li2.appendChild(a1);

ul.appendChild(li2);

//The 3rd li
const li3 = document.createElement("li");
const a2 = document.createElement("a")
a2.href = "#";
a2.classList.add("buy-spaghetti")
const buySpaghettiText = document.createTextNode("Buy Spaghetti");
a2.appendChild(buySpaghettiText);
li3.appendChild(a2);

ul.appendChild(li3);

//The 4th li
const li4 = document.createElement("li");
const a3 = document.createElement("a")
a3.href = "#";
a3.classList.add("contact-us")
const contactUsText = document.createTextNode("Contact Us");
a3.appendChild(contactUsText);
li4.appendChild(a3);

ul.appendChild(li4);
}

export default navbar