
// I am projectContainerObj. I house an object that contains all of projectObs and also contain the <div> reference to relevant DOM elements for later manipulation by logicController

const projectContainerObj = () => {

    let _projectArr = [];
    let _projectContainerDiv;
    let _addButton;


    const getInfo = () => {
        return `I am projectContainerObj.getInfo()
        _projectArr: ${_projectArr}
        _projectContainerDiv: ${_projectContainerDiv}`
    }

    const init = (newProjectArr, newProjectContainerDiv, newAddButton) => {
        _projectArr = newProjectArr;
        _projectContainerDiv = newProjectContainerDiv
        _addButton = newAddButton;
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

    const addProject = (newProjectArr) => {
        if(typeof newProjectArr === "object") {
            _projectArr.push(newProjectArr);
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

    return {

        getInfo, init,
        getProjectArr, setProjectArr, addProject, deleteProject,
        getProjectContainerDiv, setProjectContainerDiv,
        getAddButton, setAddButton, 
        




    }


}