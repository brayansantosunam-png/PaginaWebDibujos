/* ------------------------------------------------------ Menu ------------------------------------------------------ */
/* ------------------------------------------------------------- Efecto Menú ------------------------------------------- */
const links = document.querySelectorAll(".nav__link");
const indicator = document.querySelector(".nav__indicator");

function moveIndicator(element) {
    const itemRect = element.getBoundingClientRect();
    const listRect = element.parentElement.parentElement.getBoundingClientRect();
    const leftPosition = itemRect.left - listRect.left;
    
    indicator.style.width = `${itemRect.width + 20}px`;
    indicator.style.left = `${leftPosition - 10}px`;
}

links.forEach((link) => {
    link.addEventListener("click", (e) => {
        const currentItem = link.parentElement; // El li correspondiente
        const allItems = document.querySelectorAll(".nav__item");
        let foundCurrent = false;

        // 1. Gestión de clases activas y movimiento de burbuja
        links.forEach(l => l.classList.remove("active-link"));
        link.classList.add("active-link");
        moveIndicator(link);

        // 2. Lógica de "Empuje" para los hermanos
        allItems.forEach((item) => {
            // Limpiamos animaciones previas para poder repetir el efecto
            item.classList.remove("push-left", "push-right");
            
            if (item === currentItem) {
                foundCurrent = true; // Encontramos el pulsado
                return;
            }

            // Forzamos un reflow para que la animación se reinicie si se pulsa rápido
            void item.offsetWidth; 

            if (!foundCurrent) {
                // Los que están antes del pulsado se empujan a la izquierda
                item.classList.add("push-left");
            } else {
                // Los que están después se empujan a la derecha
                item.classList.add("push-right");
            }
        });

        // Opcional: Limpiar las clases después de que termine la animación (0.5s)
        setTimeout(() => {
            allItems.forEach(item => item.classList.remove("push-left", "push-right"));
        }, 500);
    });
});

