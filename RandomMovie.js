const randomMovies = [
    'Marrow Bone', 'Animales Nocturnos', 'Speak No Evil', 'Dogtooth', 'Titane',
    'Miss Violence', 'Visitor Q', 'Audition', 'The strange thing about the johnsons',
    'El remanente', 'It comes at night', 'La ballena', 'Lamb', 'Men', 'Saint Maud',
    'Captain Fantastic', 'Ex Machina', 'Enemy', 'The grudge', 'Shutter', 'Gonijam',
    'Aterrados', 'mr nobody', 'Dream Scenario', 'Contracted', 'El frío en los huesos',
    'Ghostland', 'underwater', 'Talk to me', 'Society of the Snow'
];
const buttonMovie = document.getElementById('movieButton');
const pMovieSelection = document.getElementById('movieSelection')


buttonMovie.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random()*randomMovies.length);
    pMovieSelection.innerText = randomMovies[randomIndex];
});