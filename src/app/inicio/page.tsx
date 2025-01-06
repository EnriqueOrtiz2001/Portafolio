'use client';


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './global.css'; 
import './global2.css'; 

const Inicio = () => {
  

  return (
    <div className="container">
      <title>Enrique | Portafolio</title>

      {/* ---------------- HEADER ---------------- */}
      <header className="header">
      {/* Fondo Animado */}
      

      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/KIKIN-logo2.png"
            alt="Logo de Enrique Ortiz"
            width={200}
            height={90}
            className="logo-img"
          />
        </Link>
      </div>

      {/* Menú de Navegación */}
      <nav className="nav">
        <ul className="nav-list">
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="#sobre-mi">Sobre Mí</Link></li>
          <li><Link href="#habilidades">Habilidades</Link></li>
          <li><Link href="#experiencia">Experiencia</Link></li>
          <li><Link href="#proyectos">Proyectos</Link></li>
          <li><Link href="#certificados">Certificados</Link></li>
          <li><Link href="#contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>

      {/* ---------------- SOBRE MÍ ---------------- */}
      <section id="sobre-mi" className="section sobre-mi">
  <div className="sobre-mi-content">
    {/* Texto principal arriba */}
    <div className="text">Hello!</div>
    
    {/* Foto centrada */}
    <div className="foto">
      <Image
        src="/Enrique2.jpg"
        alt="Foto de Enrique"
        width={300}
        height={300}
        className="imagen-perfil"
      />
    </div>
    
    {/* Texto descriptivo debajo */}
    <div className="texto-sobre-mi">
     
      <p className="saludo">
        ¡Hola! Soy <strong>ENRIQUE ORTIZ</strong>, tengo <strong>23 AÑOS</strong> y soy estudiante de la 
        <strong> UNIVERSIDAD TÉCNICA DE AMBATO</strong>. <br />
        Soy un Ingeniero en Software con experiencia como programador full-stack junior, especializado en el desarrollo de aplicaciones web y móviles.  Siempre estoy motivado para aprender, crecer profesionalmente y contribuir al éxito de proyectos innovadores. 🚀<br />
        Me gusta el ajedrez♟️, escuchar música 🎵 y hacer Stream🔴
      </p>
    </div>
  </div>
</section>

     {/* ---------------- cuadrados---------------- 


     <section>
     <div className="loader">
  <div className="loader_cube loader_cube--color"></div>
   <div className="loader_cube loader_cube--glowing"></div>
</div>
     </section>
     */}
     {/* ---------------- HABILIDADES ---------------- */}
<section id="habilidades">
  <div className="text2">Habilidades</div>
  <div className="card5">
    {/* Sliders de Habilidades */}
    <div className="skills-sliders">
      <h3>🎨  Diseño</h3>
      <div className="skill-slider">
        <span>Photoshop</span>
        <div className="progress-bar">
          <div style={{ width: '78%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Figma</span>
        <div className="progress-bar">
          <div style={{ width: '90%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Adobe XD</span>
        <div className="progress-bar">
          <div style={{ width: '75%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Adobe Illustrator</span>
        <div className="progress-bar">
          <div style={{ width: '60%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Design</span>
        <div className="progress-bar">
          <div style={{ width: '75%' }}></div>
        </div>
      </div>

      <h3>💻 Desarrollo</h3>
      <div className="skill-slider">
        <span>TypeScript</span>
        <div className="progress-bar">
          <div style={{ width: '80%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Python</span>
        <div className="progress-bar">
          <div style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Java</span>
        <div className="progress-bar">
          <div style={{ width: '85%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>JavaScript</span>
        <div className="progress-bar">
          <div style={{ width: '75%' }}></div>
        </div>
      </div>
      <div className="skill-slider">
        <span>Angular</span>
        <div className="progress-bar">
          <div style={{ width: '90%' }}></div>
        </div>
      </div>
    </div>
  </div>
</section>


  <section>
  {/* Lenguajes, Herramientas y Bases de Datos */}
    <div className="skills-categories">
    <div className="text2">Lenguajes</div>
    <div className="skills-icons">
  <Image src="/Java.png" alt="JavaScript" width={5000} height={5000} />
  <Image src="/Python.png" alt="Python" width={5000} height={5000} />
  <Image src="/js.png" alt="Java" width={5000} height={5000} />
  <Image src="/Next.png" alt="Next" width={5000} height={5000} />
</div>

      
      
  
      <div className="skills-icons">
        <Image src="/Git.png" alt="Git" width={50} height={50}/>
        <Image src="/Docker.png" alt="Docker" width={50} height={50}/>
        <Image src="/Laravel.png" alt="Laravel" width={50} height={50}/>
      </div>
      
     
      <div className="skills-icons">
        <Image src="/mysql.png" alt="MySQL" width={50} height={50}/>
        <Image src="/Mongo.png" alt="MongoDB" width={50} height={50}/>
      </div>
    </div>
  </section>

      {/* ---------------- EXPERIENCIA LABORAL ---------------- */}
      <section id="experiencia" className="section2">
  <div className="text2">Experiencia Laboral</div>

  <div className="card2">
    <div className="top">
      <Image src="/fisei.jpg" alt="UTA Logo" className="card-img" width={2000} height={2000}/>
      <p className="title">Prácticas en la UTA</p>
    </div>
    <p className="desc">Redes y sistemas: Instalación y mantenimiento de redes informáticas, gestión de las páginas web de la universidad, reparación y optimización de computadoras, reseteo de equipos y configuración de redes internas. Además, colaboré en la implementación de nuevos sistemas de comunicación interna y soporte técnico en la universidad.</p>
  </div>

  <div className="card2">
    <div className="top">
      <Image src="/sanf.png" alt="San Francisco Logo" className="card-img" width={1500} height={1500}/>
      <p className="title">Pasantías en Cooperativa San Francisco</p>
    </div>
    <p className="desc">Desarrollo de software: Creación de aplicaciones internas y una auditoría integral para la prevención de daños en el software y hardware. Me encargué de verificar el estado de los equipos, prevenir fallos en los servidores y mejorar la seguridad informática de los sistemas. Esto ayudó a reducir el riesgo de pérdida de datos y a mejorar el rendimiento general de los equipos y servidores de la cooperativa.</p>
  </div>

  <div className="card2">
    <div className="top">
      <Image src="/santaRosa.png" alt="Junta de Agua Logo" className="card-img" width={3350} height={5000}/>
      <p className="title">Trabajo en Junta de Agua Santa Rosa</p>
    </div>
    <p className="desc">Soporte técnico: Mantenimiento de sistemas y atención a usuarios, incluyendo la implementación de un sistema de facturación para la medición del agua en las comunidades. Este sistema facilitó el proceso de cobro y control de consumo, mejorando la eficiencia operativa de la junta y proporcionando una herramienta más precisa y fácil de usar para los usuarios y el personal administrativo.</p>
  </div>
</section>
      {/* ---------------- PROYECTOS ---------------- */}
      <section id="proyectos" className="section">
  <div className="text2">Proyectos</div>
  <div className="projects-grid">
    {[
      { id: 1, link: 'https://github.com/ChristianCLop/simdrive-frontend', img: '/SimDrive.png', title: 'SimDrive', description: 'Es un mundo virtual interactivo creado en Hippoviwer diseñado para enseñar a los usuarios sobre las señaléticas de tránsito y las reglas viales.' },
      { id: 2, link: 'https://github.com/Anthony6887/Evento_Cultural', img: '/Evento_Cultural.png', title: 'Evento Cultural', description: 'Es una plataforma para un evento en Pelileo que busca promover el conocimiento sobre la cultura y geografía de Ecuador.' },
      { id: 3, link: 'https://github.com/EnriqueOrtiz2001/AdoptPet', img: '/ADOPTPET.png', title: 'AdoptPet', description: 'Un sistema en línea para la adopción de mascotas que conecta a personas interesadas en adoptar con aquellos que necesitan un hogar para sus animales.' },
      { id: 4, link: 'https://github.com/EnriqueOrtiz2001/MarketFly', img: '/marketfly.png', title: 'MarketFly', description: 'Es una plataforma de compra y venta de productos electrónicos que permite a los usuarios comprar y vender artículos.' },
      { id: 5, link: 'https://github.com/EnriqueOrtiz2001/ProyectoSistemaRegistros', img: '/sistemaR.png', title: 'Sistema Registro', description: 'Es una aplicación para la gestión y registro de documentos dentro de una organización.' },
      { id: 6, link: 'https://github.com/PSW-GourtmetGO/GourtmetGo-Web-FrontEnd', img: '/Go.png', title: 'GourtmetGo', description: 'Un sistema diseñado para gestionar todos los aspectos de un restaurante.' }
    ].map((project, index) => (
      <div key={index} className="card">
        <div className="content">
          {/* Parte Trasera */}
          <div className="back">
            <div className="back-content">
              <div className="description">
                <div className="title">
                  <p><strong>{project.title}</strong></p>
                </div>
                <p className="card-footer">{project.description}</p>
              </div>
            </div>
          </div>

          {/* Parte Delantera */}
          <div className="front">
            <div className="front-content">
              {/* Imagen al lado derecho */}
              <Image
                className="img"
                src={project.img} // Diferente imagen para cada proyecto
                alt={`Imagen de Proyecto ${project.id}`}
                width={300} // Especifica el ancho de la imagen
                height={200} // Especifica la altura de la imagen
              />
              <div className="project-info">
                <strong>{project.title}</strong>
              </div>
            </div>
          </div>
        </div>
        {/* Enlace al GitHub */}
        <a
          href={project.link} // Enlace personalizado para cada proyecto
          target="_blank"
          rel="noopener noreferrer"
          className="btn-github"
        >
          Ver en GitHub
        </a>
      </div>
    ))}
  </div>
</section>



{/* ---------------- certificados ---------------- */}
<section className="certificates">
  <h2 className="certificates-title">Mis Certificados</h2>
  <div className="certificates-container">
    <div className="certificate-card">
      <Image src="/certificado1.png" alt="Certificado 1" className="certificate-image" width={5000} height={5000}/>
      <p className="certificate-name">V Conference on Computer Science, Electronics and Industrial Engineering (CSEI 2023)</p>
    </div>
    <div className="certificate-card">
      <Image src="/certificado2.png" alt="Certificado 2" className="certificate-image" width={5000} height={5000}/>
      <p className="certificate-name">Certificado en JavaScript Essentials 1</p>
    </div>
    <div className="certificate-card">
      <Image src="/certificado3.png" alt="Certificado 3" className="certificate-image" width={5000} height={5000}/>
      <p className="certificate-name">Artículo: SIMDRIVE: A DIDACTIC IMMERSIVE LEARNING EXPERIENCE WITH TRAFFIC LAWS AND
      DRIVING SKILLS IN VIRTUAL WORLDS.</p>
    </div>
    <div className="certificate-card">
      <Image src="/certificado4.png" alt="Certificado 4" className="certificate-image" width={5000} height={5000}/>
      <p className="certificate-name">VI CONGRESO INTERNACIONAL DE CIENCIA DE LA COMPUTACION, ELECTRONICA E INGENIERÍA INDUSTRIAL CSEI 2024</p>
    </div>
    <div className="certificate-card">
      <Image src="/certificado5.png" alt="Certificado 5" className="certificate-image" width={5000} height={5000}/>
      <p className="certificate-name">Certificado en Python Essentials 2</p>
    </div>
  </div>
</section>

      {/* ---------------- CONTACTO ---------------- */}
      {/* ---------------- CONTACTO ---------------- */}
<section id="contacto" className="contact">
  <h2>📬 ¡Contáctame!</h2>
  <div className="contact-container">
    {/* Redes Sociales */}
    <div className="contact-social">
      <h3>🌐 Mis Redes</h3>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/enrique-ortiz-b47b8711b/" target="_blank">
            <Image src="/link.png" alt="LinkedIn" width={50} height={50}/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/enrique_ortiz15" target="_blank">
            <Image src="/insta.png" alt="Instagram" width={50} height={50}/>
          </a>
        </li>
        <li>
          <a href="https://github.com/EnriqueOrtiz2001" target="_blank">
            <Image src="/github.png" alt="GitHub" width={50} height={50}/>
          </a>
        </li>
      </ul>
    </div>

    {/* Formulario de Contacto */}
    <form>
      <input type="text" placeholder="Tu Nombre" required />
      <input type="email" placeholder="Tu Correo" required />
      <textarea placeholder="Tu Mensaje" required></textarea>

      <button type="submit" className="btn">
        <strong>Enviar</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>
        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </form>
  </div>
</section>


      {/* ---------------- FOOTER ---------------- */}
      <footer>
        <p>© 2024 Enrique Ortiz | Todos los derechos reservados</p><br /><br />
      </footer>

    </div>
  );
};

export default Inicio;
