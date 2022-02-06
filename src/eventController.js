// I am eventController, I am an object that assigns event functions to div's that are passed to me via logicController.

const eventController = () => {

    let _menuOpen = false;

    const _toggleMenuOpen = () => {
        if(menuOpen) {
            _menuOpen = false;
        } else {
            _menuOpen = true;
        }
    }

    // const attachAddButtonListener = (div) => {
    //     div.addEventListener('click', () => {

    //         if(_menuOpen) {
    //             return;
    //         }

    //         alert(`You've clicked the projectContainerObj's addButton!`);

    //         // openProjectContainerAddButtonMenu();

    //     })
    // };


    return {
        _toggleMenuOpen,
        // attachAddButtonListener,
    }

}


// const attachProjectContainerAddButtonListener = 

export default eventController;
export function attachAddButtonListener(div){
    // console.log(div);
    // console.log('whoop');
    div.addEventListener('click', (() => {

        console.log(`addButton's eventListener has been called!`);

        // if(_menuOpen) {
        //     return;
        // }

        alert(`You've clicked the projectContainerObj's addButton!`);

        // openProjectContainerAddButtonMenu();

    }))
};