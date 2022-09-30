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
            p.mb-0 Apreciado aprendiz, bienvenido a este recurso educativo, a continuación, conocerá más sobre la administración entendiéndola como una herramienta apropiada para dar orden a los diversos obstáculos que se presentan en la cotidianidad; por ende, entenderla y comprender su intención puede convertirse en el valor agregado que empresarialmente puede utilizarse para generar ventajas y capacidad de acción. En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo.
              br
              br
              p.mb-0.text-primary ¡Muchos éxitos en este proceso de aprendizaje!
      .col-12.mb-5
        figure
          .video
            iframe(
              width='560',
              height='315',
              src='https://www.youtube.com/embed/2L91WMqw96A',
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
