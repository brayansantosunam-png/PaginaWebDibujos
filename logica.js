/* ------------------------------------------------------ Welcome page ----------------------------------------------- */
const bgVideo = document.getElementById('bgVideo');

document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const welcomeOverlay = document.getElementById('welcome-overlay');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            // Aplicamos el efecto de desvanecimiento
            welcomeOverlay.classList.add('fade-out');
            
            // REPRODUCCIÓN AL CLIC: Ahora llamamos a la primera canción aquí
            selectSong(0);
        });
    }

});

const welcomePhrases = [
    "Bienvenido a la bruma de la complejidad geométrica del ser y sentir...",
    "Nada que perder ante la oxitocina que inhibe el cortisol ...",
    "Frecuencia de Siddhartha y la lírica de Zoé convergen entre cubos y hachas ...",
    "Comienzo de Capitulo 01 ..."
];

const welcomeColors = [
    "#e3eefc", 
    "#fdf2f0", 
    "#fcf0fd", 
    "#f0fdf4", 
    "#fdfaf0"  
];

const welcomeImages = [
    "wallpaper_01.png",       
    "wallpaper_02.png",         
    "wallpaper_03.png",        
    "wallpaper_04.png"       
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function handleWelcomeTypewriter() {
    const target = document.querySelector('.welcome-subtitle');
    const overlay = document.getElementById('welcome-overlay');
    const mainImg = document.querySelector('.welcome-main-img');
    
    if (!target) return;

    const currentPhrase = welcomePhrases[phraseIndex];

    if (isDeleting) {
        // Borrando texto
        target.innerText = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50; // Borra más rápido
    } else {
        // Escribiendo texto
        target.innerText = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100; // Velocidad normal de escritura
    }

    // Lógica de cambio de estado
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Terminó de escribir, espera antes de borrar
        isDeleting = true;
        typeSpeed = 2000; // Pausa de 2 segundos al terminar la frase
    } else if (isDeleting && charIndex === 0) {
        // Terminó de borrar, elige una nueva frase aleatoria
        isDeleting = false;
        
        // Elegir una frase aleatoria diferente a la anterior
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * welcomePhrases.length);
        } while (nextIndex === phraseIndex);
        
        phraseIndex = nextIndex;

        const randomColor = welcomeColors[Math.floor(Math.random() * welcomeColors.length)];
        overlay.style.backgroundColor = randomColor;

        if (mainImg) {
            // Efecto opcional: desvanecer antes de cambiar
            mainImg.style.opacity = "0"; 
            
            setTimeout(() => {
                const randomImg = welcomeImages[Math.floor(Math.random() * welcomeImages.length)];
                mainImg.src = randomImg;
                mainImg.style.opacity = "1";
            }, 300); // Cambia la imagen mientras está invisible
        }

        typeSpeed = 500;
    
    }

    setTimeout(handleWelcomeTypewriter, typeSpeed);
}

// Iniciar el efecto
handleWelcomeTypewriter();

/* ----------------------------------------------------- Playlist ----------------------------------------------------------------------------------------------- */

