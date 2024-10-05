import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-light text-center text-lg-start p-4">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo Fatiga" style={{ width: '150px' }} />
                        <h5>Sobre Nosotros</h5>
                        <p>En Fatiga, nos dedicamos a ofrecer los mejores productos para tus mascotas.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Categorías</h5>
                        <ul className="list-unstyled">
                            <li><a href="#perros" className="text-light">Perros</a></li>
                            <li><a href="#gatos" className="text-light">Gatos</a></li>
                            <li><a href="#peces" className="text-light">Peces</a></li>
                            <li><a href="#aves" className="text-light">Aves</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Contacto</h5>
                        <p>Email: fatiga_2024@fatiga.com</p>
                        <p>Teléfono: +123 456 7890</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5>Redes Sociales</h5>
                        <ul className="list-unstyled">
                            <li><a href="#facebook" className="text-light">Facebook</a></li>
                            <li><a href="#instagram" className="text-light">Instagram</a></li>
                            <li><a href="#twitter" className="text-light">Twitter</a></li>
                            <li><a href="#linkedin" className="text-light">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; {new Date().getFullYear()} Fatiga. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;





