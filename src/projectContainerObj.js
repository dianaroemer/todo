
import projectObj from './project.js';
import todoObj from './todoObj';


// I am projectContainerObj. I house an object that contains all of projectObs and also contain the <div> reference to relevant DOM elements for later manipulation by logicController

const projectContainerObj = () => {

    let _projectArr = [];
    let _projectContainerDiv;
    let _addButton;
    let _addButtonMenu = false;


    const getInfo = () => {
        return `I am projectContainerObj.getInfo()
        _projectArr: ${_projectArr}
        _projectContainerDiv: ${_projectContainerDiv}
        _addButton: ${_addButton}
        _addButtonMenu: ${_addButtonMenu}`
    }

    const init = (newProjectArr, newProjectContainerDiv, newAddButton, newAddButtonMenu) => {
        _projectArr = newProjectArr;
        _projectContainerDiv = newProjectContainerDiv
        _addButton = newAddButton;
        _addButtonMenu = newAddButtonMenu;
    }

    const getProjectArr = () => {
        return _projectArr;
    }

    const setProjectArr = (newProjectArr) => {
        if (typeof newProjectArr === "object") {
            _projectArr = newProjectArr;
            return true;
        } else {
            console.log('projectContainerObj._setProjectArr Error! tried to pass a non-object into the _projectArr field!');
            return false;
        }
    }

    const addProject = (newProjectObj) => {
        if(typeof newProjectObj === "object") {
            _projectArr.push(newProjectObj);
            return true;
        } else {
            console.log('projectContainerObj._addProjectArr Error! tried to pass a non-object to push into _projectArr!');
            return false;
        }
    }

    const deleteProject = (index) => {
        if(typeof index === "number" && index < _projectArr.length) {
            _projectArr.splice(index, 1);
            return true;
        } else {
            console.log('projectContainerObj.deleteProject Error! tried to pass a non-number to index for _projectArr.splice OR index >= _projectArr.length: ' + index);
            return false;
        }
    }

    const getProjectContainerDiv = () => {
        return _projectContainerDiv;
    }

    // In an ideal world, this type checks to see that newProjectContainerDiv is a Node.
    const setProjectContainerDiv = (newProjectContainerDiv) => {
        // if (typeof newProjectContainerDiv === "object") {
            _projectContainerDiv = newProjectContainerDiv;
            return true;
        // } else {
            // console.log('projectContainerObj._setProjectArr Error! tried to pass a non-object into the _projectArr field!');
            // return false;
        
    }

    const getAddButton = () => {
        return _addButton;
    }

    // See type checking comment for setProjectContainerDiv
    const setAddButton = () => {
        _projectContainerDiv = newProjectContainerDiv;
        return true;
    }

    const getAddButtonMenu = () => {
        return _addButtonMenu;
    }

    const toggleAddButtonMenu = () => {
        if (_addButtonMenu) {
            _addButtonMenu = false;
        } else {
            _addButtonMenu = true;
        }
    }

    const createProject = (projectNameInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, todoListInput) => {
        let newProject = projectObj();

        // Optional switch here, a project can be created without an active todoList, which instead generates an empty array
        if( todoListInput ) {
            newProject.init(projectNameInput, todoListInput, creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, false);
            // console.log(newProject.getInfo());
            return newProject;
        } else {
            newProject.init(projectNameInput, [], creationDateInput, dueDateInput, projectPriorityInput, projectDivInput, false);
            // console.log(newProject.getInfo());
            return newProject;
        }
    }


    const writeProjArrLocalStorage = () => {
        // console.log(`I am writeProjArrLocalStorage(). _projArr[]: ${_projectArr}
        // _projArr.length: ${_projectArr.length}`);
        // console.log("Writing _projArr[] to localStorage.");

        _projectArr;

        for( let i = 0; i < _projectArr.length; i++ ) {

            localStorage.setItem(`projArrLength`, `${_projectArr.length}`);

            let result = _projectArr[i].writeProjectLocalStorage(i);
            if (!result) {
                return false;
            }
        }


        return true;
    }

    const readProjectArrLocalStorage = () => {

        let result = false;

        let numProjects = localStorage.getItem('projArrLength');
        
        let newProjArr = []
        let index = 0;

        if(numProjects > 0) {
            for( index; index < numProjects; index++ ){
                let projectName = localStorage.getItem(`project${index}Name`);
                let projectPriority = localStorage.getItem(`project${index}Priority`);
                let projectDueDate = localStorage.getItem(`project${index}DueDate`);
                let projectCreationDate = localStorage.getItem(`project${index}CreationDate`);
                let projectTodoListLength = localStorage.getItem(`project${index}TodoListLength`);
                let projectTodoList = [];
                if (projectTodoListLength > 0) {
                    // Retrieve todoList
                    for (let todoIndex = 0; todoIndex < projectTodoListLength; todoIndex++) {
                        let todoName = localStorage.getItem(`project${index}todo${todoIndex}Name`);
                        let todoDescription = localStorage.getItem(`project${index}todo${todoIndex}Description`);
                        let todoPriority = localStorage.getItem(`project${index}todo${todoIndex}Priority`);
                        let todoNotes = localStorage.getItem(`project${index}todo${todoIndex}Notes`);
                        let todoDueDate = localStorage.getItem(`project${index}todo${todoIndex}DueDate`);
                        let todoCreationDate = localStorage.getItem(`project${index}todo${todoIndex}CreationDate`);
                        let todoComplete = localStorage.getItem(`project${index}todo${todoIndex}Complete`);

                        if (todoComplete === "false") {
                            todoComplete = false;
                        } else {
                            todoComplete = true;
                        }

                        let newTodo = todoObj();
                        newTodo.init(todoName, todoDescription, new Date(todoDueDate), new Date(todoCreationDate), Number(todoPriority), todoNotes, [], todoComplete)
                        projectTodoList.push(newTodo);





                    }
                }
                let newProject = [projectName, projectCreationDate, projectDueDate, projectPriority, projectTodoList]
                newProjArr.push(newProject);



                // localStorage.setItem(`project${index}CreationDate`, `${getProjectCreationDate()}`);
                // localStorage.setItem(`project${index}TodoListLength`, `${getTodoList().length}`);


            }
            




        } else {
            return false;
        }

        return newProjArr;
    }




    return {

        getInfo, init,
        getProjectArr, setProjectArr, addProject, deleteProject,
        getProjectContainerDiv, setProjectContainerDiv,
        getAddButton, setAddButton, 
        getAddButtonMenu, toggleAddButtonMenu,
        createProject,
        writeProjArrLocalStorage,
        readProjectArrLocalStorage,





    }


}

export default projectContainerObj;