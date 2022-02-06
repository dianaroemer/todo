// I am eventController, I am an object that assigns event functions to div's that are passed to me via logicController.

import logicController from "./logicController.js";

const eventController = ( logicControllerReference ) => {

    // console.log(logicControllerReference);

    let _menuOpen = false;
    const _logicController = logicControllerReference;

    console.log("I am _logicController: " + _logicController);


    const _toggleMenuOpen = () => {
        if(menuOpen) {
            _menuOpen = false;
        } else {
            _menuOpen = true;
        }
    }

    const attachAddButtonListener = (div) => {
        div.addEventListener('click', () => {

            if(_menuOpen) {
                return;
            }

            // console.log(_logicController.getInfo());

            alert(`You've clicked the projectContainerObj's addButton!`);

            // openProjectContainerAddButtonMenu();

        })
    };


    return {
        _toggleMenuOpen,
        attachAddButtonListener,
    }

}


// const attachProjectContainerAddButtonListener = 

export default eventController;
// export function attachAddButtonListener(div){
//     // console.log(div);
//     // console.log('whoop');
//     div.addEventListener('click', ((e) => {

//         console.log(e.currentTarget);

//         console.log(`addButton's eventListener has been called!`);

//         console.log();

//         // if(_menuOpen) {
//         //     return;
//         // }

//         alert(`You've clicked the projectContainerObj's addButton!`);

//         // openProjectContainerAddButtonMenu();

//     }))
// };