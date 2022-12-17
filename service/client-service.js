// Función que se encarga de hacer la comunicación con el server y recibir la respuesta, generando un JSON.

const listaDeCliente = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json())

const crearCliente = (nombre, email) => {
  return fetch('http://localhost:3000/perfil', {
    // propiedades de la llamada
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // Formateando el texto para mandarlo en http
    body: JSON.stringify({nombre, email, id: uuid.v4()})
  })
}

const eliminarUnCliente = (id) => {
  // console.log('eliminar a:', id)
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'DELETE',
  })
}

const detalleDelCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => {
  return respuesta.json()
  })
}

const actualizarUnCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({nombre, email})
  }).then((respuesta) => {
    return respuesta
  }).catch((err) => console.log(err) )
}

export const clientServices = {
  // Definir llave y valor
  listaDeCliente,
  crearCliente,
  eliminarUnCliente,
  detalleDelCliente,
  actualizarUnCliente,
}