// Inicialización
window.addEventListener('DOMContentLoaded', () => {
    const activeLink = document.querySelector('.active-link') || links[0];
    if(activeLink) {
        activeLink.classList.add("active-link");
        moveIndicator(activeLink);
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const floatingButton = document.getElementById('floatingButton1');
  const url = 'https://open.spotify.com/playlist/7BYeqYLgLrG8iWPNu2L4PN'; 

  floatingButton.addEventListener('click', () => {
      window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  });
});
/* ------------------------------------------------------ Background ------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const body = document.body;

    // Establecer capítulo 1 por defecto al cargar
    body.classList.add('cap-1');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Obtenemos el ID de la sección (ej: #Capitulo01)
            const targetId = this.getAttribute('href');

            if (targetId === '#Capitulo01') {
                body.classList.remove('cap-2');
                body.classList.add('cap-1');
            } 
            else if (targetId === '#Capitulo02') {
                body.classList.remove('cap-1');
                body.classList.add('cap-2');
            }
        });
    });
});
/* ----------------------------------------------- Capitulo 02 ------------------------------------------------------- */
const galleryImages = [
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLglp5OkXfMRE-pWuuuUUAvztnpasHsW6_NgLjNDKjFaaPEFDoYHGZHs_mAextv7dxyFDwZxCNlndbrya6JERsDsXhoZdegmpuV9sK1B1A-JdYfHZma_PF31SHkicjD1bw2LGYKV7fzZeXQn-oERZZ1mytY0ohGCcpGlk_FN_PmJG46oIY9YLQfrjxZZE/s4000/Picsart_26-03-19_18-22-14-595.jpg', text: 'Reinventarse' },
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia2C8eyPRdHNxmUZ4Zg04Gz7NwebWlRIDWRo4yVBdFzLnVNbzmeRQY2ynqxnXJ6qkmQKXUJFHouoy8onSDrvJIUr9Oc1jHHNQW-qHZqDyawLaLSYGl3ev1v7rfZrKThGiX_kqwvMrxGoqEnTNFpsy1pwCaTf97MuO3o8WwdIctUjTbSfr7-uexEqa0Rt8/s1724/Picsart_26-03-15_17-23-29-953.jpg', text: 'Tus ojos' },
    { url: 'http://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVSUgBge2DzZ5HKvMFU5wVmAng8kFKYX-3lA5UWDQRatu0q2JBIztswdQc0K6SZDJe3klHkVjDVzdgm1I-CEBQKlIlQ5miafl566wpKym6EcQxXbxBqZk83DM77gOliLpwMyzk14s6QaKjDQ5WvjcG7coatp6kOzyunV7g5FxXiEK6YXZmz9FXHl8wYbI/s2002/Pintura_03.png', text: 'Arte Gigante' },
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEEDA2PxA3uOHehTS8vMnRqrnuMptqiZo_SE2MKllQSjWfjviQ7RTwh3y6z2mUwKJId4BK_92vXLBtaRL7JAi8yEgFSiD6D2T3yVGLQToOqfyJ3BvRRsXIp2chSvhYAJgC4fs2FKabX8QThM1zgECXd-3MGHansQs3cCtHT8ayFqUkO6vYHEzcJfptfx4/s4032/PXL_20230325_010854250.jpg', text: 'Caminando' },
    { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEikvYxZXBDIpLRQCh9JxNzBXTAFz-nSBPzoA8KEV5svfbigfJ3QGceQ3aT0xAvkPZjdFFcPQqvzR4eNtGUCAQVCDJop4Ve0KolnyMZ9HK6ro40nlWbkEdZ1qQNqETSrOZdudfjz4KXXIgi-rpiCvIN_Vr_UzuutRFjgHV60llp6YhVc9EYxry8KncRPXps', text: 'Bruma Final' },
    { url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiratYj5gPTFyNAN8QcL8eET_MO999fHvr23bILi2H8GH1Dfm64R8KX5budwPjqt1J8pFbBv8fbq5eoWND1DKh_RdjgtBJHyGhETPdP8e86znH_ZaXkJvYoRZERdHjPri06w3_o37bxPMOhDmFqMAB0zSQQoDojSRggIlrXgGwKOYkG6MpR-QMStLURgDA/s1177/Screenshot_20260328-213720.png', text: 'Valioso' },
    { url: 'https://blogger.googleusercontent.com/img/a/AVvXsEh0Egl-mCd9f09wfOcnbosurjHMgvL3wyY-6CQmVQn3JYYT0aOGpQxc4JBrNskDpx2hIb1TxkWgjAcr81N2NKQDwE0vJeCLtbK48w6DmBjB8Pj45QwfvThuIJYkz5Xr2zPt6ZcG96qpNZSNew9pxM6ZjdX8Z6DjJX_OO16fgN6uVUtupP1XkJu-Hu4bchw', text: 'Enseñame de que estamos hechos' }
];

function loadGallery() {
    const gridContainer = document.getElementById('asymmetric-grid');
    gridContainer.innerHTML = '';

    galleryImages.forEach((item) => {
        // Creamos el contenedor del item
        const container = document.createElement('div');
        container.classList.add('gallery-item');

        // Creamos la imagen
        const img = document.createElement('img');
        img.src = item.url;
        img.alt = item.text;

        // Creamos el overlay con el texto
        const overlay = document.createElement('div');
        overlay.classList.add('item-overlay');
        overlay.innerHTML = `<span>${item.text}</span>`;

        // Evento para móvil: añade una clase al hacer clic
        container.addEventListener('click', () => {
            container.classList.toggle('active-mobile');
        });

        container.appendChild(img);
        container.appendChild(overlay);
        gridContainer.appendChild(container);
    });
}

document.addEventListener('DOMContentLoaded', loadGallery);
/* ------------------------------------------------------ Capitulo 01 ------------------------------------------------ */
const coverList = [
    'background_minecraft.png',
    'background_minecraft_night.png',
    'background_cap2_light.jpg',
    "background_cap2_night.jpg"
];

const avatarList = [
    'avatar_01.png',
    'avatar_02.png',
    'avatar_03.png'
    
];

const shapeList = [
    'mask_monte_perfil.png',
    'mask_sol.png',
    'mascara_pildora_version_dos.png'
];

const borderRadiusList = [
    '20px 20px 95px 95px', 
    '20px 20px 20px 20px', 
    '90px 90px 90px 90px'  
];

const themeColors = [
    { 
        light: { neon: '#ffb74d', bg: '#ffe0b2' }, 
        dark: { neon: '#f57c00', bg: '#4e3126' } // Naranja oscuro / Marrón
    },
    { 
        light: { neon: '#4a5572', bg: '#c8d0e6' }, 
        dark: { neon: '#7986cb', bg: '#30364e' } // Azul grisáceo oscuro
    },
    { 
        light: { neon: '#8e9eff', bg: '#c6d2ff' }, 
        dark: { neon: '#5c6bc0', bg: '#262e5c' } // Azul índigo oscuro
    },
    { 
        light: { neon: '#3f4b74', bg: '#c8e2e6' }, 
        dark: { neon: '#26a69a', bg: '#2c4044' } // Verde azulado oscuro (Teal)
    }
];

function applyCurrentThemeColors() {
    const isDark = document.body.classList.contains('dark-mode');
    
    const currentTheme = isDark ? themeColors[currentCoverIndex].dark : themeColors[currentCoverIndex].light;
    
    document.documentElement.style.setProperty('--neon-color', currentTheme.neon);
    document.documentElement.style.setProperty('--bg-color', currentTheme.bg);
}

let currentCoverIndex = 0;
let currentAvatarIndex = 0;

// Referencias al DOM
const avatarImg = document.getElementById('main-avatar');
const btnPrev = document.getElementById('btn-prev-avatar');
const btnNext = document.getElementById('btn-next-avatar');
const btnSave = document.getElementById('btn-save-avatar');
const coverImg = document.getElementById('dynamic-cover');
const controlsPanel = document.getElementById('avatar-controls');
const shapeImg = document.querySelector('.shape-underlay');
const avatarDisplayContainer = document.querySelector('.avatar-display');


function rotateCover() {
    coverImg.style.opacity = '0'; 
    
    setTimeout(() => {
        currentCoverIndex = (currentCoverIndex + 1) % coverList.length;
        coverImg.src = coverList[currentCoverIndex];
        coverImg.classList.add('scale-up-anim'); // Reinicia/mantiene animación
        coverImg.style.opacity = '1'; // Aparecer
        
        applyCurrentThemeColors(); 
        
    }, 800);
}

setInterval(rotateCover, 3000);

avatarImg.addEventListener('click', () => {
    // Al hacer clic en el avatar, mostramos la botonera
    controlsPanel.classList.remove('hidden-panel');
    
    // Opcional: También cambiar el avatar al hacer clic (como antes)
    currentAvatarIndex = (currentAvatarIndex + 1) % avatarList.length;
    avatarImg.src = avatarList[currentAvatarIndex];
});

document.addEventListener('DOMContentLoaded', () => {
    // Cargar primera portada
    coverImg.src = coverList[0];
    coverImg.classList.add('scale-up-anim');
    applyCurrentThemeColors();

    // Cargar avatar guardado
    const saved = localStorage.getItem('userSelectedAvatar');
    if (saved) {
        avatarImg.src = saved;
        const idx = avatarList.indexOf(saved);
        if(idx !== -1) currentAvatarIndex = idx;
    } else {
        avatarImg.src = avatarList[0];
    }
});
/**
 * Actualiza la imagen mostrada en el perfil
 */
function updateAvatarDisplay() {
    avatarImg.src = avatarList[currentAvatarIndex];

    avatarDisplayContainer.style.borderRadius = borderRadiusList[currentAvatarIndex];
    shapeImg.classList.remove('shape-anim'); // Quitamos la clase si ya existía
    void shapeImg.offsetWidth; // Forzamos un "reflow" para reiniciar la animación
    
    setTimeout(() => {
        shapeImg.src = shapeList[currentAvatarIndex];
        shapeImg.classList.add('shape-anim');
    }, 50); // Pequeño retraso para que el cambio se note con la animación
}

/**
 * Carga el avatar guardado en el navegador (si existe)
 */
function loadSavedAvatar() {
    const saved = localStorage.getItem('userSelectedAvatar');
    if (saved) {
        // Buscamos el índice que coincide con la URL guardada
        const index = avatarList.indexOf(saved);
        if (index !== -1) {
            currentAvatarIndex = index;
        } else {
            // Si la URL guardada no está en la lista actual, forzamos la primera
            avatarImg.src = saved; 
            return;
        }
    }
    updateAvatarDisplay();
}

// Eventos
btnNext.addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex + 1) % avatarList.length;
    updateAvatarDisplay();
});

