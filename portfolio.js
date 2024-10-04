document.addEventListener("DOMContentLoaded", function() {
    // Incrementa visitas
    let visits = localStorage.getItem("visitCount") ? parseInt(localStorage.getItem("visitCount")) : 0;
    visits++;
    localStorage.setItem("visitCount", visits);
    document.getElementById("visitCount").textContent = visits;

    // Cargamos y actualizamos el contador de "Me Gusta"
    let likes = localStorage.getItem("contadorMeGusta") ? parseInt(localStorage.getItem("contadorMeGusta")) : 0;
    document.getElementById("contadorMeGusta").textContent = likes;

    // Agregamos evento de click al botón de Me Gusta
    document.getElementById("botonMeGusta").addEventListener("click", function() {
        likes++;
        localStorage.setItem("contadorMeGusta", likes);
        document.getElementById("contadorMeGusta").textContent = likes;
    });
});
