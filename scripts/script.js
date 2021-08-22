/* 1. Declaro variables para la parte superior de la web (Logo) */
const root = document.querySelector("#root"); 
const divTitle = document.createElement("div"); 
divTitle.classList.add("logo");
root.appendChild(divTitle);
divTitle.innerHTML = `<img src="./images/image4.png" class="img-logo"></img>`;

/* 3. Declaro variable de Sidebar */
const divSidebar = document.createElement("div");
divSidebar.classList.add("sidebar");
root.appendChild(divSidebar);

const sidebarColumn = '<div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;"><div class="list-group list-group-flush border-bottom scrollarea"><a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"></a><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a></div></div>'
divSidebar.innerHTML = (sidebarColumn);

/* Declaro variable del botón del sidebar */


/* Función para mostrar lista en sidebar */
function renderAllEpisodiosSidebar(formatJsonAll) {
    //formatJsonAll.results.forEach((episodio, index) => {
    
    //};    
};

/* 2. Función para hacer request de episodios a la API (visualizar varios en el sidebar) */
const getAllEpisodios = async () => {
    try{
        const url = `https://rickandmortyapi.com/api/episode/`;
        const formatJsonAll = await fetch(url);
        const formatObjectAll = await formatJsonAll.json();
        renderAllEpisodiosSidebar(formatObjectAll);
    }catch(error){
        console.log(error);
    };
};