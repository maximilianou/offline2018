class Vista {
/*1.0  static mostrarLista(idElem, lista){ */
  mostrarLista(idElem){
    let lista = this.db;
    let vista = ` <ul>${lista.map( actual =>
                          `<li>${actual.nombre}</li>`
                 ).join('')} </ul> `;
    document.querySelector(idElem).innerHTML = vista;
  }
  add(obj){
    if( this.db === undefined ){
      this.db = [];
    }
    this.db.push(obj);
    
  }
}

let vi = new Vista();
vi.add({nombre:"TDD - Test Driven Development"});
vi.add({nombre:"BDD - Behavior Driven Development"});
vi.mostrarLista('#pnlArg');

let vi2 = new Vista();
vi2.add({nombre:"CI - Continuous Integration"});
vi2.add({nombre:"CD - Continuous Delivery"});
vi2.add({nombre:"CD - Continuous Deployment"});
vi2.mostrarLista('#pnlArg02');


/*1.0 Vista.mostrarLista('#pnlArg',
                  [{nombre:"TDD"},
                   {nombre:"BDD"},
                   {nombre:"CI"},
                   {nombre:"CD"}]
                  );
*/
