//JavaScript Script Here...

const inputBox = document.getElementById("inputFild");
const listContainer = document.getElementById("list-container");

function addTodo() {
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write down a task");
        return;
    }

    const li = document.createElement("li");
    li.className = "itemStyle";
    li.innerHTML = `
    
<div class="icon-container">

<div class="col-1">
    <label>
        <input type="checkbox">
        <span>${task}</span>
    </label>
</div>


<div class="col-2">
          <span stye="@media(max-width: 758px){display: none;}"; class="edit-btn"><i class="fa-solid fa-pen-to-square icons"></i></span>
          <span class="delete-btn"><i class="fa-solid fa-xmark icons"></i></span>
</div>
</div>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";

    const checkbox = li.querySelector("input");
    const editBtn = li.querySelector(".edit-btn");
    const deleteBtn = li.querySelector(".delete-btn");
    const taskSpan = li.querySelector("span");

    checkbox.addEventListener("click", function () {
        li.classList.toggle("completed", checkbox.checked);
        updateTask();
    });

    editBtn.addEventListener("click", function () {
        const update = prompt("Edit task:", taskSpan.textContent);
        if (update !== null) {
            taskSpan.textContent = update;
            li.classList.remove("completed");
            checkbox.checked = false;
            updateTask();
        }
    });

    const completedTask = document.getElementById("completed-task");
    const unComplatedTask = document.getElementById("uncompleted-task");

    function updateTask() {
        const completedTasks = document.querySelectorAll(".completed").length;
        const unCompletedTasks =
            document.querySelectorAll("li:not(.completed)").length;

        completedTask.textContent = completedTasks;
        unComplatedTask.textContent = unCompletedTasks;
    }

    deleteBtn.addEventListener("click", function () {
        if (confirm("Are you sure you want to delete this task?")) {
            li.remove();
            updateTask();
        }
    });
}
