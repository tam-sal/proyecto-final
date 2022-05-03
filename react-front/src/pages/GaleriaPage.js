import {Link} from 'react-router-dom';
const GaleriaPage = (props) => { return (
    <main className="contenido holder">
      <a id="top"></a>
      
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        autem, adipisci vero numquam vitae, nihil eius odit inventore repellat
        culpa, reiciendis praesentium ut enim doloremque eaque quod accusantium
        ex dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus autem, adipisci vero numquam vitae, nihil eius odit
        inventore repellat culpa, reiciendis praesentium ut enim doloremque
        eaque quod accusantium ex dolore!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        autem, adipisci vero numquam vitae, nihil eius odit inventore repellat
        culpa, reiciendis praesentium ut enim doloremque eaque quod accusantium
        ex dolore! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Voluptatibus autem, adipisci vero numquam vitae, nihil eius odit
        inventore repellat culpa, reiciendis praesentium ut enim doloremque
        eaque quod accusantium ex dolore!
      </p>
      <h2>Galeria</h2>
      <div className="galeria-contenedor holder">
        <div className="columna1 columna holder">
          <img src="../img/galeria/linea/1.jpg" alt="img1" />
          <img src="../img/galeria/linea/2.jpg" alt="img2" />
          <img src="../img/galeria/linea/3.png" alt="img3" />
          <img src="../img/galeria/linea/4.png" alt="img4" />
        </div>

        <div className="columna2 columna holder">
          <img src="../img/galeria/linea/5.png" alt="img5" />
          <img src="../img/galeria/linea/6.jpg" alt="img6" />
          <img src="../img/galeria/linea/7.png" alt="img7" />
          <img src="../img/galeria/linea/8.jpg" alt="img8" />
        </div>

        <div className="columna3 columna holder">
          <img src="../img/galeria/linea/11.jpg" alt="img9" />
          <img src="../img/galeria/linea/12.png" alt="img10" />
          <img src="../img/galeria/linea/13.jpg" alt="img11" />
          <img src="../img/galeria/linea/15.jpg" alt="img12" />
        </div>
      </div>
      <div className="extra"></div>
    </main>


)}
export default GaleriaPage