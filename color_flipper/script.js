// target elements
const bodyContainer = document.getElementById("appBody");
const simpleMode = document.getElementById("simpleMode");
const hexMode = document.getElementById("hexMode");
const colorName = document.querySelector(".current-color strong");
const changeBColorBtn = document.getElementById("changeBColorBtn");
const modesList = document.querySelectorAll(".color-modes li");

// states
let currentMode = "simple";

// lists
const colorsList = [
    "green",
    "blue",
    "rgba(133,122,200)",
    "#F15025",
    "#753970",
    "lightblue",
    "lime",
    "yellow",
    "orange",
    "RGB(247, 202, 201)",
    "#D65076",
    "RGB(68, 184, 172)",
    "#9B2335",
    "#5B5EA6",
    "#DFCFBE",
    "RGB(85, 180, 176)",
    "RGB(225, 93, 68)",
    "RGB(127, 205, 205)",
    "#BC243C",
    "RGB(195, 68, 122)",
    "RGB(152, 180, 212)"
]
// functions
function changeMode (newMode) {
    currentMode = newMode;
    console.log(modesList);
    const classToToggle = "active-mode";
    modesList.forEach(el => {
       const itemClasslist = el.classList;
       itemClasslist.remove(classToToggle);
       if(el.innerHTML.toLowerCase() === currentMode.toLowerCase()){
         itemClasslist.add(classToToggle);
       }
    });
    // inewMode === "hex" ? : ;
}
function changeColor (){
    const elStyle = bodyContainer.style;
    let setColor;
    if(currentMode.toLowerCase() === "hex"){
        const generateHex = Math.floor(Math.random() * 16777215).toString(16);
        setColor = `#${generateHex}`;
    }else{
        const randNum = Math.floor(Math.random() * colorsList.length);
        setColor = colorsList[randNum];
    } 
    console.log("setColor", setColor, currentMode);
    elStyle.backgroundColor = setColor;
    colorName.innerHTML = ` ${setColor};`;
};

// events

simpleMode.addEventListener("click", function (){
    changeMode("simple");
});
hexMode.addEventListener("click", function (){
    changeMode("hex");
});
changeBColorBtn.addEventListener("click", changeColor, false);