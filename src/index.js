import './style.css';
import headerNav from "./utils/header-nav.js";

function component() {
    const element = document.createElement('div');

    element.innerHTML = `Sample string goes here css test`;
    element.classList.add('hello');
    return element;
}

document.body.appendChild(headerNav());

document.body.appendChild(component());
