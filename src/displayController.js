
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




    return {
        getInfo,
        generateProjectContainerDiv,

    }

}

export default displayController;