
function component() {
    const element = document.createElement('div');

    element.innerHTML = `Sample string goes here and a different string here and a live reload`;
    return element;
}

document.body.appendChild(component());