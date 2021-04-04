import homepage from "./homepage"
import navbar from "./navbar"
import buySpaghetti from "./buy-spaghetti"
import contact from "./contact"

changePages();



//The menu
/* buySpaghetti(); */

//The Menu
/* contact(); */

//Then add an event listener that wipes the current page and changes the class of e.target.
function changePages() {
    //The navbar modules stays here all the time.Only the class of the selected item changes.
    navbar();

    //The homepage always loads first.
    homepage();


    const about2 = document.querySelector(".about")
    const contactUs2 = document.querySelector(".contact-us")
    const buySpaghetti2 = document.querySelector(".buy-spaghetti")
    const orderNow2 = document.querySelector(".order-now")

    about2.addEventListener("click", homepage)
    contactUs2.addEventListener("click", contact)
    buySpaghetti2.addEventListener("click", buySpaghetti)
    orderNow2.addEventListener("click", buySpaghetti);
}


console.log("heeellowww")