const songs = [
    { title: "Soñé", artist: "Zoé", phrase: "Pues no tengo nada que perder...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "sone.m4a" },
    { title: "Droopy likes your Face", artist: "Minecraft Volume Alpha", phrase: "Entre cubos y nostalgia...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_uno.m4a" },
    { title: "Labios rotos", artist: "Zoé", phrase: "En el desierto de mi alma...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "labiosrotos.m4a" },
    { title: "Tarde", artist: "Siddhartha", phrase: "Tarde se me hacía para volver a verte...", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "tarde.m4a" },
    { title: "Me hace falta", artist: "Siddhartha", phrase: "Con la luz intermitente, Vibra tu frecuencia...", cover: "https://images.genius.com/4d612579eb7472076b70e67617e12fb6.1000x1000x1.png", src: "me_hace_falta.mp3" },
    { title: "Tears", artist: "Minecraft", phrase: "Fantastica geometría multicolor...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_dos.m4a" },
    { title: "Vía lactea", artist: "Zoé", phrase: "Del prisma de tus ojos, en mi casco de astronauta...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "via_lactea.mp3" },
    { title: "Bruma", artist: "León Larregui", phrase: "Dar sin esperar nada a cambio...", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKhj6DATZm2qKUx11gFHedys-WEO3UfFgUQ&s", src: "bruma.m4a" },
    { title: "Velur", artist: "Zoé", phrase: "Me ajusto, pero no me aplaco, echa formol al corazón...", cover: "https://cdn-images.dzcdn.net/images/cover/46d64f553900fcee92fdc8e364246828/0x1900-000000-80-0-0.jpg", src: "velur.m4a" },
    { title: "Ser parte", artist: "Siddhartha", phrase: "Reinventarme y ser parte de tú ser, al final me guiare por tí.", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "ser_parte.mp3" }
    
];

const maskFiles = [
    'mascara_cuadrado.png',
    'mascara_pildora_version_dos.png',
    'mask.png',
    'mask_shape_spiner.png',
    'mask_shape_triangle.png'
];

let currentMaskIndex = 0;
let maskInterval = null;
let isShuffle = false;
let isRepeat = false;
let favoriteSongs = JSON.parse(localStorage.getItem('favoriteSongs')) || [];

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
        
        const isFav = favoriteSongs.includes(song.title);
        const favIcon = isFav ? `<span class="material-symbols-outlined fav-indicator" style="font-size: 18px; color: #709fde; margin-left: 10px;">relax</span>` : '';

        div.innerHTML = `
            <div class="cover-song">
                <img src="${song.cover}" alt="cover">
            </div>
            <div class="song-info">
                <h4>${song.title}${favIcon} - ${song.artist}</h4>
            </div>
        `;
        playlistContainer.appendChild(div);
    });
}

/* Cambia de forma aleatoria la mascara de la canción que este sonando */
function changeDynamicMask() {
    // Buscamos la imagen dentro del elemento 'active' de la playlist
    const activeImg = document.querySelector('.song-item.active .cover-song img');
    
    if (activeImg) {
        // 1. Iniciamos la animación de escala
        activeImg.classList.add('animate-mask');

        // 2. Justo a la mitad de la animación (400ms), cambiamos la imagen de la máscara
        setTimeout(() => {
            currentMaskIndex = (currentMaskIndex + 1) % maskFiles.length;
            const newMaskUrl = `url('${maskFiles[currentMaskIndex]}')`;
            
            activeImg.style.webkitMaskImage = newMaskUrl;
            activeImg.style.maskImage = newMaskUrl;
        }, 300);

        // 3. Quitamos la clase al terminar para poder repetirla luego
        setTimeout(() => {
            activeImg.classList.remove('animate-mask');
        }, 600);
    }
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
    document.getElementById('playIcon').textContent = "pause";
    addMagneticEffect(playBtn);

    if (bgVideo) {
        bgVideo.classList.add('video-playing');
    }

    if (!maskInterval) {
        maskInterval = setInterval(changeDynamicMask, 2000);
    }
}

function pauseSong() {
    audio.pause();
    document.getElementById('playIcon').textContent = "play_arrow";
    addMagneticEffect(playBtn);

    if (bgVideo) {
        bgVideo.classList.remove('video-playing');
    }

    clearInterval(maskInterval);
    maskInterval = null;
}

/**
 * Salta a la siguiente canción (Circular)
 */
function toggleFavorite() {
    const currentSong = songs[currentSongIndex];
    if (favoriteSongs.includes(currentSong.title)) {
        favoriteSongs = favoriteSongs.filter(title => title !== currentSong.title);
    } else {
        favoriteSongs.push(currentSong.title);
    }
    localStorage.setItem('favoriteSongs', JSON.stringify(favoriteSongs));
    loadPlaylist();
    addMagneticEffect(document.getElementById('favBtn'));
}


function nextSong() {
    if (isShuffle) {
        let newIndex;
        // Evitamos que salga la misma canción dos veces seguidas
        do {
            newIndex = Math.floor(Math.random() * songs.length);
        } while (newIndex === currentSongIndex && songs.length > 1);
        currentSongIndex = newIndex;
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
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

audio.removeEventListener('ended', nextSong);
audio.addEventListener('ended', () => {
    if (isRepeat) {
        audio.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
});

// Esperamos a que el HTML esté listo
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Referencias a los botones
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shuffleBtn = document.getElementById('shuffleBtn');
    const repeatBtn = document.getElementById('repeatBtn');
    const favBtn = document.getElementById('favBtn');

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
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.style.color = isShuffle ? "#709fde" : ""; 
        addMagneticEffect(shuffleBtn);
    });

    repeatBtn.addEventListener('click', () => {
        isRepeat = !isRepeat;
        repeatBtn.style.color = isRepeat ? "#709fde" : ""; 
        addMagneticEffect(repeatBtn);
    });

    favBtn.addEventListener('click', toggleFavorite);

    // 3. Cargar la playlist inicial
    loadPlaylist();

    // INICIO AUTOMÁTICO:
    // Cargamos y reproducimos la primera canción inmediatamente

});

