/* 1. Declaro variables para la parte superior de la web (Logo) */
const root = document.querySelector("#root"); 
//const divTitle = document.createElement("div"); 
//divTitle.classList.add("logo");
//root.appendChild(divTitle);
root.className = 'container d-flex';
//divTitle.innerHTML = `<img src="./images/image4.png" class="img-logo"></img>`;

/* 2. Declaro variable de Sidebar */
const divSidebar = document.createElement("div");
divSidebar.innerHTML ='<div class="list-content d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 200px;"><div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><span class="fs-5 fw-semibold"><img src="./images/image4.png" class="img-logo"></img></span></div><div class="list-group list-group-flush border-bottom scrollarea"></div></div>';
root.appendChild(divSidebar);

const url = `https://rickandmortyapi.com/api/episode`;

/* Declaro etiquetas para el contenido de las cartas */
const divContentCard = document.createElement('div');
root.appendChild(divContentCard);
divContentCard.className = 'content-card m-5';

/* Declaro función para que limpie */ 
function clearContent() {
    const contenido = document.querySelector('.content-card');
    contenido.innerHTML = "";
};


/* Función para las tarjetas */
function renderContent (episodio) {
    clearContent();
    const contenido = document.querySelector('.content-card');
    const h1 = document.createElement('h1');
    const h3 = document.createElement('h3');
    const divCard = document.createElement('div');
    divCard.className = 'characters-episodes d-flex row';
    contenido.appendChild(h1);
    contenido.appendChild(h3);
    contenido.appendChild(divCard);
    h1.innerText = episodio.name;
    h3.innerText = `${episodio.air_date} - ${episodio.episode}`;
    episodio.characters.forEach(character => {
        fetch(character)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const personajesEpisodios = document.querySelector(".characters-episodes")
            const div5 = document.createElement('div')
            div5.className = 'col-3'
            personajesEpisodios.appendChild(div5)
            div5.innerHTML = `<div class="card m-3" style="width: 14rem;"><img src="${json.image}" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">${json.name}</h5><h5 class="card-title">${json.species} | ${json.status}</h5></div></div>`;
        });
    });
};

/* 4. Función para extraer episodios de la API */
const contentEpisode = async (episodio) => {
    try{
        const url2 = `https://rickandmortyapi.com/api/episode/${episodio}`;
        const request = await fetch(url2);
        const response = await request.json();
        renderContent(response);
    }catch(error){
        console.log(error);
    };
};

/* 3. Extraer datos de la API y con evento click */
fetch(url)
.then(response => response.json())
.then(json => {
    const count = json.info.count;
    const list = document.querySelector('.list-content');
    divSidebar.appendChild(list);
    for(let i=0;i<count;i++){
        const elementDivContentList = document.createElement('div');
        list.appendChild(elementDivContentList);
        elementDivContentList.innerHTML = `<a href="#" class="m-1 list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1 episodeList">Episode-${i+1}</strong></div></a>`;
        elementDivContentList.onclick = () => contentEpisode(i+1);
    };
}).catch(error => console.warn(error));


/* 2. Función para hacer request de episodios a la API (visualizar varios en el sidebar) */
/*
const getAllEpisodios = async (episode) => {
    try{
        const url = `https://rickandmortyapi.com/api/episode/${episode}`;
        const formatJsonAll = await fetch(url);
        const formatObjectAll = await formatJsonAll.json();
        renderAllEpisodiosSidebar(formatObjectAll);
    }catch(error){
        console.log(error);
    };
};
*/