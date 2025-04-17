
const contactButton = document.querySelector('#contact');
contactButton.classList.add('selected');

const history = document.createElement('div');
const contactUs = document.createElement('div');

const historyTitle = document.createElement('h3');
historyTitle.classList.add('sectionTitle');
historyTitle.textContent = "History";

const contactTitle = document.createElement('h3');
contactTitle.classList.add('sectionTitle');
contactTitle.textContent = "Contact Us";

const historyText = document.createElement('p');
historyText.textContent = "Come eat the Mama Pizza. Me Luigi, I'm a pizzaiolo from Napoli. In the family, since Marco Polo came back from Asia, in the XVI centutry, we cook the best pizza, the pizza de la Mama. It's not just pizza, it's a slice of the history of the world and the love of the Mama for the bambino.";

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

const locationTitle = document.createElement('h3');
locationTitle.classList.add('sectionTitle');
locationTitle.textContent = "Find us";
const location = document.createElement('div');
const locationFrame = document.createElement('iframe');
locationFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.6239993047625!2d-80.20529387184573!3d25.749945031321275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b664ed850e9b%3A0x94807a38d2726f2!2s2451%20Brickell%20Ave%2C%20Miami%2C%20FL%2033129%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2ssn!4v1670760338088!5m2!1sfr!2ssn";
locationFrame.setAttribute('style', 'width: 600px; height: 400px');

history.appendChild(historyText);
contactUs.appendChild(contactUsText);
location.appendChild(locationFrame);

export const contactDiv = document.createElement('div');
contactDiv.classList.add('contentDisplay');

contactDiv.appendChild(historyTitle);
contactDiv.appendChild(history);
contactDiv.appendChild(contactTitle);
contactDiv.appendChild(contactUs);
contactDiv.appendChild(locationTitle);
contactDiv.appendChild(location);
