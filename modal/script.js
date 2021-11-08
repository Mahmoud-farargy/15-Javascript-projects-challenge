// target elements
const mainModal = document.getElementById("mainModal");
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");

// functions
function toggleModal () {
    mainModal.classList.toggle("show-modal");
}

// events
openModal.addEventListener("click", toggleModal, false);
closeModal.addEventListener("click", toggleModal, false);