import './style.css';

import { contactDiv } from './contact';
import { menuDiv } from './menu';
import { homeDiv } from './home';

const content = document.getElementById('content');

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

function resetSelect() {
    const contactButton = document.querySelector('#contact');
    const menuButton = document.querySelector('#menu');
    const homeButton = document.querySelector('#home');
    
    contactButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    homeButton.classList.remove('selected');
}

function contentDistribution() {
    if (this.textContent == 'Home') {
        clearContent();
        resetSelect();
        content.appendChild(homeDiv);
        this.classList.add('selected');
        orderNow();
    } else if (this.textContent == "Menu") {
        clearContent();
        resetSelect();
        content.appendChild(menuDiv);
        this.classList.add('selected');
    } else {
        clearContent();
        resetSelect();
        content.appendChild(contactDiv);
        this.classList.add('selected');
    }
}

function orderNow() {
    const orderNowButton = document.getElementById('orderButton');
    orderNowButton.addEventListener('click', orderButtonClick);
}

function orderButtonClick() {
    const menu = document.getElementById('menu');
    menu.click();
}

const tabs = document.querySelectorAll('li');
tabs.forEach(tab => tab.addEventListener('click', contentDistribution));

resetSelect();
const home = document.getElementById('home');
home.classList.add('selected');

content.appendChild(homeDiv);
orderNow();
