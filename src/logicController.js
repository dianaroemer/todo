// I am the logicController, I decide logic whenever events are fired by their eventHandler

const logicController = () => {


    const getInfo = () => {
        return `I am logicController.getInfo()
        These are my functions and values`
    }

    return {
        getInfo,
    }

}

export default logicController;