btnPrev.addEventListener('click', () => {
    currentAvatarIndex = (currentAvatarIndex - 1 + avatarList.length) % avatarList.length;
    updateAvatarDisplay();
});

btnSave.addEventListener('click', () => {
    localStorage.setItem('userSelectedAvatar', avatarList[currentAvatarIndex]);
    localStorage.setItem('userSelectedShape', shapeList[currentAvatarIndex]); 
    localStorage.setItem('userProfileIndex', currentAvatarIndex); 
    
    controlsPanel.classList.add('hidden-panel');
    console.log("Perfil guardado localmente.");
});

function loadSavedProfile() {
    const savedIndex = localStorage.getItem('userProfileIndex');
    
    if (savedIndex !== null) {
        currentAvatarIndex = parseInt(savedIndex);
        avatarImg.src = avatarList[currentAvatarIndex];
        shapeImg.src = shapeList[currentAvatarIndex];
        avatarDisplayContainer.style.borderRadius = borderRadiusList[currentAvatarIndex];
    } else {
        // Valores por defecto si no hay nada guardado
        avatarImg.src = avatarList[0];
        shapeImg.src = shapeList[0];
        avatarDisplayContainer.style.borderRadius = borderRadiusList[0];
    }
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadSavedProfile()
});
/* ------------------------------------------------------ Welcome page ----------------------------------------------- */