function addMagneticEffect(element) {
    element.classList.add('magnetic-effect');
    setTimeout(() => {
        element.classList.remove('magnetic-effect');
    }, 400); // Duración de la animación CSS
}


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

/* --------------------------------------------------- Detras de camaras ------------------------------------------------ */

const misFotos = [
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHVbluVfk3EzFTrxLAjsQ8UL7KSkVgHBJVb2ow0_PAA9jDHLR0KkzW-w6Zp1Dsdmtirvgpt0yFzsver7_O85OVi8FPekf7T6FZVF-7ExyyC0PF7pboe5gSvYFz4QACztj57MFTgph6UYrdxeF6gJtzGEddgcQmYpsOI2jAb8Y7sjMD5OHkNWMOTifAl7I/s2101/Gemini_Generated_Image_hd0kuwhd0kuwhd0k.png", phrase: "Explorando nuevas texturas en el arte." },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhvF_mr9O61Im6hMldXxun81RCoIi45FPE6XeNW2FYtVOZhD-Q67tg_akqWy5mp_2BnZ5pgrV4hstFVjLMElrElaKgaon3zCidkECJfBMMAKzWXb8CT5vl65eV-Sc5QjhQxYf_RSTr2_RN5EiSoL6LZkuqPL1K551f94Suvq6l9jXloRfQvOSzpozhqsY/s2164/Gemini_Generated_Image_u8xiu9u8xiu9u8xi.png", phrase: "La geometría de lo cotidiano." },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3JbfOn3ZZq5x_9-0sarl5aArtbMFFF38kPzIt7QbY7kIH83kXJzukwkEHaU4YSGfS5lxaN3PaOnXAsEj20ApCnN9u-UDRvujFTVjucQK13A04_2YbunhPussJVz_6hkC8b_wOOn2pIbJmx2Eqt7Hucrg7kY4lb0kq9o32WK0dZAFUYaz66xGR0nUQZHs/s1486/Gemini_Generated_Image_p9bmlwp9bmlwp9bm.png", phrase: "Oxitocina: el pulso de la creación." },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2koZqBVNyjqKnXi_zASbmf-7-7dC9QJ9XC31fni-1uT5FoJgvBuulVz3EPRFoagTKRITRhrF10ufNA2TBPq_JpxjAtKqNx0QWiUACbtIPi0AXUcKpGuR-X4RRNgg5g45UTmufl6DJZHqIHeuOtvrZQby3Za09wu13q9vvf3EMmj0Co-4ZcMuhW4_2FXw/s1647/Gemini_Generated_Image_4xpw0v4xpw0v4xpw.png", phrase: "Hey hope, vamos a confeccionar una frecuencia de millón de megahertz." },
    { url: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHgci7hy6d_YvObom1J2-eotJp1vsqBpxll_5QU_oSxLi8YV2-VatI4Ukf6R2GUwNUsgAm2TdqdXbQdb1Y3bH39CnWLifdR_TbznLeveAc7XIFdxS79AsdVeJWDpAYyfTZT4FAI0MPkeXCYFMSa3av98tSq9B1CMfbfzarP5W4mbNua7M5U7pdHfExnLE/s1356/c26b8d93-36c3-4328-a8f7-1d8d3494827e-1_all_23465~2.jpg", phrase: "Bruma en la atmosfera de la galaxia." }
];

