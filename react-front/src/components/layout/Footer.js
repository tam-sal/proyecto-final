// import React from 'react';
import {Link} from 'react-router-dom';
const Footer = (props) => {
    return (
    <footer>
      <p>Diseñada por Tamer Saleh - &copy;2022</p>
        <div className="back-top" title="ir arriba">
        <a href="#" onClick={(e) => {e.preventDefault();window.scrollTo(0,0)}}><i className="fa fa-angle-up"></i></a>
      </div>
    </footer>);
}
export default Footer;