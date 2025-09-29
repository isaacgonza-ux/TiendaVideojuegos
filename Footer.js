document.addEventListener('DOMContentLoaded',() =>{
    fetch("Footer.html")//cargar el archivo html
    .then(res => res.text())//leer el archivo
    .then(data =>{
        document.getElementById("footer").innerHTML = data;//insertar el contenido en el div menu

    })
    .catch(err=> console.error("Error al cargar el footer:", err));
});