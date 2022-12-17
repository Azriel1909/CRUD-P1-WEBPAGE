import { clientServices } from "../service/client-service.js"

const formulario = document.querySelector('[data-form]')

// Función asíncrona
const obtenerInfo = async() => {
  // Obtener la URL en la que nos encontramos actualmente
  const url = new URL(window.location)
  const id = url.searchParams.get('id')

  if( id === null) {
    window.location.href = '../screens/error.html'
  }

  const nombre = document.querySelector('[data-nombre]')
  const email = document.querySelector('[data-email]')

  try {
    const perfil = await  clientServices.detalleDelCliente(id)
    if(perfil.nombre && perfil.email) {
      nombre.value = perfil.nombre
      email.value = perfil.email
    } else {
      throw new Error()
    }
  } catch(error) {
    console.log('Catch Error: ', error)
    alert('Ocurrió un error.')
    window.location.href = '../screens/error.html'
  }
}

obtenerInfo()

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const url = new URL(window.location)
  const id = url.searchParams.get('id')
  const nombre = document.querySelector('[data-nombre]').value
  const email = document.querySelector('[data-email]').value
  clientServices.actualizarUnCliente(nombre, email, id).then(() => {
    window.location.href = '../screens/edicion_concluida.html'
  })
})