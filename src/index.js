import './style.css';

// import TodoObj from './todoObj.js';
// import todoTest from './tests/todoTest.js';
// import projectObjTest from './tests/projectObjTest.js';
import headerNav from "./utils/header-nav.js";

import logicControllerObj from './logicController.js';


// function component() {
//     const element = document.createElement('div');
//     element.innerHTML = `Sample string goes here css test`;
//     element.classList.add('hello');
//     return element;
// }
// document.body.appendChild(component());


// console.log('test')
const nav = headerNav();
document.body.insertBefore(nav, document.getElementById('content'));


let logicController = new logicControllerObj();
logicController.generateProjectContainerObj();





//                        Testing object functionality
//        Be sure to uncomment out the corresponding imports for test purposes
// console.log('(`-----------------------------------------------finished state of todoTest(): ' + todoTest());
// console.log(`----------------------------------------------- finished state of projectObjTest(): ` + projectObjTest())