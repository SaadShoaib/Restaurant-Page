function homepage() {
//Selecting the lower container.
const lowerContainer = document.querySelector(".lower-container");

//Clears the previous JS
lowerContainer.innerHTML = "";

//Now doing the lower-container
const copyDiv = document.createElement("div");
copyDiv.classList.add("copy");

//Heading of the copy
const copyHeading = document.createElement("h2");
copyHeading.classList.add("copy-heading");
const headingText1 = document.createTextNode("Want Some")
copyHeading.appendChild(headingText1);

//Adding the span which contains spaghetti
const spaghettiSpan = document.createElement("span");
spaghettiSpan.classList.add("spaghetti-heading");
const spaghettiText = document.createTextNode(" Spaghetti!");
spaghettiSpan.appendChild(spaghettiText);

copyHeading.appendChild(spaghettiSpan);
copyDiv.appendChild(copyHeading);

lowerContainer.appendChild(copyDiv)

//The Paragraph of copy
const copyParagraph = document.createElement("p");
copyParagraph.classList.add("copy-text");

const copyText = document.createTextNode("About to take a big step in your life and your palms are sweaty, knees weak and arms are heavy. There's already vomit on your sweater. Here, have some Mom's Spaghetti.")
copyParagraph.appendChild(copyText);

copyDiv.appendChild(copyParagraph);

//The order-now button
const orderNowBtn = document.createElement("button");
orderNowBtn.classList.add("order-now");

const orderNowText = document.createTextNode("Order Now")
orderNowBtn.appendChild(orderNowText);

copyDiv.appendChild(orderNowBtn);
console.log("homepage")
};

export default homepage;