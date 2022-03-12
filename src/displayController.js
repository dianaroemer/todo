
import editButton from './assets/editButton.png';
import todoObj from './todoObj';

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

        const todoListContainer0 = document.createElement('div');
        todoListContainer0.classList.add('todo-list-container0');

        let sampleTodo = todoObj();
        sampleTodo.init('sampleTodo with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], true);
        let sampleTodo2 = todoObj();
        sampleTodo2.init('sampleTodo with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], false);
        let sampleTodo3 = todoObj();
        sampleTodo3.init('12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 5, 'notes', [], false);
        let sampleTodo4 = todoObj();
        sampleTodo4.init('12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 5, 'notes', [], true);


        // sampleTodo.init('sampleTodo', 'description', new Date(), new Date(), 5, 'notes', [], false);
        console.log(sampleTodo.getInfo());
        
        let newTodoElement = generateTodoDiv(sampleTodo);
        newTodoElement.classList.add('todo-element-container');
        let newTodoElement2 = generateTodoDiv(sampleTodo2);
        newTodoElement2.classList.add('todo-element-container');
        let newTodoElement3 = generateTodoDiv(sampleTodo3);
        newTodoElement3.classList.add('todo-element-container');
        let newTodoElement4 = generateTodoDiv(sampleTodo4);
        newTodoElement4.classList.add('todo-element-container');


        
        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        // todoList.innerHTML += `
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>
        // 1
        // <br>`
        todoListContainer.appendChild(todoList);
        


        // Test line here
        todoList.appendChild(newTodoElement);
        todoList.appendChild(newTodoElement2);
        todoList.appendChild(newTodoElement3);
        todoList.appendChild(newTodoElement4);


        // Test line here



        todoListContainer.innerHTML += `--- Completed ---`;

        const todoListCompleted = document.createElement('div')
        todoListCompleted.classList.add('todo-list');
        todoListCompleted.classList.add('todo-list-completed');
        todoListCompleted.innerHTML += `You haven't completed any tasks!`
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

    const generateTodoDiv = (todo) => {
        const todoDiv = document.createElement('div'); 

        if(todo.getComplete()) {
            todoDiv.classList.add('todo-completed');
        } else {
            todoDiv.classList.add('todo-incomplete');
        }

        // If todo.completed == true, set classlist of new div element
        // set todoDiv name length to cap at maximum length of viewport area
        console.log(todo.getTitle());
        const checkbox = document.createElement('input');
        checkbox.classList.add('todo-div-checkbox');
        checkbox.type = 'checkbox';
        // console.log(todo.getComplete());
        if(todo.getComplete()) {
            checkbox.setAttribute('checked', "");
        }
        todoDiv.appendChild(checkbox);

        const todoDivName = document.createElement('label');
        todoDivName.classList.add('todo-div-name');

        // Checking title length and trimming down. Had significant difficulty getting overflow-x: hidden to work in CSS, so decided to just manually trim title down and add "..." to end to indicate a longer title
        let title = todo.getTitle();
        let newTitle = "";
        if(title.length > 34){
            newTitle = "";
            for (let i = 0; i < 34; i++) {
                newTitle += title.charAt(i);
            }
            newTitle += "...";
        } else {
            newTitle = title;
        }
        todoDivName.innerHTML = newTitle;
        todoDiv.appendChild(todoDivName);


        let todoEditButton = document.createElement('img');
        todoEditButton.src = editButton;
        todoEditButton.classList.add('project-edit-button', 'todo-edit-button')
        todoDiv.appendChild(todoEditButton);


        return todoDiv;

    }



    return {
        getInfo,
        generateProjectContainerDiv,
        generateProjectContainerAddButtonMenu,
        generateProjectPane,
        generateTodoDiv,
        

    }

}

export default displayController;