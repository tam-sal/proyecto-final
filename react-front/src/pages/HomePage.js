const HomePage = (props) => {
    return (
    <main className="contenido holder">
      <a id="top"></a>
      <div className="homeimg"><img src="img/home/img01.jpg" alt="avion" /></div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            molestiae beatae excepturi quod illum laboriosam optio deserunt. Ex
            quia modi illo cumque, iste, molestias, veritatis ipsum cupiditate
            vero repellat delectus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            error molestiae quos, temporibus cupiditate reiciendis sunt nisi,
            earum magni laborum ratione labore nemo architecto omnis? Nulla
            laudantium ad libero numquam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            molestiae beatae excepturi quod illum laboriosam optio deserunt. Ex
            quia modi illo cumque, iste, molestias, veritatis ipsum cupiditate
            vero repellat delectus.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            error molestiae quos, temporibus cupiditate reiciendis sunt nisi,
            earum magni laborum ratione labore nemo architecto omnis? Nulla
            laudantium ad libero numquam.
          </p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente Excelente</span>
            <span className="autor">Juan Perez - zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
        );
}
export default HomePage;