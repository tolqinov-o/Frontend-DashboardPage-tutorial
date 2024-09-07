const body = document.querySelector("body"),
let loader = document.getElementById("preloader");

// Scroll Reveal function
ScrollReveal().reveal("section");

// switching mode function
mode.addEventListener("click", () => {
    body.classList.toggle("dark");

   
    } else {
        mode.src = "./img/moon.png";
    }
});
     
// page loader
window.addEventListener('load', function () {
    loader.style.display = 'none';
});
