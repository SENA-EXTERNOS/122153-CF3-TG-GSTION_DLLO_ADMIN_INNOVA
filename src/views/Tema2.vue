<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ofimática

    .row.mb-5(data-aos='zoom-in')
      .col-12.px-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style='{ "background-image": `url(${require("@/assets/template/tema2/t2-i1.jpg")})` }'
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Son todas las técnicas, herramientas, equipos y aplicaciones tecnológicas utilizadas en los trabajos de oficina y afines, agilizando los procesos administrativos.
            br
            br
            p El proceso de ofimática se basa en la creación, manipulación, transmisión y almacenamiento de la información necesaria en la oficina.

    .row.mb-5
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i2.jpg')

      .col-md-6
        p La ofimática se desarrolló a partir de los años 70’s con la evolución de la máquina de escribir mecánica a eléctrica, y posteriormente a electrónica, con pequeñas capacidades de memoria y corrección de textos, que se podían observar en una pequeña pantalla, agilizando los procesos y reduciendo los reprocesos por correcciones. La llegada de los ordenadores personales mejoro y optimizó los procesos de oficina, ahorrando tiempo, costos y facilitando el trabajo de tipo repetitivo que se realizaba en las unidades administrativas.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      |<em>Software</em>

    .row.mb-5
      .col-md-6
        p Es el conjunto de aplicaciones, programas de cómputo, procedimientos, datos y pautas, permitiendo realizar diferentes tareas dentro de un espacio, sistema o interfaz informática.
        br
        | Se hace referencia a&nbsp;
        i software
        |
        | cuando generalmente se habla de programas instalados en un dispositivo tecnológico (computadores de mesa, portátiles, tabletas, celulares, relojes inteligentes, televisores inteligentes y otros dispositivos), es todo lo intangible en un sistema de cómputo.

      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i3.jpg')

    .row.d-flex.justify-content-center.mb-5 
      .col-lg-9
        .cajon.color_cajon_green.p-4
          strong Software:
          |
          | es un término procedente del idioma inglés, que es aceptado por la Real Academia Española (RAE) y no posee una traducción que se ajuste al español.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | <em>Hardware</em>

    .row.mb-5
      .col-md-4
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i4.jpg')

      .col-md-8.mb-5
        p Todo lo físico y tangible de un ordenador o sistema informático, se llama&nbsp;
          i hardware,
          |
          | discos, memorias USB, dispositivos periféricos, pantallas, ratones, etc. Está formado por componentes eléctricos y electrónicos, mecánicos y electromecánicos, que en conjunto hacen que el equipo o equipos funcionen.
          br
          | Hoy en día un televisor inteligente, una tableta, un teléfono celular, un reloj, puede ser un&nbsp;
          i hardware.

 
    p El
      i &nbsp;hardware&nbsp;
      | se clasifica en:

    .row.mb-5
      .col-md-12
        .tarjeta.tarjeta--green.p-5
          SlyderA(tipo='b')
            .row
              .col-md-7.mb-4.mb-md-0
                strong
                  i Hardware
                  |
                  | de procesamiento
                br
                br
                | Es el cerebro del procesador CPU (Unidad central de procesamiento), centro de operaciones y lógica de la computadora. Allí se interpretan, ejecutan y analizan las tareas necesarias para el funcionamiento de la unidad general de cómputo y el resto de los componentes.

              .col-md-5
                figure(data-aos='zoom-in')
                  img(src='@/assets/template/tema2/slider01/t2-s1.jpg')
            .row.justify-content-center.my-lg-4
              .col-md-7.mb-4.mb-md-0
                strong 
                  i Hardware
                  |
                  | de almacenamiento
                br
                br
                | Como indica su nombre, hace referencia a todos los componentes cuya función es resguardar la información para que el usuario pueda acceder a ella en cualquier momento. El dispositivo principal en este caso es la memoria RAM&nbsp;
                i (Random Access Memory),
                |
                | pero también está conformada por memorias secundarias, como los discos duros o las memorias SSD o USB.

              .col-md-5
                figure(data-aos='zoom-in')
                  img(src='@/assets/template/tema2/slider01/t2-s2.jpg')
            .row.justify-content-center.my-lg-4
              .col-md-7.mb-4.mb-md-0
                strong 
                  i Hardware 
                  | gráfico
                br
                br
                | Está compuesto principalmente por las tarjetas gráficas que poseen memoria y CPU propias, y son las encargadas de interpretar y ejecutar las señales dedicadas a la construcción de imágenes. El hecho de que esta función no recaiga en la CPU, tiene que ver con la eficiencia, ya que, al liberar de esas funciones a la memoria principal, el sistema funciona de manera óptima.

              .col-md-5
                figure(data-aos='zoom-in')
                  img(src='@/assets/template/tema2/slider01/t2-s3.jpg')
            .row.justify-content-center.my-lg-4
              .col-md-7.mb-4.mb-md-0
                strong Dispositivos periféricos
                br
                br
                | Es todo el&nbsp;
                i hardware
                |
                | que permite que la información pueda ingresar a la computadora, o salir de esta. Se subdividen en tres categorías:
                br
                br
                ul
                  li 
                    i.fas.fa-check.color_texto_acento
                    |&nbsp;
                    strong Periféricos de entrada:
                    |
                    | son los que permiten el acceso de datos a la computadora. Por ejemplo, el teclado, el micrófono, la cámara&nbsp;
                    i web,
                    |
                    | etc.
                  br
                  li 
                    i.fas.fa-check.color_texto_acento
                    |&nbsp;
                    strong Periféricos de salida:
                    |
                    | a través de ellos, el usuario puede extraer la información, como los escáneres, las impresoras, las consolas, los parlantes o altavoces. 
                  br
                  li 
                    i.fas.fa-check.color_texto_acento
                    |&nbsp;
                    strong Periféricos de entrada y salida o mixtos:
                    |
                    | son capaces de introducir o extraer la información. Las pantallas táctiles entran en esta categoría, al igual que los lectores de DVD o&nbsp;
                    i BlueRay&nbsp;
                    | y las memorias 
                    i flash. 
                    | Estas últimas son esencialmente memorias secundarias, pero se usan como periféricos mixtos.

              .col-md-5
                figure(data-aos='zoom-in')
                  img(src='@/assets/template/tema2/slider01/t2-s4.jpg')


    p A continuación, se presenta un comparativo resumen del&nbsp;
      i hardware y software.

    .row.justify-content-center.mb-5
      .col-lg-9
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i5.jpg')
          
    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Herramientas ofimáticas

    .row.mb-5
      .col-md-3
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i6.jpg')

      .col-md-9
        p En la actualidad,&nbsp;
          i Microsoft Office
          |
          | tiene el gran mercado de las aplicaciones ofimáticas, con&nbsp;
          i software
          |
          | especializados a cada necesidad en la gestión documental y procedimental en la oficina. Existen otras firmas también muy fuertes en desarrollo de aplicaciones ofimáticas, como&nbsp;
          i Google,
          |
          | que desde la nube, con aplicaciones en línea, ofrece facilidad de acceso desde cualquier ordenador en cualquier parte del planeta.

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11
        .cajon.color_cajon_tema1_2.p-4
          .row
            .col-lg-12.col-12
              p Los siguientes son ejemplos de herramientas de ofimática:
            .col-lg-6.col-12
              ul
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Procesamiento de textos.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Desarrollo de hojas de cálculo.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Herramientas de presentación multimedia.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Bases de datos.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Agendas.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Equipos de fax.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Calculadoras.
            .col-lg-6.col-12
              ul
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Teléfonos.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Impresora.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Programas de e-mail.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  i &nbsp;Software
                  |
                  | de programación.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Programas de correo de voz.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Programas de mensajería instantánea.
                li 
                  i.fas.fa-check.color_texto_acento
                  |
                  | Herramientas de reconocimiento de voz.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Manuales de usuarios tecnológicos

    .row.mb-5
      .col-md-6
        p Es el documento que permite a todo usuario de cualquier equipo electrónico y/o de tecnología, entender su funcionamiento, es una guía que asiste al usuario en la solución de problemas en su uso y otros inconvenientes que se pueden presentar en el uso cotidiano de este. Todo equipo tecnológico tiene una garantía de uso, en la cual el usuario puede presentar alguna querella sobre al funcionamiento anómalo estipulado para este, igualmente tiene un ciclo de vida útil de funcionamiento acorde a las especificaciones descritas en sus características. En el manual de uso tecnológico deben quedar claramente estipuladas las características del equipo, su vida útil, la garantía, los talleres autorizados para la reparación y/o recambio del equipo si es necesario y las acciones a seguir en caso de mal funcionamiento.
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema2/t2-i7.jpg')

    p Los objetivos del manual del usuario son:

    .row.m-b5
      .row.d-flex.justify-content-center
        SlyderF(columnas='col-lg-6 col-xl-4')(data-aos='zoom-in')
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Conocer cómo preparar los datos de entrada.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Aprender a obtener los resultados y los datos de salida.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Servir como manual de referencia y aprendizaje.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Definir las funciones que debe realizar el usuario.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Informar al usuario de la respuesta a cada mensaje de error.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Definir los diferentes tipos de usuarios.

          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-lg-12.t-2-nivel1-tarjeta
              .col-lg-12.tarjeta--green.t-2-nivel2-tarjeta
                .row.justify-content-center.t-2-nivel3-tarjeta
                  .col-lg-6.col-4.mb-3
                    img(
                      src='@/assets/template/tema2/slider02/t2-s1.png',
                      alt='AvatarTop'
                    )
                  p.text-center Definir los módulos en que cada usuario participará.
    .row
      p Aunque los manuales se elaboran de acuerdo con las necesidades del cliente, así como el desarrollo tecnológico fruto del manual, se trata de estandarizar una presentación o contenido propuesto:

      .col-lg-12    
        ImagenInfografica.color-acento-botones.punto_caliente_acento_botones(data-aos='zoom-in')
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema2/t2-i8.svg')

          .tarjeta.color-acento-botones_black.p-3(x='28%', y='14%' numero="+")
            h5 Portada, índice e introducción
            p Hace un paneo general de las características, intención de uso del&nbsp;
              i software,&nbsp;
              |
              | así como el contexto de utilidad de este y sus variantes generales.

          .tarjeta.color-acento-botones_black.p-3(x='36%', y='14%' numero="+")
            h5 Instalación del&nbsp;
              i software
            p El manual de usuario debe detallar todo el procedimiento y paso a paso para la instalación del&nbsp;
              i software,&nbsp;
              |
              | qué requerimientos debe tener el equipo o equipos donde se realizará la instalación, debe así mismo describir las modificaciones que se deban hacer en el equipo si es el caso, todo este procedimiento debe ser muy bien detallado, incluidas sus variantes. Debe alertar al usuario consecuencias futuras de todas las variantes posibles.

          .tarjeta.color-acento-botones_black.p-3(x='57%', y='15%' numero="+")
            h5 Diagrama general del&nbsp;
              i software
            p Es una forma gráfica, esquemática, tipo mapa mental o similar para entender la instalación, funcionamiento y flujo de acciones que realizará el&nbsp;
              i software.
              | Proporciona una visión general del&nbsp;
              i software.

          .tarjeta.color-acento-botones_black.p-3(x='36%', y='81%' numero="+")
            h5 Diagrama particular detallado
            p A diferencia del diagrama general, este es más específico del proceso, menú y variante que tenga el&nbsp;
              i software.&nbsp;
              | Este gráfico debe explicar cada submenú con lujo de detalles para evitar problemas en el funcionamiento general del&nbsp;
              i software.

          .tarjeta.color-acento-botones_black.p-3(
            x='57%',
            y='81%',
            numero="+"
          )
            h5 Explicación genérica de las fases del&nbsp;
              i software
            p Esta explicación cuenta cómo funciona el 
              i software 
              | desde el menú principal y su interacción con los submenús y con otros&nbsp;
              i software,&nbsp; 
              | si es el caso.

          .tarjeta.color-acento-botones_black.p-3(x='73%', y='68%' numero="+")
            h5 Iniciación al uso del&nbsp;
              i software
            p Este punto tiene gran importancia porque es el primer “toque” que se le da al&nbsp;
              i software&nbsp;
              | para que funcione, generalmente se deben realizar ajustes hasta llegar a los requisitos y el funcionamiento deseado.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: false,
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
