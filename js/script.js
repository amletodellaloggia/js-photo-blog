// CARDS
// Inizio facendo una chiamata usando Axios verso l'endpoint dell'API che ci fornisce le foto
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const data = response.data; // Alla risposta prendo i dati del campo .data, che è un array di oggetti e ognuno rappresenta un'immagine da inserire nelle card

  const container = document.getElementById("pictures-container"); // Punto al container del DOM dove voglio inserire le immagini

  // Con forEach prendo ogni elemento dell'array eseguendo la funzione su di esso, in questo specifico caso le picture verranno inserite in un div che creo dinamicamente con createElement e che conterrà la card, e le assegno il nome col (che fa riferimento alla classe Bootstrap)
  data.forEach((picture) => {
    const col = document.createElement("div");
    col.className = "col";

                  // ALTERNATIVE FOR EACH

                  // Alternativa (tentativo): data.map
                  // data.map((picture) => {
                  // const col = document.createElement("div");
                  // col.className = "col";

                  // Alternativa (tentativo): Ciclo for...of
                  // for (const picture of data) {
                  // const col = document.createElement("div");
                  // col.className = "col"

                  // Alternativa (tentativo) Ciclo for
                  // for (let i = 0; i < data.length; i++) {
                  //   const picture = data[i];
                  //   const col = document.createElement("div");
                  //   col.className = "col";

    // Inserisco una card all’interno della col appena creata, usando innerHtml
    // Nell’immagine metto l’URL fornito dall’API, il testo sarà recuperato sempre dall'API sfruttando title
    // Aggiungo direttamente in HTML la card
        col.innerHTML = `
      <div class="card h-100" style="position: relative;">
        <img src="${picture.url}" class="card-img-top" alt="${picture.title}"> 
        <img src="/img/pin.svg" class="pin-img-top" alt="pin">
        <div class="card-body">
          <p class="card-text" id="picture-date">${picture.date || ""}</p>
          <p class="card-text fw-bold text-uppercase" id="picture-title">${
            picture.title || ""
          }</p>
        </div>
      </div>
    `;

    // Infine aggiungo la colonna al contenitore div creato prima, così viene visualizzata in pagina
    container.appendChild(col);

    // OVERLAY
    // Seleziono l'immagine della card
    const imgElement = col.querySelector(".card-img-top");

    // Quando clicco l'immagine, mostro l'overlay con quella stessa immagine, evitando quindi di selezionare TUTTE le immagini
    imgElement.addEventListener("click", () => {
      const overlay = document.getElementById("custom-overlay");
      const overlayImg = overlay.querySelector("img");

      // Metto l'immagine cliccata nell'overlay
      // Le assegno lo stesso src e alt della foto che è stata cliccata, così l'overlay potrà mostrare la foto in grande
      overlayImg.src = picture.url;
      overlayImg.alt = picture.title || "Foto ingrandita";

      // Mostro l'overlay
      overlay.classList.remove("d-none");
    });
  });
});

    // CHIUSURA OVERLAY
    // Al click, con eventListener aggiungo d-none per far sparire l'overlay
    document.getElementById("close-overlay").addEventListener("click", () => {
      document.getElementById("custom-overlay").classList.add("d-none");
    });

// })
