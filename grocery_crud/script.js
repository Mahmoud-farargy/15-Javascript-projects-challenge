// target elements
const groceryForm = document.getElementById("groceryForm");
const groceryItems = document.getElementById("groceryItems");
const clearItemsBtn = document.getElementById("clearItems");
const groceryInput = document.getElementById("groceryInput");
const alertMsg = document.getElementById("alertMsg");

const todos = JSON.parse(window.localStorage.getItem("todos"));

if(todos && todos.length > 0){
    todos.forEach(e =>{
        handleCRUD({type: "add", val: e.text, justAdded: false, isCompleted: e.completed, id: e.id});
    });
}
// states
let inputVal = "";

function reset () {
    inputVal = "";
    groceryInput.value = "";
}

function alert (msg, mode) {
    if(msg){
        alertMsg.style.visibility = "visible";
        const innerParagraph = alertMsg.querySelector("p");
        innerParagraph.innerHTML = msg;
        switch(mode){
            case "success":
                alertMsg.classList.remove("error");
                alertMsg.classList.add("success");
            break;
            case "error":
                alertMsg.classList.remove("success");
                alertMsg.classList.add("error");
            break;
            default:
                alertMsg.classList.remove("error");
                alertMsg.classList.add("success");
        }  
        const timeout = setTimeout(() => {
            alertMsg.classList.remove("error");
            alertMsg.classList.remove("success");
            alertMsg.style.visibility = "hidden";
            window.clearTimeout(timeout); 
        }, 2500);
    }
}
function hideShowClearBtn (){
    if(groceryItems.children.length > 0){
        clearItemsBtn.parentElement.classList.add("show-element");
    }else{
        clearItemsBtn.parentElement.classList.remove("show-element");
    }
}

function updateLS () {
    const items = document.querySelectorAll(".grocery-item");
    const todos = [];
    items && items.length > 0 && items.forEach(x => {
        const txt = x.querySelector(".grocery-paragraph");
        todos.push({
            text: txt.innerText,
            completed: x.classList.contains("completed"),
            id: x.getAttribute("data-id"),
        });
    });
    console.log(todos);
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteItem (e){
    // delete Item
    const currElement = e.currentTarget.parentElement.parentElement;
    groceryItems.removeChild(currElement);
    // show notification
    alert("Item removed.","error");
    hideShowClearBtn();
    updateLS();
}

function completeness (e){
    const currElement = e.currentTarget;

    currElement.classList.toggle("completed");

    // edit in ls
    const lsData =  JSON.parse(window.localStorage.getItem("todos"));
    const currIndex = lsData.map(e => e.id).indexOf(currElement.parentElement.getAttribute("data-id"));

    if(currIndex >= 0){
        if(currElement.classList.contains("completed")){
            lsData[currIndex] = {...lsData[currIndex], completed: true};
        }else{
            lsData[currIndex] = {...lsData[currIndex], completed: false};
        }
    }
    console.log(lsData, currIndex, currElement.parentElement.getAttribute("data-id"));
   window.localStorage.setItem("todos", JSON.stringify(lsData));
}

function handleCRUD({type, val, justAdded, isCompleted, id}){
    switch(type){
        case "add": {
            if(val){
                // add element
                const element = document.createElement("LI");
                element.setAttribute("data-id", (!justAdded && id) ? id : new Date().getTime().toString(16));
                element.setAttribute("class", "grocery-item flex-row");
                element.innerHTML = `
                            <p class="grocery-paragraph">${val}</p>
                            <div class="tool-box">
                                <button class="delete-item"><i class="fas fa-trash"></i></button>
                            </div>
                `;
                isCompleted && element.classList.add("completed");
                const groceryParagraph = element.querySelector(".grocery-paragraph");
                const deleteBtn = element.querySelector(".delete-item");
                deleteBtn.addEventListener("click", deleteItem,false);
                groceryParagraph.addEventListener("click", completeness,false);
                groceryItems.appendChild(element);

               
                if(justAdded){
                     // reset
                    reset();
                    // show notification
                    alert(`${val} is added to the list.`, "success");
                }
                hideShowClearBtn();
                updateLS();
            }else{
                alert(`Please enter a value.`, "error");
            }
        }
        break;
        case "clear": {
            // clear items
            if(confirm("Are you sure you want to clear items?")){
                const items = document.querySelectorAll(".grocery-item");
                if(items && items.length > 0){
                    items.forEach(e => {
                        groceryItems.removeChild(e);
                    });
                    // show notification
                    alert(`List cleared.`, "error");   
                }
                hideShowClearBtn();
                window.localStorage.clear();
            }
        }
        break;
        default :{};
    }
}

// events
groceryInput.addEventListener("change", function(e) {
    console.log(e.target.value)
    inputVal = e.target.value;
});
groceryForm.addEventListener("submit", function(e){
    e.preventDefault();
    handleCRUD({type: "add", val: inputVal, justAdded: true});
}, false);
clearItemsBtn.addEventListener("click", function(){
    handleCRUD({type: "clear"});
}, false);
