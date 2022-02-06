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

    const attachAddButtonListener = (div) => {
        div.addEventListener('click', () => {

            if(_menuOpen) {
                return;
            }

            

        })
    };


    return {

    }

}

export default eventController;