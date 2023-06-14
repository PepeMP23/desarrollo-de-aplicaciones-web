// Url's.
const urls = {
  artists: "https://api.spotify.com/v1/search?type=artist",
  token: "https://accounts.spotify.com/api/token",
  albums: (artistId) => `https://api.spotify.com/v1/artists/${artistId}/albums`,
  album: (albumId) => `https://api.spotify.com/v1/albums/${albumId}`,
};

// Keys.
const clientId = "f9dcaf7741d7456fadb358d5622d4b10";
const clientSecret = "bf9108b14a1145c391cd178112016210";
const encodedData = btoa(`${clientId}:${clientSecret}`);

async function fetchWithToken(url, token, method = "GET") {
  const options = {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const request = await fetch(url, options);
  return request.json();
}

async function getAccessToken() {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${encodedData}`,
      },
      body: "grant_type=client_credentials",
    };
    const request = await fetch(urls.token, options);
    const response = await request.json();
    return response.access_token;
  } catch (e) {
    console.error("Error", e.message);
  }
}

async function getArtist(name, token) {
  const url = `${urls.artists}&q=${name}`;
  return fetchWithToken(url, token);
}

async function getAlbums(artistId, token) {
  const url = urls.albums(artistId);
  return fetchWithToken(url, token);
}

async function getAlbum(albumId, token) {
  const url = urls.album(albumId);
  return fetchWithToken(url, token);
}

// App.
const app = new Vue({
  el: "#app",
  data: {
    name: "",
    artist: {},
    album: {},
    albumUrl: "",
    songs: [],
  },
  methods: {
    async submit() {
      try {
        this.reset();

        const accessToken = await getAccessToken();

        let response = await getArtist(this.name, accessToken);
        const artistId = response.artists.items[0].id;
        this.artist = response.artists.items[0];

        response = await getAlbums(artistId, accessToken);
        const albumId = response.items[0].id;

        response = await getAlbum(albumId, accessToken);
        this.album = response;
        console.log(response);

        this.albumUrl = response.images[0].url;
        this.songs = response.tracks.items;

        this.resetName();
      } catch (e) {
        console.error("Error", e.message);
      }
    },
    reset() {
      this.artist = {};
      this.album = {};
      this.albumUrl = "";
      this.songs = [];
    },
    resetName() {
      this.name = "";
    },
  },
});
