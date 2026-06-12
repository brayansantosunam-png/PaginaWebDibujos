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
    { title: "Soñé", artist: "Zoé", phrase: "Pues no tengo nada que perder...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "sone.m4a", link: "https://open.spotify.com/intl-es/track/2VhJ4nrPorAbySEgO4V0BS" },
    { title: "Droopy likes your Face", artist: "Minecraft Volume Alpha", phrase: "Entre cubos y nostalgia...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_uno.m4a", link: "https://open.spotify.com/intl-es/track/0kZEfdlIq3sfQklsGcUZDm" },
    { title: "Labios rotos", artist: "Zoé", phrase: "En el desierto de mi alma...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "labiosrotos.m4a", link: "https://share.google/aimode/FJutnTOeOMxUojUVq" },
    { title: "Tarde", artist: "Siddhartha", phrase: "Tarde se me hacía para volver a verte...", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "tarde.m4a", link: "https://share.google/aimode/1N4OOnvlG6KLJVtCE" },
    { title: "Me hace falta", artist: "Siddhartha", phrase: "Con la luz intermitente, Vibra tu frecuencia...", cover: "https://images.genius.com/4d612579eb7472076b70e67617e12fb6.1000x1000x1.png", src: "me_hace_falta.mp3", link: "https://open.spotify.com/intl-es/track/7EAr8k0WiV9ybItof6utFj" },
    { title: "Tears", artist: "Minecraft", phrase: "Fantastica geometría multicolor...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "minecraft_dos.m4a", link: "https://open.spotify.com/intl-es/track/0kZEfdlIq3sfQklsGcUZDm" },
    { title: "Vía lactea", artist: "Zoé", phrase: "Del prisma de tus ojos, en mi casco de astronauta...", cover: "https://cdn-images.dzcdn.net/images/cover/8498486810fb5956153f175822b7b7d8/0x1900-000000-80-0-0.jpg", src: "via_lactea.mp3", link: "https://open.spotify.com/intl-es/track/1nquycJ4zLhrT23rwtH5Wj" },
    { title: "Bruma", artist: "León Larregui", phrase: "Dar sin esperar nada a cambio...", cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKhj6DATZm2qKUx11gFHedys-WEO3UfFgUQ&s", src: "bruma.m4a", link: "https://share.google/aimode/uegIMAnAy3DAhwNIg"},
    { title: "Velur", artist: "Zoé", phrase: "Me ajusto, pero no me aplaco, echa formol al corazón...", cover: "https://cdn-images.dzcdn.net/images/cover/46d64f553900fcee92fdc8e364246828/0x1900-000000-80-0-0.jpg", src: "velur.m4a", link: "https://open.spotify.com/intl-es/track/6Bpw7j4WL3IwdM1xLPcH7Q" },
    { title: "Doma", artist: "Jósean Log", phrase: "De este desparpajo, yo de esta no me rajo...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5U8VJdtWDJb3S8XRk7dXFqkf8WXFTpOvw5yn3aral845kVhajX3rrQoHAHMefY7V-6AEfWwzwLUXK6SMSvFkYslAK95Vr-XUq4YYJF1OvHqUR3CC50SZ_MaeIjd87GmDAwwjPIuAmDjDqVwSnW_gFDf7w69U5ymll5KNbq0IYfpIxhIdn_enAnp1KLSY/w492-h492/doma.jpg", src: "doma.mp3", link: "https://open.spotify.com/intl-es/track/58cLm4PaHNt8DDr9ayZnNz" },
    { title: "Búscame otra vez", artist: "Kevin Kaarl", phrase: "Cariño, te he esperado, buscame otra vez...", cover: "http://blogger.googleusercontent.com/img/a/AVvXsEg06Yf5cixLCsleroAlH70uig4NT9x44T9BlnO0sopNXZ3YNsiAFwpOfMXzIj-57B25ioovhLGe6s9M5OsI_O5C0J62wnB4vp5i8YjmgnrLSjdyL9nDF5vKc9FSqC5SFO6leo0JqMT0zomOxa4lTwyQgVTjNBltJujnKHzQUQ8lKqk9nEY0Y3UCMcAJzZU", src: "buscame_otravez.mp3", link: "https://open.spotify.com/intl-es/track/4YnjesWFrSEkhwERM5Fhj7" },
    { title: "Unicos", artist: "Siddhartha", phrase: "Veinte millas de calor... y otra vez...", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "Unicos.mp3",  link: "https://share.google/aimode/zGdg3R3v1hB7VW9NG"},
    { title: "Mice on venus", artist: "Minecraft", phrase: "Calma, curiosidad, antender y ganas de...", cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYA9JFGnmzLKIhmwtyy3JimNGHTFg8cXoknIPVR_DM2J-LRxvfX4MhklD3xLGkb7ZOyDyyhsuWXLA6zOSLr2uQibClGQoETpfKGBfiYn5frqtOtFHjc4sMRcS2Uhr62OGSplpKt7qbjp3hyphenhyphenf84nSFgQ4YToMRs9a0eFGaZQ53hB0pXQ5av5CK2bWtPC9M/s640/minecraft.jpg", src: "mice_on_venus.mp3",  link: "https://share.google/aimode/8qZ0Jop9EApVncwKy"},
    { title: "Ser parte", artist: "Siddhartha", phrase: "Reinventarme y ser parte de tú ser, al final me guiare por tí.", cover: "https://cdn-images.dzcdn.net/images/cover/a508833ee74e2cd3197f0641e3c73545/1900x1900-000000-80-0-0.jpg", src: "ser_parte.mp3",  link: "https://share.google/aimode/hMmWd26Wkbf9XoTUs"}
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
const songBtn = document.getElementById('SongBtn');

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

function scrollToActiveSong() {
    const activeItem = document.querySelector('.song-item.active');
    if (activeItem) {
        // Un pequeño retraso asegura que el DOM ya aplicó las clases CSS
        setTimeout(() => {
            activeItem.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' // ¡Esto es la magia que lo centra en el carrusel!
            });
        }, 50);
    }
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
    scrollToActiveSong();
}

/* Alterna entre reproducción y pausa */
function togglePlay() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
}

const FADE_TIME = 3;
let fadeInInterval = null;

function playSong() {
    if (!audio.src || audio.src === "") {
        audio.src = songs[currentSongIndex].src;
    }

    audio.volume = 0; 
    audio.play();

    clearInterval(fadeInInterval); 
    
    const stepMs = 50; 
    const volumeStep = 1 / ((FADE_TIME * 1000) / stepMs); 

    fadeInInterval = setInterval(() => {
        if (audio.volume + volumeStep < 1) {
            audio.volume += volumeStep; 
        } else {
            audio.volume = 1; 
            clearInterval(fadeInInterval); 
        }
    }, stepMs);
    
    document.getElementById('playIcon').textContent = "pause";
    addMagneticEffect(playBtn);

    // Pequeña validación de seguridad por si bgVideo no está en el HTML actual
    if (typeof bgVideo !== 'undefined' && bgVideo) {
        bgVideo.classList.add('video-playing');
    }

    if (!maskInterval) {
        maskInterval = setInterval(changeDynamicMask, 2000);
    }

    const waveElement = document.getElementById('trackWave');
    if (waveElement) waveElement.classList.add('wave-playing');
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

    const waveElement = document.getElementById('trackWave');
    if (waveElement) waveElement.classList.remove('wave-playing');
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
    const songBtn = document.getElementById('SongBtn');
    const allControlButtons = document.querySelectorAll('.main-controls button, .sub-controls button');

    // 2. Asignar las funciones a los eventos de clic
    if (songBtn) {
        songBtn.addEventListener('click', () => {
            const currentLink = songs[currentSongIndex].link;
            if (currentLink) {
                window.open(currentLink, '_blank');
            }
            triggerPushEffect(songBtn); // También aplica empuje
        });
    }
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

    allControlButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            triggerPushEffect(btn);
            
            // Si quieres que también mantenga el efecto de escala que ya tenías:
            if (typeof addMagneticEffect === "function") {
                addMagneticEffect(btn);
            }
        });
    });

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

        
        const timeLeft = audio.duration - audio.currentTime; 

        if (timeLeft <= FADE_TIME) {
            const targetVolume = Math.max(0, timeLeft / FADE_TIME);
            
            
            if (audio.volume >= targetVolume) {
                audio.volume = targetVolume;
            }
        }
       
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
    
    trackWave.style.width = percentage + "%";
    trackStraight.style.left = `calc(${percentage}% + 10px)`;
    trackStraight.style.width = `calc(${100 - percentage}% - 10px)`;

    clearInterval(fadeInInterval); 
    if (audio.duration - audio.currentTime > FADE_TIME) {
        audio.volume = 1;
    }
};


