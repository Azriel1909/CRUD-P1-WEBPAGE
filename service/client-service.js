const crearNuevaLinea = (nombre, email) => {
  const linea = document.createElement('tr')
  const contenido = `
  <td class="td" data-td>${nombre}</td>
  <td>${email}</td>
  <td>
    <ul class="table__button-control">
      <li>
        <a
          href="../screens/editar_cliente.html"
          class="simple-button simple-button--edit"
          >Editar</a
        >
      </li>
      <li>
        <button
          class="simple-button simple-button--delete"
          type="button"
        >
          Eliminar
        </button>
      </li>
    </ul>
  </td>
  `
  linea.innerHTML = contenido
  return linea // Código HTML con esa información
}
// Para recorrer todo el árbol del DOM
const table = document.querySelector('[data-table]')

const listaDeCliente = () => {
    const promise = new Promise((resolve, reject) => {
    // Generando una promesa
    // Clase nativa
    const http =  new XMLHttpRequest()
    // Abrir http (método, url)
    http.open('GET','http://localhost:3000/perfil') // ! server
    http.send() // Enviamos la petición
    http.onload = () => {
    const response = JSON.parse(http.response)
    // Verificar status de http
    if (http.status >= 400) {
      // Error en petición
      reject(response)
      } else {
        // Éxito de ejecución
        resolve(response)
      }
    }
  })
  return promise
}

listaDeCliente().then((data) => {
  data.forEach(perfil => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre, perfil.email)
    table.appendChild(nuevaLinea)
  });
}).catch((error) => alert('Ocurrió un error.')) // En caso de error





// ! CALLBACK HELL - ANIDAR funciones sobre funciones
// ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise PROMISE INFO

/** CRUD - métodos
 * C - Create - POST
 * R - Read - GET
 * U - Update - PUT/PATCH
 * D - Delete - DELETE
 */