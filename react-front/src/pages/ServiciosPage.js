import {Link} from 'react-router-dom';
const ServiciosPage = (props) => {return (
    
    <main className="contenido holder">
      <a id="top"></a>
      <h2 className="h2-servicios">Servicios</h2>
      <div className="caja">
        <div className="img-caja">
          <img src='../img/servicios/vip.jpg' width='300' alt="vip"/>
        </div>
        <div className="info">
          <h4 className="h4-caja">Calse VIP</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            delectus harum repellendus nobis, officiis commodi necessitatibus
            tempore reiciendis, unde consequuntur deleniti sed labore non eos
            ullam pariatur facere sit corrupti?
          </p>
        </div>
      </div>
      <div className="caja">
        <div className="img-caja">
          <img src='../img/servicios/Business.jpg' width='300' alt="Business"/>
        </div>
        <div className="info">
          <h4 className="h4-caja">Clase Business</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            delectus harum repellendus nobis, officiis commodi necessitatibus
            tempore reiciendis, unde consequuntur deleniti sed labore non eos
            ullam pariatur facere sit corrupti?
          </p>
        </div>
      </div>
      <div className="caja">
        <div className="img-caja">
          <img src='../img/servicios/Economy.jpg' width='300' alt="Economy"/>
        </div>
        <div className="info">
          <h4 className="h4-caja">Clase Economy</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            delectus harum repellendus nobis, officiis commodi necessitatibus
            tempore reiciendis, unde consequuntur deleniti sed labore non eos
            ullam pariatur facere sit corrupti?
          </p>
        </div>
      </div>
    </main>

    );}
    export default ServiciosPage