// Función para convertir segundos a formato 0:00
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

function triggerPushEffect(element) {
    const prevSibling = element.previousElementSibling;
    const nextSibling = element.nextElementSibling;

    if (prevSibling) {
        prevSibling.classList.add('push-left');
        setTimeout(() => prevSibling.classList.remove('push-left'), 500);
    }

    if (nextSibling) {
        nextSibling.classList.add('push-right');
        setTimeout(() => nextSibling.classList.remove('push-right'), 500);
    }
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
let focusedPhotoIndex = 0;
let autoPlayInterval;

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

function nextPhoto() {
    const photos = document.querySelectorAll('#photo-container .user-photo');
    if (!photos.length) return;
    
    focusedPhotoIndex = (focusedPhotoIndex + 1) % photos.length;
    updatePhotoCarousel();
}

function startAutoPlay() {
    clearInterval(autoPlayInterval); 
    autoPlayInterval = setInterval(nextPhoto, 2500); 
}

function displayUserPhotos(photoUrls) {
    const photoContainer = document.getElementById('photo-container');
    photoContainer.innerHTML = ''; 

    photoUrls.forEach((foto, index) => {
        const img = document.createElement('img');
        img.src = foto.url; 
        img.className = 'user-photo';
        img.setAttribute('data-index', index);
        
        img.addEventListener('click', () => {
            focusedPhotoIndex = index;
            updatePhotoCarousel();
            
            startAutoPlay(); 
            
            showImageInFullScreen(foto.url); 
        });

        img.addEventListener('mouseenter', () => {
            typeWriterDescription(foto.phrase);
            clearInterval(autoPlayInterval); 
        });

        img.addEventListener('mouseleave', () => {
            typeWriterDescription("Detrás de cámaras");
            startAutoPlay(); 
        });
        
        photoContainer.appendChild(img);
    });

    updatePhotoCarousel();
    startAutoPlay();
}

function updatePhotoCarousel() {
    const container = document.getElementById('photo-container');
    const photos = document.querySelectorAll('.user-photo');
    

    if (!photos.length) return;

    photos.forEach((img, index) => {
        
        img.classList.remove('active');
        img.style.webkitMaskImage = "none";
        img.style.maskImage = "none";

        if (index === focusedPhotoIndex) {
            
            img.classList.add('active');

            const randomIndex = Math.floor(Math.random() * maskFiles.length);
            const selectedMask = maskFiles[randomIndex];

            img.style.webkitMaskImage = `url('${selectedMask}')`;
            img.style.maskImage = `url('${selectedMask}')`;
        }
    });

    
    const isMobile = window.innerWidth <= 1150;
    const containerWidth = container.parentElement.offsetWidth; 
    const photoWidth = isMobile ? 100 : 170; 
    
    const centerOffset = (containerWidth / 2) - (photoWidth / 2) - (focusedPhotoIndex * photoWidth);
    
    container.style.transform = `translateX(${centerOffset}px)`;
}

window.addEventListener('resize', updatePhotoCarousel);

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
    
    document.getElementById('typewriter-text').innerHTML = "";
    const currentPhrase = songs[currentSongIndex].phrase || "";
    typeWriter(currentPhrase, 'ambient-dynamic-text');
}


