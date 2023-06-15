const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    const inputBox = document.getElementById("input-box");
    const deadlineInput = document.getElementById("deadline-input");
    const prioritySelect = document.getElementById("priority-select");
    const taskName = inputBox.value;
    const deadline = deadlineInput.value;
    const priority = prioritySelect.value;

    if (taskName === '') {
        alert("Why pressing without entering anything :(");
    } else {
        let li = document.createElement("li");
        li.innerHTML = taskName + " (Priority: " + priority + ", Deadline: " + deadline + ")";
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    deadlineInput.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

setInterval(() => {
    let time = document.getElementById("time");
     let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
    },1000
    )

