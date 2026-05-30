/**
 * ==========================================================================
 * 1. CARRUSEL DINÁMICO DE IMÁGENES (HERO)
 * ==========================================================================
 */
const imagenesTecnologia = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500&auto=format&fit=crop"
];

let indiceActual = 0;

// Corrección del selector: apuntamos específicamente a la imagen del Hero
const etiquetaImagen = document.querySelector(".hero-imagen img");

function cambiarImagen() {
    indiceActual = indiceActual + 1;
    
    if (indiceActual >= imagenesTecnologia.length) {
        indiceActual = 0;
    }
    
    etiquetaImagen.src = imagenesTecnologia[indiceActual];
}

// Inicializa el temporizador del carrusel (3 segundos)
if (etiquetaImagen) {
    setInterval(cambiarImagen, 3000);
}

/**
 * ==========================================================================
 * 2. CONTROL DEL BOTÓN DE ACCIÓN ("SABER MÁS")
 * ==========================================================================
 */
const botonSaberMas = document.querySelector(".mi-boton");

if (botonSaberMas) {
    botonSaberMas.addEventListener("click", function() {
        alert("¡Gracias por tu interés! Pronto habilitaremos nuestro catálogo completo de cursos y servicios de reparación.");
    });
}

/**
 * ==========================================================================
 * 3. CONTROL DEL MINI REPRODUCTOR Y SISTEMA MULTIMEDIA INTEGRADOR
 * ==========================================================================
 */
const botonMusica = document.getElementById('btn-musica');
const miAudio = document.getElementById('mi-audio');
const miVideo = document.querySelector('.reballing-video-wrapper video');

// Función auxiliar para pausar la música y resetear el estado del botón
function pausarMusicaSistema() {
    if (miAudio && !miAudio.paused) {
        miAudio.pause();
        if (botonMusica) {
            botonMusica.textContent = "🎵 Reproducir Música";
            botonMusica.classList.remove('sonando'); // Corrección: elimina el color verde de activo
        }
    }
}

// Evento Click: Alternar Reproducción / Pausa manual
if (botonMusica && miAudio) {
    botonMusica.addEventListener('click', function() {
        if (miAudio.paused) {
            miAudio.play().catch(error => console.log("La reproducción automática fue bloqueada por el navegador hasta que interactúes con la página."));
            botonMusica.textContent = "⏸️ Pausar Música";
            botonMusica.classList.add('sonando');
        } else {
            pausarMusicaSistema();
        }
    });
}

// Interrupción Inteligente: Si el usuario reproduce el video, pausamos la música de fondo
if (miVideo) {
    miVideo.addEventListener('play', () => {
        pausarMusicaSistema();
    });
}
