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
        h5.text-regular.bloque-texto-f__texto Está definida como aquella disciplina que trata de la prevención de las lesiones y enfermedades causadas por las condiciones de trabajo, y de la protección y promoción de la salud de los trabajadores. Tiene por objeto mejorar las condiciones y el medio ambiente de trabajo, así como la salud en el trabajo, que conlleva la promoción y el mantenimiento del bienestar físico, mental y social de los trabajadores en todas las ocupaciones.
        .bloque-texto-f__autor-right.mb-3
          h4.mb-0 (Artículo 1, Ley 1562 de 2012)
       

    .row.justify-content-center.mb-5
      .col-lg-8.col-md-8.col-12
        figure
          img(src='@/assets/template/tema6/t6-i1.png')

    .row.mb-5
      .col-lg-12
        p En Colombia pasó de ser el área de la organización que “evitaba accidentes o incidentes”, a ser un Sistema de Gestión, con todas las cualidades y herramientas que tiene (ciclo PHVA: planear, hacer, verificar, actuar), interdisciplinario, transversal a todas las áreas de trabajo, tanto en producción como en administración y se convirtió en un área de apoyo, tan importante como la financiera. 

    .row.d-flex.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color_cajon_green.p-4
          p.mb-0 Como sistema de gestión (en Colombia de obligatorio uso), debe articularse con todos los sistemas de la organización, simplemente de uso obligatorio o no; por lo tanto, las organizaciones que implementen un Sistema de Gestión de Seguridad de la Información (SGSI) ISO 27001, este deberá ir articulado con el SGSST (Sistema de Gestión de Salud y Seguridad en el Trabajo) y documentar los riesgos asociados con la gestión de la información y la seguridad de esta, así como también la planeación de acciones de mejora que arroje el sistema en su fase de control, e implementar estas acciones en los futuros planes del Sistema de Gestión Integrado.

    .row.mb-5
      .col-lg-5.d-flex.align-items-end
        figure
          img(src='@/assets/template/tema6/t6-i2.png')
      .col-lg-7
        .row 
          .col-lg-12.mb-3
            p Todo programa sobre Gestión en Seguridad y Salud en el Trabajo, debe tener una introducción, alcance, objetivos, interesados o responsables, acciones (actividades), cronograma, sistemas de medición de las acciones y planes ejecutados, indicadores (obligatorios y no obligatorios), acciones de mejora, ejecución de acciones de mejora. Cada SG-SST, debe ser único y elaborado, de acuerdo con los riesgos detectados, medidos y clasificados en él, así como con las acciones de mitigación, eliminación y otra acción que se ejecute frente a ellos; por lo tanto, la metodología general, se aplica, conforme con lo estipulado por la norma, pero las acciones y riesgos son particulares a cada proceso, a cada área y a cada empresa.
          .col-lg-12
            .cajon.color_cajon_tema_3_1.p-4
              p Por ejemplo, dos constructoras tienen riesgos similares en procesos similares, pero difieren en riesgos específicos en el campo de obra, una se dedica a la construcción de casas de un solo nivel y la otra a edificios multivivienda, generando adicionalmente riesgo en alturas, necesitando capacitación en esta área para las labores colaterales al riesgo de altura, mientras las otra constructora no lo necesitará.


    .row.d-flex.justify-content-center.mb-5 
      .col-lg-10
        .cajon.color_cajon_green.p-4
          p Para ampliar la información, se le invita a ver en el material complementario, los siguientes videos: 
          ul.lista-ul.ps-3
            li 
              i.fas.fa-check.color_check_t3
              p.mb-0 ¿Qué significa SGSST?
            li 
              i.fas.fa-check.color_check_t3
              p.mb-0 Objetivos del SGSST
            li 
              i.fas.fa-check.color_check_t3
              p.mb-0 Comunicación del Sistema de Gestión
           

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
