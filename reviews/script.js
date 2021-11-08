// target elements
    // --btns
const swipeLeft = document.getElementById("swipeLeft");
const swipeRight = document.getElementById("swipeRight");
const randomBtn = document.getElementById("randomBtn");
    // --changing content
const authorImg = document.getElementById("authorImg");
const author = document.getElementById("author");
const role = document.getElementById("role");
const info = document.getElementById("info");

// states
let counter = 0;

// lists
const reviewsList = [
    {author: "Susan Smith",role: "Web Developer", img: "person-1_rfzshl", quote: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry."},
    {author: "Peter Jones",role: "Intern", img: "person-3_ipa0mj", quote: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."},
    {author: "Anna Johnson",role: "Web Designer", img: "person-2_np9x5l", quote: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."},
    {author: "Bill Anderson",role: "The Boss", img: "person-4_t9nxjt", quote: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."},
    
];
// functions
const handleReviewCardChange = (condition) => {
    // control current index
    const listMaxLength = reviewsList.length;
    if(condition === "left"){
        counter > 0 ? counter -=1 : counter = listMaxLength -1;
    }else if(condition === "right"){
        (counter >= 0 && counter < listMaxLength -1) ? counter +=1 : counter = 0;
    }else if( condition === "random"){
        counter = Math.floor(Math.random() * listMaxLength);
    }
   console.log(counter);
    const currentElementToView = reviewsList[typeof counter !== "undefined" ? counter : 0];
    authorImg.src = `Assets/People/${currentElementToView.img}.jpeg`;
    authorImg.alt = currentElementToView.author;
    author.innerText = currentElementToView.author;
    role.innerText = currentElementToView.role;
    quote.innerText = currentElementToView.quote;
    // change html content
    // Note: if you put innerHTML += `content`, this will add new content to the old once(s)
    // but if you put innerHTML = `content` without the plus sign, this will override the old content.
    // reviewCard.innerHTML = `
    //             <div class="img-container">
    //                <img class="user-img" src="Assets/People/${currentElementToView.img}.jpeg" alt="Susan Smith"/>   
    //             </div>
    //             <div class="review-inner">
    //                 <h4 id="author">${currentElementToView.author}</h4>
    //                 <h5 id="role">${currentElementToView.role}</h5>
    //                 <p id="info">${currentElementToView.content}</p>
    //                 <!-- swipe to buttons -->
    //                 <div class="switch-btns">
    //                     <button id="swipeLeft"><i class="fas fa-chevron-left"></i></button>
    //                     <button id="swipeRight"><i class="fas fa-chevron-right"></i></button>
    //                 </div>
    //                 <!-- random button -->
    //                 <button id="randomBtn">Surprise Me</button>
    //             </div>
    // `;
}

// events
swipeLeft.addEventListener("click", function(){
    handleReviewCardChange("left");
}, false);
swipeRight.addEventListener("click", function(){
    handleReviewCardChange("right");
}, false);
randomBtn.addEventListener("click", function(){
    handleReviewCardChange("random");
}, false);
