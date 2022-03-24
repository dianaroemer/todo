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

        console.log(`toggle projectContainerObj's addButtonMenu`);

        console.log('Check if the menu is in a state to be opened');
        if( !_projectContainer.getAddButtonMenu()) {
            _projectContainer.toggleAddButtonMenu();
            console.log(_projectContainer.getAddButtonMenu());

            let _addMenu = _displayController.generateProjectContainerAddButtonMenu();
            _projectContainer.getProjectContainerDiv().appendChild(_addMenu[0]);

            // Add event handlers to priority color slider, and buttons, keep reference of div objects referring to input.value


            console.log('addButtonMenu is in a state to be opened, go to displayController and build the div necessary to populate the menu');

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

        console.log(values);

        // let sampleDiv = document.createElement('div');
        // sampleDiv.classList.add('project-pane');
        // _projectContainer.getProjectContainerDiv().appendChild(sampleDiv);

        const nameInput = values[1].value;
        const priorityInput = values[2].value;
        console.log(values[4].value)
        let dueDateInput;
        if ( values[4].value ) {
            dueDateInput = new Date(values[4].value);
            dueDateInput.setDate(dueDateInput.getDate() + 1);
        } else {
            dueDateInput = new Date();
        }
        console.log(dueDateInput);
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

    const _generateProject = (nameInput, creationDateInput, dueDateInput, priorityInput, todoListInput) => {

        // Generate projectPane Div
        // Generate projectObj
        // Attach functionality to appropriate Div elements, tying them to projectObj values

        // Generate projectPane Div
        let projectPaneDivValues = _displayController.generateProjectPane(nameInput, priorityInput, dueDateInput, creationDateInput, todoListInput);
        _projectContainer.getProjectContainerDiv().appendChild(projectPaneDivValues[0]);

        // updatePriority color of projectPane
        _updatePriorityColor(projectPaneDivValues[2], priorityInput);

        // Generate projectObj
        let newProject = _projectContainer.createProject( nameInput, creationDateInput, dueDateInput, priorityInput, todoListInput );

        // Attach projectObj to _projectContainer._projectArr[]
        _projectContainer.addProject(newProject);


        // Attach functionality to appropriate Div elements, tying them to projectObj values
        newProject.setProjectDiv(projectPaneDivValues[0]);

        // attach projectEditButton functionality
        _eventController.attachProjectEditButton(projectPaneDivValues[1], newProject)

        // Attach todoButton functionality
        _eventController.attachProjectTodoAddButton(projectPaneDivValues[3], newProject);
        _eventController.attachProjectTodoDeleteButton(projectPaneDivValues[4], newProject);



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


            // Problem - assigning new dates text to the text are losing 8 hours to GMT, making days show as 1 day older than they are

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

    return {
        getInfo, init,
        getProjectContainer, setProjectContainer,
        generateProjectContainerObj,
    }

}

export default logicController;