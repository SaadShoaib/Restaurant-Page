function contact() {
    const lowerContainer = document.querySelector(".lower-container");
    const contactContainer = document.createElement("div")
    contactContainer.classList.add("contact-container")

    lowerContainer.appendChild(contactContainer);

    /* the h3 */
    const heading = document.createElement("h3");
    const headingText = document.createTextNode("Phone:")

    heading.appendChild(headingText);
    contactContainer.appendChild(heading);

    /* The numbers */
    const p = document.createElement("p");
    const p1 = document.createElement("p");
    const pText = document.createTextNode("1234567890");
    const p1Text = document.createTextNode("09087654321");

    p.appendChild(pText);
    p1.appendChild(p1Text);

    contactContainer.appendChild(p);
    contactContainer.appendChild(p1);

    /* The iframe of map */
    const ifrm = document.createElement("iframe");
    ifrm.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58396348.15815427!2d28.0648843!3d26.7050908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f9aaeef52d333b%3A0xadec1b7a1220a846!2sSuez%20Canal!5e0!3m2!1sen!2s!4v1617042842534!5m2!1sen!2s")
    ifrm.width = "600"
    ifrm.height = "450"

    contactContainer.appendChild(ifrm);
}

export default contact;