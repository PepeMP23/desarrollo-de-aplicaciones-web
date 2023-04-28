async function getAccessToken() {
  const clientId = "f9dcaf7741d7456fadb358d5622d4b10";
  const clientSecret = "bf9108b14a1145c391cd178112016210";
  const url = "https://accounts.spotify.com/api/token";
  const encodedData = btoa(`${clientId}:${clientSecret}`);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${encodedData}`,
      },
      body: "grant_type=client_credentials",
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", error);
  }
}

const searchAlbum = async () => {
  let nombreArtista = document.getElementById("nombreArtista");
  let nombreAlbum = document.getElementById("nombreAlbum");
  let fotoArtista = document.getElementById("fotoAlbum");
  let listaCanciones = document.getElementById("listaCanciones");
  const artistName = document.getElementById("artist-name").value;

  const token = await getAccessToken();
  const headers = {
    "Authorization": `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`https://api.spotify.com/v1/search?type=artist&q=${encodeURIComponent(artistName)}`, { headers });
    const data = await response.json();
    const artistId = data.artists.items[0].id;

    const albumsResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}/albums`, { headers });
    const albumsData = await albumsResponse.json();
    const firstAlbumId = albumsData.items[0].id;

    const albumResponse = await fetch(`https://api.spotify.com/v1/albums/${firstAlbumId}`, { headers });
    const albumData = await albumResponse.json();

    nombreArtista.innerHTML = albumData.artists[0].name;
    nombreAlbum.innerHTML = albumData.name;
    fotoArtista.src = albumData.images[0].url;

    let canciones = albumData.tracks.items;

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
  } catch (err) {
    console.error(err);
  }
};

/*
const searchAlbum = () => {
  let nombreArtista = document.getElementById("nombreArtista");
  let nombreAlbum = document.getElementById("nombreAlbum");
  let fotoArtista = document.getElementById("fotoAlbum");
  let listaCanciones = document.getElementById("listaCanciones");
  const artistName = document.getElementById("artist-name").value;
  const searchUrl = `https://spotify23.p.rapidapi.com/search?type=artist&q=${encodeURIComponent(artistName)}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "58a453fe03mshb5bd1b917318450p1bc291jsn6e55b4b8ed44",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  fetch(searchUrl, options)
    .then((response) => response.json())
    .then((response) => {
      const artistId = response.artists.items[0].id;
      const albumsUrl = `https://spotify23.p.rapidapi.com/artists/${artistId}/albums`;

      return fetch(albumsUrl, options);
    })
    .then((response) => response.json())
    .then((response) => {
      const firstAlbumId = response.items[0].id;
      const albumUrl = `https://spotify23.p.rapidapi.com/albums/?ids=${firstAlbumId}`;

      return fetch(albumUrl, options);
    })
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
};
*/

/*
const searchArtist = () => {
  const artistId = document.getElementById("artist-id").value;
  const searchUrl = `https://spotify23.p.rapidapi.com/artists/?ids=${artistId}`;

  const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "58a453fe03mshb5bd1b917318450p1bc291jsn6e55b4b8ed44",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  fetch(searchUrl, options)
    .then((response) => response.json())
    .then((response) => {
      const artistId = response.artists.items[0].id;
      getArtistAlbum(artistId);
    })
    .catch((err) => console.error(err));
};

const getArtistAlbum = (artistId) => {
  let nombreArtista = document.getElementById("nombreArtista");
  let nombreAlbum = document.getElementById("nombreAlbum");
  let fotoArtista = document.getElementById("fotoAlbum");
  let listaCanciones = document.getElementById("listaCanciones");
  const url = `https://spotify23.p.rapidapi.com/artists/?ids=${artistId}`;

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
      const albumId = response.items[0].id;
      fetch(`https://spotify23.p.rapidapi.com/artists/?ids=${albumId}`, options)
        .then((response) => response.json())
        .then((album) => {
          nombreArtista.innerHTML = album.artists[0].name;
          nombreAlbum.innerHTML = album.name;
          fotoArtista.src = album.images[0].url;

          let canciones = album.tracks.items;

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
    })
    .catch((err) => console.error(err));
};
*/