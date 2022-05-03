import {Link} from 'react-router-dom';
const ContactoPage = (props) => {return (
<main className="contenido holder">



      <div className="container-contacto holder">
        <div className="formulario">
          <h2>Contacto Rapido</h2>
          <form action method="post">
            <fieldset className="contacto-formulario">
              <legend>Contactenos</legend>
              <label for="nomber">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese Nombre"
                required
              />
              <label for="correo">Email:</label>
              <input
                type="email"
                id="correo"
                nombre="correo"
                placeholder="Ingrese Email"
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
              ></textarea>
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