const sequence = [
    { char: 'B', img: 'mask_shape_triangle.png' }, 
    { char: 'R', img: 'mask_spinner_dos.png' },
    { char: 'U', img: 'mask_flor_tres.png' },
    { char: 'M', img: 'mask_sol.png' },
    { char: 'A', img: 'mascara_cuadrado.png' },
    { char: 'BRUMA', img: 'mascara_pildora_version_dos.png', phrase: "Camara lenta y ... ♪"}
];

const extraImages = [
    'welcome_01.png',
    'welcome_02.png',
    'welcome_03.png',
    'welcome_04.png',
    'welcome_05.png'
];

let step = 0;
let currentExtraIndex = 0;


function runWelcomeSequence() {
    const charElement = document.getElementById('intro-char');
    const imageLayer = document.getElementById('intro-image-layer');
    const subtitleElement = document.getElementById('intro-subtitle'); 
    const controls = document.getElementById('welcome-controls');

    const updateStep = () => {
        if (step < sequence.length) {
            const data = sequence[step];

            charElement.classList.remove('active');

            setTimeout(() => {
                charElement.innerText = data.char;
                imageLayer.style.backgroundImage = `url('${data.img}')`;
                
                if (data.char === 'BRUMA') {
                    charElement.classList.add('word-mode');
                } else {
                    charElement.classList.remove('word-mode');
                }
                
                
                charElement.classList.add('active');
                
                step++;
                
                if (data.char === 'BRUMA') {
                    setTimeout(() => {
                        
                        subtitleElement.innerText = data.phrase;
                        
                        
                        subtitleElement.classList.add('show');
                        subtitleElement.classList.add('flash-effect');
                        subtitleElement.classList.add('typing-effect');
                        
                    }, 500); 

                    setTimeout(() => {
                        controls.classList.add('controls-visible');
                    }, 2500); 
                } else {
                    
                    setTimeout(updateStep, 1200);
                }
            }, 400); 
        }
    };

    updateStep();
}

function updateIntroImage() {
    const imageLayer = document.getElementById('intro-image-layer');
    if (imageLayer) {
        // Aplicamos la imagen de la lista extraImages
        imageLayer.style.backgroundImage = `url('${extraImages[currentExtraIndex]}')`;
    }
}

function nextIntroImage() {
    currentExtraIndex = (currentExtraIndex + 1) % extraImages.length;
    updateIntroImage();
}

function prevIntroImage() {
    currentExtraIndex = (currentExtraIndex - 1 + extraImages.length) % extraImages.length;
    updateIntroImage();
}

