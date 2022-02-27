
import editButton from './assets/editButton.png';

// This is the display controller. There is only one displayController, and it manages the CRUD of all html elements. This controller should only receive information from logicController (which sends commands to CRUD both displayController's html elements and the projectObj/todoObj information). displayController needs to generate a new element, then return that element back up to logicController, which should pass that element along to eventController for assigning new EventHandler's to div's that need them

const displayController = () => {

    // I generate divs

    const getInfo = () => {
        return `I am displayController. My functions are as follows: 
        generateProjectContainerDiv

        `; 
    }

    const generateProjectContainerDiv = () => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-container');

        let addButton = document.createElement('button');
        addButton.innerHTML = " + ";
        addButton.classList.add('add-button')
        finishedDiv.appendChild(addButton);

        return [finishedDiv, addButton];
    }

    const generateProjectContainerAddButtonMenu = () => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-container-add-menu');

        let addButtonContainer = document.createElement('div');
        addButtonContainer.classList.add('project-container-add-menu-container');
        addButtonContainer.innerHTML = `Add New Project`;
        finishedDiv.appendChild(addButtonContainer);

        // name, due date, priority

        // let nameContainer = document.createElement('div');
        // nameContainer.classList.add('new-project-name-container');
        // nameContainer.innerHTML = `New Project Name: `;

        // let nameField = document.createElement('form');
        // nameField.classList.add('new-project-name-field');

        // nameContainer.appendChild(nameField);
        // addButtonContainer.appendChild(nameContainer);

        let newProjectFormContainer = document.createElement('form');
        newProjectFormContainer.classList.add('new-project-form-container');

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Name: `;
        newProjectFormContainer.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.value = 'New Project Name';
        nameLabel.appendChild(nameInput);

        // newProjectFormContainer.innerHTML += `<br>`;

        let priorityLabel = document.createElement('label');
        priorityLabel.innerHTML = `Priority: `;
        priorityLabel.id = "new-project-priority-input";
        newProjectFormContainer.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        priorityInput.value = 3;
                priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        // newProjectFormContainer.innerHTML += `<br>`;

        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        newProjectFormContainer.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        dueDateLabel.appendChild(dueDateInput);

        // newProjectFormContainer.innerHTML += `<br>`;

        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        newProjectFormContainer.appendChild(creationDateLabel);
        let creationDate = new Date()
        creationDateLabel.innerHTML += `${creationDate.toDateString()}`;

        // newProjectFormContainer.innerHTML += `<br>`;
        // newProjectFormContainer.innerHTML += `<br>`;

        let addProjectButtonContainer = document.createElement('div');
        addProjectButtonContainer.classList.add('new-project-button-container')
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel`;
        addProjectButtonContainer.appendChild(saveButton);
        addProjectButtonContainer.appendChild(cancelButton);

        newProjectFormContainer.appendChild(addProjectButtonContainer);

        // creationDateLabel.appendChild(creationDateInput);
        // <input type="date" value="2017-06-01">

        addButtonContainer.appendChild(newProjectFormContainer
            );



        return [finishedDiv, nameInput, priorityInput, priorityLabel, dueDateInput, creationDate, saveButton, cancelButton];
    }

    const generateProjectPane = (nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput) => {

        let finishedDiv = document.createElement('div');
        finishedDiv.classList.add('project-pane');

        // finishedDiv.innerHTML = ` I am a new ProjectPane, here are the values passed to me:
        // nameInput: ${nameInput}
        // priorityInput: ${priorityInput}
        // dueDateInput: ${dueDateInput}
        // creationDateInput: ${creationDateInput}
        // todoListInput: ${todoListInput}`;

        let nameContainer = document.createElement('div');
        nameContainer.classList.add('project-name-container');

        let projectName = document.createElement('div');
        projectName.classList.add('project-name');
        projectName.innerHTML = `${nameInput}`;
        nameContainer.appendChild(projectName);

        let projectEditButton = document.createElement('img');
        projectEditButton.src = editButton;
        projectEditButton.classList.add('project-edit-button');
        nameContainer.appendChild(projectEditButton);

        finishedDiv.appendChild(nameContainer);

        // todoList container and Elements
        const todoListContainer = document.createElement('div');
        todoListContainer.classList.add('project-todo-element-container');
        finishedDiv.appendChild(todoListContainer);

        const todoListButtonContiainer = document.createElement('div');
        todoListButtonContiainer.classList.add('project-todo-button-container');
        todoListContainer.appendChild(todoListButtonContiainer);

        const projectTodoAddButton = document.createElement('button');
        projectTodoAddButton.classList.add('project-todo-button');
        projectTodoAddButton.innerHTML = `Add To-Do`;
        todoListButtonContiainer.appendChild(projectTodoAddButton);

        const projectTodoCancelButton = document.createElement('button');
        projectTodoCancelButton.classList.add('project-todo-button');
        projectTodoCancelButton.innerHTML = `Delete To-Do`;
        todoListButtonContiainer.appendChild(projectTodoCancelButton);

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        todoListContainer.appendChild(todoList);

        todoListContainer.innerHTML += `--- Completed ---`;

        const todoListCompleted = document.createElement('div')
        todoListCompleted.classList.add('todo-list');
        todoListCompleted.classList.add('todo-list-completed');
        todoListContainer.appendChild(todoListCompleted);


        const dateContainer = document.createElement('div');
        dateContainer.classList.add('project-date-container');
        finishedDiv.appendChild(dateContainer);

        const creationDate = document.createElement('div')
        creationDate.classList.add('project-creation-date');
        // functionality converting creationDate to readable format
        let readableCreationDateInput = creationDateInput.toDateString();
        creationDate.innerHTML = readableCreationDateInput;
        dateContainer.appendChild(creationDate);
        
        const age = document.createElement('div')
        age.classList.add('project-age');
        // functionality calculating age of project
        dateContainer.appendChild(age);

        const dueDate = document.createElement('div');
        dueDate.classList.add('project-due-date');
        // functionality converting dueDate to readable format
        let readableDueDateInput = dueDateInput.toDateString();
        dueDate.innerHTML = readableDueDateInput;
        dateContainer.appendChild(dueDate);


        return [finishedDiv, projectEditButton, nameContainer, projectTodoAddButton, projectTodoCancelButton, todoList, todoListCompleted];

    }



    return {
        getInfo,
        generateProjectContainerDiv,
        generateProjectContainerAddButtonMenu,
        generateProjectPane,
        

    }

}

export default displayController;