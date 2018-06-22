class Vista {
  static mostrarLista(idElem, lista){
    let vista = ` <ul>${lista.map( actual =>
                          `<li>${actual.nombre}</li>`
                 ).join('')} </ul> `;
    document.querySelector(idElem).innerHTML = vista;
  }
}

Vista.mostrarLista('#pnlArg',
                  [{nombre:"TDD"},
                   {nombre:"BDD"},
                   {nombre:"CI"},
                   {nombre:"CD"}]
                  );