// 4. Desactivar el modo ambiente
function deactivateAmbientMode() {
    ambientModeActive = false;
    ambientOverlay.classList.remove('active');
    
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

/* --------------------------------------------------- Galería Estilo Video (Con Efecto Cápsula) ---------------------------------------------------- */
const videoGalleryData = [
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfV_mXKwnmu385otixx-RtO_ubELlox-QrM7k9ZsKr8c44061JHKqJv-BOyv9rCLgBtLPwxFj7zFwx7TqtEuQvCZWpWS4Wq5tnq42DM9ci4ipMWvn3WZH4ysOR-x9SE1k9orKZriJDExJkrKRUSnZHO24pW3kqLVmA-NyEjdpgE7HYGz1pHOIv5w5S4Ak/s1195/1780887784539.png', 
        title: 'Cosas que dije/ no dije estuvieron mal...', 
        subtitle: 'Cariño te he buscado, buscame otra vez' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGCEQlZOVVOJChVxF3BS6KVYBPMxvbXad6JxUP_lYUKY-_JBR52DW0kMRwtGkQd6AfOdT34y4fSzf2DjWSSMYVYve7soGwTMFDWfeQAdLtJO7UxskYbuuVZIL2r0dpqeUD74iNfjTBdSp46L71n9BwnRNkrh9OVkM0bfh2bP88MvCdwKoOh4ujey325Dw/s4624/PXL_20260530_022717262.NIGHT.jpg', 
        title: 'No creo que entiendas el "quiza" que yo siento...', 
        subtitle: 'Y duele añorar lo que ya no esta' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcTmanC-9wHbUyTc1z8cwJy1eBnBPyytFEbjc_4hepkTXnbIWITDPm24XTvZF62Snm_IFBprLq7ebkdzw6zSrZJ_ZJe7GW7mtIo0eIry8QORmOWzaEe7wN8HLEwREOamNj8VD8MoufJDfb1Nv_l2iwHpgYKqKpnzW9c2KrIiM497Wy5WnJaGIcBhAmzTk/s4080/PXL_20260602_220748383.jpg', 
        title: 'Se que debo soltarte, pero no olvidarte...', 
        subtitle: 'Sonrio cuando recuerdo todo' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhK6mj6FpuiOkwbv_ogsAewtMaEVcivdxHE3cEY8FjoaYuzcYSUguvHOSrMVrc1rPjE2lIVsOVjzyIa2jW2tMrOKzbQ4L8F7IGkCxml4CcJoKnCAcJ4Y3udUgP7MT6-oRFfrBWslGZbK1LRXEL6GxHxYre3E-5I1GzdyZDeM8gBUqE1bP1idla0XACRvmw/s4032/PXL_20250616_201528824.jpg', 
        title: 'Que bonito fue ver tus ojitos, compartir...', 
        subtitle: 'El tiempo no fue en vano' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh7sp07TbCqOAjVqGOYmFhu5TYUwpHp2snFuOcQhLqy2UYMkk2u-LmHOfEvtkDp1xgxU8HJ48RlgqWFI21SpmvmTzpzwyDZf_roY9V1NhsDhsqB_n9BFTcUGqG6qbVtHs6izWqAyoc4URabp0qNiRaHceSoEuQ17xyrNYm8ip72nHkfgRZnNxof2GKyYvg/s4624/PXL_20260213_185630350.MP.jpg', 
        title: 'A veces tan triste, a veces tan libre...', 
        subtitle: '¿Es el sol o es la luna?' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjtLwVsbKm7z998cnJCClTmecamKTOC9CdqwzpxH275Dy8VXuyz_Spu_kxqdpTZ9NrEhQ6js19S1STHLKJo8dMBM2pt_rGWfqxFTMT0UVVoQn_EVGik9q3tIeClhbI22FWNHYWAckleNWwvKfSly4X-9TARVvn-tODWBq0DhFp9vA3Gp3c5CAxAwxBcu_s/s1350/IMG_01072025_1256.webp', 
        title: 'Quisiera fuera mentira Y de chingaso despertar ...', 
        subtitle: 'Un día más, una vez más' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgit4CQR8jSEyuU7IYjVbiV5-ycpPDjvilwHfiZO-ZTMzSUk9kx8qhSyeIfGH8yzDn6IhB19oxYG7tOSBwdoQk3n4407HCj6vSUDbJPkdq5DMvYdwn5dULnZpmgk1LPZtS4TaJEDFv1dBcRTr4O01Fl1VviE6KLQAwrEHzf-kP_8URxJxFltD0HuwUb9bE/s4032/PXL_20250529_215057923.jpg', 
        title: 'Solo por que te quiero, solo porque es así...', 
        subtitle: 'Se que no me perteneces, pero lo siento asi' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGyPY66R38HuzRa0en-5RrtzYlhpqqvB6x3SkWwceav7us3hWOJ4BHIJLAs96ltHZDSkrUmFjMwZBDC5m6WSxWqt7auwsZ3g7uLDMMGfyfoTd_tp1fP5dfOla33AKyEjH5ZY6AZvq234hZiJG6c74Llwgc-kOz4HvMDQSbl7qfBUOEybTvV3ffEjZBGxk/s4624/PXL_20251212_165552598.jpg', 
        title: 'Silencioso y lunar...', 
        subtitle: 'Me hipnotizaste como Obsidiana' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrRJ-BmCIOvDgd-T02_GJET4v5DLtE5QcqDrKOgUwfzb31765FT5CNYn3RdD4DwLwta8fcAs8-SYOLfoTSYKEDs5Paizbs6xJhXAkxGzQthscdpKB72F1bXyuKRqNs_B0CzEgk0XnSkieFNolcwh5t9P5AAJx0PWb8wtCFsJnfzNokUa_pGPKkftwfqW4/s4624/PXL_20260108_171245714.jpg', 
        title: 'Etapa magic box que termina aquí...', 
        subtitle: 'Para dar comienzo a algo más y seguir' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX-NPWMhAPcRHOXmohPrkH0q70FUO7arB9gdceQ5mBB7yfpxkJRlZm1w9DXbI1R0ts-jck8KEslJdvBja-cfpkR1meej_ZBtju72a1kRuRz5ykzWYUFxgsPoLjihtUSsCyZ0OjAU37f81IyACBn_AnNQSwa9Jam9_DFRoBWETacThkfASjOFHHgVGg3f4/s4624/PXL_20260115_161055036.jpg', 
        title: 'Queda un recuerdo y anhelo esporadico...', 
        subtitle: 'Para descubrirte de forma más real futuro' 
    },
    { 
        url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvoVrxXywUtruU4nBXnJX7KRn2MTNO-WKGOZZAmIWHPneL__PWewjw-Rxjo5kYBego2RVHZbMfK6MzXcVCwDiB2WIDp9xbeZG1t_bdolHbSN5suYz2KUpRBMYHW-hPdnk0PFiiVomEADpVUPeDyPRFPJPx8h-3x8oQuNeADXgLSJa54SAmMAzQTbQ9TmI/s3878/PXL_20260411_183230387~3%20(1).jpg', 
        title: 'Esperanza de conocerte y entenderte desde un mejor lugar...', 
        subtitle: '...'
    }
];

