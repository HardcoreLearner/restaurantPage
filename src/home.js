
const homeButton = document.querySelector('#home');
homeButton.classList.add('selected');

const history = document.createElement('div');
const historyTitle = document.createElement('h3');
historyTitle.classList.add('sectionTitle');
historyTitle.textContent = "History";
const historyText = document.createElement('p');
historyText.textContent = "Come eat the Mama Pizza. Me Luigi, I'm a pizzaiolo from Napoli. In the family, since Marco Polo came back from Asia, in the XVI centutry, we cook the best pizza, the pizza de la Mama. It's not just pizza, it's a slice of the history of the world and the love of the Mama for the bambino.";
history.appendChild(historyText);

// Order Quick little section with a button
const orderNowTitle = document.createElement('h3');
orderNowTitle.textContent = "Order now";
const orderNow = document.createElement('div');
const orderNowButton = document.createElement('button');
orderNowButton.id = "orderButton";
orderNowButton.textContent = "Order now";
orderNow.appendChild(orderNowButton);

// Reprendre le bail de contact et rajouter un truc du genre 24/7
const contactUs = document.createElement('div');
const contactTitle = document.createElement('h3');
contactTitle.classList.add('sectionTitle');
contactTitle.textContent = "Contact Us";
const contactUsText = document.createElement('ul');
contactUsText.classList.add('contactInfo');
const contactUsTextAdress = document.createElement('li');
contactUsTextAdress.textContent = "Come get your lovely and traditional pizza at 5th, Smithsonian Avenue, Brickell, Miami, Florida";
const contactUsTextEmail = document.createElement('li');
contactUsTextEmail.textContent = "contact@luigi-pizza.com";
const contactUsTextNumber = document.createElement('li');
contactUsTextNumber.textContent = "You can order here : +13058542070";
const contactUsTimetable = document.createElement('li');
contactUsTimetable.textContent = "We are open 24/7 to deliver our lovely pizzas of the Mama";

contactUsText.appendChild(contactUsTextAdress);
contactUsText.appendChild(contactUsTextNumber);
contactUsText.appendChild(contactUsTextEmail);
contactUsText.appendChild(contactUsTimetable);
contactUs.appendChild(contactUsText);

export const homeDiv = document.createElement('div');
homeDiv.classList.add('contentDisplay');

homeDiv.appendChild(historyTitle);
homeDiv.appendChild(history);
homeDiv.appendChild(orderNowTitle);
homeDiv.appendChild(orderNow);
homeDiv.appendChild(contactTitle);
homeDiv.appendChild(contactUs);
