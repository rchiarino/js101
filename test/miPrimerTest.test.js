class Lista {
    constructor(){
        this.primero = -1;
        this.items = {};
    }
}

describe('My lista', () => {
    it('se crea vacia', ()=>{
        const lista = new Lista();

        expect(lista.primero).toBe(-1);

    }); //esta si la esta validando
    it.todo('agrega elementos'); //.todo le decimos a JEST que no se valide, falta implementar
    it.todo('saca elemento');
})

// describe('when to cross', () => {
//     it('cross when green', () =>{
//         expect(light.status).toBe(green);
//     })
// }
// )