document.addEventListener('DOMContentLoaded', () => {
    const welcomeButtons = document.querySelectorAll('.btn-step, .btn-start-action');
    const btnNextIntro = document.getElementById('btn-next-intro');
    const btnPrevIntro = document.getElementById('btn-prev-intro');

    if (btnNextIntro) {
        btnNextIntro.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita interferencias con otros clics
            nextIntroImage();
        });
    }

    if (btnPrevIntro) {
        btnPrevIntro.addEventListener('click', (e) => {
            e.stopPropagation();
            prevIntroImage();
        });
    }
    welcomeButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            button.classList.add('scale-up-animation');

            setTimeout(() => {
                button.classList.remove('scale-up-animation');
            }, 300);
        });
    });
});

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
    // Iniciamos la secuencia
    runWelcomeSequence();

    // El botón para entrar sigue funcionando igual
    document.getElementById('startBtn')?.addEventListener('click', () => {
        document.getElementById('welcome-overlay').classList.add('fade-out');
        selectSong(0); 
    });
});



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
    { title: "Doma", artist: "Jósean Log", phrase: "De este desparpajo, yo de esta no me rajo...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5U8VJdtWDJb3S8XRk7dXFqkf8WXFTpOvw5yn3aral845kVhajX3rrQoHAHMefY7V-6AEfWwzwLUXK6SMSvFkYslAK95Vr-XUq4YYJF1OvHqUR3CC50SZ_MaeIjd87GmDAwwjPIuAmDjDqVwSnW_gFDf7w69U5ymll5KNbq0IYfpIxhIdn_enAnp1KLSY/w492-h492/doma.jpg", src: "doma.mp3" },
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


let wordInterval;

function typeWriter(text, targetId = 'typewriter-text') {
    const container = document.getElementById(targetId);
    
    if (!container) return;

    container.innerHTML = ""; 
    clearInterval(wordInterval); 

    const words = text.split(" "); 
    let i = 0;

    wordInterval = setInterval(() => {
        if (i < words.length) {
            const wordSpan = document.createElement('span');
            wordSpan.classList.add('word');
            wordSpan.innerText = words[i] + " "; // Espacio entre palabras
            
            // Color especial para la última palabra
            if (i === words.length - 1) wordSpan.style.color = "#709fde"; 

            container.appendChild(wordSpan);
            i++;
        } else {
            clearInterval(wordInterval);
        }
    }, 250); 
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
        const favIcon = isFav ? `<span class="material-symbols-outlined fav-indicator" style="font-size: 18px; color: #709fde; margin-left: 10px;"></span>` : '';

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

    // Detectamos si el modo ambiente está activo para elegir el destino del texto
    const target = ambientModeActive ? 'ambient-dynamic-text' : 'typewriter-text';
    
    // Mandamos la frase al destino correcto
    typeWriter(songs[currentSongIndex].phrase || "", target);
    
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
    if (photoScrollElement && ambientWrapper) {
        ambientWrapper.appendChild(photoScrollElement);
    }
    ambientOverlay.classList.add('active');
    startAutomaticPulsing();

    // Limpiamos el texto de la web principal y lo mandamos al ambiente
    document.getElementById('typewriter-text').innerHTML = "";
    const currentPhrase = songs[currentSongIndex].phrase || "";
    typeWriter(currentPhrase, 'ambient-dynamic-text');
}


// 4. Desactivar el modo ambiente
function deactivateAmbientMode() {
    ambientModeActive = false;
    ambientOverlay.classList.remove('active');
    stopAutomaticPulsing();

    setTimeout(() => {
        if (photoScrollElement && originalSlot) {
            originalSlot.appendChild(photoScrollElement);
        }

        // Limpiamos el texto del ambiente y lo devolvemos a la web principal
        document.getElementById('ambient-dynamic-text').innerHTML = "";
        const currentPhrase = songs[currentSongIndex].phrase || "";
        typeWriter(currentPhrase, 'typewriter-text');
    }, 800); 
}


/* ---------------------------------------------------------------- Efecto gradiente --------------------------------------------- */

window.addEventListener('scroll', () => {
    // Si el scroll vertical es mayor a 20px, añadimos la clase
    if (window.scrollY > 20) {
        document.body.classList.add('is-scrolled');
    } else {
        document.body.classList.remove('is-scrolled');
    }
});



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
    applyCurrentThemeColors();
}

// Función para activar el modo claro
function enableLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.body.classList.remove('alt-theme');
    updateThemeColor();
    applyCurrentThemeColors();
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