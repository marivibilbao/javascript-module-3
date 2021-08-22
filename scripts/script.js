/* Declaro variables para la parte superior de la web (Logo) */
const root = document.querySelector("#root"); 
const divTitle = document.createElement("div"); 
divTitle.classList.add("logo");
root.appendChild(divTitle);
divTitle.innerHTML = `<img src="./images/image4.png" class="img-logo"></img>`;

const divSidebar = document.createElement("div");
divSidebar.classList.add("sidebar");
root.appendChild(divSidebar);

const sidebarColumn = '<div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;"><a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"><svg class="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg><span class="fs-5 fw-semibold">Lista de Episodios</span></a><div class="list-group list-group-flush border-bottom scrollarea"><a href="#" class="list-group-item list-group-item-action active py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"></a><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight" aria-current="true"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Tues</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action py-3 lh-tight"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small class="text-muted">Mon</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a></div></div>'
divSidebar.innerHTML = (sidebarColumn);
