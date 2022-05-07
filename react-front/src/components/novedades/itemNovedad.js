import React from 'react'

const ItemNovedad = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="tarjetas-novedades">
            <div className="container-titulo">
                <h3 className="titulo">{title}</h3>
                <h4 className="subtitulo">{subtitle}</h4>
                <div className="info-nov">
                    <img src={imagen} alt="madrid" />
                    <p dangerouslySetInnerHTML={{ __html: body }}>

                    </p>
                </div>
                <p className="mas-info"><a href="#">Mas Info</a></p>
            </div>

        </div>
    )
}
export default ItemNovedad;

// import React from 'react'

// const itemNovedad = (props) => {
//     const {title, subtitle, imagen, body} = props;

//     return (
//         <div className='novedades'>
//             <h3>{title}</h3>
//             <h4>{subtitle}</h4>
//             <img src= {imagen}/>
//             <div dangerouslySetInnerHTML={{__html: body}}/>

//         </div>)
// }
// export default itemNovedad