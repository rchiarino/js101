//Aca voy a definir todo y lo exporto a las pruebas!.
//voy a usar export e import es como en c++


function sum(a,b){
    return a+b;
}



class Lista{
    constructor(){
        this.items = [];
        this.isEmpty = true;
    }

    agregarElem(elem){ //agrego si no existe.
        if(!this.items.includes(elem)) this.items.push(elem);
        if(this.isEmpty) this.isEmpty = false; 
    }

    estaVacia(){
        return this.isEmpty;
    }
}

module.exports = { sum, Lista };