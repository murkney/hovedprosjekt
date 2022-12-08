export default function Tasks() {

	let taskStorage = localStorage.getItem('');

	window.addEventListener('load', taskList);
	// taskStorage.localStorage.getItem("tasks", input.value);

	function taskList() {
		const form = document.querySelector("#new-task-form");
		const input = document.querySelector("#new-task-input");
		const listElement = document.querySelector("#tasks");

		if (form !== null) {

			form.addEventListener('submit', addTask);
			
			function addTask(event) {
				event.preventDefault();
	
				const task = input.value;
				
				localStorage.setItem("tasks", input.value);

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
			};
		};
	};
};

