
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


        let newProjectFormContainer = document.createElement('form');
        newProjectFormContainer.classList.add('new-project-form-container');

        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Name: `;
        newProjectFormContainer.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.value = 'New Project Name';
        nameLabel.appendChild(nameInput);

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

        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        newProjectFormContainer.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        dueDateLabel.appendChild(dueDateInput);

        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        newProjectFormContainer.appendChild(creationDateLabel);
        let creationDate = new Date()
        creationDateLabel.innerHTML += `${creationDate.toDateString()}`;


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

        addButtonContainer.appendChild(newProjectFormContainer);


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

        const projectTodoDeleteButton = document.createElement('button');
        projectTodoDeleteButton.classList.add('project-todo-button');
        projectTodoDeleteButton.innerHTML = `Delete To-Do`;
        todoListButtonContiainer.appendChild(projectTodoDeleteButton);
















        let sampleTodo = todoObj();
        sampleTodo.init('sampleTrue with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], true);
        let sampleTodo2 = todoObj();
        sampleTodo2.init('sampleFalse with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], false);
        let sampleTodo3 = todoObj();
        sampleTodo3.init('False12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 5, 'notes', [], false);
        let sampleTodo4 = todoObj();
        sampleTodo4.init('True12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 5, 'notes', [], true);
     

        let sampleTodoList = [sampleTodo,sampleTodo2, sampleTodo3, sampleTodo4];


        // XXXUPDATEXXX change sampleTodoList to take todoListInput
        let projectTodoList = generateTodoListContainer(sampleTodoList);
        todoListContainer.appendChild(projectTodoList[0]);
        const todoListUncompleted = projectTodoList[1];
        const todoListCompleted = projectTodoList[2];
        // XXXUPDATEXXX


   

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


        return [finishedDiv, projectEditButton, nameContainer, projectTodoAddButton, projectTodoDeleteButton, todoListUncompleted, todoListCompleted];

    }

    const generateTodoDiv = (todo) => {
        const todoDiv = document.createElement('div'); 
        todoDiv.classList.add('todo-element-container');


        // console.log(todo.getTitle());


        if(todo.getComplete()) {
            todoDiv.classList.add('todo-completed');
        } else {
            todoDiv.classList.add('todo-incomplete');
        }

        // If todo.completed == true, set classlist of new div element
        // set todoDiv name length to cap at maximum length of viewport area
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

        // Attach a reference to its completed div within each todoObj that get's parsed in this method (which should be all of them)
        todo.setTodoDiv(todoDiv);


        return todoDiv;
    }

    // Takes a todoList[] of todoObj's and creates a suitable, finished, project-todo-list
    const generateTodoListContainer = (todoListArray) => {

        const projectTodoList = document.createElement('div');
        projectTodoList.classList.add('project-todo-list');

        const todoList = document.createElement('div');
        todoList.classList.add('todo-list');
        
        const todoListCompleted = document.createElement('div');
        todoListCompleted.classList.add('todo-list', 'todo-list-completed');

        projectTodoList.appendChild(todoList);
        projectTodoList.innerHTML += '--- Completed ---';
        projectTodoList.appendChild(todoListCompleted);

        // Reinstantiating the reference to todoList via querySelector - using innerHTML flushes the references 
        const todoListReference = projectTodoList.querySelector('.todo-list');

        // Logic for creating and parsing todoListArray elements, using 
        if(todoListArray) {

            todoListArray.forEach(element => {

                let tempDiv = generateTodoDiv(element);
            
                if(element.getComplete()){
                    // console.log("Element's getComplete() returned True");
                    todoListCompleted.appendChild(tempDiv);
                } else {
                    // console.log("Element's getComplete returned False")
                    // console.log(todoListReference);
                    todoListReference.appendChild(tempDiv);
                }
            });
        }


        console.log(todoListReference);

        return [projectTodoList, todoListReference, todoListCompleted];

    }

    const generateProjectEditPane = (targetProject) => {

        // console.log(`You clicked the editProject button targeting the project: `);
        // console.log(targetProject.getInfo());

        const editPane = document.createElement('div');
        editPane.classList.add('project-edit-pane');

        // editPane.innerHTML = targetProject.getInfo();

        const editTitle = document.createElement('p');
        editTitle.classList.add('edit-project-title-text');
        editTitle.innerHTML = `Edit Project`;
        editPane.appendChild(editTitle);

        // Header Text
        const editProjectNameContainer = document.createElement('div');
        editProjectNameContainer.classList.add('edit-project-name-container');
        editPane.appendChild(editProjectNameContainer);

        // Name Input
        let nameLabel = document.createElement('label');
        nameLabel.innerHTML = `Name: `;
        editProjectNameContainer.appendChild(nameLabel);
        let nameInput = document.createElement('input');
        nameInput.value = targetProject.getProjectName();
        nameLabel.appendChild(nameInput);

        // Priority Slider
        let priorityLabel = document.createElement('label');
        priorityLabel.innerHTML = `Priority: `;
        priorityLabel.classList.add ("edit-project-priority-input");
        editPane.appendChild(priorityLabel);
        let priorityInput = document.createElement('input');
        priorityInput.type = 'range';
        priorityInput.max = 5;
        priorityInput.min = 1;
        priorityInput.value = targetProject.getProjectPriority();
        priorityLabel.appendChild(priorityInput);
        let priorityOutput = document.createElement('output');
        priorityOutput.value = priorityInput.value;
        priorityInput.oninput = () => {priorityOutput.value = priorityInput.value};
        priorityLabel.appendChild(priorityOutput);

        // Due Date
        let dueDateLabel = document.createElement('label');
        dueDateLabel.innerHTML = `Due Date: `;
        editPane.appendChild(dueDateLabel);
        let dueDateInput = document.createElement('input');
        dueDateInput.type = 'date';
        dueDateInput.required = true;
        // dueDateInput.value = "2021-02-02";
        let tempDueDate = targetProject.getProjectDueDate()
        // tempDueDate.setDate(tempDueDate.getDate() - 1);
        tempDueDate = tempDueDate.getTime();
        dueDateInput.valueAsNumber = tempDueDate;
        dueDateLabel.appendChild(dueDateInput);

        // Creation Date
        let creationDateLabel = document.createElement('label');
        creationDateLabel.innerHTML = `Created On: `;
        editPane.appendChild(creationDateLabel);
        let creationDateInput = document.createElement('input')
        creationDateInput.type = 'date';
        creationDateInput.required = true;
        let tempCreationDate = targetProject.getProjectCreationDate();
        creationDateInput.valueAsDate = tempCreationDate;
        creationDateLabel.appendChild(creationDateInput);

        
        // Age
        let ageLabel = document.createElement('label');
        ageLabel.innerHTML = `Age: `;
        editPane.appendChild(ageLabel)

        const ageMillis = (Date.now() - targetProject.getProjectCreationDate());
        // console.log(`ageMillis: ${ageMillis}`);
        const seconds = ageMillis / 1000;
        // console.log(`Seconds: ${seconds}`);
        let totalMinutes = seconds / 60;
        // console.log(`TotalMinutes: ${totalMinutes}`)
        // console.log(`TotalMinutes.toFixed: ${totalMinutes.toFixed()}`);
        let days = totalMinutes.toFixed() / (60*24);
        // console.log(`Days: ${days}`);
        // console.log(`Days.toFixed: ${days.toFixed()}`);
        totalMinutes -= ((60*24) * days.toFixed());
        // console.log(`new TotalMinutes: ${totalMinutes}`);
        // console.log(`new TotalMinutes.toFixed: ${totalMinutes.toFixed()}`);
        let hours = totalMinutes / 60;
        // console.log(`Hours: ${hours}`);
        // console.log(`Hours.toFixed: ${hours.toFixed()}`);
        totalMinutes -= (hours.toFixed() * 60); 
        // console.log(`newNEW TotalMinutes: ${totalMinutes}`);
        // Adjusting to readable strings
        days = days.toFixed();
        hours = hours.toFixed();
        totalMinutes = totalMinutes.toFixed();       

        // console.log(`----------------`);
        // console.log(ageMillis);
        // console.log(`Seconds: ${seconds}`);
        // console.log(`TotalMinutes: ${totalMinutes}`);
        // console.log(`Hours: ${hours}`);
        // console.log(`Days: ${days}`);
        // console.log(`----------------`)

        let age;
        if (ageMillis > 86400000 ) {
            age = (days - 1) + " Days"; // Days - 1 because the above line days = days.toFixed() rounds up. This way, you don't create a project yesterday that's already 2 days old when viewed today
        } else {
            age = hours + " Hours, " + totalMinutes + " Minutes";
        }
        
        ageLabel.innerHTML += age;

        // Save, Cancel, Delete Buttons
        let editProjectButtonContainer = document.createElement('div');
        editProjectButtonContainer.classList.add('edit-project-button-container')
        let saveButton = document.createElement('button');
        saveButton.innerHTML = `Save`;
        // changing the button's type overrides the default Save Button functionality of the form element to NOT REDIRECT with the form element, aka reloading the page
        saveButton.type = 'button';
        let cancelButton = document.createElement('button');
        cancelButton.innerHTML = `Cancel`;
        editProjectButtonContainer.appendChild(saveButton);
        editProjectButtonContainer.appendChild(cancelButton);
        editPane.appendChild(editProjectButtonContainer);

        let deleteProjectButton = document.createElement('button');
        deleteProjectButton.innerHTML = 'Delete';
        deleteProjectButton.classList.add('delete-button');
        deleteProjectButton.type = 'button';
        editPane.appendChild(deleteProjectButton);


        let savedInputs = [nameInput, priorityInput, dueDateInput, creationDateInput];
        // console.log(savedInputs);
        

        return [editPane, priorityInput, priorityLabel, saveButton, cancelButton, deleteProjectButton, savedInputs ] ;

    }

    const generateProjectAddTodoPane = (targetProject) => {

        const addTodoPane = document.createElement('div');
        addTodoPane.classList.add('project-add-todo-pane');
        
        // Title
        const titleLabel = document.createElement('label');
        titleLabel.innerHTML = 'Name: ';
        titleLabel.classList.add('project-add-todo-name-label');
        addTodoPane.appendChild(titleLabel);
        const titleInput = document.createElement('input');
        titleInput.classList.add('project-add-todo-name-input');
        titleLabel.appendChild(titleInput);

        // Description
        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerHTML = `Description: `;
        descriptionLabel.classList.add('project-add-todo-description-label');
        addTodoPane.appendChild(descriptionLabel);
        const descriptionInput = document.createElement('input');
        descriptionInput.classList.add('project-add-todo-description-input');
        descriptionLabel.appendChild(descriptionInput);
        
        // Priority
        let priorityLabel = document.createElement('label');
        priorityLabel.innerText = `Priority: `;
        priorityLabel.id = "projct-add-todo-priority-input";
        addTodoPane.appendChild(priorityLabel);
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


        // addTodoPane.innerHTML += targetProject.getInfo();



        return [addTodoPane, titleInput, descriptionInput, priorityLabel, priorityInput];

    }

    const generateProjectDeleteTodoPane = (targetProject) => {
        const deleteTodoPane = document.createElement('div');
        deleteTodoPane.classList.add('project-delete-todo-pane');
        
        
        deleteTodoPane.innerHTML = targetProject.getInfo();



        return deleteTodoPane;
    }



    return {
        getInfo,
        generateProjectContainerDiv,
        generateProjectContainerAddButtonMenu,
        generateProjectPane,
        generateTodoDiv,
        generateTodoListContainer,
        generateProjectEditPane,
        generateProjectAddTodoPane,
        generateProjectDeleteTodoPane,
        
    }

}

export default displayController;