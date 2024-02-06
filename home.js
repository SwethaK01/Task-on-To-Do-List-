function addTask() {
    var taskInput = document.getElementById("taskInput");
    var deadlineInput = document.getElementById("deadlineInput");
    var ongoingTasks = document.getElementById("ongoingTasks");
    var completedTasks = document.getElementById("completedTasks");
    var deletedTasks = document.getElementById("deletedTasks");

    if (taskInput.value.trim() === "") {
        alert("Please enter a valid task.");
        return;
    }

    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
        if (checkbox.checked) {
            li.style.textDecoration = "line-through";

            completedTasks.appendChild(li);
        } else {
            li.style.textDecoration = "none";

            ongoingTasks.appendChild(li);
        }
    };

    li.appendChild(checkbox);

    li.appendChild(document.createTextNode(taskInput.value + " (Deadline: " + deadlineInput.value + ")"));

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.onclick = function () {
      
        deletedTasks.appendChild(li);
        ongoingTasks.removeChild(li); 
    };

    li.appendChild(deleteButton);

   
    ongoingTasks.appendChild(li);

    taskInput.value = "";
    deadlineInput.value = "";
}
