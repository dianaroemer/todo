import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = `Sample string goes here css test`;
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());