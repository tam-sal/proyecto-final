import {Link} from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios'
import '../styles/components/pages/ContactoPage.css'

const ContactoPage = (props) => {

  const initialForm = {
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  }

  const [sending, setSending] = useState(false)
  const [msg, setMsg] = useState('')
  const [formData, setFormData] = useState(initialForm)

  const handleChange = e => {
    const {name , value} = e.target
    setFormData(oldData => ({
      ...oldData,
    [name]: value
  }))
  }
  
  const handleSubmit = async e => {
    e.preventDefault()
    setMsg('')
    setSending(true)
    const response = await axios.post('http://localhost:3000/api/contacto', formData)
    setSending(false)
    setMsg(response.data.message)
    if (response.data.error === false) {
      setFormData(initialForm)
    }
  }

return (
<main className="contenido holder">
      <div className="container-contacto holder">
        <div className="formulario">
          <h2>Contacto Rapido</h2>
          <form action method="post" onSubmit = {handleSubmit}>
            <fieldset className="contacto-formulario">
              <legend>Contactenos</legend>
              <label for="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese Nombre"
                value={formData.nombre}
                onChange = {handleChange}
                required
              />
              <label for="correo">Email:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Ingrese Email"
                required
                
              />

              <label for="telefono">Telefono:</label>
              <input
                type="text"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ingrese Telefono"
                required
              />


              <label for="tipo-consulta">Motivo de Consulta:</label>
              <select name="tipo-consulta" id="tipo-consulta">
                <option value="1">Reservas y Horarios</option>
                <option value="2">Servicio Segun Clase</option>
                <option value="3">Otro</option>
              </select>
              <label for="mensaje">Enviar Mensaje</label>
              <textarea
                name="mensaje"
                id="mensaje"
                cols="30"
                rows="10"
                placeholder="Ingrese su consulta"
                value={formData.mensaje}
                onChange={handleChange}
              ></textarea>
              {sending ? <p>Enviando...</p>: null}
              {msg ? <p>{msg}</p>: null}
              <button type="submit" value="enviado">Enviar</button>
              <button type="reset" value="borrado">Borrar</button>
            </fieldset>
          </form>
        </div>
        <div className="otras-vias">
          <h2>Otros Canales de Contacto</h2>
          <p>Puede comunicarse por los siguientes canales tambien.</p>
          <ul className="lista-contacto">
            <li><i className="fas fa-phone-square-alt"></i>+54-11-4444-5858</li>
            <li><i className="fas fa-envelope"></i>contactenos@skyairlines.com</li>
            <li><i className="fab fa-skype skype"></i>skyairlines@hotmail.com</li>
          </ul>
        </div>
      </div>
    </main>
);}
export default ContactoPage