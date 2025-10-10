---
layout: bio_editable
title: Seminario
author:
image: assets/images/about/PDT.png
#signature:
---
<!-- INICIO: Bloque completo (CSS + HTML + JS) -->
<style>
  /* Paleta inspirada en Desde Themyscira */
  :root{
    --lavanda-1: #efe9f6;
    --lavanda-2: #dac8f0;
    --violeta: #7a4fa6;
    --beige: #fff7ed;
    --gold-soft: #d6b08a;
    --texto: #2b2b2b;
    --card-shadow: rgba(26,20,45,0.08);
  }

  body { background: var(--beige); color: var(--texto); font-family: "Inter", "Arial", sans-serif; }

  .section-wrap { max-width: 1200px; margin: 2.2rem auto; padding: 0 1rem; }

  /* Encabezado */
  .th-header { display:flex; align-items:center; gap:12px; margin-bottom:1rem; }
  .th-header h2 { margin:0; color:var(--violeta); font-size:1.45rem; }
  .th-sub { color: #6b5e78; font-size:0.95rem; margin:0; }

  /* GRID (rejilla flexible para pantallas grandes) */
  .grid-wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    margin-bottom: 2rem;
  }

  .th-card {
    background: linear-gradient(180deg, var(--lavanda-1), var(--lavanda-2));
    border-radius: 14px;
    box-shadow: 0 8px 20px var(--card-shadow);
    overflow: hidden;
    transition: transform .28s ease, box-shadow .28s ease;
    display: flex;
    flex-direction: column;
  }
  .th-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(26,20,45,0.12); }

  .th-card img {
    width:100%;
    height:160px;
    object-fit:cover;
    display:block;
    filter: saturate(.95) contrast(.98);
  }

  .th-card-body {
    padding: 14px;
    display:flex;
    flex-direction:column;
    gap:8px;
  }

  .meta { font-size:0.82rem; color:#3f2f4a; font-weight:600; }
  .title { font-size:1rem; color:var(--violeta); font-weight:700; margin:0 0 6px 0; }
  .desc { font-size:0.92rem; color:#3f3544; line-height:1.3; margin:0; min-height:3.2rem; } /* mantiene altura */
  .card-actions { margin-top:auto; display:flex; gap:8px; align-items:center; }

  .btn-video {
    background: linear-gradient(90deg,#8f5bb7,#6e3ea0);
    color:#fff;
    padding:8px 12px;
    border-radius:10px;
    text-decoration:none;
    font-weight:600;
    box-shadow: 0 4px 14px rgba(110,62,160,0.12);
  }
  .btn-video:hover { transform: translateY(-2px); }

  .tag { font-size:0.78rem; color:#7a657f; padding:6px 8px; background:rgba(255,255,255,0.35); border-radius:8px; }

  /* CARRUSEL */
  .carousel-wrap { position: relative; margin: 2rem 0; }
  .carousel {
    display:flex;
    gap:18px;
    padding:18px;
    overflow:hidden;
    scroll-behavior: smooth;
  }
  .carousel-track {
    display:flex;
    gap:18px;
    transition: transform .45s cubic-bezier(.22,.9,.3,1);
  }
  .carousel-item { min-width: 320px; max-width: 320px; flex-shrink:0; border-radius:14px; overflow:hidden; }
  .carousel-item .th-card { margin:0; border-radius:12px; }

  /* Flechas */
  .carousel-btn {
    position:absolute;
    top:50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.9);
    border: none;
    width:44px; height:44px; border-radius:10px;
    box-shadow: 0 8px 18px rgba(17,12,36,0.08);
    display:flex; align-items:center; justify-content:center;
    cursor:pointer;
    transition: transform .18s;
  }
  .carousel-btn:hover { transform: translateY(-50%) scale(1.04); }
  .carousel-btn.left { left:8px; }
  .carousel-btn.right { right:8px; }

  .carousel-btn svg { width:18px; height:18px; fill: var(--violeta); }

  /* Responsive: en pantallas pequeñas, el carousel ocupa full width  */
  @media (max-width: 880px){
    .carousel-item { min-width: 86%; max-width: 86%; }
    .carousel { padding: 12px; }
    .carousel-btn { width:40px; height:40px; }
  }

  /* Pequeños ajustes de accesibilidad */
  .visually-hidden { position:absolute !important; height:1px; width:1px; overflow:hidden; clip:rect(1px,1px,1px,1px); white-space:nowrap; }

  /* Post en párrafos (resúmenes ampliados) */
  .post-list { margin-top:2rem; display:flex; flex-direction:column; gap:18px; }
  .post-item { background: #fff; border-radius:12px; padding:14px; box-shadow: 0 6px 16px rgba(17,12,36,0.04); }
  .post-item h4 { margin:0 0 6px 0; color:var(--violeta); }
  .post-item .meta { margin-bottom:8px; color:#463953; }
  .post-item p { margin:0; color:#3a3440; line-height:1.45; }

</style>

<div class="section-wrap">

  <div class="th-header">
    <div>
      <h2>Proyectos de Tesis — Ciclo</h2>
      <p class="th-sub">Galería y resúmenes divulgativos. Desliza el carrusel o consulta la rejilla según prefieras.</p>
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

<script>
  /* ====== CAROUSEL JS: autoplay, flechas, pausa al hover, touch support ====== */

  (function(){
    const track = document.getElementById('carouselTrack');
    const carousel = document.getElementById('carousel');
    const items = Array.from(track.children);
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    let autoplayInterval = 5000; // ms
    let autoplayTimer = null;
    let isPaused = false;

    // Calcular ancho de desplazamiento (incluye gap). Se usa el ancho del primer item.
    function itemWidth(){
      const first = track.querySelector('.carousel-item');
      if(!first) return 320;
      const style = getComputedStyle(track);
      // gap from parent flex gap
      const gap = parseInt(getComputedStyle(track).gap) || 18;
      return first.getBoundingClientRect().width + gap;
    }

    function goToIndex(i){
      // limita valores y aplica transform
      const max = items.length;
      index = ((i % max) + max) % max;
      const x = index * itemWidth();
      track.style.transform = `translateX(-${x}px)`;
    }

    function next(){
      goToIndex(index + 1);
    }
    function prev(){
      goToIndex(index - 1);
    }

    // Flechas
    nextBtn.addEventListener('click', () => { next(); resetAutoplay(true); });
    prevBtn.addEventListener('click', () => { prev(); resetAutoplay(true); });

    // Autoplay
    function startAutoplay(){
      stopAutoplay();
      autoplayTimer = setInterval(() => {
        if(!isPaused) next();
      }, autoplayInterval);
    }
    function stopAutoplay(){
      if(autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
    function resetAutoplay(userTriggered){
      // Si el usuario hizo clic, reinicia temporizador
      stopAutoplay();
      startAutoplay();
    }

    // Pausar al hover
    carousel.addEventListener('mouseenter', ()=> isPaused = true);
    carousel.addEventListener('mouseleave', ()=> isPaused = false);

    // Ajustar al redimensionar ventana (recalcula itemWidth)
    window.addEventListener('resize', ()=> goToIndex(index));

    // Soporte touch para arrastrar
    let startX = 0, currentX = 0, isDragging = false;
    carousel.addEventListener('touchstart', (e)=>{
      isPaused = true;
      startX = e.touches[0].clientX;
      isDragging = true;
      carousel.classList.add('dragging');
    }, {passive:true});
    carousel.addEventListener('touchmove', (e)=>{
      if(!isDragging) return;
      currentX = e.touches[0].clientX;
      const dx = currentX - startX;
      track.style.transform = `translateX(-${index * itemWidth() - dx}px)`;
    }, {passive:true});
    carousel.addEventListener('touchend', (e)=>{
      isDragging = false;
      carousel.classList.remove('dragging');
      const dx = currentX - startX;
      const threshold = 50; // px para cambiar slide
      if(dx > threshold) prev();
      else if(dx < -threshold) next();
      else goToIndex(index);
      isPaused = false;
    });

    // Inicializar
    goToIndex(0);
    startAutoplay();

    // Mejora: pausa autoplay si pestaña no visible
    document.addEventListener('visibilitychange', ()=>{
      if(document.hidden) stopAutoplay(); else startAutoplay();
    });

  })();
</script>
<!-- FIN: Bloque completo -->
