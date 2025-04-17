import Capriciosa from './capriciosa.png';
import Margherita from './margherita.png';
import Quatro from './quatro.png';
import Dollar from './usd.svg';

const menuButton = document.querySelector('#menu');
menuButton.classList.add('selected');

const menuTitle = document.createElement('h3');
menuTitle.classList.add('sectionTitle');
menuTitle.textContent = "Menu";
const menuElements = document.createElement('div');

// PIZZA 1
const pizza1 = document.createElement('div');
pizza1.classList.add('pizzaHolder');
const pizza1ImgHolder = document.createElement('div');
pizza1ImgHolder.classList.add('imgHolder');
const pizza1TextHolder = document.createElement('div');
pizza1TextHolder.classList.add('textHolder');
const pizza1IngPriHolder = document.createElement('div');
pizza1IngPriHolder.classList.add('priceDescrHolder');
const pizza1PriceHolder = document.createElement('div');
pizza1PriceHolder.classList.add('priceHolder');

const pizza1img = new Image();
pizza1img.src = Margherita;
pizza1ImgHolder.appendChild(pizza1img);

const pizza1Title = document.createElement('h4');
pizza1Title.textContent = "Margherita";

const pizza1Ingredients = document.createElement('p');
pizza1Ingredients.textContent = "Olive Oil, Basil, Cherry Tomatoes, Mozzarella di Bufala";
pizza1Ingredients.classList.add('ingredientList');

const pizza1Description = document.createElement('p');
pizza1Description.textContent = "Margherita pizza is a traditional culinary specialty from the city of Naples, Italy. Very popular, this pizza is topped with tomatoes, mozzarella, fresh basil, salt and olive oil. The colors of these first three ingredients are those of the Italian flag.";
pizza1Description.classList.add('descriptionP');

const pizza1Price = document.createElement('p');
pizza1Price.textContent = "12";

const dollar = new Image();
dollar.src = Dollar;
pizza1PriceHolder.appendChild(dollar);
pizza1PriceHolder.appendChild(pizza1Price);

pizza1IngPriHolder.appendChild(pizza1Ingredients);
pizza1IngPriHolder.appendChild(pizza1PriceHolder);

pizza1TextHolder.appendChild(pizza1Title);
pizza1TextHolder.appendChild(pizza1IngPriHolder);
pizza1TextHolder.appendChild(pizza1Description);

pizza1.appendChild(pizza1ImgHolder);
pizza1.appendChild(pizza1TextHolder);

menuElements.appendChild(pizza1);

// Pizza 2
const pizza2 = document.createElement('div');
pizza2.classList.add('pizzaHolder');
const pizza2ImgHolder = document.createElement('div');
pizza2ImgHolder.classList.add('imgHolder');
const pizza2TextHolder = document.createElement('div');
pizza2TextHolder.classList.add('textHolder');
const pizza2IngPriHolder = document.createElement('div');
pizza2IngPriHolder.classList.add('priceDescrHolder');
const pizza2PriceHolder = document.createElement('div');
pizza2PriceHolder.classList.add('priceHolder');

const pizza2img = new Image();
pizza2img.src = Quatro;
pizza2ImgHolder.appendChild(pizza2img);

const pizza2Title = document.createElement('h4');
pizza2Title.textContent = "Quatro Formaggi";

const pizza2Ingredients = document.createElement('p');
pizza2Ingredients.textContent = "Fontina cheese, Gorgonzola, Mozzrella di Bufala, Grana Padano";
pizza2Ingredients.classList.add('ingredientList');

const pizza2Description = document.createElement('p');
pizza2Description.textContent = "Quattro formaggi is a variety of Italian pizza topped with a combination of four kinds of cheese, as the name suggests. Traditionally, the cheeses should be mozzarella and three other, local cheeses, depending on the region, such as Gorgonzola, Fontina, and Parmigiano-Reggiano.";
pizza2Description.classList.add('descriptionP');

const pizza2Price = document.createElement('p');
pizza2Price.textContent = "19";

const dollar2 = new Image();
dollar2.src = Dollar;
pizza2PriceHolder.appendChild(dollar2);
pizza2PriceHolder.appendChild(pizza2Price);

pizza2IngPriHolder.appendChild(pizza2Ingredients);
pizza2IngPriHolder.appendChild(pizza2PriceHolder);

pizza2TextHolder.appendChild(pizza2Title);
pizza2TextHolder.appendChild(pizza2IngPriHolder);
pizza2TextHolder.appendChild(pizza2Description);

pizza2.appendChild(pizza2ImgHolder);
pizza2.appendChild(pizza2TextHolder);

menuElements.appendChild(pizza2);

// Pizza 3
const pizza3 = document.createElement('div');
pizza3.classList.add('pizzaHolder');
const pizza3ImgHolder = document.createElement('div');
pizza3ImgHolder.classList.add('imgHolder');
const pizza3TextHolder = document.createElement('div');
pizza3TextHolder.classList.add('textHolder');
const pizza3IngPriHolder = document.createElement('div');
pizza3IngPriHolder.classList.add('priceDescrHolder');
const pizza3PriceHolder = document.createElement('div');
pizza3PriceHolder.classList.add('priceHolder');

const pizza3img = new Image();
pizza3img.src = Capriciosa;
pizza3ImgHolder.appendChild(pizza3img);

const pizza3Title = document.createElement('h4');
pizza3Title.textContent = 'Capricciosa';

const pizza3Ingredients = document.createElement('p');
pizza3Ingredients.textContent = "Olives, Artichokes, Mushrooms, Prosciutto Cotto, Mozarella di Bufala";
pizza3Ingredients.classList.add('ingredientList');

const pizza3Description = document.createElement('p');
pizza3Description.textContent = "The name of this pizza literally translates to capricious, and seems quite appropriate, considering that the toppings tend to vary from one region to another.";
pizza3Description.classList.add('descriptionP');

const pizza3Price = document.createElement('p');
pizza3Price.textContent = "17";

const dollar3 = new Image();
dollar3.src = Dollar;
dollar3.src = Dollar;
pizza3PriceHolder.appendChild(dollar3);
pizza3PriceHolder.appendChild(pizza3Price);

pizza3IngPriHolder.appendChild(pizza3Ingredients);
pizza3IngPriHolder.appendChild(pizza3PriceHolder);

pizza3TextHolder.appendChild(pizza3Title);
pizza3TextHolder.appendChild(pizza3IngPriHolder);
pizza3TextHolder.appendChild(pizza3Description);

pizza3.appendChild(pizza3ImgHolder);
pizza3.appendChild(pizza3TextHolder);

menuElements.appendChild(pizza3);


export const menuDiv = document.createElement('div');
menuDiv.classList.add('contentDisplay');

menuDiv.appendChild(menuTitle);
menuDiv.appendChild(menuElements); 
