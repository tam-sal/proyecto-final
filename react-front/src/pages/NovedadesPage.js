import { useState, useEffect } from 'react';
import axios from 'axios';
import itemNovedad from '../components/novedades/itemNovedad';
import {Link} from 'react-router-dom';
import '../styles/components/pages/NovedadesPage.css'



const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/api/novedades')
      setNovedades(response.data)
      setLoading(false)
    }
    cargarNovedades()
  },[])
  return (
  <section className="contenido holder">
    <h2>Novedades</h2>
    <p className="p-nov">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
      tenetur qui blanditiis ullam, consequatur voluptatem corporis itaque
      ipsam praesentium hic in beatae nobis veritatis deserunt natus aliquid
      consectetur? Quo, ea? Odio exercitationem labore quo iure corrupti
      ipsam. Nihil id numquam autem placeat, sint quaerat quia magnam
      voluptate pariatur vero dolorum adipisci dignissimos eum. Officiis sequi
      incidunt suscipit, consectetur repudiandae sint. Aspernatur nobis ab
      molestias tempora error quia reprehenderit ratione ex aperiam, expedita
    </p>
    {loading ? (
      <p>Cargando...</p>
    ): (
      novedades.map(item=> <itemNovedad key={item.id}
        title={item.titulo} subtitle={item.subtitulo}
        imagen={item.imagen} body={item.cuerpo} />)
    )}

  </section>
     )
}
export default NovedadesPage

// const NovedadesPage = (props) => {return (
//     <main className="contenido holder">
    
//     <h2>Novedades</h2>
    // <p className="p-nov">
    //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam,
    //   tenetur qui blanditiis ullam, consequatur voluptatem corporis itaque
    //   ipsam praesentium hic in beatae nobis veritatis deserunt natus aliquid
    //   consectetur? Quo, ea? Odio exercitationem labore quo iure corrupti
    //   ipsam. Nihil id numquam autem placeat, sint quaerat quia magnam
    //   voluptate pariatur vero dolorum adipisci dignissimos eum. Officiis sequi
    //   incidunt suscipit, consectetur repudiandae sint. Aspernatur nobis ab
    //   molestias tempora error quia reprehenderit ratione ex aperiam, expedita
    // </p>

//     <div className="tarjetas-novedades">
//       <div className="container-titulo">
//         <h3 className="titulo">Lanzamiento nuevo destino</h3>
//         <h4 className="subtitulo">Llegamos a Madrid</h4>
//         <div className="info-nov">
//           <img src="../img/novedades/madrid.jpg" alt="madrid" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
//             cumque blanditiis saepe molestias libero sint veritatis, unde
//             beatae minus, eveniet tempora? Delectus tenetur enim cumque maxime
//             at dolores, similique reprehenderit.
//           </p>
//         </div>
//         <p className="mas-info"><Link to ="#">Mas Info</Link></p>
//       </div>
//       <div className="container-titulo">
//         <h3 className="titulo">Novedades Destino a Quebec</h3>
//         <h4 className="subtitulo">Agrgeamos Nuevos Vuelos a Quebec</h4>
//         <div className="info-nov">
//           <img src="../img/novedades/quebec.jpg" alt="quebec" />
//           <p>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
//             asperiores doloribus molestias! Voluptate ut, ipsum itaque fuga
//             laudantium maiores quisquam provident quibusdam aperiam quia. Amet
//             officia voluptas ab at asperiores!
//           </p>
//         </div>
//         <p className="mas-info"><Link to ="#">Mas Info</Link></p>
//       </div>
//     </div>
//   </main>
//     );}
// export default NovedadesPage