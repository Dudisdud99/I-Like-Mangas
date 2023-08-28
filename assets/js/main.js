const lista = document.querySelector('.listaMangasHome');

async function carregarListaMangas() {
    const response = await fetch("assets/json/listaMangas.json");
    const mangas = await response.json();

    var contMangas = 0;

    function carregarMangas() {
        lista.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            lista.innerHTML +=
                `<button class="mangas" id="${mangas[i].inpId}">
                    <img src="${mangas[i].img}"></img>
                    <div class="listaMangasNome">${mangas[i].nome}</div>
                    <div class="listaCaps"></div>
                </button>`;

            const listaCaps = document.querySelector(".listaCaps");
            listaCaps.innerHTML = "";
            for (let ii = mangas[i].caps.length - 1; ii >= Math.max(mangas[i].caps.length - 4, 0); ii--) {
                listaCaps.innerHTML +=
                    `<a class="mangas" href="${mangas[i].caps[ii]}">Capitulo ${ii + 1}</a>`;
            }
        }
    }

    carregarMangas();
}

carregarListaMangas();
