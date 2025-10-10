---
layout: bio_editable
title: Seminario
author:
image: assets/images/about/PDT.png
#signature:
---
<!-- INICIO: Bloque completo (CSS + HTML + JS) -->
<style>
  body {
    font-family: 'Arial', sans-serif;
    background-color: #faf8fc;
    color: #333;
  }

  .carousel-container {
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 2rem 0;
  }

  .carousel-track {
    display: flex;
    gap: 20px;
    padding-bottom: 10px;
  }

  .carousel-card {
    background: linear-gradient(135deg, #f4e6fb, #d6b8f2);
    border-radius: 15px;
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
    min-width: 280px;
    max-width: 320px;
    flex-shrink: 0;
    transition: transform 0.3s, box-shadow 0.3s;
    position: relative;
    cursor: pointer;
    overflow: hidden;
  }

  .carousel-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }

  .carousel-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  .carousel-card-content {
    padding: 15px;
  }

  .carousel-card h3 {
    margin-top: 0;
    color: #6c3483;
    font-size: 1.1rem;
  }

  .carousel-card .asesora,
  .carousel-card .tesista {
    font-weight: bold;
    font-size: 0.85rem;
    margin-bottom: 5px;
  }

  .carousel-card p {
    font-size: 0.9rem;
    line-height: 1.4;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, opacity 0.4s ease;
    opacity: 0;
  }

  .carousel-card:hover p {
    max-height: 150px;
    opacity: 1;
  }

  .carousel-card a {
    display: inline-block;
    text-decoration: none;
    background-color: #8e44ad;
    color: #fff;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background-color 0.3s;
    font-size: 0.85rem;
    margin-top: 10px;
  }

  .carousel-card a:hover {
    background-color: #732d91;
  }

  /* Scrollbar invisible */
  .carousel-container::-webkit-scrollbar {
    display: none;
  }
  .carousel-container {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media (max-width: 650px) {
    .carousel-card {
      min-width: 80%;
    }
    .carousel-card img {
      height: 120px;
    }
  }
</style>

<div class="section-wrap">

  <div class="th-header">
    <div>
      <h2>Proyectos de Tesis — Ciclo</h2>
      <p class="th-sub">Desliza el carrusel o consulta la rejilla según prefieras.</p>
    </div>
  </div>

  <!-- ====== CARRUSEL (autoplay + flechas) ====== -->
  <div class="carousel-wrap" aria-label="Carrusel de tesis">
    <button class="carousel-btn left" id="prevBtn" aria-label="Anterior">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
    </button>

  <div class="carousel" id="carousel">
      <div class="carousel-track" id="carouselTrack">

        <!-- Repite este bloque por cada tesis: item + imagen + meta + resumen corto + (botón video opcional) -->
        <!-- 1 -->
  <div class="carousel-item">
          <article class="th-card" >
            <img src="assets/images/testimonial/1sesion.png" alt="Hagia Sophia — imagen simbólica">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Martha Cecilia Jaime González — Tesista: Rodrigo Blum</div>
              <h3 class="title">La descripción arquitectónica en la poesía bizantina temprana: Paulo el Silenciario y la écfrasis de la Iglesia de Hagia Sofía en Constantinopla</h3>
              <p class="desc">Rodrigo explora cómo Paulo el Silenciario utiliza la écfrasis para transformar la arquitectura en poesía —una lectura que combina descripción visual, devoción y memoria colectiva de Hagia Sofía— para mostrar cómo lo arquitectónico se vuelve lenguaje poético.</p>
              <a href="https://youtu.be/lCR7VZ4bPRI?si=_mkxbBWq0Qux_0r9" target="_blank">Ver video</a>
              <div class="card-actions"><span class="tag">Arquitectura & Poesía</span></div>
            </div>
          </article>
        </div>

        <!-- 2 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/2sesion.png" alt="Códice manuscrito">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. María Leticia López Serratos — Tesista: María de Jesús Tinajero Díaz</div>
              <h3 class="title">Ars metrica de José Jiménez. Edición, traducción y notas</h3>
              <p class="desc">María de Jesús propone una edición crítica y traducción del *Ars metrica*, acompañada de notas explicativas que hacen accesible la métrica clásica y su transmisión, facilitando su estudio tanto a especialistas como a estudiantes.</p>
              <div class="card-actions"><span class="tag">Edición crítica</span></div>
            </div>
          </article>
        </div>

        <!-- 3 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/3sesion.png" alt="Símbolo de ritual y mito">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Evelia Arteaga Conde — Tesista: Santiago Campodonico</div>
              <h3 class="title">Bíos Kaí Zoé: violencia, muerte y redención en el Orfismo</h3>
              <p class="desc">Santiago investiga la tensión entre vida y muerte en el orfismo, examinando relatos de violencia ritual y la promesa de redención, y cómo estas ideas configuraron prácticas religiosas y narrativas simbólicas.</p>
              <div class="card-actions"><span class="tag">Religión antigua</span></div>
            </div>
          </article>
        </div>

        <!-- 4 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/4sesion.png" alt="Símbolo circular">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Evelia Arteaga Conde — Tesista: Efraín Ramírez Carrada</div>
              <h3 class="title">El círculo como medio de unicidad con lo divino</h3>
              <p class="desc">Efraín examina el uso del círculo como figura simbólica y práctica ritual, mostrando cómo la forma circular funciona como imagen de totalidad, unidad y diálogo entre humano y divino en tradiciones antiguas.</p>
              <div class="card-actions"><span class="tag">Simbología</span></div>
            </div>
          </article>
        </div>

        <!-- 5 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/5sesion.png" alt="Tratado y códice antiguo">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Olivia Isidro Vázquez — Tesista: Mayra Paola Aranda González</div>
              <h3 class="title">Los textos preliminares en el tratado Iuris Spiritualis Practicabilium Libri IV de don Francisco Torreblanca Villalpando</h3>
              <p class="desc">Mayra Paola se adentra en los textos preliminares de este tratado jurídico-religioso, analizando prólogos, dedicatorias y convenciones paratextuales que ayudan a entender la circulación y usos del derecho espiritual.</p>
              <div class="card-actions"><span class="tag">Historia jurídica</span></div>
            </div>
          </article>
        </div>

        <!-- 6 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/6sesion.png" alt="Imagen simbólica de música y energía">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. María Leticia López Serratos — Tesista: Sergio Embleton Márquez</div>
              <h3 class="title">Recepción del concepto de tonus en Aureliano Réome</h3>
              <p class="desc">Sergio explora cómo el concepto de <em>tonus</em> —tensión/energía sonora y corporal— aparece y se transforma en la obra de Aureliano Réome, conectando técnica musical, experiencia sensorial y recepción histórica.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/i6J0hoD5Od8?si=tATJb4KWGukmnFjW" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 7 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/7sesion.png" alt="Safo — poesía y lira">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Martha Cecilia Jaime González — Tesista: Alejandra González Jiménez</div>
              <h3 class="title">Safo en el borde: edición crítica digital a través de LaTeX y TEI</h3>
              <p class="desc">Alejandra propone una edición crítica digital de Safo que une rigor filológico (LaTeX) y interoperabilidad (TEI), facilitando el acceso y la investigación de los fragmentos líricos.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/lCR7VZ4bPRI?si=_mkxbBWq0Qux_0r9" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 8 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/8sesion.png" alt="Magia, ciencia y libros antiguos">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. María Leticia López Serratos — Tesista: Manuel de Jesús Islas Ramírez</div>
              <h3 class="title">Religión, magia y ciencia: prolegomena del De magia universalis naturae et artis de Gaspar Schott</h3>
              <p class="desc">Manuel analiza los prolegómenos de Schott para mostrar cómo en el siglo XVII religión, magia y saberes proto-científicos se entrelazaban buscando sistematizar la naturaleza y el arte.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/B4_e3S0Z7sc?si=oGARIZJXet64Gcbg" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 9 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/9sesion.png" alt="Medios y activismo">
            <div class="th-card-body">
              <div class="meta">Asesoras: Dra. Evelia Arteaga Conde & Dra. Blanca Estela Pérez — Tesista: Marvin Gohan Leyva Cervantes</div>
              <h3 class="title">Medios, letras y crímenes de odio hacia la comunidad LGBT+</h3>
              <p class="desc">Marvin investiga cómo la palabra y los medios construyen y amplifican ataques verbales y discursos de odio, proponiendo estrategias de contención y visibilización desde la academia.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/mXm00WOQAXs?si=NlNQ-_g2k5rpOEpS" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 10 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/10sesion.png" alt="Mapas antiguos — conquista">
            <div class="th-card-body">
              <div class="meta">Asesor: Dr. Pedro Emilio Rivera Díaz — Tesista: Michel Dolores Briseño</div>
              <h3 class="title">La Conquista de México en De orbe novo decades de Pedro Mártir de Anglería: edición crítica, traducción y notas</h3>
              <p class="desc">Michel realiza una edición crítica y traducción que contextualiza los relatos de Pedro Mártir sobre la Conquista, aportando notas críticas que facilitan su comprensión historiográfica.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/UVxpqnM0_Dw?si=hkPQ1ckvKtb6v4DI" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 11 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/11sesion.png" alt="Renacimiento — epístolas">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Olivia Isidro Vázquez — Tesista: Andrea Michel Hernández Romero</div>
              <h3 class="title">In muliere virum faciat opus est: Isotta Nogarola y la virtud masculina en tres epístolas renacentistas</h3>
              <p class="desc">Andrea analiza cómo Isotta Nogarola negocia temas de virtud y género en su correspondencia, revelando la construcción de la masculinidad y sus expectativas en el Renacimiento.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/EdG8reHEQWE?si=1kwz9LbjTiFknj1L" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 12 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/12sesion.png" alt="Libro de cuentos — narrativa">
            <div class="th-card-body">
              <div class="meta">Asesor: José Luis Gutiérrez Rocha — Tesista: Víctor Manuel Celaya Canto</div>
              <h3 class="title">"Narraciones silenciosas de una tierra desconocida" — Libro de cuentos</h3>
              <p class="desc">Víctor propone una colección de cuentos que exploran paisajes interiores y territorios poco narrados, usando la ficción para cartografiar vivencias y silencios sociales.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/LFIzc10g1Fg?si=wrtS1wchPLojGHq5" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 13 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/13sesion.png" alt="Enseñanza y vocabulario médico">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Martha Cecilia Jaime González — Tesista: José Antonio Martínez Hernández</div>
              <h3 class="title">Propuesta didáctica para la enseñanza y análisis de vocabulario médico en griego II</h3>
              <p class="desc">José Antonio desarrolla una propuesta didáctica para enseñar vocabulario médico en griego, combinando actividades léxicas y contextos clínicos que faciliten la adquisición terminológica.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/N-g-9b1m4s8?si=hDQ3FXVUZHVar4m6" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 14 -->
   <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/14sesion.png" alt="Écfrasis y mitos">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Martha Cecilia Jaime González — Tesista: Yasmín Vera Torres</div>
              <h3 class="title">Visualidad y sonoridad en la écfrasis de la poesía tardoantigua: El ahogamiento de Leandro</h3>
              <p class="desc">Yasmín estudia la convergencia entre imagen y sonido en la écfrasis tardoantigua, tomando el episodio del ahogamiento de Leandro como caso para evidenciar estrategias retóricas y sensoriales.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/CssT9A4iD28?si=X9uGqeq4UT_O-ugt" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

        <!-- 15 -->
  <div class="carousel-item">
          <article class="th-card">
            <img src="assets/images/testimonial/15sesion.png" alt="Virgilio y enseñanza">
            <div class="th-card-body">
              <div class="meta">Asesora: Dra. Olivia Isidro Vázquez — Tesista: Ana Magdalena Aparicio Coraza</div>
              <h3 class="title">La poesía épica de Virgilio para CCHeros: secuencia didáctica para Latín I</h3>
              <p class="desc">Ana Magdalena propone una secuencia didáctica que aprovecha la épica virgiliana para introducir a estudiantes de Latín I en lecturas vivas, actividades creativas y análisis textual accesible.</p>
              <div class="card-actions">
                <a class="btn-video" href="https://youtu.be/3AuvrWr_vMI?si=t-78pKtYxru3eA2e" target="_blank" rel="noopener">Ver video</a>
              </div>
            </div>
          </article>
        </div>

   </div>
    </div>

  <button class="carousel-btn right" id="nextBtn" aria-label="Siguiente">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
    </button>
  </div>

 
<!-- FIN: Bloque completo -->
