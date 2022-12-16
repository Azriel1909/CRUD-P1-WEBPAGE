// Función que se encarga de hacer la comunicación con el server y recibir la respuesta, generando un JSON.

const listaDeCliente = () => fetch('http://localhost:3000/perfil').then((respuesta) => respuesta.json())

export const clientServices = {
  // Definir llave y valor
  listaDeCliente
}

