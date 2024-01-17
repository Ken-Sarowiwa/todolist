// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById("new-task");
    const taskText = newTaskInput.value.trim();

    // Check if the input is not empty
    if (taskText === "") {
        alert("Please enter a valid task.");
        return;
    }

    const tasksContainer = document.getElementById("tasks-container");

    // Create a new task element
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    // Create a checkbox for the new task
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", toggleCompleted);

    // Create a span element for the task text
    const taskTextElement = document.createElement("span");
    taskTextElement.innerText = taskText;

    // Append the checkbox and task text to the task div
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskTextElement);

    // Append the new task div to the tasks container
    tasksContainer.appendChild(taskDiv);

    // Clear the input field after adding a task
    newTaskInput.value = "";
}

// Function to toggle the completed status of a task
function toggleCompleted(event) {
    const checkbox = event.target;
    const taskTextElement = checkbox.nextSibling;

    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Apply completed styling if checked
        taskTextElement.classList.add("completed");
    } else {
        // Remove completed styling if unchecked
        taskTextElement.classList.remove("completed");
    }
}
