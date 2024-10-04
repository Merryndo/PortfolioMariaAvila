document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('lightSwitch');

    switchInput.addEventListener('click', () => {
        window.location.href = './portfolio.html'; // Redirige a la nueva página HTML
    });

    // Detener el parpadeo después de 3 segundos
    const neonText = document.querySelector('.neon-text');
    const timer = setTimeout(() => {
        if (neonText) {
            neonText.style.animation = 'none';
            neonText.style.textShadow = 
                '0 0 5px #f0e68c, ' +
                '0 0 10px #f0e68c, ' +
                '0 0 15px #f0e68c, ' +
                '0 0 20px #f0e68c, ' +
                '0 0 40px #f0e68c';
        }
    }, 3000);

    // Limpiar el temporizador si el componente se desmonta
    return () => clearTimeout(timer);
});
