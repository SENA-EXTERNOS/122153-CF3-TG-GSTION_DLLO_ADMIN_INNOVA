<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Actividad didáctica

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-lg-12.mb-4.mb-md-0
        .titulo-segundo.mb-0
            h2 Gestión del desarrollo administrativo e innovación
            
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0    
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/actividad/a-1.jpg")
      .col-12.col-md-8.col-lg-9
        p.mb-4 Dentro de la gestión administrativa es importante conocer los conceptos básicos de ofimática y sobre todo la relación tan importante que tiene con la tecnología en general, dispositivos móviles, aplicaciones, desarrollos tecnológicos de uso organizacional y personal. Por este motivo, la finalidad de esta actividad es establecer el conocimiento adquirido por el aprendiz de las diferentes temáticas estudiadas.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Falso / verdadero
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
