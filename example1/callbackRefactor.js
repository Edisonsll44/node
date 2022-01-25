function soyAsincrona(nombre, miCallback) {
    setTimeout(function() {
        console.log("Hola " + nombre + ", soy una funcion asíncronica");    
        miCallback(nombre);
        console.log("Adios " + nombre + ", soy una funcion asíncronica");    
    }, 1000);
}

function hablar(callback) {
    setTimeout(function() {
        console.log("Bla bla bla...");
    }, 1000);
}

function conversacion(nombre, veces, callback)
{
    if(veces > 0){
        hablar(function(){
            conversacion(nombre, --veces, callback);
        });
    }else{
        adios(nombre,callback);
    }
}
console.log("Iniciando proceso....");
soyAsincrona("Edison",function(nombre){
    conversacion(nombre,3,function(){
       console.log("proceso terminado"); 
    })
})


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