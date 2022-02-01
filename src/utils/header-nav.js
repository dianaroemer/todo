

function headerNav() {

    let nav = document.createElement('nav');
    nav.innerHTML = 'D Roemer';

    let title = document.createElement('div');
    title.classList.add('nav-title');
    title.innerHTML = "To-Do";
    nav.appendChild(title);

    let list = document.createElement('ul');
    
    let listOptions = document.createElement('li');
    listOptions.classList.add('navButtonToggle', 'optionsToggle');
    listOptions.innerHTML = 'Options';

    let listAbout = document.createElement('li');
    listAbout.classList.add('navButtonToggle', 'aboutToggle');
    listAbout.innerHTML = 'About';

    let listPortfolio = document.createElement('li');
    listPortfolio.classList.add('navButtonToggle', 'portfolioToggle');

    let portfolioLink = document.createElement('a');
    portfolioLink.href = "https://github.com/dominicroemer";
    portfolioLink.innerHTML = 'Portfolio';

    listPortfolio.appendChild(portfolioLink);

    list.appendChild(listOptions);
    list.appendChild(listAbout);
    list.appendChild(listPortfolio);

    nav.appendChild(list);


    return nav;

}

export default headerNav;
