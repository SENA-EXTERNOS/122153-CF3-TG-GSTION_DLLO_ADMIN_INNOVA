<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Normas técnicas de seguridad y salud en el ambiente laboral

    .row.mb-5
      .bloque-texto-f.pt-4.px-5
        .bloque-texto-f__comillas
          i.fas.fa-quote-left
          i.fas.fa-quote-right
        h4.text-regular.bloque-texto-f__texto Está definida como aquella disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores. Tiene por objeto mejorar las condiciones y el medio ambiente de trabajo, así como la salud en el trabajo, que conlleva la promoción y el mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones.
        .bloque-texto-f__autor-right.mb-3
          h3.mb-0 (Artículo 1,Ley 1562 de 2012)
       

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-8.col-12
        figure
          img(src='@/assets/template/tema6/t6-i1.png')

    .row.mb-5
      .col-lg-12
        p En Colombia pasó de ser el área de la organización que “evitaba accidentes o incidentes”, a ser un Sistema de Gestión con todas las cualidades y herramientas que tiene (ciclo PHVA: planear, hacer, verificar, actuar), interdisciplinario, transversal a todas las áreas de trabajo, tanto en producción como en administración, se convirtió en un área de apoyo tan importante como la financiera.

    .row.d-flex.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color_cajon_green.p-4
          p Como sistema de gestión (en Colombia de obligatorio uso), debe articularse con todos los sistemas que la organización implemente de uso obligatorio o no, por tanto, las organizaciones que implementen un sistema de gestión de seguridad de la información (SGSI) ISO 27001, deberá ir articula con SGSST (Sistema de Gestión de Salud y Seguridad en el Trabajo) y documentar los riesgos asociados con la gestión de la información y la seguridad de esta, así como la planeación de acciones de mejora que arroje el sistema en su fase de control e implementar estas acciones en los futuros planes del sistema de gestión integrado.

    .row.mb-5
      .col-lg-5.d-flex.align-items-end
        figure
          img(src='@/assets/template/tema6/t6-i2.png')
      .col-lg-7
        .row 
          .col-lg-12.mb-3
            p Todo programa sobre gestión en seguridad y salud en el trabajo, debe tener una introducción, alcance, objetivos, interesados o responsables, acciones (actividades), cronograma, sistemas de medición de las acciones y planes ejecutados, indicadores (obligatorios y no obligatorios), acciones de mejores, ejecución de acciones de mejora. Cada SG-SST, debe único y elaborado de acuerdo a los riesgos detectados, medidos y clasificados en ella, así como las acciones de mitigación, eliminación u otra acción que se ejecutó frente a ellos, por tanto, la metodología general se aplica conforme a lo estipulado por la norma, pero las acciones y riesgos son particulares a cada proceso, cada área y cada empresa.
          .col-lg-12
            .cajon.color_cajon_tema_3_1.p-4
              p Por ejemplo, dos constructoras tienen riesgos similares en procesos similares, pero difieren en riesgos específicos en el campo de obra, una se dedica a la construcción de casas de un solo nivel y la otra a edificios multivivienda, generando adicionalmente riesgo en alturas, necesitando capacitación en esta área para las labores colaterales al riesgo de altura, mientras las otra constructora no lo necesitará.

    p Para ampliar la información, se le invita a ver en el material complementario, los siguientes videos:

    .row.mb-5
      .tarjeta.p-3.color--green2.mb-3
        .row.justify-content-around.align-items-center 
          .col-sm.mb-3.mb-sm-0 
            .row.d-flex.align-items-center
              .col-lg-1.col-2
                figure
                  img(src='@/assets/template/tema6/t6-i3.png', width='20px')
              .col-lg-10 
                p.fw-bold.mb-0 ¿Qué significa SGSST?
          .col-auto
            a.boton.boton--b(
              :href='"https://www.youtube.com/watch?v=y1Kxw3-jPL0"',
              target='_blank'
            )
              span Ver Video
              i.fas.fa-play-circle 
      .tarjeta.p-3.color--green2.mb-3
        .row.justify-content-around.align-items-center 
          .col-sm.mb-3.mb-sm-0
            .row.d-flex.align-items-center
              .col-lg-1.col-2
                figure
                  img(src='@/assets/template/tema6/t6-i3.png', width='20px')
              .col-lg-10
                p.fw-bold.mb-0 Objetivos del SGSST
          .col-auto
            a.boton.boton--b(
              :href='"https://www.youtube.com/watch?v=QHg-z31nKG0"',
              target='_blank'
            )
              span Ver Video
              i.fas.fa-play-circle 
      .tarjeta.p-3.color--green2
        .row.justify-content-around.align-items-center 
          .col-sm.mb-3.mb-sm-0 
            .row.d-flex.align-items-center
              .col-lg-1.col-2
                figure
                  img(src='@/assets/template/tema6/t6-i3.png', width='20px')
              .col-lg-10 
                p.fw-bold.mb-0 Comunicación del Sistema de Gestión
          .col-auto
            a.boton.boton--b(
              :href='"https://www.youtube.com/watch?v=wmazHuPJfTs"',
              target='_blank'
            )
              span Ver Video
              i.fas.fa-play-circle 

    p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
