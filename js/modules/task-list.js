export default function Tasks() {
	window.addEventListener('load', taskList);

	function taskList() {
		const form = document.querySelector("#new-task-form");
		const input = document.querySelector("#new-task-input");
		const listElement = document.querySelector("#tasks");

		if (form !== null) {

			form.addEventListener('submit', addTask);
			
			function addTask(event) {
				event.preventDefault();
	
				const task = input.value;
	
				if (!task) {
					alert("Please fill out the task");
					return;
				};

				// Creates DIV elements, some with Attributes:
	
				const taskElement = document.createElement("div");
				taskElement.classList.add("task");
	
				const taskContentElement = document.createElement("div");
				taskContentElement.classList.add("content");
	
				taskElement.appendChild(taskContentElement);
	
				const taskInputElement = document.createElement("input");
				taskInputElement.classList.add("text");
				taskInputElement.type = "text";
				taskInputElement.value = task;
				taskInputElement.setAttribute("readonly", "readonly");
	
				taskContentElement.appendChild(taskInputElement);
	
				const taskActionsElement = document.createElement("div");
				taskActionsElement.classList.add("actions");
	
				taskElement.appendChild(taskActionsElement);
				listElement.appendChild(taskElement);
	
				input.value = "";
				
				// Edit button:

				const taskEditElement = document.createElement("button");
				taskEditElement.classList.add("edit");
				taskEditElement.innerHTML = "Edit";

				taskActionsElement.appendChild(taskEditElement);

				taskEditElement.addEventListener('click', toggleEditButton); 
				
				function toggleEditButton() {
					if (taskEditElement.innerText.toLowerCase() == 
					"edit") {
						taskInputElement.removeAttribute("readonly");
						taskInputElement.focus();
						taskEditElement.innerText = "Save";
					} else {
						taskInputElement.setAttribute("readonly", "readonly");
						taskEditElement.innerText = "Edit";
					}
				};

				// Delete button:

				const taskDeleteElement = document.createElement("button");
				taskDeleteElement.classList.add("delete");
				taskDeleteElement.innerHTML = "Delete";

				taskActionsElement.appendChild(taskDeleteElement);
	
				taskDeleteElement.addEventListener('click', toggleDeleteButton);
				
				function toggleDeleteButton() {
					listElement.removeChild(taskElement);
				};

				// Local storage:

				// let storeLocally = storeTasksLocally();
				// storeLocally.localStorage.setItem(key, value);

				// function storeTasksLocally() {
				// 	const key = 'task_list'
				// 	const value = JSON.stringify(task);
					
				// 	window.localStorage.setItem(key, value);
				// };

				// let getStorage = getLocalTasks();
				// getStorage.localStorage.getItem();

				// function getLocalTasks() {
				// 	const key = 'task_list'
				// 	const tasksAsString = window.localStorage.getItem(key, value);

				// 	if (tasksAsString) {
				// 		return JSON.parse(tasksAsString);
				// 	} else {
				// 		return [];
				// 	};
				// };
			};
		};
	};
};

