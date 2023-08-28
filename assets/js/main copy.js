const lista = document.querySelector('.listaMangasHome');

async function carregarListaMangas() {
    const response = await fetch("assets/json/listaMangas.json");
    const mangas = await response.json();

    var contMangas = 0;

    function carregarMangas() {
        lista.innerHTML = "";
        for (var i = 0; i < 12; i++) {
            const mangaButton = document.createElement("button");
            mangaButton.className = "mangas";
            mangaButton.id = mangas[i].inpId;
            
            const mangaImage = document.createElement("img");
            mangaImage.src = mangas[i].img;
            mangaButton.appendChild(mangaImage);
            
            const mangaNome = document.createElement("div");
            mangaNome.className = "listaMangasNome";
            mangaNome.textContent = mangas[i].nome;
            mangaButton.appendChild(mangaNome);
            
            const listaCaps = document.createElement("div");
            listaCaps.className = "listaCaps";
            
            for (let ii = mangas[i].caps.length - 1; ii >= Math.max(mangas[i].caps.length - 4, 0); ii--) {
                const capituloLink = document.createElement("a");
                capituloLink.className = "mangas";
                capituloLink.href = mangas[i].caps[ii];
                capituloLink.textContent = `Capitulo ${ii + 1}`;
                listaCaps.appendChild(capituloLink);
            }
            
            mangaButton.appendChild(listaCaps);
            lista.appendChild(mangaButton);
        }
    }

    carregarMangas();
}

carregarListaMangas();
