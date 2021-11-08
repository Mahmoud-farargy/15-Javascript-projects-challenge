// target elements
const currentCount = document.querySelector(".current-count");
const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");

// states 
let mainCount = 0;

// functions
const handleCounter = (condition) => {
    // change text
    switch (condition) {
        case "decrease":
            mainCount -= 1;
            break;
        case "increase":
            mainCount += 1;
            break;
        case "reset":
            mainCount = 0;
            break;
        default:
            mainCount++;
    }
    // change color
    if(mainCount > 0){
        currentCount.style.color = "green";
    }else if(mainCount < 0){
        currentCount.style.color = "red";
    }else{
        currentCount.style.color = "#111";
    }
    currentCount.innerText = mainCount;
}
// events
decreaseBtn.addEventListener("click", function () {
     handleCounter("decrease");
}, false);
increaseBtn.addEventListener("click", function () {
     handleCounter("increase");
}, false);
resetBtn.addEventListener("click", function () {
     handleCounter("reset");
}, false);