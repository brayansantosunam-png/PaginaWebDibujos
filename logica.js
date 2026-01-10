const songs = [
    { title: "Soñé", artist: "Zoé", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "sone.m4a" },
    { title: "Droopy likes your Face", artist: "Minecraft Volume Alpha", cover: "https://cdn-images.dzcdn.net/images/cover/a6e61f6327038b8dd63ec08509c69244/0x1900-000000-80-0-0.jpg", src: "minecraft_uno.m4a" },
    { title: "Labios rotos", artist: "Zoé", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "labiosrotos.m4a" },
    { title: "Tarde", artist: "Siddhartha", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "tarde.m4a" },
    { title: "Ojos noche", artist: "Elsa y el mar", cover: "https://i.scdn.co/image/ab67616d0000b27315b34a0c485e552542339421", src: "ojosnoche.m4a" },
    { title: "Tears", artist: "Minecraft", cover: "https://cdn-images.dzcdn.net/images/cover/a6e61f6327038b8dd63ec08509c69244/0x1900-000000-80-0-0.jpg", src: "minecraft_dos.m4a" },
    { title: "Bruma", artist: "León Larregui", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKhj6DATZm2qKUx11gFHedys-WEO3UfFgUQ&s", src: "bruma.m4a" },
    { title: "Velur", artist: "Zoé", cover: "https://cdn-images.dzcdn.net/images/cover/46d64f553900fcee92fdc8e364246828/0x1900-000000-80-0-0.jpg", src: "velur.m4a" }
];

let currentSongIndex = 0;
const audio = document.getElementById('mainAudio');
const playBtn = document.getElementById('playBtn');
const playlistContainer = document.getElementById('playlist');

function loadPlaylist() {
    playlistContainer.innerHTML = ''; // Limpia la lista actual
    songs.forEach((song, index) => {
        const div = document.createElement('div');
        // Si el índice coincide con la canción actual, añade la clase CSS 'active'
        div.className = `song-item ${index === currentSongIndex ? 'active' : ''}`;
        div.onclick = () => selectSong(index);
        
        div.innerHTML = `
            <img src="${song.cover}" alt="cover">
            <div class="song-info">
                <h4>${song.title} - ${song.artist}</h4>
            </div>
        `;
        playlistContainer.appendChild(div);
    });
}

/* Cambia la fuente del audio y reproduce la canción seleccionada*/
function selectSong(index) {
    currentSongIndex = index;
    audio.src = songs[currentSongIndex].src;
    loadPlaylist(); 
    playSong();
}

/* Alterna entre reproducción y pausa */
function togglePlay() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

function playSong() {
    // Si es la primera vez que se pulsa play, carga la canción actual
    if (!audio.src || audio.src === "") {
        audio.src = songs[currentSongIndex].src;
    }
    audio.play();
    playBtn.innerText = "⏸"; // Cambia el icono a pausa
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = "▶"; // Cambia el icono a play
}

/**
 * Salta a la siguiente canción (Circular)
 */
function nextSong() {
    // (0+1) % 6 = 1 ... (5+1) % 6 = 0 (Vuelve al inicio)
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    selectSong(currentSongIndex);
}

/**
 * Salta a la canción anterior (Circular)
 */
function prevSong() {
    // Sumar songs.length evita que el resultado sea un número negativo
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    selectSong(currentSongIndex);
}

// Esperamos a que el HTML esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Referencias a los botones
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // 2. Asignar las funciones a los eventos de clic
    if (playBtn) {
        playBtn.addEventListener('click', togglePlay);
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', prevSong);
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', nextSong);
    }

    // 3. Cargar la playlist inicial
    loadPlaylist();
});

/* ------------------------------------------------------ Seek bar --------------------------------------------- */

const audio_sb = document.getElementById('mainAudio');
const seekSlider = document.getElementById('seekSlider');
const trackWave = document.getElementById('trackWave');
const currentTimeLabel = document.getElementById('currentTime');
const totalDurationLabel = document.getElementById('totalDuration');
const trackStraight = document.querySelector('.track-straight');

// Actualizar la barra mientras la canción suena
function updateSeekBar() {
    if (audio.duration) {
        const percentage = (audio.currentTime / audio.duration) * 100;
        seekSlider.value = percentage;
        trackWave.style.width = percentage + "%";
        trackStraight.style.left = `calc(${percentage}% + 10px)`;
        trackStraight.style.width = `calc(${100 - percentage}% - 10px)`;
        currentTimeLabel.innerText = formatTime(audio.currentTime);
    }
}

// Asignamos la función al evento
audio.ontimeupdate = updateSeekBar;


// Cargar duración total cuando la canción esté lista
audio_sb.onloadedmetadata = () => {
    totalDurationLabel.innerText = formatTime(audio_sb.duration);
};

// Permitir al usuario mover la canción con la barra
seekSlider.oninput = () => {
    const percentage = seekSlider.value;
    const seekTo = audio.duration * (percentage / 100);
    audio.currentTime = seekTo;
    
    // Actualización inmediata al arrastrar
    trackWave.style.width = percentage + "%";
    trackStraight.style.left = `calc(${percentage}% + 10px)`;
    trackStraight.style.width = `calc(${100 - percentage}% - 10px)`;
};

// Función para convertir segundos a formato 0:00
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}