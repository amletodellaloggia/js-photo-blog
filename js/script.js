// Inizio facendo una chiamata usando Axios verso l'endpoint dell'API che ci fornisce le foto
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
  const data = response.data; // Alla risposta prendo i dati del campo .data, che è un array di oggetti e ognuno rappresenta un'immagine da inserire nelle card
  const container = document.getElementById("pictures-container"); // Punto al container del DOM dove voglio inserire le immagini

  // Creo dinamicamente una colonna (mi servo di Bootstrap) da appendere alla riga dell'HTML -PER OGNI- elemento dell'array
  data.forEach((picture) => {
	  const col = document.createElement("div");
	  col.className = "col";
	
	// Inserisco all’interno della colonna una card
    // Nell’immagine metto l’URL fornito dall’API, il testo sarà recuperato sempre dall'API sfruttando title  
    col.innerHTML = `
        <div class="card h-100">
          <img src="${picture.url}" class="card-img-top" alt="${
      picture.title || "Foto"
    }">
          <div class="card-body">
            <p class="card-text">${picture.title || ""}</p>
          </div>
        </div>
      `;
    // Infine aggiungo al contenitore la colonna, così viene visualizzata in pagina
    container.appendChild(col);
  });
});
