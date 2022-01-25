function soyAsincrona(nombre, miCallback) {
    setTimeout(function() {
        console.log("Hola " + nombre + ", soy una funcion asíncronica");    
        miCallback(nombre);
        console.log("Adios " + nombre + ", soy una funcion asíncronica");    
    }, 1000);
}

console.log("Iniciando proceso....");

soyAsincrona('Carlos', function (nombre) {
    adios(nombre, function () {
        console.log("Terminando proceso");        
    })
    
});

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios",nombre);
        otroCallback();
    }, 1000);
}