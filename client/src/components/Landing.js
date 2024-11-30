import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="hero-section text-center text-white bg-dark py-5">
        <div className="container">
          <h1 className="display-4">PAYMASTER</h1>
          <p className="lead">‎</p>
          <h1 className="display-4">Construyendo Futuro, Hoy</h1>
          <p className="lead">
            Somos expertos en diseño y construcción, brindando soluciones innovadoras para transformar tus ideas en realidad.
          </p>
          <button href="#contact-section" className="btn btn-primary btn-lg mt-3">Contáctanos</button>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">¿Quiénes Somos?</h2>
          <p className="text-center">
            Somos una empresa de construcción con más de 10 años de experiencia en el mercado, dedicados a ofrecer servicios
            de alta calidad en proyectos residenciales, comerciales e industriales.
          </p>
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img
                src="/Rehabilitacion-industrial-home.jpg"
                alt="Experiencia"
                className="rounded-circle mb-3"
              />
              <h5>Experiencia</h5>
              <p>Contamos con un equipo calificado y años de experiencia.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/pikaso_texttoimage_35mm-film-photography-a-construction-site-at-sunse.jpeg"
                alt="Calidad"
                className="rounded-circle mb-3"
              />
              <h5>Calidad</h5>
              <p>Utilizamos materiales y tecnología de última generación.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/pikaso_texttoimage_35mm-film-photography-a-construction-site-at-dusk-.jpeg"
                alt="Confianza"
                className="rounded-circle mb-3"
              />
              <h5>Confianza</h5>
              <p>Construimos relaciones sólidas con nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Nuestros Servicios</h2>
          <div className="row">
            <div className="col-md-4 text-center">
              <i className="fas fa-home fa-3x mb-3"></i>
              <h5>Construcción Residencial</h5>
              <p>Diseño y construcción de casas modernas y funcionales.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-building fa-3x mb-3"></i>
              <h5>Construcción Comercial</h5>
              <p>Proyectos comerciales adaptados a tus necesidades.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="fas fa-tools fa-3x mb-3"></i>
              <h5>Mantenimiento</h5>
              <p>Servicios de mantenimiento preventivo y correctivo.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div id="contact-section" className="contact-section py-5 bg-dark text-white">
        <div className="container">
          <h2 className="text-center mb-4">Contáctanos</h2>
          <p className="text-center mb-5">
            ¿Tienes un proyecto en mente? Escríbenos y nos pondremos en contacto contigo.
          </p>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="name">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="email">Correo Electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="message">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Escribe tu mensaje"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <p className="mb-0">© 2024 Paymaster. Todos los derechos reservados.</p>
      </footer>
    </div>
    );
  }
}

export default Landing;
