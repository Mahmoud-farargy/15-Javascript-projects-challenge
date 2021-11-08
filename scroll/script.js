// target elements
const mainHeader = document.getElementById("mainHeader");
const menuBtn = document.getElementById("menuBtn");
const navContainer = document.getElementById("navContainer");
const scrollMeUp = document.getElementById("scrollMeUp");
const yearElement = document.getElementById("year");
const navLinksContainer = document.querySelector("#navContainer .nav-links");

// mounted
yearElement.innerHTML = new Date().getFullYear();

// functions
const toggleMenu = () => {
    const navbarHeight = navContainer.getBoundingClientRect().height;
    const linksHeight = navLinksContainer.getBoundingClientRect().height;
    const collapse = () => {
        navContainer.style.height = 0;
    }
    const collapseWhenLinkClicked = (e) => {
        if(e.target.tagName === "A"){
            collapse();
        };
    }
    const collapseOnBigWidth = () => {
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        if(windowWidth > 800){
            collapse();
        }
    }
    if(navbarHeight > 0){
        // collapse
        collapse();
        navLinksContainer.removeEventListener("click", collapseWhenLinkClicked);
        window.removeEventListener("resize", () => {});
    }else{
        // open
        navContainer.style.height = `${linksHeight}px`;
        navLinksContainer.addEventListener("click", collapseWhenLinkClicked, false);
        window.addEventListener("resize", collapseOnBigWidth, false);
    }
};

const onPageScroll = () => {
    const pageHeight = parseInt(window.pageYOffset);
    const linksHeight = navLinksContainer.getBoundingClientRect().height;
    // handle fixed nav class
    if(pageHeight > linksHeight && !mainHeader.classList.contains("fixed-nav")){
        console.log("scrolled");
        mainHeader.classList.add("fixed-nav");
    }else if((pageHeight <= linksHeight) && mainHeader.classList.contains("fixed-nav")){
        console.log("not scrolled");
        mainHeader.classList.remove("fixed-nav");
    }
    // handle scroll up button appearance
    if(pageHeight > 400){
        scrollMeUp.style.display = "inline-block";
    }else{
        scrollMeUp.style.display = "none";
    }
};

const scrollUp = () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });
};




// events
menuBtn.addEventListener("click", toggleMenu, false);
scrollMeUp.addEventListener("click", scrollUp, false);
window.addEventListener("scroll", onPageScroll, false);
// smooth scrolling
const navLinks = navLinksContainer.querySelectorAll(".nav-link");

navLinks.length > 0 && navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const currentHashName = link.getAttribute("href").replace(/#/, "");
        const element = document.getElementById(currentHashName);
        if(element){
            element.scrollIntoView({
                block: "center",
                behavior: "smooth"
            })
            console.log(element);
        }
    });
});