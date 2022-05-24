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

/* Form submit */
const contactForm = document.querySelector("#form");
const submitBtn = document.querySelector("#form-btn");
const confirmMsg = document.querySelector(".confirm-msg");

contactForm.onsubmit = (event) => {
    event.preventDefault();
    submitBtn.innerHTML = "Processing...";
    setTimeout(() => { 
        contactForm.style.display = "none";
        confirmMsg.style.display = "block";
    }, 750);
}

