/* Add class to anchor elements when currently visited */
const buttons = document.querySelectorAll("a.nav-item[href]");
for (let button of buttons) {
    if (button.getAttribute("href") === window.location.pathname || button.getAttribute("href") === window.location.href) {
        button.classList.add("active");
    }
}

/* Scroll back to top */
const scrollBtn = document.querySelector(".scroll");
scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; //for Safari
}); 

/* Google Map */
function initMap() {
    let options = {
        center: {lat: 43.64286207106479, lng: -79.38372504419783},
        zoom: 17
    }

    let map = new google.maps.Map(document.querySelector(".map-container"), options)
    
    marker = new google.maps.Marker({
        position: {lat: 43.64286207106479, lng: -79.38372504419783},
        map: map,
    });
}

/* Modal and Shopping Cart functionalities */
const modal = document.querySelector(".modal");
const modalTriggers = document.querySelectorAll(".card-light");
const closeBtn = document.querySelector(".close");
const heading = document.querySelector(".modal-heading");
const desc = document.querySelector(".modal-desc");
const price = document.querySelector(".modal-price");
const plus = document.querySelector(".fa-plus-circle");
const minus = document.querySelector(".fa-minus-circle");
const quantity = document.querySelector(".quantity");
const addCart = document.querySelector(".add-cart");
const cartQty = document.querySelector(".cart-qty");

for (let modalTrigger of modalTriggers) {
    modalTrigger.onclick = () => {
        modal.style.display = "block";
        heading.innerHTML = modalTrigger.childNodes[0].innerHTML;
        desc.innerHTML = modalTrigger.childNodes[1].innerHTML;
        price.innerHTML = modalTrigger.childNodes[2].innerHTML;
        quantity.innerHTML = 1;
        addCart.innerHTML = "Add to Cart";
        changeQty();
    }    
}

closeBtn.onclick = () => {
    modal.style.display = "none";
}
  
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

addCart.onclick = () => {
    addCart.innerHTML = "Adding to Cart...";    
    setTimeout(() => { 
        cartQty.innerHTML = parseInt(cartQty.innerHTML) + parseInt(quantity.innerHTML);
        modal.style.display = "none"; 
    }, 750);
}

function changeQty() {
    const priceUnformatted = price.innerHTML.substring(1);
    
    plus.onclick = () => {
        quantity.innerHTML = parseInt(quantity.innerHTML) + 1;
        price.innerHTML = `$${(Math.round((priceUnformatted * parseInt(quantity.innerHTML) + Number.EPSILON) * 100) / 100).toFixed(2)}`;
    }
    minus.onclick = () => {
        if (parseInt(quantity.innerHTML) > 1) {
            quantity.innerHTML = parseInt(quantity.innerHTML) - 1;
            price.innerHTML = `$${(Math.round((priceUnformatted * parseInt(quantity.innerHTML) + Number.EPSILON) * 100) / 100).toFixed(2)}`;
        }
    }
}
