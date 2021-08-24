/* 1. Declaro variables para la parte superior de la web (Logo) */
const root = document.querySelector("#root"); 
const divTitle = document.createElement("div"); 
divTitle.classList.add("logo");
root.appendChild(divTitle);
divTitle.innerHTML = `<img src="./images/image4.png" class="img-logo"></img>`;

/* 2. Declaro variable de Sidebar */
const divSidebar = document.createElement("div");
divSidebar.innerHTML ='<div class="list-content d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 200px;"><a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><span class="fs-5 fw-semibold">Episode List</span></a><div class="list-group list-group-flush border-bottom scrollarea"></div></div>';
root.appendChild(divSidebar);

const url = `https://rickandmortyapi.com/api/episode`;


/* Función 
function renderContent (episodio) {

};
*/ 

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
        elementDivContentList.innerHTML = `<a href="#" class="m-1 list-group-item list-group-item-action active py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1 episodeList">Episode-${i+1}</strong></div></a>`;
        //elementDivContentList.onclick = () => contentEpisode(i+1);
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