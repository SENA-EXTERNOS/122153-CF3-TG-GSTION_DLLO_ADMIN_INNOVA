<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos e introducción a la administración

    .row(titulo='Titulo item 2')
      .col-md-6
        figure
          img(
            src='@/assets/template/tema1/t1-i1.png',
            alt='Texto que describa la imagen'
          )

      .col-md-6.mb-5
        p 
        | Comencemos definiendo qué es la administración. Como palabra, viene del latín ad, que indica dirección, tendencia, proximidad, contacto, y
        i minister ,
        | subordinación u obediencia, y en su sentido más amplio y completo, significa cumplimiento de una tarea o función bajo la directriz o mando de otro. Sin embargo, en la historia, este concepto sufrió una transformación significativa que trascendió el hacer, por el interpretar los objetivos trazados por una organización y transformarlos en acción, a través de la planeación, la organización, la dirección y el control, todo con el fin de alcanzar los propósitos de manera adecuada y asertiva. Es entonces cuando surgen los diferentes caminos que han tomado algunos autores para definir el concepto de administración y su impacto en los escenarios de las organizaciones.

      .col-12.mb-5
        .titulo-segundo
          h2 1.1 Orígenes y enfoques

        p La administración como la conocemos en la actualidad, es el resultado de los hechos históricos de pioneros que aportaron, desde su enfoque, al desarrollo y madurez del concepto, como por ejemplo, filósofos, físicos, economistas, estadistas, entre otros, que fueron grandes empresarios. La historia ha demostrado que las prácticas o iniciativas que tomaron estructuras militares, sociales, políticas y religiosas, siempre tuvieron configuración piramidal y, aunque no fue una forma muy regular, siempre actuaba como estructura jerárquica que focalizaba las decisiones y el poder en su vértice piramidal. Así podría citarse el aporte que, entre muchos otros, hicieron los egipcios, los hebreos, Platón, Maquiavelo y Adam Smith, con sus diferentes maneras de crear y organizar sus operaciones.

      .col-12
      .row 
        .col-12.col-md-4
          figure
            img(src='@/assets/template/tema1/origenes.png', alt='origenes')
        .col-12.col-md-8
          p Posteriormente, empezaron a surgir las diferentes teorías que dan paso a la realidad de la administración contemporánea, donde algunas de las más relevantes son:

          SlyderF(columnas='col-lg-6 col-xl-4')
            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/ac_1993.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1903
              p.text-center Administración científica

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tb_1909.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1909
              p.text-center Teoría burocrática

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tb_1916.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1916
              p.text-center Teoría burocrática

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/trh_1932.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1932
              p.text-center Teoría de las relaciones humanas

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/te_1947.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1947
              p.text-center Teoría estructuralista

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tn_1954.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1945
              p.text-center Teoría neoclásica

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tc_1957.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1957
              p.text-center Teoría del comportamiento

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tdo_1962.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1962
              p.text-center Teoría del desarrollo organizacional

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/tc_1972.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1972
              p.text-center Teoría contingencial

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/ne_1990.png',
                    alt='AvatarTop'
                  )
              h2.text-center 1990
              p.text-center Nuevos enfoques

            .tarjeta.carrusel_card_bg.p-4.altura_card_t_1
              .row.justify-content-center.mb-3
                .col-8
                  img(
                    src='@/assets/template/tema1/carrusel01/cc_2000.png',
                    alt='AvatarTop'
                  )
              h2.text-center 2000
              p.text-center Caos y complejidad
      .col-12.col-md-12.mt-4
      p Así mismo, las teorías que fueron surgiendo paulatinamente, tenían diferentes enfoques y puntos de vista que presentaban modelos y esquemas de administración, basados en diversos criterios, como se evidencia en el gráfico que se observa a continuación:
      .col-lg-12.col-md-12.col-12.mt-4
        .row.d-flex.justify-content-center
          .col-md-6.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 1.
              span Esquemas de administración

            figure
              img(src='@/assets/template/tema1/Grupo_107412.png', alt='')
          .col-lg-12.mt-4
            .cajon.color_cajon_tema1.p-4
              p Para efectos de dar mayor claridad, a continuación se procede a explicar cada uno de los enfoques y las teorías asociadas, así como también sus autores y motivadores, en el documento Enfoques y teorías administrativas asociadas.
              .col-lg-8
                a.anexo.mb-5(
                  :href='obtenerLink("/downloads/prueba.pdf")',
                  target='_blank'
                )
                  .anexo__icono
                    img(src='@/assets/template/icono-pdf.svg')
                  .anexo__texto
                    strong Anexo
                    br
                    | Enfoques y teorías administrativas asociadas.
      .col-md-6.mt-4
        figure
          img(
            src='@/assets/template/tema1/t1-i2.png',
            alt='Texto que describa la imagen'
          )

      .col-md-6.mb-5.mb-md-0.mt-4 
        p Luego de realizar el recorrido por los orígenes y enfoques de la administración, resulta importante reconocer, en el concepto, algunos elementos de carácter estratégico que han ido perfilando la administración y que han trazado la estructura basada en procesos. La estrategia no es más que la capacidad de actuar bajo la presión del entorno y sus variables, ser capaces de ir más allá y de orientar las decisiones de manera adaptativa a los cambios que surgen. Esta manera de “hacer” administración, determina una ruta o un ciclo que posibilita no solo idear propuestas sino ejecutarlas y, posteriormente, evaluarlas; para lograrlo es necesario esbozar un poco de qué se trata, a partir de la siguiente línea temática.

      .col-md-12.mt-4 
        .titulo-segundo
          h2 1.2 Administración estratégica

      .col-md-12.p-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema1/t1-i2.jpg")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La administración estratégica se entiende como aquella que apunta a dar lineamiento y orientación desde los estamentos directivos en una empresa u organización, teniendo en cuenta el estado interno y externo de la misma es decir, diagnosticando lo que sucede, para alinear y asegurar que la toma de decisiones impacte directamente la necesidad o la intención.
              br
              br
              p.mb-0 
              | Para conocer qué es la estrategia de diagnóstico y análisis empresarial,
              strong se recomienda ver el siguiente video.
      .col-md-12.p-4
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
        figcaption Video: Leyenda del video
      .col-md-12.p-4
        .row.d-flex.justify-content-center
          .col-lg-11
            .cajon.color_cajon_tema1_2.p-4
              p Una vez que se cuenta con el diagnóstico y el análisis empresarial, se procede a realizar una proyección de la empresa desde lo estratégico y, entonces, es este el momento correcto para aplicar los principios del proceso administrativo.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
