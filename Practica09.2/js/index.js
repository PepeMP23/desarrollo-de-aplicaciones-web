const searchAlbum = () => {
    let nombreArtista = document.getElementById("nombreArtista");
    let nombreAlbum = document.getElementById("nombreAlbum");
    let fotoArtista = document.getElementById("fotoArtista");
    let listaCanciones = document.getElementById("listaCanciones");
    const artistId = document.getElementById("artist-id").value;
    const url = `https://spotify23.p.rapidapi.com/albums/?ids=${artistId}`;
  
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "58a453fe03mshb5bd1b917318450p1bc291jsn6e55b4b8ed44",
            "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
    };
  
    fetch(url, options)
        .then((response) => response.json())
        .then((response) => {
            nombreArtista.innerHTML = response.albums[0].artists[0].name;
            nombreAlbum.innerHTML = response.albums[0].name;
            fotoArtista.src = response.albums[0].images[0].url;
    
            let canciones = response.albums[0].tracks.items;
    
            let todasLasCanciones = "";
            canciones.forEach((cancion, index) => {
            let nombreCancion = cancion.name;
            let cancionUrl = cancion.preview_url;
            todasLasCanciones += `
                <div class="col-12 col-md-4 text-center">
                    <p>${nombreCancion}</p>
                    <audio controls>
                        <source src="${cancionUrl}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>`;
            console.log(nombreCancion);
            console.log(cancion.preview_url);
        });
        listaCanciones.innerHTML = todasLasCanciones;
    })
    .catch((err) => console.error(err));
}