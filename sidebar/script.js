// target elements
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("closeSidebar");

// functions
function handleShowingSidebar () {
    sidebar.classList.toggle("show-sidebar");
}

// events
menuBtn.addEventListener("click", handleShowingSidebar, false);
closeSidebar.addEventListener("click", handleShowingSidebar, false);