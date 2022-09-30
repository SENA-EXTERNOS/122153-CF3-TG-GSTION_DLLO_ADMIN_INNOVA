<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La empresa como escenario activo de administración

    .row
      .col-lg-12.mb-5
        p.color_texto_acento Las teorías y corrientes administrativas han surgido de la práctica y la experiencia de los autores y sus grupos de trabajo; todo esto se ha dado a través de la creación de escenarios para atender necesidades del ser humano, del mercado y del mundo. Es, en este espacio, donde se consolidan los aprendizajes y donde se va dando también estructura al concepto de empresa.
      .col-lg-12.mb-5
        .row 
          .col-lg-6
            p La existencia de las empresas ha permitido generar escenarios transaccionales que le dan al ser humano posibilidad de percibir ingresos para su sustento; he aquí la importancia de trabajar por la consolidación de empresas sostenibles y con valor agregado para la economía de los países y del mundo. Para conocer un poco el origen del concepto, lo invitamos a ver el video La empresa y la gestión de la información.
            a.anexo.mb-4.mb-lg-0(
              href='https://www.youtube.com/watch?v=dzyn4eofi6c',
              target='_blank'
            )
              .anexo__icono
                img(src='@/assets/template/icono-link.svg')
              .anexo__texto
                p 
                  |
                  strong Enlace web.
                  | La empresa y la gestión de la información.
            br
            p Todas las empresas tienen diferentes características y estructuras, y por eso se va a profundizar un poco acerca de esas clasificaciones.
            br
            | Münch Galindo (2018), define la empresa como:
            |
            span.color_texto_acento “la unidad económico-social en la cual, a través del capital, el trabajo y la coordinación de recursos se producen bienes y servicios para satisfacer las necesidades de la sociedad”
            | (p.64). Ahora bien, no todas las empresas son iguales, existen características y disposiciones que las hacen diferentes, y hay tantas formas de clasificar empresas como variables para hacerlo. Sin embargo, el interés está en conocer cómo se pueden distinguir los tipos de empresas y, por supuesto, las características que se definan deben ser de utilidad para los análisis económicos en diferentes ámbitos.
          .col-lg-6
            figure
              img(src='@/assets/template/tema3/img01_t3.jpg', alt='')
      .col-lg-12.mb-5
        p Es importante distinguir algunas de las diferentes clasificaciones y modelos de empresas, como se observa a continuación:

        ImagenInfograficaB.color-primario
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema3/img02_t3.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

          div(x="88%" y="17%" tooltip="Por su estructura jurídica")
            h5 Por su estructura jurídica
            p Depende de cada país y las normativas para su constitución. En Colombia se clasifican de esta manera:
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Empresa unipersonal: se describe como la persona física que realiza, en nombre propio y por medio de una empresa, una actividad comercial, industrial o profesional.
              li 
                i.lista-ul__vineta
                | Sociedad de personas o colectivas: varios individuos se asocian y, en nombre de una empresa u organización jurídica, se representan para actuar y participar en el mercado con un mismo fin.
              li 
                i.lista-ul__vineta
                | Sociedad anónima: el capital aportado por dos o más personas se divide en acciones y los accionistas son anónimos.

          div(x="93%" y="52%" tooltip="Por la actividad que realiza")
            h5 Por la actividad que realiza
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | 
                strong Industrial: 
                |  indica empresas que manufacturan o transforman productos o materias primas
              li 
                i.lista-ul__vineta
                | 
                strong Comercial: 
                | describe empresas que se dedican a la compra y venta de productos, un servicio de transaccionalidad.

              li 
                i.lista-ul__vineta
                | 
                strong De servicio: 
                |  se refiere a empresas que son creadas con el propósito de proveer al cliente un servicio (producto intangible, es decir, que no tiene forma definida).

          div(x="88%" y="84%" tooltip="Por su ubicación")
            h5 Por su ubicación
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | 
                strong Local: 
                |  su alcance está determinado al municipio o ciudad donde se encuentra ubicada.
              li 
                i.lista-ul__vineta
                | 
                strong Regional: 
                | su área de influencia trasciende lo municipal y le es posible llegar a departamentos vecinos.

              li 
                i.lista-ul__vineta
                | 
                strong Nacional: 
                |  desarrolla sus actividades en el contexto del país, esto es a nivel nacional.

              li 
                i.lista-ul__vineta
                | 
                strong Multinacional: 
                |  trasciende su operación las fronteras nacionales, es decir, tiene presencia en varios países.

          div(x="12%" y="17%" tooltip="Por su tamaño")
            h5 Por su tamaño
            p Cada país determina la clasificación de las empresas y la disposición actual para Colombia está determinada por:
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Número de empleados.

              li 
                i.lista-ul__vineta
                | Cantidad de activos.

              li 
                i.lista-ul__vineta
                | Facturación (ingresos).

          div(x="8%" y="52%" tooltip="Por la titularidad de la empresa")
            h5 Por la titularidad de la empresa
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | 
                strong Pública: 
                |  su capital está conformado por dinero del Estado
              li 
                i.lista-ul__vineta
                | 
                strong Privada: 
                | su capital es de origen particular, no tiene nada que ver con el Estado.
              li 
                i.lista-ul__vineta
                | 
                strong Mixta: 
                | parte de su capital es público y parte es privado.

          div(x="12%" y="84%" tooltip="Por el sector económico al que pertenece")
            h5 Por el sector económico al que pertenece
            br
            ul.lista-ul
              li 
                i.lista-ul__vineta
                | Sector primario: hace referencia a las actividades relacionadas con la explotación de recursos naturales como agricultura, caza, pesca y silvicultura.
              li 
                i.lista-ul__vineta
                | Sector secundario: industrial que incluye actividades que transforman productos, generalmente del sector primario o del mismo sector.
              li 
                i.lista-ul__vineta
                | Sector terciario: servicios que producen bienes intangibles y, por lo general, estas actividades sirven como soporte a los sectores primario y secundario (comercio, el transporte, la salud, la educación, el sector financiero, entre otros).
              li 
                i.lista-ul__vineta
                | Sector terciario: servicios que producen bienes intangibles y, por lo general, estas actividades sirven como soporte a los sectores primario y secundario (comercio, el transporte, la salud, la educación, el sector financiero, entre otros).
              li 
                i.lista-ul__vineta
                | Sector quinario: es el que agrupa empresas con actividades sin ánimo de lucro.



      .col-lg-12
        .titulo-principal.color-acento-contenido
          .titulo-principal__numero
            span 
          h1 Sentido de pertenencia, trabajo en equipo y toma de decisiones

      .col-lg-12.p-4.mb-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema3/img03_t3.png")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El sentido de pertenencia puede expresarse como la satisfacción que experimenta una persona por sentirse parte de un grupo o de una comunidad, a partir de la identificación con sus ideales; el fútbol es un claro ejemplo de sentido de pertenencia, donde se defiende la afición por un equipo, inclusive hasta escenarios extremos, que sobrepasan los límites imaginados. 
              |
              strong Ahora bien, este concepto toma relevancia a nivel empresarial, porque cuanto más comprometidos se encuentren los empleados y colaboradores, más facilidad para impulsar objetivos organizacionales.

      .col-lg-12.mb-5
        .row
          .col-lg-6
            p Otro de los conceptos empresariales que aportan a ese dinamismo es el trabajo en equipo, concebido como la capacidad que tiene un grupo de personas con diferentes cargos, lugares, culturas, para unir sus ideas y articular su ejercicio laboral, en busca del logro de un propósito organizacional.
            br
            | Claramente, un líder al tener la competencia para articular su equipo a la luz de una buena comunicación, del impulso de aptitudes individuales para convertirlas en capacidad empresarial, al incitar a la participación empoderada de los colaboradores, estará generando ambientes propicios y herramientas de información adecuadas para llegar al paso definitivo que da un administrador, y es la toma de decisiones donde se debe elegir, entre varias alternativas y bajo las situaciones del contexto, la más apropiada para el bien organizacional. Existen diferentes tipos de decisiones: de dirección, estratégicas, individuales, operativas, rutinarias, programadas o de riesgo.
          .col-lg-6
            figure
              img(
                src='@/assets/template/tema3/img04_t3.jpg',
                alt=''
              )
      .col-lg-12.mb-5
        .row.d-flex.justify-content-center
          .col-lg-8.mb-5
            .row 
              .col-lg-3.d-none.d-lg-block
                figure
                  img(
                    src='@/assets/template/tema3/img05_t3.jpg',
                    alt=''
                  )
              .col-lg-9
                h4 La toma de decisiones se desarrolla en 4 etapas:
                ol.lista-ol--cuadro
                  li 
                    .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                      span 1
                    | Realización de diagnósticos precisos.
                  li 
                    .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                      span 2
                    | Identificación del problema, la dificultad o la necesidad.
                  li 
                    .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                      span 3
                    | Establecimiento de los criterios o alternativas de decisión.
                  li 
                    .lista-ol--cuadro__vineta.color_cajon_green_cuadro
                      span 4
                    | Definición de momentos de evaluación y cumplimiento de metas.

          .col-lg-10
            .cajon.color_cajon_green.p-4
              p De esta manera, se reconocen como elementos de una adecuada administración, la identificación y optimización de los recursos, la configuración de los diferentes momentos que vive el proceso administrativo y, por último, la correcta alineación organizacional en pro del alcance de los objetivos estratégicos de la empresa. Una visión integradora de lo que se ha analizado, puede observarse de manera resumida, en el video Componentes de la organización.

      .col-lg-12
        p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros.
</template>

<script>
export default {
  name: 'Tema3',
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
