// I am the logicController, I decide logic whenever events are fired by their eventHandler

import projectContainerObj from './projectContainerObj.js';
import displayController from './displayController.js';

const logicController = () => {

    let _projectContainer = projectContainerObj();
    let _displayController = displayController();
    let _contentDiv = document.getElementById('content'); //_contentDiv should have its own getters and setters for typechecking and safety, but is only invoked and instantiated once on page init to be populated with generateProjectContainer(), so it gets a pass here
    // console.log(document.getElementById('content'));

    const getInfo = () => {
        return `I am logicController.getInfo()
        These are my values:
        _projectContainer: ${_projectContainer};
        _contentDiv: ${_contentDiv};
        `
    }

    const init = (newProjectContainerObj) => {
        _projectContainer = newProjectContainerObj;
    }

    const generateProjectContainerObj = () => {
        const projectContainerDivArr = _displayController.generateProjectContainerDiv();

        const projectContainerDiv = projectContainerDivArr[0]
        const addbutton = projectContainerDivArr[1];
        _projectContainer.init([], projectContainerDiv, addbutton);
        // console.log(_projectContainer.getInfo());

        _contentDiv.appendChild(projectContainerDiv);
    }

    const getProjectContainer = () => {
        return _projectContainer;
    }

    // In a perfect world, this setter function typechecks newProjectContainer to always receive a projectContainerObj from projectContainerObj. For the purpose of this project, it should only be invoked once when the page is first loaded and not changed from that initial container - even if no projects exist, the container should still be present. 
    const setProjectContainer = (newProjectContainer) => {
        _projectContainer = newProjectContainer;
    }

    return {
        getInfo, init,
        getProjectContainer, setProjectContainer,
        generateProjectContainerObj,
    }

}

export default logicController;