const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const addButton = document.querySelector(".btn");

addButton.addEventListener("click", addTask);

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});



function addTask() {
    const inputValue = inputBox.value;

    if (inputValue === '') {
        alert("Write Something in the box !!!");
    } 
    else {
        let li = document.createElement("li");
        li.innerHTML = inputValue;
        listContainer.appendChild(li);
        

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }

    inputBox.value = "";
}




listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked"); //it will remove the checked class name if clicked on any list items 
        saveData()
    }
    else if(e.target.tagName === "SPAN"){  //it will remove the span class name id clicked on span tag
        e.target.parentElement.remove();
        saveData()
    }
},false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


showTask();
 