let descTypewriterInterval; 

function typeWriterDescription(text) {
    const target = document.querySelector('.Descripcion-photo');
    if (!target) return;

    clearInterval(descTypewriterInterval); 
    target.innerText = ""; 

    let i = 0;
    descTypewriterInterval = setInterval(() => {
        if (i < text.length) {
            target.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(descTypewriterInterval);
        }
    }, 40); 
}

function displayUserPhotos(photoUrls) {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = ''; 

    photoUrls.forEach(foto => {
        const img = document.createElement('img');
        img.src = foto.url; 
        img.className = 'user-photo';
        
        img.addEventListener('mouseenter', () => {
            typeWriterDescription(foto.phrase);
        });

        img.addEventListener('mouseleave', () => {
            typeWriterDescription("Detrás de cámaras");
        });

        img.addEventListener('click', () => {
            showImageInFullScreen(foto.url);
        });
        
        photoContainer.appendChild(img);
    });
}

function showImageInFullScreen(url) {
    const fullScreenDiv = document.getElementById('full-screen');
    const fullScreenImg = document.getElementById('full-screen-img');
    fullScreenImg.src = url;
    fullScreenDiv.style.display = 'flex';
}

document.getElementById('close-full-screen').addEventListener('click', () => {
    const fullScreenDiv = document.getElementById('full-screen');
    fullScreenDiv.style.display = 'none';
});


document.addEventListener('DOMContentLoaded', () => {
    displayUserPhotos(misFotos);
});

/* --------------------------------------------------- Modo ambiente ---------------------------------------------------- */

let inactivityTime = 0;
let ambientModeActive = false;
const INACTIVITY_LIMIT = 30; // Segundos para activar
let pulseInterval; // Variable para controlar la animación automática

// Referencias al DOM
const ambientOverlay = document.getElementById('ambient-overlay');
const ambientWrapper = document.getElementById('ambient-carousel-wrapper');
const originalSlot = document.getElementById('original-carousel-slot');
const photoScrollElement = document.getElementById('photo-container'); // El carrusel en sí

// 1. Función que se ejecuta cada segundo para comprobar inactividad
setInterval(() => {
    inactivityTime++;
    if (inactivityTime >= INACTIVITY_LIMIT && !ambientModeActive) {
        activateAmbientMode();
    }
}, 1000); // Chequeo cada 1 segundo

// 2. Función para resetear el contador si hay actividad
function resetInactivityTimer() {
    inactivityTime = 0;
    if (ambientModeActive) {
        deactivateAmbientMode();
    }
}

// Eventos que cuentan como "actividad" del usuario
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer); // Para móviles

// 3. Activar el modo ambiente
function activateAmbientMode() {
    ambientModeActive = true;
    
    // A) Mover el carrusel físicamente en el DOM
    // Lo quitamos de su lugar original y lo metemos en la pantalla de ambiente
    if (photoScrollElement && ambientWrapper) {
        ambientWrapper.appendChild(photoScrollElement);
    }
    
    // B) Mostrar la pantalla con efecto fade-in (CSS)
    ambientOverlay.classList.add('active');

    // C) Iniciar la animación automática de las imágenes
    startAutomaticPulsing();
}

