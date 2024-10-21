const searchInput = document.getElementById('search-input');
const cardsArtists = document.getElementById('result-artist');
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchInput){
    const url = `http://localhost:3000/artists?name_like=${searchInput}`;
    fetch(url)
        .then((response) => response.json)
        .then((result) => displayResults(result))
}

function displayResults(){
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    cardsArtists.classList.remove('hidden');
}

document.addEventListener('input', () => {
    const searchValor = searchInput.value.toLowerCase();
    if(searchValor === ''){
        resultPlaylist.classList.add('hidden')
        cardsArtists.classList.remove('hidden');
        return;
    }
})