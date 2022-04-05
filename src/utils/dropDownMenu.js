

// dropDownMenu generates a new drop down menu and attaches it to the parent Node.
/*
Syntax:
dropDownMenu(parentNode, direction, element0, element1, ... elementN)    

Parameters:
    parentNode: 
        The Node element receiving the drop down menu. Called in function via arguemnts[0]
    direction:
        A string of "left", "right", "up", "down", indicating which direction the drop down menu should expand when parentNode is hovered. 
    elementN:
        A string containing the text content to be added as a drop down menu node. 



*/
function dropDownMenu(parentNode, direction) {

    console.log('I am in dropDownMenu!');





    const dropDownContainer = document.createElement('menu');
    dropDownContainer.classList.add('drop-down-container-hidden');
    dropDownContainer.style.position = "absolute";
    dropDownContainer.style.listStyle = "none";
    dropDownContainer.style.height = "max-content";
    dropDownContainer.style.width = "max-content";
    dropDownContainer.style.opacity = "0.1"


    dropDownContainer.style.padding = "5px 5px 5px 5px"
    dropDownContainer.style.background = "rgba(0,0,0, .1)";
    dropDownContainer.style.display = "none";
    dropDownContainer.style.margin = "0px"
    dropDownContainer.style.borderRadius = "5px";

    // dropDownContainer.style.transform = "translateX(-25%)"
    dropDownContainer.style.transition = "opacity 0.3s";


    if(direction === `down`) {
        // dropDownContainer.style.left = "-22px";
        dropDownContainer.style.flexDirection = "column"
        // dropDownContainer.style.bottom = "20px;"
    } /* else if(direction === `up`) {
        dropDownContainer.style.left = "-22px";
        dropDownContainer.style.top = "-112px"
        dropDownContainer.style.flexDirection = "column-reverse"
        dropDownContainer.style.gridTemplateColumns
    } else if(direction === `right`) {
        // const newOffset = Number(parentNode.style.width);
        // dropDownContainer.style.left = `${newOffset}px`;       

        // dropDownContainer.style.top = "-112px"
        dropDownContainer.style.flexDirection = "row"
    } else if(direction === `left`) {
        const newOffset = Number(parentNode.style.width);
        dropDownContainer.style.left = `${newOffset}px`;
        dropDownContainer.style.top = "-112px"
        dropDownContainer.style.flexDirection = "row-reverse"
    } 
    */

    const [, , ...dropDownList] = arguments;

    dropDownList.forEach( element => {
        console.log(element);
        const newDropDown = document.createElement('li');
        newDropDown.innerText = element;
        newDropDown.style.width = "max-content"
        newDropDown.classList.add('navButtonToggle');
        dropDownContainer.appendChild(newDropDown);
    });
    



    // Attach Event Listeners for hover or click
    // dropDownContainer.onmouseover = () => console.log(`shit`);
    parentNode.addEventListener('mouseover', (e) => {

        console.log(e.currentTarget);

        if(e.target !== e.currentTarget){
            //  console.log("child hovered") 
        } else {
       
            // console.log('hover');

            if(dropDownContainer.style.display === "none") {
                dropDownContainer.style.display = "flex";
                dropDownContainer.style.opacity = "1";

            } else {
                        dropDownContainer.style.display = "none";
                        dropDownContainer.style.opacity = "0.1";

            }
        }
    }, false);

    dropDownContainer.addEventListener('mouseleave', () => {
        if(dropDownContainer.style.display === "flex") {
            dropDownContainer.style.display = "none";
            dropDownContainer.style.opacity = "0.1";

        }
    })




    // Attach finished dropDownContainer to parent object
    parentNode.appendChild(dropDownContainer);

}


export default dropDownMenu;