// 4. Desactivar el modo ambiente
function deactivateAmbientMode() {
    ambientModeActive = false;

    // A) Ocultar la pantalla con efecto fade-out (CSS)
    ambientOverlay.classList.remove('active');
    
    // B) Detener la animación automática
    stopAutomaticPulsing();

    // C) Esperar a que termine la transición CSS (0.8s) antes de mover el elemento de vuelta
    setTimeout(() => {
        // Devolver el carrusel a su lugar original en la web principal
        if (photoScrollElement && originalSlot) {
            originalSlot.appendChild(photoScrollElement);
        }
    }, 800); // Debe coincidir con el tiempo de transition en CSS
}


/* ================= LÓGICA DE ANIMACIÓN AUTOMÁTICA (PULSE) ================= */

function startAutomaticPulsing() {
    const photos = document.querySelectorAll('.user-photo');
    if (photos.length === 0) return;

    let currentIndex = 0;

    // Función que activa una imagen y desactiva la anterior
    const pulseNextImage = () => {
        // Limpiar clase de todas primero por seguridad
        photos.forEach(img => img.classList.remove('auto-pulse'));

        // Activar la imagen actual
        photos[currentIndex].classList.add('auto-pulse');

        // Calcular el siguiente índice (circular)
        currentIndex = (currentIndex + 1) % photos.length;
    };

    // Ejecutar inmediatamente la primera vez
    pulseNextImage();

    // Establecer el intervalo para que cambie cada 2.5 segundos
    // (Un poco más que la duración de la transición CSS de la imagen)
    pulseInterval = setInterval(pulseNextImage, 2500); 
}

function stopAutomaticPulsing() {
    // Detener el intervalo
    clearInterval(pulseInterval);
    
    // Limpiar la clase 'auto-pulse' de todas las imágenes para que vuelvan a su estado normal
    const photos = document.querySelectorAll('.user-photo');
    photos.forEach(img => img.classList.remove('auto-pulse'));
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

// Función para activar el modo oscuro
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.body.classList.add('alt-theme');
    updateThemeColor();
}

// Función para activar el modo claro
function enableLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('alt-theme');
    updateThemeColor();
}
// Guardar la preferencia del usuario en el almacenamiento local
function saveUserPreference(isDarkMode) {
    localStorage.setItem('isDarkMode', isDarkMode);
}

// Cargar la preferencia del usuario desde el almacenamiento local
function loadUserPreference() {
    return localStorage.getItem('isDarkMode') === 'true';
}

// Aplicar el modo basado en la preferencia del sistema
function applySystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode();
    } else {
        enableLightMode();
    }
}

// Escuchar cambios en la preferencia del sistema
window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
    if (loadUserPreference() === null) { // Solo aplicar el cambio si el usuario no ha guardado una preferencia
        if (e.matches) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    }
});


document.getElementById("themeSwitch").addEventListener("change", function () {
    const isChecked = this.checked;

    if (isChecked) {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    saveUserPreference(isChecked);
    updatePDFThumbnails();
});

// Inicializar el modo según la preferencia guardada
function initializeMode() {
    const userPreference = loadUserPreference();
    const themeSwitch = document.getElementById("themeSwitch");

    if (userPreference !== null) {
        themeSwitch.checked = userPreference;
        if (userPreference) {
            enableDarkMode();
        } else {
            enableLightMode();
        }
    } else {
        applySystemPreference();
        themeSwitch.checked = document.body.classList.contains('dark-mode');
    }
}

// Llama a initializeMode al cargar la página
initializeMode();

function updateThemeColor() {
    const statusBarColor = getComputedStyle(document.body)
        .getPropertyValue('--status-bar-color')
        .trim();

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (metaThemeColor && statusBarColor) {
        metaThemeColor.setAttribute('content', statusBarColor);
    }
}