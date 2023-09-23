// Create a class for managing the to-do list

class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {                                    //try - catch statement
        try {
            if (typeof task !== 'string') {
                throw new Error('Task must be a string.');
            }

            this.tasks.push(task);
        } catch (error) {
            console.error(`Error adding task: ${error.message}`);
        }
    }
    removeTask(task) {
        try {
            if (typeof task !== 'string') {
                throw new Error('Task must be a string.');
            }

            const index = this.tasks.indexOf(task);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            } else {
                console.error('Task not found.');
            }
        } catch (error) {
            console.error(`Error removing task: ${error.message}`);
        }
    }
    displayTasks() {
        try {
            const taskListElement = document.getElementById("taskList");
            taskListElement.innerHTML = "";

            this.tasks.forEach((task) => {
                const li = document.createElement("li");
                li.textContent = task;

                // Add a button to remove the task
                const removeButton = document.createElement("button");
                removeButton.textContent = "Remove";
                removeButton.addEventListener("click", () => {
                    try {
                        this.removeTask(task);
                        this.displayTasks();
                    } catch (error) {
                        console.error(`Error removing task: ${error.message}`);
                    }
                });

                li.appendChild(removeButton);
                taskListElement.appendChild(li);
            });
        } catch (error) {
            console.error(`Error displaying tasks: ${error.message}`);
        }
    }
}

// Event listeners
try {
    const todoList = new ToDoList();
    const addTaskButton = document.getElementById("addTaskButton");

    addTaskButton.addEventListener("click", () => {
        const taskInput = document.getElementById("taskInput");
        const task = taskInput.value.trim();

        if (task !== "") {
            try {
                todoList.addTask(task);
                todoList.displayTasks();
                taskInput.value = "";
            } catch (error) {
                console.error(`Error adding task: ${error.message}`);
            }
        }
    });
} catch (error) {
    console.error(`Error initializing To-Do List: ${error.message}`);
}
