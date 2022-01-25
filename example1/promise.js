function hola(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Hola " + nombre + ", soy una funcion asíncronica");    
            resolve(nombre);
        }, 1000);
    });
}


function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Bla bla bla...");
            //resolve(nombre);
            reject("Huuuy un problema");
        }, 1000);
    });
};

function adios(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log("Adios",nombre);
            resolve();
        }, 1000);
    });
}

console.log("Iniciando proceso....");
hola("Eddy")
.then(hablar)
.then(hablar)
.then(adios)
.then((nombre)=>{
    console.log("termino el proceso...")
})
.catch(error=> {
    console.error("Ha habido un error: ");
    console.error(error)
});