/* 1. Declaro variables para la parte superior de la web (Logo) */
const root = document.querySelector("#root"); 
//const divTitle = document.createElement("div"); 
//divTitle.classList.add("logo");
//root.appendChild(divTitle);
root.className = 'container d-flex';
//divTitle.innerHTML = `<img src="./images/image4.png" class="img-logo"></img>`;

/* 2. Declaro variable de Sidebar */
const divSidebar = document.createElement("div");
divSidebar.className = "content-sidebar";
divSidebar.innerHTML ='<div class="list-content d-flex flex-column align-items-stretch flex-shrink-0 bg-white overflow-auto" style="height:1500px;"><div class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><span class="fs-5 fw-semibold"><img src="./images/image4.png" class="img-logo"></img></span></div><div class="list-group list-group-flush border-bottom scrollarea"></div></div>';
root.appendChild(divSidebar);

const url = `https://rickandmortyapi.com/api/episode`;

/* Declaro etiquetas para el contenido de las cartas */
const divContentCard = document.createElement('div');
root.appendChild(divContentCard);
divContentCard.className = 'content-card m-5';

/* 6. Declaro función para que limpie */ 
function clearContent() {
    const contenido = document.querySelector('.content-card');
    contenido.innerHTML = "";
};

/* 9. Función para la localización */
function renderLocation (location) {
    clearContent();
    fetch(location)
      .then((request) => request.json())
      .then((response) => {
        clearContent();
        const contenido = document.querySelector('.content-card');
        const h1 = document.createElement('h1');
        const h3 = document.createElement('h3');
        const divCard = document.createElement('div');
        divCard.className = 'characters-episodes d-flex row';
        contenido.appendChild(h1);
        contenido.appendChild(h3);
        contenido.appendChild(divCard);
        h1.innerText = response.name;
        h3.innerText = `${response.type} - ${response.dimension}`;
        response.residents.forEach(resident => {
            fetch(resident)
            .then(response => response.json())
            .then(json => {
                const personajesEpisodios = document.querySelector(".characters-episodes")
                const divCardEpisode = document.createElement('div')
                divCardEpisode.className = 'col-3'
                personajesEpisodios.appendChild(divCardEpisode)
                divCardEpisode.innerHTML = `<div class="card m-3" style="width: 13rem; background-color: #98F9D2; cursor:pointer"><img src="${json.image}" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">${json.name}</h5><h5 class="card-title">${json.species} | ${json.status}</h5></div></div>`;
                divCardEpisode.onclick = () => contentCharacter(json);
            });
        });
    });
};

/* 8. Función para los personajes */
function contentCharacter (character){
    clearContent(); 

    //Declaramos los elementos para poder ir generando el contenido del HTML
    const content = document.querySelector('.content-card');
    const divElementCharacterTitle = document.createElement('div');
    divElementCharacterTitle.className = "contentCharacter d-flex col m-3";

    const divElementCharacter = document.createElement('div');
    divElementCharacter.className = "contentEpisodesCharacter d-flex row";
    const hrline = document.createElement("hr");

    divElementLetter = document.createElement('div');
    divElementLetter.className = "contentCharacterLetter d-flex row m-3 p-3";
    content.appendChild(divElementCharacterTitle);
    content.appendChild(hrline);
    content.appendChild(divElementCharacter);

    const image = document.createElement('img');
    image.className = "image-character";
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');

    //Creamos botón para la localización
    const button = document.createElement("button");
    button.className = ("btn btn-success");
    button.innerHTML = "Location";
    button.onclick = () => {
        renderLocation(character.location.url);
    };

    divElementCharacterTitle.appendChild(image);
    divElementCharacterTitle.appendChild(divElementLetter);
    divElementLetter.appendChild(h1);
    divElementLetter.appendChild(h4);
    divElementLetter.appendChild(button);

    //Información que se extrae de la API
    image.src = `${character.image}`;
    h1.innerText = character.name;
    h4.innerHTML = `${character.species} | ${character.status} | ${character.gender} | ${character.origin.name}`;

    character.episode.forEach(episode => {
        fetch(episode)
        .then(request => request.json())
        .then(response => {
            const characterEpisodes = document.querySelector(".contentEpisodesCharacter");
            const divCardEpisodeCharacter = document.createElement('div');
            divCardEpisodeCharacter.className = 'col-3';
            characterEpisodes.appendChild(divCardEpisodeCharacter);
            divCardEpisodeCharacter.innerHTML = `<div class="card m-3" style="width: 14rem; cursor:pointer; border:none;"><div class="card-body"><h5 class="card-title"><b>Episode - ${response.id}</b></h5><h5 class="card-title">${response.episode}</h5></div></div>`;
            //Agrego para que al darle click al episodio del personaje vaya a la lista de ese episodio.
            divCardEpisodeCharacter.onclick = () =>contentEpisode(response.id);
        });
    });
};

