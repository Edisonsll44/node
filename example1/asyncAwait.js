async function hola(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("Hola " + nombre + ", soy una funcion asíncronica");    
            resolve(nombre);
        }, 1000);
    });
}


async function hablar(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("Bla bla bla...");
            resolve(nombre);
            // reject("Huuuy un problema");
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

async function main(){
    let nombre = await hola("Eddy");
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Proceso terminado");
}
console.log("Empezó el proceso");
main();
console.log("Empezó el segundo proceso");