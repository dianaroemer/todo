import './style.css';
import headerNav from "./utils/header-nav.js";

// import TodoObj from './todoObj.js';
// import todoTest from './tests/todoTest.js';
// import projectObjTest from './tests/projectObjTest.js';
import logicControllerObj from './logicController.js';



function component() {
    const element = document.createElement('div');

    element.innerHTML = `Sample string goes here css test`;
    element.classList.add('hello');
    return element;
}

document.body.appendChild(headerNav());

document.body.appendChild(component());

let logicController = logicControllerObj();
console.log(logicController.getInfo());



// console.log('(`-----------------------------------------------finished state of todoTest(): ' + todoTest());
// console.log(`----------------------------------------------- finished state of projectObjTest(): ` + projectObjTest())