/* 5. Función para las tarjetas */
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
            const personajesEpisodios = document.querySelector(".characters-episodes")
            const divCardEpisode = document.createElement('div')
            divCardEpisode.className = 'col-3'
            personajesEpisodios.appendChild(divCardEpisode)
            divCardEpisode.innerHTML = `<div class="card m-3" style="width: 13rem; background-color: #98F9D2; cursor:pointer"><img src="${json.image}" class="card-img-top" alt=""><div class="card-body"><h5 class="card-title">${json.name}</h5><h5 class="card-title">${json.species} | ${json.status}</h5></div></div>`;
            divCardEpisode.onclick = () => contentCharacter(json);
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

/* Función para sidebar (más imágenes) */
function morePages (urlNextPage){
    fetch(urlNextPage)
    .then(response => response.json())
    .then(json => {
        const count = json.results;
        const div = document.querySelector(".content-sidebar");
        const contentSidebar = document.querySelector(".list-content");
        div.appendChild(contentSidebar);
        count.forEach((result,id) => {
            const divElement = document.createElement("div");
            contentSidebar.appendChild(divElement);
            divElement.innerHTML = `<a href="#" class="m-1 list-group-item list-group-item-action list-group-item-light py-3 lh-tight" aria-current="true"><div class="d-flex w-0 align-items-center justify-content-between"><strong class="mb-1 episodeList">Episode-${result.id}</strong></div></a>`;
            divElement.onclick = () => contentEpisode(result.id);
        });
        const button = document.createElement("button");
        button.classList.add("button-more");
        button.innerHTML = `<button type="button" class="btn btn-success">More Episodes</button>`;  
        contentSidebar.appendChild(button);
        button.onclick = (event) =>  {event.preventDefault();  morePages(json.info.next); button.className = "d-none"};
    });
};

/* 3. Extraer datos de la API con evento click y botón */
fetch(url)
.then(response => response.json())
.then(json => {
    const count = json.results;
    const list = document.querySelector('.list-content');
    divSidebar.appendChild(list);
    count.forEach((result , id) => {
        const elementDivContentList = document.createElement('div');
        elementDivContentList.className = ("list-episode");
        list.appendChild(elementDivContentList);
        elementDivContentList.innerHTML = `<a href="#" class="m-1 list-group-item list-group-item-action list-group-item-light py-3 lh-tight" aria-current="true"><div class="d-flex w-0 align-items-center justify-content-between"><strong class="mb-1 episodeList">Episode-${result.id}</strong></div></a>`;
        elementDivContentList.onclick = () => contentEpisode(result.id);
    });
    //Creamos botón para ver más episodios
    const buttonAllEpisodes = document.createElement("div");
    buttonAllEpisodes.classList.add("button-more");
    buttonAllEpisodes.innerHTML = `<button type="button" class="btn btn-success">More Episodes</button>`;  
    list.appendChild(buttonAllEpisodes);
    buttonAllEpisodes.onclick = (event) => {
        event.preventDefault();
        morePages(json.info.next); 
        buttonAllEpisodes.className = "d-none";
    };
}).catch(error => console.warn(error));

/* 3. Extraer datos de la API y con evento click 
fetch(url)
.then(response => response.json())
.then(json => {
    const count = json.info.count;
    const list = document.querySelector('.list-content');
    divSidebar.appendChild(list);
    for(let i=0;i<count;i++){
        const elementDivContentList = document.createElement('div');
        list.appendChild(elementDivContentList);
        elementDivContentList.innerHTML = `<a href="#" class="m-1 list-group-item list-group-item-action list-group-item-light py-3 lh-tight" aria-current="true"><div class="d-flex w-0 align-items-center justify-content-between"><strong class="mb-1 episodeList">Episode-${i+1}</strong></div></a>`;
        elementDivContentList.onclick = () => contentEpisode(i+1);
    };
}).catch(error => console.warn(error));
*/

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