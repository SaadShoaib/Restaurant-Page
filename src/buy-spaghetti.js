function buySpaghetti() {
    //Selecting the lower-container and making the menu container
    const lowerContainer = document.querySelector(".lower-container");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    lowerContainer.appendChild(menuContainer);

    //The list inside menu container
    const ul = document.createElement("ul");
    ul.classList.add("menu-list");

    menuContainer.appendChild(ul);

    //The first li
    const li1 = document.createElement("li");
    li1.classList.add("the-best-spaghetti")
    const h1 = document.createElement("h3")
    const h1Text = document.createTextNode("Authentic Spaghetti");
    const img1 = document.createElement("img");
    img1.src = "./images/the-best-one.jpg";

    h1.appendChild(h1Text);
    li1.appendChild(h1);
    ul.appendChild(li1);
    li1.appendChild(img1);

    //The 2nd li 
    const li2 = document.createElement("li");
    li2.classList.add("ketchup-on-noodles")
    const h2 = document.createElement("h3")
    const h2Text = document.createTextNode("Ketchup On Noodles");
    const img2 = document.createElement("img");
    img2.src = "./images/ketchup-and-cheese-on-noodles.jpg";

    h2.appendChild(h2Text);
    li2.appendChild(h2);
    ul.appendChild(li2);
    li2.appendChild(img2);

    //The 3rd li
    const li3 = document.createElement("li");
    li3.classList.add("boiled")
    const h3 = document.createElement("h3")
    const h3Text = document.createTextNode("Guaranted To Make You Vomit");
    const img3 = document.createElement("img");
    img3.src = "./images/boiled-spaghetti.jpg";

    h3.appendChild(h3Text);
    li3.appendChild(h3);
    ul.appendChild(li3);
    li3.appendChild(img3);

    //The 4th li
    const li4 = document.createElement("li");
    li4.classList.add("raw")
    const h4 = document.createElement("h3")
    const h4Text = document.createTextNode("You're Not Supposed To Eat It");
    const img4 = document.createElement("img");
    img4.src = "./images/raw-spaghetti.jpg";

    h4.appendChild(h4Text);
    li4.appendChild(h4);
    ul.appendChild(li4);
    li4.appendChild(img4);
}

export default buySpaghetti;