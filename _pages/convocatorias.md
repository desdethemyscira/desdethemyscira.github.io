---
layout: bio_editable
title: Seminario
author:
image: assets/images/about/DT251.png
#signature:
---
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

<div class="carousel-container">
  <div class="carousel-track">

    <div class="carousel-card">
      <img src="assets/images/testimonial/6sesion.png" alt="Recepción del concepto de tonus">
      <div class="carousel-card-content">
        <div class="asesora">Asesora: Dra. María Leticia López Serratos</div>
        <div class="tesista">Tesista: Sergio Embleton Márquez</div>
        <h3>Recepción del concepto de tonus en Aureliano Réome</h3>
        <p>Sergio analiza cómo el concepto de <em>tonus</em> —la tensión y energía en la música y el cuerpo— ha sido interpretado en la obra del compositor Aureliano Réome, explorando conexiones entre teoría musical, percepción sensorial y filosofía de la música.</p>
        <a href="https://youtu.be/i6J0hoD5Od8?si=tATJb4KWGukmnFjW" target="_blank">Ver video</a>
      </div>
    </div>

    <div class="carousel-card">
      <img src="assets/images/testimonial/7sesion.png" alt="Safo en el borde">
      <div class="carousel-card-content">
        <div class="asesora">Asesora: Dra. Martha Cecilia Jaime González</div>
        <div class="tesista">Tesista: Alejandra González Jiménez</div>
        <h3>Safo en el borde: propuesta de edición crítica digital a través de LaTeX y TEI</h3>
        <p>Alejandra propone una edición crítica digital de la poesía de Safo usando LaTeX y TEI, preservando la fidelidad textual y ofreciendo una experiencia interactiva que facilita el estudio y análisis de los fragmentos de la autora.</p>
        <a href="https://youtu.be/lCR7VZ4bPRI?si=_mkxbBWq0Qux_0r9" target="_blank">Ver video</a>
      </div>
    </div>

    <div class="carousel-card">
      <img src="assets/images/testimonial/8sesion.png" alt="Religión, magia y ciencia">
      <div class="carousel-card-content">
        <div class="asesora">Asesora: Dra. María Leticia López Serratos</div>
        <div class="tesista">Tesista: Manuel de Jesús Islas Ramírez</div>
        <h3>Religión, magia y ciencia: de los prolegomena del De magia universalis naturae et artis de Gaspar Schott</h3>
        <p>Manuel explora cómo religión, magia y ciencia se entrelazaban en el siglo XVII a través de los textos de Gaspar Schott, mostrando la complejidad del pensamiento científico y esotérico de la época.</p>
        <a href="https://youtu.be/B4_e3S0Z7sc?si=oGARIZJXet64Gcbg" target="_blank">Ver video</a>
      </div>
    </div>

  </div>
</div>
