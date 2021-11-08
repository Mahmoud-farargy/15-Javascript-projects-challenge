// target elements
const sliderItemsList = document.querySelectorAll(".slider-items-list .slider-item");
const sliderBtns = document.querySelectorAll(".slider-btns button");

// states
let counter = 0;
// add a left value to each item dynamically
sliderItemsList.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const carousel = () => {
  const sliderItemsLength = sliderItemsList.length;
  if(counter >= sliderItemsLength){
    counter = 0;
  }else if(counter < 0){
    counter = sliderItemsLength -1;
  }
  sliderItemsList.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

// events
sliderBtns.forEach(btn => {

  btn.addEventListener("click", function() {
    const direction = btn.getAttribute("data-direction").toLowerCase();
    if(direction === "right"){
        counter ++;
        carousel();
    }else if(direction === "left"){
        counter --;
        carousel();
    }
  });
});