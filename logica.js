const songs = [
    { title: "Soñé", artist: "Zoé", phrase: "Pues no tengo nada que perder...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "sone.m4a" },
    { title: "Droopy likes your Face", artist: "Minecraft Volume Alpha", phrase: "Entre cubos y nostalgia...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_uno.m4a" },
    { title: "Labios rotos", artist: "Zoé", phrase: "En el desierto de mi alma...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "labiosrotos.m4a" },
    { title: "Tarde", artist: "Siddhartha", phrase: "Tarde se me hacía para volver a verte...", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "tarde.m4a" },
    { title: "Me hace falta", artist: "Siddhartha", phrase: "Con la luz intermitente, Vibra tu frecuencia...", cover: "https://images.genius.com/4d612579eb7472076b70e67617e12fb6.1000x1000x1.png", src: "me_hace_falta.mp3" },
    { title: "Tears", artist: "Minecraft", phrase: "Fantastica geometría multicolor...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_dos.m4a" },
    { title: "Vía lactea", artist: "Zoé", phrase: "Del prisma de tus ojos, en mi caso de astronauta...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "via_lactea.mp3" },
    { title: "Bruma", artist: "León Larregui", phrase: "Dar sin esperar nada a cambio...", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKhj6DATZm2qKUx11gFHedys-WEO3UfFgUQ&s", src: "bruma.m4a" },
    { title: "Velur", artist: "Zoé", phrase: "Me ajusto, pero no me aplaco... Ni rosas, ni avellanas echa formol al corazón...", cover: "https://cdn-images.dzcdn.net/images/cover/46d64f553900fcee92fdc8e364246828/0x1900-000000-80-0-0.jpg", src: "velur.m4a" },
    { title: "Ser parte", artist: "Siddhartha", phrase: "Reinventarme y ser parte, al final si todo va a cambiar me guiare por tí...", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "ser_parte.mp3" }
    
];

let typewriterInterval; // Variable global para controlar la animación

function typeWriter(text) {
    const container = document.getElementById('typewriter-text');
    container.innerHTML = ""; // Limpia el texto previo
    clearInterval(typewriterInterval); // Detiene cualquier animación en curso

    let i = 0;
    typewriterInterval = setInterval(() => {
        if (i < text.length) {
            container.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typewriterInterval); // Se detiene al terminar la frase
        }
    }, 100); // Velocidad en milisegundos por letra
}

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
    typeWriter(songs[currentSongIndex].phrase || "");
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

audio.addEventListener('ended', () => {
    nextSong(); 
});

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

    // INICIO AUTOMÁTICO:
    // Cargamos y reproducimos la primera canción inmediatamente
    selectSong(0); 
    
    // Opcional: Intentar reproducir (el navegador podría bloquearlo hasta el primer clic)
    audio.play().catch(error => {
        console.log("El autoplay fue bloqueado por el navegador. Esperando interacción del usuario.");
    });

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

//---------------------------------------------------- Footer ------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const footerText = document.querySelector('.footer-copy .lang');

    if (footerText) {
        // Guardamos el texto original para poder volver a él después
        const textoOriginal = footerText.innerText;
        // Obtenemos la frase alternativa del atributo data-en
        const textoAlternativo = footerText.getAttribute('data-en');

        // Evento: Cuando el mouse entra
        footerText.addEventListener('mouseenter', () => {
            footerText.innerText = textoAlternativo;
        });

        // Evento: Cuando el mouse sale
        footerText.addEventListener('mouseleave', () => {
            footerText.innerText = textoOriginal;
        });
    }
});

//---------------------------------------------------- Switch ------------------------------------------------

const themeSwitch = document.getElementById('themeSwitch');

if (themeSwitch) {
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Si el switch está activo, añadimos la clase
            document.body.classList.add('alt-theme');
        } else {
            // Si se desactiva, volvemos al fondo original
            document.body.classList.remove('alt-theme');
        }
    });
}