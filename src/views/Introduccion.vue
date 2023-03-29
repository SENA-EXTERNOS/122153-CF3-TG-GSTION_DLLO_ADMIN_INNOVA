<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-12.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/introduccion/t0-i1.jpg")})` }'
          )
          .bloque-texto-g__texto.p-4
            p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán conceptos básicos de sistema y ofimática, la organización y sus características, así como un repaso primordial de los conceptos de <em>software</em> y <em>hardware</em>, en función de los procesos organizacionales. Se hará especial énfasis en las aplicaciones de las hojas de cálculo, en los cálculos estadísticos y en la gestión de bases de datos, procesadores de texto para la agilidad de los procesos de información administrativa y, finalmente, la presentación asertiva de informes visuales en aplicaciones de diapositivas.
      .col-12.mb-5
        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:
      .col-12.mb-5
        figure
          .video
            iframe(
              width='560',
              height='315',
              src='https://www.youtube.com/embed/7hoOWcOyH-s',
              title='YouTube video player',
              frameborder='0',
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen
            )
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