function buildHorizontalGallery() {
    const container = document.getElementById('gp-gallery-container');
    if (!container) return;

    container.innerHTML = '';

    videoGalleryData.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('gp-card');
        
        // Hacemos que la primera tarjeta esté activa al iniciar
        if(index === 0) card.classList.add('active-card');

        card.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            
            <div class="gp-info">
                <p class="gp-title">${item.title}</p>
                <p class="gp-subtitle">${item.subtitle}</p>
            </div>
        `;

        container.appendChild(card);
    });

    initGalleryScrollEffects(container);
}

function initGalleryScrollEffects(container) {
    const cards = container.querySelectorAll('.gp-card');
    
    // Función para calcular qué tarjeta está más cerca del centro de la pantalla
    function updateCenterCard() {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;

        let closestCard = null;
        let closestDistance = Infinity;

        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            const distance = Math.abs(containerCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestCard = card;
            }
        });

        // Aplicamos la clase solo a la tarjeta central
        cards.forEach(card => {
            if (card === closestCard) {
                card.classList.add('active-card');
            } else {
                card.classList.remove('active-card');
            }
        });
    }

    // Escuchamos el evento de scroll para actualizar el centro en tiempo real
    let isScrolling;
    container.addEventListener('scroll', () => {
        window.cancelAnimationFrame(isScrolling);
        isScrolling = window.requestAnimationFrame(updateCenterCard);
    });

    // --- Lógica de Deslizamiento Automático ---
    let autoScrollInterval = setInterval(scrollNext, 3500); // Cambia cada 3.5 segundos

    function scrollNext() {
        const activeCard = container.querySelector('.gp-card.active-card');
        if (!activeCard) return;

        const cardsArray = Array.from(cards);
        let nextIndex = cardsArray.indexOf(activeCard) + 1;
        
        // Si llegamos al final, volvemos a la primera
        if (nextIndex >= cardsArray.length) {
            nextIndex = 0;
        }

        // Movemos el contenedor para centrar la siguiente tarjeta
        const nextCard = cardsArray[nextIndex];
        
        // Calculamos la posición: offset de la tarjeta - la mitad del contenedor + la mitad de la tarjeta
        const scrollPosition = nextCard.offsetLeft - (container.clientWidth / 2) + (nextCard.clientWidth / 2);

        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }

    // Pausar la animación si el usuario interactúa con la galería
    container.addEventListener('touchstart', () => clearInterval(autoScrollInterval));
    container.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
    container.addEventListener('mouseleave', () => {
        autoScrollInterval = setInterval(scrollNext, 3500);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', buildHorizontalGallery);