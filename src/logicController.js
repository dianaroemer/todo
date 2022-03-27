// I am the logicController, I decide logic whenever events are fired by their eventHandler

// Lessons learned from using Dates in my project
// 1. Don't use Dates
// 2. If you have to use dates, don't use them in input forms
// 3. If you have to use them in input forms, use everything in milliseconds and only convert to year/month/day for display purposes
// 4. Do you really have to use Dates? Really? Can we just... not?
// 5. For timezone inconsistencies when constructing Dates without specific times, try to use getTime() for milliseconds baseline, and adjust for getTimezoneOffset() when necessary

import projectContainerObj from './projectContainerObj.js';
import displayController from './displayController.js';
// import {eventController, attachAddButtonListener } from './eventController.js';
import eventController from './eventController.js';
import { te } from 'date-fns/locale';
import todoObj from './todoObj.js';
// import projectObj from './project.js';


function logicController() {

    let _projectContainer = projectContainerObj();
    let _displayController = displayController();
    let _contentDiv = document.getElementById('content'); //_contentDiv should have its own getters and setters for typechecking and safety, but is only invoked and instantiated once on page init to be populated with generateProjectContainer(), so it gets a pass here
    let _eventController = eventController(this);

    


    const getInfo = () => {
        return `I am logicController.getInfo()
        These are my values:
        _projectContainer: ${_projectContainer};
        _contentDiv: ${_contentDiv};
        `;
    }
    this.getInfo = getInfo;



    const init = (newProjectContainerObj) => {
        _projectContainer = newProjectContainerObj;
    }

    const generateProjectContainerObj = () => {

        console.log('second test')

        const projectContainerDivArr = _displayController.generateProjectContainerDiv(); 

        const projectContainerDiv = projectContainerDivArr[0]
        const addButton = projectContainerDivArr[1];
        _projectContainer.init([], projectContainerDiv, addButton, false);;
        _eventController.attachProjectContainerAddButtonListener(addButton);

        _contentDiv.appendChild(projectContainerDiv);
    }

    const getProjectContainer = () => {
        return _projectContainer;
    }
    this.getProjectContainer = getProjectContainer;

    // In a perfect world, this setter function typechecks newProjectContainer to always receive a projectContainerObj from projectContainerObj. For the purpose of this project, it should only be invoked once when the page is first loaded and not changed from that initial container - even if no projects exist, the container should still be present. 
    const setProjectContainer = (newProjectContainer) => {
        _projectContainer = newProjectContainer;
    }
    this.setProjectContainer = setProjectContainer;

    const _toggleProjectContainerAddButtonMenu = () => {

        // console.log(`toggle projectContainerObj's addButtonMenu`);

        // console.log('Check if the menu is in a state to be opened');
        if( !_projectContainer.getAddButtonMenu()) {
            _projectContainer.toggleAddButtonMenu();
            // console.log(_projectContainer.getAddButtonMenu());

            let _addMenu = _displayController.generateProjectContainerAddButtonMenu();
            _projectContainer.getProjectContainerDiv().appendChild(_addMenu[0]);

            // Add event handlers to priority color slider, and buttons, keep reference of div objects referring to input.value


            // console.log('addButtonMenu is in a state to be opened, go to displayController and build the div necessary to populate the menu');

            // Adding Event listeners to appropriate objects in addButtonMenu
            // return [finishedDiv, nameInput, priorityInput, priorityLabel, dueDateInput, creationDate, saveButton, cancelButton]
            
            // console.log('Adding eventlistener to cancel button');
            _eventController.attachAddProjectCancel(_addMenu[7], _addMenu[0]);

            // console.log('Adding eventListener to priority slider');
            _eventController.attachAddProjectPrioritySlider(_addMenu[2], _addMenu[3]);

            // console.log('Adding functionality to save button');
            _eventController.attachAddProjectSave(_addMenu[6], _addMenu);




        } else {
            console.log('_projectContainerMenu is true, and is already open: _projectContainer._addButtonMenu: ' + _projectContainer.getAddButtonMenu());
        }
        return true;
    }
    this._toggleProjectContainerAddButtonMenu = _toggleProjectContainerAddButtonMenu;

    const _addProjectSaveButton = (values) => {
        // values is the _addMenu array created in _toggleProjectContainerAddButtonMenu
        
        // get values from appropriate input fields
        // Do thing to values
        // close menu

        // console.log(values);

        // let sampleDiv = document.createElement('div');
        // sampleDiv.classList.add('project-pane');
        // _projectContainer.getProjectContainerDiv().appendChild(sampleDiv);

        const nameInput = values[1].value;
        const priorityInput = values[2].value;
        // console.log(values[4].value)
        let dueDateInput;
        if ( values[4].value ) {
            dueDateInput = new Date(values[4].value);
            dueDateInput.setDate(dueDateInput.getDate() + 1);
        } else {
            dueDateInput = new Date();
        }
        // console.log(dueDateInput);
        const creationDateInput = values[5];
        // const projectDivInput = sampleDiv;

        // console.log(`I am Save button, you clicked me. Here's what I am returning: 
        // nameInput: ${nameInput}
        // priorityInput: ${priorityInput}
        // dueDateInput: ${dueDateInput}
        // creationDate: ${creationDateInput}`)
        
        _generateProject(nameInput, creationDateInput, dueDateInput, priorityInput, []);


        // Do the thing to instantiate a new project here

        // // Generate appropriate projectPane div here
        // //  ------- XXXUPDATEXXX -------
               
        // let todoListInput = [];
        // let projectPaneValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput);

        // // console.log(_projectContainer.getInfo());
        // _projectContainer.createProject( nameInput, creationDateInput, dueDateInput, priorityInput, projectDivInput );


// projectNameInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, todoListInput

        // Closing the addProject Menu
        _projectContainer.toggleAddButtonMenu();
        _projectContainer.getProjectContainerDiv().removeChild(values[0]);

    }
    this._addProjectSaveButton = _addProjectSaveButton;

    const _addProjectCancelButton = (div) => {
        // Toggle menu bool to closed
        // Close menu
        if( _projectContainer.getAddButtonMenu() ) {
            // console.log(`Current state of ${_projectContainer.getAddButtonMenu()}`);
            _projectContainer.toggleAddButtonMenu();
            _projectContainer.getProjectContainerDiv().removeChild(div);
            return true;
        } else {
            return false;
        }
    }
    this._addProjectCancelButton = _addProjectCancelButton;
    
    const _updatePriorityColor = (targetDiv, newValue) => {
        // console.log(newValue);
        // console.log(`I am _updatePriorityColor! I have been called on targetDiv: ${targetDiv} with newValue: ${newValue}`)
        // console.log(typeof newValue);

        // Typechanging newValue to a string to hit the switch statement's strict type checking
        // let newValueString = '';
        // newValueString = newValueString + newValue;

        targetDiv.classList.remove("one");
        targetDiv.classList.remove("two");
        targetDiv.classList.remove("three");
        targetDiv.classList.remove("four");
        targetDiv.classList.remove("five");

        switch(newValue) {
            case '1':
                targetDiv.classList.add("one");
                break;
            case '2':
                targetDiv.classList.add("two");
                break;
            case '3':
                targetDiv.classList.add("three");
                break;
            case '4':
                targetDiv.classList.add("four");
                break;
            case '5':
                targetDiv.classList.add("five");
                break;
        }

    }
    this._updatePriorityColor = _updatePriorityColor;

    const _updateTodoPriorityColor = (targetDiv, newValue) => {
        // console.log(newValue);
        // console.log(`I am _updatePriorityColor! I have been called on targetDiv: ${targetDiv} with newValue: ${newValue}`)
        // console.log(typeof newValue);

        // Typechanging newValue to a string to hit the switch statement's strict type checking
        // let newValueString = '';
        // newValueString = newValueString + newValue;

        targetDiv.classList.remove("one-todo");
        targetDiv.classList.remove("two-todo");
        targetDiv.classList.remove("three-todo");
        targetDiv.classList.remove("four-todo");
        targetDiv.classList.remove("five-todo");

        switch(newValue) {
            case '1':
                targetDiv.classList.add("one-todo");
                break;
            case '2':
                targetDiv.classList.add("two-todo");
                break;
            case '3':
                targetDiv.classList.add("three-todo");
                break;
            case '4':
                targetDiv.classList.add("four-todo");
                break;
            case '5':
                targetDiv.classList.add("five-todo");
                break;
        }

    }
    this._updateTodoPriorityColor = _updateTodoPriorityColor;

    const _generateProject = (nameInput, creationDateInput, dueDateInput, priorityInput, todoListInput) => {

        // Generate projectPane Div
        // Generate projectObj
        // Attach functionality to appropriate Div elements, tying them to projectObj values

        // Sample todoList for use in test - XXXUPDATEXXX
        let sampleTodo = todoObj();
        sampleTodo.init('sampleTrue with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 5, 'notes', [], true);
        let sampleTodo2 = todoObj();
        sampleTodo2.init('sampleFalse with a really long name that is supposed to overflow onto the next line, I really hope that everything works out okay, trim it correctly please!', 'description', new Date(), new Date(), 4, 'notes', [], false);
        let sampleTodo3 = todoObj();
        sampleTodo3.init('False12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 2, 'notes', [], false);
        let sampleTodo4 = todoObj();
        sampleTodo4.init('True12345678901234567890124567890123456789012345678901234578901234567890', 'description', new Date(), new Date(), 1, 'notes', [], true);


        let sampleTodoList = [sampleTodo,sampleTodo2, sampleTodo3, sampleTodo4];


        // XXXUPDATEXXX projectPaneDivValues to take todoListInput instead of sampleTodoList
        // Generate projectPane Div
        let projectPaneDivValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, sampleTodoList);
        _projectContainer.getProjectContainerDiv().appendChild(projectPaneDivValues[0]);
        // XXXUPDATEXXX See above

        // updatePriority color of projectPane
        _updatePriorityColor(projectPaneDivValues[2], priorityInput);

       
        // Generate projectObj
        let newProject = _projectContainer.createProject( nameInput, creationDateInput, dueDateInput, priorityInput,projectPaneDivValues[0], sampleTodoList );
        // XXXUPDATEXXX Remove sampleTodoList and replace with todoListInput when ready

        // Attach projectObj to _projectContainer._projectArr[]
        _projectContainer.addProject(newProject);


        // Attach functionality to appropriate Div elements, tying them to projectObj values
        newProject.setProjectDiv(projectPaneDivValues[0]);

        // attach projectEditButton functionality
        _eventController.attachProjectEditButton(projectPaneDivValues[1], newProject)

        // Attach todoButton functionality
        _eventController.attachProjectTodoAddButton(projectPaneDivValues[3], newProject);
        _eventController.attachProjectTodoDeleteButton(projectPaneDivValues[4], newProject);

        // Attach todoDiv Functionality
        console.log(newProject.getTodoList());
        newProject.getTodoList().forEach(element => {
            _eventController.attachTodoListeners(element, newProject);
        })
        // XXXUPDATEXXX Replace the above function to take toDo elements from below
        // todoListInput.forEach(element => {
        //     _eventController.attachTodoListeners(element, newProject);
        // })




    }
    this._generateProject = _generateProject;

    const _editProject = (targetProject) => {
        // console.log(`You clicked the _editProject button targeting the project: `);
        // console.log(targetProject.getInfo());

        // Toggle menuOpen
        if(targetProject.getProjectMenuOpen()) {
            console.log("Error! Edit Project menu is returning true, and is already open!");
            return;
        } else {
            targetProject.toggleProjectMenuOpen();
        }
        

        // Generate editProjectPane
        const editPane = _displayController.generateProjectEditPane(targetProject);



        targetProject.getProjectDiv().appendChild(editPane[0]);

        // Assign initial Priority Slider Color
        _updatePriorityColor(editPane[2], targetProject.getProjectPriority());

        // Attach Priority Slider functionality
        _eventController.attachAddProjectPrioritySlider(editPane[1], editPane[2]);
        // _updatePriorityColor(editPane[0], targetProject.getProjectPriority());


        // Attach eventListeners to Save, Cancel and Delete buttons
        const editProjectSaveButton = editPane[3];
        const editProjectCancelButton = editPane[4];
        const editProjectDeleteButton = editPane[5];
        const savedInputs = editPane[6];
        _eventController.attachProjectEditSaveButton(editProjectSaveButton, targetProject, savedInputs);
        _eventController.attachProjectEditCancelButton(editProjectCancelButton, targetProject);
        _eventController.attachProjectEditDeleteButton(editProjectDeleteButton, targetProject);




    }
    this._editProject = _editProject;

    const _editProjectSaveButton = (targetProject, savedValues) => {
        // console.log(`You clicked the Save button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());

        // On project save, close editPane, write new values to projectObj, update DOM values to match new projectObj values, toggleProjectMenuOpen()

        // console.log(`I have savedValues! Those are : `);
        // console.log(`Name: ${savedValues[0].value}`);
        // console.log(`Priority: ${toString(savedValues[1].value)}`);
        // console.log(`Due Date: ${savedValues[2].valueAsDate}`);
        // console.log(`Creation Date: ${savedValues[3].valueAsDate}`);


        // Write new values 
        targetProject.setProjectName(savedValues[0].value);
        targetProject.setProjectPriority(savedValues[1].value);


            // Write new dueDate if new dueDate !== oldDueDate values
            let newDueDate = savedValues[2].value;
            // console.log(`newDueDate: ${newDueDate}`); // format "2022-03-21"
            let oldDueDate = targetProject.getProjectDueDate();
            // console.log(`oldDueDate: ${oldDueDate}`);
            let oldDueDateString = `${oldDueDate.getFullYear()}-`
            if(oldDueDate.getMonth() + 1 < 10) {
                oldDueDateString += `0${oldDueDate.getMonth() + 1}-`
            } else {
                oldDueDateString += `${oldDueDate.getMonth() + 1}-`
            }
            if(oldDueDate.getDate() < 10) {
                oldDueDateString += `0${oldDueDate.getDate()}`
            } else {
                oldDueDateString += `${oldDueDate.getDate()}`
            }
            // console.log(`oldDueDateString: ${oldDueDateString}`);
            // console.log(`newDueDate: ${newDueDate} vs ${oldDueDateString}: oldDueDateString`);
            // console.log( newDueDate != oldDueDateString);
            if (newDueDate !== oldDueDateString ) {
                // console.log(`newDueDate !== oldDueDateString!`);
                // console.log(`Set new due date to ${newDueDate} with current time filled in!`);
                targetProject.setProjectDueDate(new Date(newDueDate));
            }

            // Write new creationDate if new creationDate !== oldCreationDate values
            let newCreationDate = savedValues[3].value;
            // console.log(`newCreationDate: ${newCreationDate}`); // format "2022-03-21"
            let oldCreationDate = targetProject.getProjectCreationDate();
            // console.log(`oldCreationDate: ${oldCreationDate}`);
            let oldCreationDateString = `${oldCreationDate.getFullYear()}-`
            if(oldCreationDate.getMonth() + 1 < 10) {
                oldCreationDateString += `0${oldCreationDate.getMonth() + 1}-`
            } else {
                oldCreationDateString += `${oldCreationDate.getMonth() + 1}-`
            }
            if(oldCreationDate.getDate() < 10) {
                oldCreationDateString += `0${oldCreationDate.getDate()}`
            } else {
                oldCreationDateString += `${oldCreationDate.getDate()}`
            }
            // console.log(`oldCreationDateString: ${oldCreationDateString}`);
            // console.log(`newCreationDate: ${newCreationDate} vs ${oldCreationDateString}: oldCreationDateString`);
            // console.log( newCreationDate != oldCreationDateString);
            if (newCreationDate !== oldCreationDateString ) {
                // console.log(`newCreationDate !== oldCreationDateString!`);
                // console.log(`Set new due date to ${newCreationDate} with current time filled in!`);
                targetProject.setProjectCreationDate(new Date(newCreationDate));
            }
       
        // console.log(` ----------- targetProject's new Data is: -------------`)
        // console.log(targetProject.getInfo());



        // Update DOM values to match new projectObj values
        let targetProjectDiv = targetProject.getProjectDiv();
        // console.log(targetProjectDiv);
            // Targeting name plate and adjusting nameplate priority
            let namePlateDiv = targetProjectDiv.firstChild
            // console.log(namePlateDiv);
            _updatePriorityColor(namePlateDiv, targetProject.getProjectPriority());
            let namePlateContentDiv = namePlateDiv.firstChild;
            // console.log(namePlateContentDiv);
            namePlateContentDiv.innerText = targetProject.getProjectName();

            // Targeting Project Date container 
            let projectDateContainerDiv = namePlateDiv.nextSibling.nextSibling;
            // console.log(projectDateContainerDiv);
            let projectCreationDateDiv = projectDateContainerDiv.firstChild;
            // Only change displayed date if the dates actually changed
            if (newCreationDate !== oldCreationDateString ) {
                
                let localizedCreationDate = targetProject.getProjectCreationDate();
                // console.log(localizedDueDate);
                // console.log(localizedDueDate.getTime());
                let timezoneOffset = localizedCreationDate.getTimezoneOffset();
                // console.log(timezoneOffset);
                // console.log(timezoneOffset * 60000);
                let newLocalizedCreationDate = localizedCreationDate.getTime() + (timezoneOffset * 60000);

                projectCreationDateDiv.innerText = (new Date(newLocalizedCreationDate)).toDateString();
            }
            let projectDueDateDiv = projectDateContainerDiv.lastChild;
            // Only change displayed date if the dates actually changed
            if (newDueDate !== oldDueDateString ) {
                 
                let localizedDueDate = targetProject.getProjectDueDate();
                // console.log(localizedDueDate);
                // console.log(localizedDueDate.getTime());
                let timezoneOffset = localizedDueDate.getTimezoneOffset();
                // console.log(timezoneOffset);
                // console.log(timezoneOffset * 60000);
                let newLocalizedDueDate = localizedDueDate.getTime() + (timezoneOffset * 60000);
                // console.log(newLocalizedDueDate);
                // console.log(new Date(newLocalizedDueDate));

                projectDueDateDiv.innerText = (new Date(newLocalizedDueDate)).toDateString();

            }


        // Close editPane and toggleProjectMenuOpen()
        let editPane = targetProject.getProjectDiv().querySelector('.project-edit-pane');
        targetProject.getProjectDiv().removeChild(editPane);
        targetProject.toggleProjectMenuOpen();



    }
    this._editProjectSaveButton = _editProjectSaveButton

    const _editProjectCancelButton = (targetProject) => {
        // console.log(`You clicked the Cancel button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());
        // console.log(targetProject.getProjectDiv());

        let editPane = targetProject.getProjectDiv().querySelector('.project-edit-pane');

        // Remove the editPane div Child element from the targetProject
        targetProject.getProjectDiv().removeChild(editPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

    }
    this._editProjectCancelButton = _editProjectCancelButton;


    const _editProjectDeleteButton = (targetProject) => {
        // console.log(`You clicked the Delete button on the EDIT page of the following project: `);
        // console.log(targetProject.getInfo());
        // console.log(_projectContainer.getProjectArr()[0].getInfo());
        // console.log(_projectContainer.getInfo());
        // console.log(_projectContainer.getProjectArr());
        

        // Target Project Container and find it's index reference for targetProject
        const projectContainerArr = _projectContainer.getProjectArr();
        let index = 0;
        for (index; index < projectContainerArr.length; index++ ){
            // console.log(`Searching for targetProject (${targetProject.getProjectName()}) at index ${index}`);
            if(projectContainerArr[index] === targetProject) {
                // console.log(`You've found the project at index: ${index}. Do the thing to delete targetProject from _projectContainer._projectArr[]`);
                _projectContainer.deleteProject(index);
                _projectContainer.getProjectContainerDiv().removeChild(targetProject.getProjectDiv());
                break;
            } 
        }

    }
    this._editProjectDeleteButton = _editProjectDeleteButton;

    const _projectAddTodoButton = (targetProject) => {

        // console.log(`I'm in logicController, add todo button`);

        // console.log(`test if this project can open a menu, then open the Add toto menu targeting this project`);

        
        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel addTodoButton function`);
            return;
           
        }

        // console.log(`targetProject is in a state to open a menu, toggling and opening add todo menu`);
        targetProject.toggleProjectMenuOpen();

        // Add todo Menu
        const addTodoPaneValues = _displayController.generateProjectAddTodoPane(targetProject);
        const addTodoPane = addTodoPaneValues[0];
        const addTodoTitle = addTodoPaneValues[1];
        const addTodoDescription = addTodoPaneValues[2];
        const addTodoPriorityLabel = addTodoPaneValues[3];
        const addTodoPriorityValue = addTodoPaneValues[4];
        const addTodoNotesInput = addTodoPaneValues[5];
        const addTodoDueDateInput = addTodoPaneValues[6];
        const addTodoCreationDateInput = addTodoPaneValues[7];
        // Save and cancel buttons
        const addTodoSaveButton = addTodoPaneValues[8];
        const addTodoCancelButton = addTodoPaneValues[9];

        // Append Add Todo Menu to existing projectPane div
        const projectPane = targetProject.getProjectDiv();
        const projectNameContainer = projectPane.firstChild;
        const projectTodoElementContainer = projectNameContainer.nextSibling;
        projectTodoElementContainer.appendChild(addTodoPane);

        // Attach priority slider functionality
        _eventController.attachAddProjectPrioritySlider(addTodoPriorityValue, addTodoPriorityLabel);
        
        // Attach saveButton and cancelButton functionality     
        let savedValues = [addTodoTitle, addTodoDescription, addTodoPriorityValue, addTodoNotesInput, addTodoDueDateInput, addTodoCreationDateInput];
        _eventController.attachProjectAddTodoSaveButton(addTodoSaveButton, targetProject, addTodoPane, savedValues);
        _eventController.attachProjectAddTodoCancelButton(addTodoCancelButton, targetProject, addTodoPane);



    }
    this._projectAddTodoButton = _projectAddTodoButton;

    const _projectAddTodoSaveButton = (targetProject, addTodoPane, savedValues) => {
        // console.log(`You've click the save button on the add Todo Pane`)

        // Save values of new todoObj to targetProject
        // console.log(savedValues);
        // console.log(savedValues[0].value);
        let title = savedValues[0].value;
        const description = savedValues[1].value;
        const priority = savedValues[2].value;
        const notes = savedValues[3].value;
        let dueDate = savedValues[4].value;
        const creationDate = savedValues[5];

        if( dueDate == "") {
            // console.log(`default dueDate, overwriting with current date`);
            dueDate = new Date();
        }
        if (title == "") {
            title = "New To-Do";
        }

        // console.log(`title: ${title}
        // description: ${description}
        // priority: ${priority}
        // notes: ${notes}
        // dueDate: ${dueDate}
        // creationDate: ${creationDate}`)

        let newTodo = todoObj();
        newTodo.init(title, description, dueDate, creationDate, priority, notes, [], false);
        // console.log(` --------- newTodo.getInfo() ---------- `)
        // console.log(newTodo.getInfo());
        // console.log(` --- targetproject.getTodoList() --- `)
        // console.log(targetProject.getTodoList());
        targetProject.addTodoObj(newTodo);
        // console.log(targetProject.getTodoList());
        // console.log(` -------------------------- targetProject.getTodoList()[0].getInfo()`);
        // console.log(targetProject.getTodoList()[0].getInfo());


        // Update targetProject's project-todo-list div appropriately
        const newTodoDiv = _displayController.generateTodoDiv(newTodo);
        const todoListContainer = targetProject.getProjectDiv().childNodes[1].childNodes[1].childNodes[0]; // This is positively filthy for stack-tracing.
        todoListContainer.appendChild(newTodoDiv);
        
        // Attach eventListeners to newly created toDo
        _eventController.attachTodoListeners(newTodo, targetProject);

        // Remove addTodoMenu from targetProject's project-pane div
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(addTodoPane);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

        // Stack tracing example from the top of logic controller to each todo child
        // console.log(_projectContainer.getProjectArr()[0].getTodoList()[0].getInfo());

    }
    this._projectAddTodoSaveButton = _projectAddTodoSaveButton;

    const _projectAddTodoCancelButton = (targetProject, addTodoPane) => {
        // Target div and delete it
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(addTodoPane);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

    }
    this._projectAddTodoCancelButton = _projectAddTodoCancelButton;

    const _projectDeleteTodoButton = (targetProject) => {

        // console.log(`I'm in logicController, delete todo button`);

        // console.log(`Test if this project can open a menu, then open the delete todo menu targeting this project`)

        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel deleteTodoButton function`);
            return;
        }

        // console.log(`targetProject is in a state to open a menu, toggling and opening deleteTodoMenu`);
        targetProject.toggleProjectMenuOpen();

        // Add todo Menu
        const deleteTodoPaneValues = _displayController.generateProjectDeleteTodoPane(targetProject);
        const deleteTodoPane = deleteTodoPaneValues[0];
        const deleteSelectedButton = deleteTodoPaneValues[1];
        const cancelButton = deleteTodoPaneValues[2];
        const deleteCompletedButton = deleteTodoPaneValues[3];
        const todoPaneList = deleteTodoPaneValues[4];

        // Append Add Todo Menu to existing projectPane div
        const projectPane = targetProject.getProjectDiv();
        const projectNameContainer = projectPane.firstChild;
        const projectTodoElementContainer = projectNameContainer.nextSibling;
        projectTodoElementContainer.appendChild(deleteTodoPane);

        // Attach functionality to buttons
        _eventController.attachProjectDeleteSelectedButton(deleteSelectedButton, targetProject, deleteTodoPane,todoPaneList);
        _eventController.attachProjectDeleteCancelButton(cancelButton, targetProject, deleteTodoPane);
        _eventController.attachProjectDeleteCompletedButton(deleteCompletedButton, targetProject, deleteTodoPane, todoPaneList);

        // Attach functionality to todoPaneList
        todoPaneList.forEach( element => {
            _eventController.attachSelectTodoForDeletion(element.getTodoDeletionDiv());
        });

    }
    this._projectDeleteTodoButton = _projectDeleteTodoButton;

    const _toggleSelectedDivForDeletion = (targetTodoDiv) => {
        // console.log(`You clicked a div element to target for deletion! Modifying its class to denote selection`);
        targetTodoDiv.classList.toggle('marked-for-deletion');
    }
    this._toggleSelectedDivForDeletion = _toggleSelectedDivForDeletion;

    const _projectDeleteTodoSelectedButton = (targetProject, deleteTodoPane, todoPaneList) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');
        let todoList = projectTodoElementContainer.querySelector('.todo-list');
        let todoListCompleted = projectTodoElementContainer.querySelector('.todo-list-completed');

        let markedForDeletion = []
        todoPaneList.forEach( element => {
            let todoClass = element.getTodoDeletionDiv().classList.contains("marked-for-deletion");
            if(todoClass) {
                markedForDeletion.push(element);
            }
        })

        console.log(`The follow to-do elements are marked for deletion: `);
        console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            console.log(`Deleting the following todo: ${element.getTitle()}
            from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            
            if( element.getComplete() ){
                todoListCompleted.removeChild(element.getTodoDiv());
            } else {
                todoList.removeChild(element.getTodoDiv());
            }
        })

        console.log(targetProject.getTodoList());

        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

    }
    this._projectDeleteTodoSelectedButton = _projectDeleteTodoSelectedButton;

    const _projectDeleteTodoCancelButton = (targetProject, deleteTodoPane) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');

        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();

    }
    this._projectDeleteTodoCancelButton = _projectDeleteTodoCancelButton;
    
    const _projectDeleteTodoCompletedButton = (targetProject, deleteTodoPane, todoPaneList) => {

        let projectTodoElementContainer = targetProject.getProjectDiv().querySelector('.project-todo-element-container');
        let todoListCompleted = projectTodoElementContainer.querySelector('.todo-list-completed');

        let markedForDeletion = []
        todoPaneList.forEach( element => {
            let todoClass = element.getTodoDeletionDiv().classList.contains("todo-completed");
            if(todoClass) {
                markedForDeletion.push(element);
            }
        })

        console.log(`The follow to-do elements are marked for deletion: `);
        console.log(markedForDeletion);
        markedForDeletion.forEach(element => {
            console.log(`Deleting the following todo: ${element.getTitle()}
            from targetProject: ${targetProject.getProjectName()}`)
            targetProject.removeTargetTodo(element);
            todoListCompleted.removeChild(element.getTodoDiv());
        })

        console.log(targetProject.getTodoList());







        // Remove the deleteTodoPane div Child element from the targetProject
        projectTodoElementContainer.removeChild(deleteTodoPane);
        // Toggle projectMenuOpen to false, so that the editMenu can be re-opened
        targetProject.toggleProjectMenuOpen();


    }
    this._projectDeleteTodoCompletedButton = _projectDeleteTodoCompletedButton;


    const _toggleCompletedTodo = (targetTodo) => {

        // console.log(`You clicked toggleSelectedTodo targeting: ${targetTodo}`);

        const targetTodoDiv = targetTodo.getTodoDiv();
        targetTodoDiv.classList.toggle('todo-completed');
        targetTodoDiv.classList.toggle('todo-incomplete');

        // Generating div references for easy docing of next if statement deciding functionality
        const projectTodoList = targetTodoDiv.parentNode.parentNode;
        const todoList = projectTodoList.firstChild;
        const todoListCompleted = projectTodoList.querySelector('.todo-list-completed');
        
        let isComplete = targetTodo.getComplete();
        if( isComplete ) {
            targetTodoDiv.firstChild.checked = false;
            targetTodo.setComplete(false);
            todoList.appendChild(targetTodoDiv);
        } else {
            targetTodoDiv.firstChild.checked = true;
            targetTodo.setComplete(true);
            todoListCompleted.appendChild(targetTodoDiv);
        }
    }
    this._toggleCompletedTodo = _toggleCompletedTodo;

    const _editTodoPane = (targetTodo, targetProject) => {

        console.log(`You clicked the edit button target todo: ${targetTodo.getTitle()}`);

        // Toggle projectMenuOpen, generate editTodoPane, appendEditTodoPane, attach eventListeners to appropriate fields and buttons

        if(targetProject.getProjectMenuOpen()) {
            console.log(`TargetProject is NOT in a state to open a new menu, returning to cancel addTodoButton function`);
            return;
        }
        // console.log(`targetProject is in a state to open a menu, toggling and opening add todo menu`);
        targetProject.toggleProjectMenuOpen();

        let editTodoPaneValues = _displayController.generateEditTodoPane(targetTodo);
        const editTodoPaneDiv = editTodoPaneValues[0];
        const editTodoTitleInput = editTodoPaneValues[1];
        const editTodoDescriptionInput = editTodoPaneValues[2];
        const editTodoPriorityLabel = editTodoPaneValues[3];
        const editTodoPriorityInput = editTodoPaneValues[4];
        const editTodoNotesInput = editTodoPaneValues[5];
        const editTodoDueDateInput = editTodoPaneValues[6];
        const editTodoCreationDateInput = editTodoPaneValues[7];
        const editTodoSaveButton = editTodoPaneValues[8];
        const editTodoCancelButton = editTodoPaneValues[9];

        // Update and attach priority slider functionality
        _updatePriorityColor(editTodoPriorityLabel, editTodoPriorityInput.value);
            // Attach Priority Slider functionality
        _eventController.attachAddProjectPrioritySlider(editTodoPriorityInput, editTodoPriorityLabel);
        
        // Attach functionality to Save and Cancel Buttons
        let savedValues = [editTodoTitleInput, editTodoDescriptionInput, editTodoPriorityInput, editTodoNotesInput, editTodoDueDateInput, editTodoCreationDateInput]
        _eventController.attachEditTodoSaveButton(editTodoSaveButton, targetProject, targetTodo, editTodoPaneDiv, savedValues);
        _eventController.attachEditTodoCancelButton(editTodoCancelButton, targetProject, editTodoPaneDiv);
       

        // Append editTodoPane to the DOM
        const todoList = targetTodo.getTodoDiv().parentNode;
        const projectTodoList = todoList.parentNode;
        const projectTodoElementContainer = projectTodoList.parentNode;
        projectTodoElementContainer.appendChild(editTodoPaneDiv);



    }
    this._editTodoPane = _editTodoPane;

    const _projectEditTodoSaveButton = (targetProject, targetTodo, editTodoPaneDiv, savedValues) => {
        console.log('-----------------------------------')
        console.log(`I am _projectEditTodoSaveButton. Here are my todo initial values`);
        console.log(targetTodo.getInfo());
        console.log('-----------------------------------')
        
//         let savedValues = [editTodoTitleInput, editTodoDescriptionInput, editTodoPriorityInput, editTodoNotesInput, editTodoDueDateInput, editTodoCreationDateInput]


        // Save the new values to targetTodo
        console.log(`savedValues are as follows:
        titleInput: ${savedValues[0].value}
        descriptionInput: ${savedValues[1].value}
        priorityInput: ${savedValues[2].value}
        notesInput: ${savedValues[3].value}
        dueDateInput: ${savedValues[4].valueAsDate}
        creationDateInput: ${savedValues[4].valueAsDate}`);


        // Update the todo DOM elements to reflect the updated values
        targetTodo.getTodoDiv().firstChild.nextSibling.innerText = savedValues[0].value;
            // XXXUPDATEXXX The above code works, but I should type check it for length anyways

        // Target div and delete it
        const todoElementContainer = targetProject.getProjectDiv().childNodes[1];
        todoElementContainer.removeChild(editTodoPaneDiv);
        // Toggle projectMenuOpen to false
        targetProject.toggleProjectMenuOpen();

        
    }
    this._projectEditTodoSaveButton = _projectEditTodoSaveButton;


    return {
        getInfo, init,
        getProjectContainer, setProjectContainer,
        generateProjectContainerObj,
    }

}

export default logicController;