// target elements
const navLinks = document.getElementById("navLinks");
const menuBtn = document.getElementById("menuBtn");

const isMenuOpen = false;

const toggleNavbar = () => {
    // toggles "show-links" class when menu is clicked
    navLinks.classList.toggle("show-links");
    // closes menu when the window expands more than 900px
    function closeMenuWhenExpanding(){
        const windowWidth = window.innerWidth ||  document.documentElement.clientWidth;
        if(windowWidth >= 900){
            navLinks.classList.remove("show-links");
        }
    }
    if(navLinks.classList.contains("show-links")){
        // opened
        window.addEventListener("resize", closeMenuWhenExpanding,false);
    }else{
        // closed
        window.removeEventListener("resize", closeMenuWhenExpanding);
    }
};

// events
menuBtn.addEventListener("click", toggleNavbar, false);
