'use client';

import Link from 'next/link';
import React from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const handleMoreInfo = () => {
    router.push('/page2'); // Redirige a page2.tsx
  };

  return (
    <div className="page-container">
      <title>Enrique | Portafolio</title>
      {/* Sección Spline */}
      <section className="spline-section">
        <Spline
          scene="https://prod.spline.design/RhE-4Kiz2wPZRr8z/scene.splinecode"
          className="spline"
        />
      </section>

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">K I K I N</h1>
        <ul className="menu">
                       </ul>
       
      </nav>
     

      {/* Contenido principal */}
      <main className="mainarea">
        <h1 className="text1">Hola! Me llamo ENRIQUE</h1>
      </main>

 {/* Imagen centrada */}
 <section className="image-section">
        <Image
          src="/enrique2.jpg"
          alt="Imagen de Enrique"
          width={200}
          height={200}
          className="centered-image"
        />
      </section>

      {/* Sección de más información */}
      <section className="more-info">
        <h2 className="info-title">¿Quién soy yo?</h2>
        <p className="info-text">
  ¿Quieres conocer más sobre mí🤓, descubrir mis intereses y explorar mis habilidades?⚒️ ¡Te invito a visitar mi perfil!
</p>
        
        <button className="info-btn">
  <Link href="/inicio">Saber más</Link>
</button>
      </section>  
    </div>
  );
};

export default Page;
