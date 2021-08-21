/* Declaro variables para la parte superior de la web */
const root = document.querySelector("#root"); 
const divTitle = document.createElement("div"); 
root.appendChild(divTitle);

const h1Title = document.createElement("h1");
h1Title.classList.add("title"); 
divTitle.appendChild(h1Title);
h1Title.innerHTML = "Rick y Morty";






