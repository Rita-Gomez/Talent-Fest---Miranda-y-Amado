
let array = [];

export const fn = (arr) => {
arr.forEach(doc => array.push(doc)
);
}
export const form = () => {
  const template = `
  <body>
  <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card card-signin flex-row my-5">
          <div class="card-img-left d-none d-md-flex">
          <p> Documentos Seleccionados </p>
          
          <ol id="listaDocumentos">
             
          </ol>

          </div>
          <div class="card-body">
            <h5 class="card-title text-center">Información del requerimiento</h5>
            <form class="form-signin">
              <div class="form-label-group">
                <input type="text" id="inputUserame" class="form-control" placeholder="Username" required autofocus>
                <label for="inputUserame">Nombre del proyecto</label>
              </div>

              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
                <label for="inputEmail">Nombre del cliente</label>
              </div>
              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                <label for="inputPassword">Correo electrónico</label>
              </div>
              <div class="form-label-group">
                <textarea class="form-control" placeholder="Mensaje" required></textarea>
              </div>

              <button class="btn-lg btn-primary btn-block text-uppercase" type="submit">Enviar</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
`;

  const sectionElem = document.createElement('section');
  sectionElem.setAttribute('class', 'sec-autentificacion display-flex');
  sectionElem.innerHTML += template; // Hasta que no cree este elemento
  const listaDocumentos = sectionElem.querySelector('#listaDocumentos');

  array.forEach( doc => {
    const list = document.createElement('li');
    let acum = '';
    acum += `
              <li>${doc}</li>
            `;

    list.innerHTML = `${acum}`;
    listaDocumentos.appendChild(list);
  })

  const createReq = (caso, item, nombre, email) => {
    firebase.firestore().collection(caso).doc(item).set({
    Cliente: nombre,
    Estado: 'pendiente',
    Correo: email,
  })
}

  return sectionElem;
};