import './style.css';
import headerNav from "./utils/header-nav.js";

// import TodoObj from './todoObj.js';
// import todoTest from './tests/todoTest.js';
// import projectObjTest from './tests/projectObjTest.js';
import logicControllerObj from './logicController.js';

// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = `Sample string goes here css test`;
//     element.classList.add('hello');
//     return element;
// }
// document.body.appendChild(component());

// document.body.appendChild(headerNav());

const nav = headerNav();

document.body.appendChild(nav);

let logicController = logicControllerObj();
// console.log(logicController.getInfo());

logicController.generateProjectContainerObj();

document.body.appendChild(nav);



//                        Testing object functionality
//        Be sure to uncomment out the corresponding imports for test purposes
// console.log('(`-----------------------------------------------finished state of todoTest(): ' + todoTest());
// console.log(`----------------------------------------------- finished state of projectObjTest(): ` + projectObjTest())