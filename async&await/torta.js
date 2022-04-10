//sigo el ejemplo de la torta

//valida que tengo todo
async function validarIngredientes(){
    return listaIngredientes = new Promise((resultado) => {
      setTimeout(() => {//con esto simulo un retraso.
        resultado([
          "Harina, Huevo, Manteca, Royal, Chocolate, Azucar, Paciencia",
        ]);
      }, 3000);
    });
}


//funcion normal
function cocinar(ingredientes){
    let torta = [];
    ingredientes.forEach(ingrediente => {
        torta.push(ingrediente);
    });
    return(torta);
}

async function proceso(){
    console.log(`Empiezo a cocinar`);
    validarIngredientes().then((ingredientes) => {
      var torta = cocinar(ingredientes);
      torta ? console.log(torta) : console.log(`algo fallo`);
    });
    
}

proceso();