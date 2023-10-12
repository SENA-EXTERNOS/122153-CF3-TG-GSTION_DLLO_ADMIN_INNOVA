<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Hojas de cálculo, procesadores de texto y presentaciones

    p.mb-5 Dentro de las herramientas ofimáticas encontramos las hojas de cálculo, procesadores de texto y presentaciones, a continuación, estudiaremos cada una de ellas.

    h3.mb-5
      i.fas.fa-square.cac.me-3
      | Hojas de cálculo

    .row
      .col-lg-12.mb-5
        p Es una aplicación que tiene un arreglo de filas y columnas, las cuales generan en su cruce “cajas” llamadas celdas, en ellas se pueden alojar datos de diferentes tipos (numéricos y alfanuméricos) y disponerse en tablas, que facilitan los cálculos más sencillos hasta los más complejos en áreas como contabilidad, finanzas, estadística, negocios, ingeniería, economía entre las más comunes. Tiene grandes posibilidades desde la ejecución de recolección, clasificación y análisis de datos en tablas, hasta la generación de gráficos de varios tipos, ejecución de fórmulas y funciones matemáticas para las diferentes aplicaciones en diferentes áreas del conocimiento.
        |
        | La siguiente imagen presenta algunos de los elementos que componen la hoja de cálculo.


    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1
      br
      span.fst-italic Elementos hoja de cálculo
    .bgb.p-5.mb-5
      figure(data-aos='zoom-in')
        img(src='@/assets/template/tema3/t3-i1.jpg', alt='')

    .col-lg-12.mb-5
      p Dado el concepto básico de estadística, recopilar, ordenar, jerarquizar, clasificar y analizar datos, las hojas de cálculo fueron hechas a medida, porque ellas permiten realizar todas estas operaciones, graficar y generar análisis de los datos seleccionados de acuerdo las necesidades a ser solucionadas.
      |
      | La hoja de cálculo facilita los cálculos y análisis estadísticos de datos.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Bases de datos en hoja de cálculo

    .row.mb-5
      .col-lg-12.mb-5
        p Las bases de datos son aplicaciones que se emplean para almacenar, organizar y relacionar gran cantidad de información. La siguiente imagen presenta un ejemplo de una base de datos en hoja de cálculo.

      .col-lg-12.mb-5
        .row.d-flex.justify-content-center
          .col-lg-11.col-md-10.col-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 2
              br
              span.fst-italic Ejemplo base de datos hoja de cálculo
    .bgb.p-5.mb-5    
      figure(data-aos='zoom-in')
        img(src='@/assets/template/tema3/t3-i2.jpg', alt='')

    .col-12.mb-5(data-aos='zoom-in')
      .row.d-flex.justify-content-center
        .col-lg-11
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style='{ "background-image": `url(${require("@/assets/template/tema3/t3-i3.jpg")})` }'
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 Existen diferentes programas de bases de datos como: Microsoft Office Access y Open Office Base, las nuevas funciones del Excel, como el Power Pivot y el Power BI (de inteligencia de negocios), especiales para tratar y analizar bases de datos, generando tableros de mando inteligentes y dinámicos (<i>dashboard</i>), realizar presentaciones de informes gerenciales que implican análisis de gran cantidad de datos, de forma más sencilla, dinámica y certera, para una rápida y efectiva toma de decisiones.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Procesadores de texto

    .bgb.p-5.mb-5 
      figure(data-aos='zoom-in')
        img(src='@/assets/template/tema3/t3-i4.jpg', alt='')

    .col-lg-12.mb-5 
      p Hoy en día sería complicado realizar las tareas administrativas y de oficina sin un procesador de texto, esta aplicación informática permite crear y editar documentos de texto pues este, es uno de los más útiles en la actualidad por sus múltiples funcionalidades, permite agilizar la redacción, con tipos de letra diferentes, en diferentes tamaños, tipos de párrafos, colores, así como los efectos que pueden incluir en los documentos.

    .row.mb-5 
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema3/t3-i5.jpg')

      .col-md-6
        p El procesador de texto es el desarrollo digital y tecnológico de la antigua máquina de escribir mecánica de los años 70’s y de la posterior eléctrica de los años 80’s, las cuales no permitían un margen de error, específicamente la mecánica que no permitía borrar.

        p Los procesadores de texto brindan grandes facilidades, por ejemplo, permiten editar en cualquier momento y señalan errores ortográficos, de redacción, debido a que el texto digitado se observa fácilmente en la interfaz.

        p Otra gran posibilidad es la de guardar el desarrollo ya editado para evitar perder información importante, ya guardado, puede reposar seguro en algún elemento de almacenamiento como disco duro de la computadora, memoria USB, algún otro dispositivo electrónico o en la “nube”, la cual es una posibilidad que brindan muchas empresas de almacenamiento virtual, con opción de acceder a ella en cualquier dispositivo en cualquier parte del mundo donde se tenga señal de internet.

    .row.mb-5 
      .col-md-12
        .row.d-flex.justify-content-center
          .col-lg-9
            .cajon.color_cajon_green.p-4
              p Por sus diferentes posibilidades, llegando hasta lo estético, es el porqué se hace imprescindible el procesador de texto, permitiendo incluso editar fotografías, tablas y cuadros, además de las funciones propias como resaltar, subrayar y cambiar de color a textos, palabras e incluso a párrafos enteros para resaltar puntos importantes en los documentos.

    p Los procesadores de texto más conocidos y de fácil acceso son:

    .row.mb-5 
      .col-lg-12.mb-5
        SlyderF(columnas='col-lg-6 col-xl-4')(data-aos='zoom-in')
          .tarjeta.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(
                  src='@/assets/template/tema3/slider01/t3-s1.svg',
                  alt='AvatarTop'
                )
            h4.text-center 
              i Microsoft Word
            p.text-center El procesador de palabras por excelencia para los computadores que tienen sistema operativo&nbsp;
              i Windows.

          .tarjeta.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(
                  src='@/assets/template/tema3/slider01/t3-s2.svg',
                  alt='AvatarTop'
                )
            h4.text-center 
              em Apache OpenOffice Writer
            p.text-center Procesador de texto que forma parte de la 
              em suite 
              | de código abierto&nbsp;
              em OpenOffice.

          .tarjeta.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(
                  src='@/assets/template/tema3/slider01/t3-s3.svg',
                  alt='AvatarTop'
                )
            h4.text-center 
              i Abiword
            p.text-center Este procesador de palabras forma parte de las herramientas de&nbsp;
              i LibreOffice.

          .tarjeta.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(
                  src='@/assets/template/tema3/slider01/t3-s4.svg',
                  alt='AvatarTop'
                )
            h4.text-center 
              i Google Docs
            p.text-center Para los usuarios de&nbsp;
              i Google,
              |
              | este es su procesador de texto en la nube.

          .tarjeta.color-acento-contenido.p-4.h-100
            .row.justify-content-center.mb-3
              .col-8
                img(
                  src='@/assets/template/tema3/slider01/t3-s5.svg',
                  alt='AvatarTop'
                )
            h4.text-center 
              i Word Online
            p.text-center Para usuarios de&nbsp;
              i Microsoft, Word&nbsp;
              | en la nube desde&nbsp;
              i OneDrive.

    p Las ventajas y desventajas de los procesadores de texto son:
    .row.d-flex.justify-content-center.mb-5
      .col-lg-9
        .row
          .col-lg-6.mb-5
            .cajon.color_cajon_tema_3_1.p-4.altura_cajon_tema_3_1
              .row
                .col-lg-12.col-12
                  strong Ventajas
                .col-lg-12.col-12
                  ul
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Permitir editar el contenido fácilmente.

                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Utilizar un corrector ortográfico.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Trabajar con distintas imágenes.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Ahorrar insumos como papel, tinta, entre otros.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Conceder la posibilidad de trabajar con trabajos más profesionales.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Compartir la información generada sin complicaciones.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Son sencillos al momento de trasladar y editar.

          .col-lg-6.mb-5 
            .cajon.color_cajon_tema_3_2.p-4.altura_cajon_tema_3_1
              .row
                .col-lg-12.col-12
                  strong Desventajas
                .col-lg-12.col-12
                  ul
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | El contenido ya publicado estará propenso a sufrir de plagio.

                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Al presentarse fallas de luz se puede perder la información que ha sido grabada.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Los archivos pueden llegar a dañarse o en su defecto, no guardarse.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | Requiere de un dispositivo electrónico para funcionar.
                    li 
                      i.fas.fa-check.color_check_t3
                      |
                      | El programa&nbsp;
                      i Word
                      |
                      | es costoso.

    p Los procesadores de texto tienen un conjunto de características o funciones básicas como son:
    .row.mb-5 
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo='Pegar')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s1.png',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Permite añadir textos o imágenes que hayan sido removidos o copiados desde cualquier otra parte del documento o de un documento externo.
        .py-3.py-md-4(titulo='Formato')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s2.png',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Permite especificar la página, margen y su tamaño. También aplica el tipo de fuente, color, negritas, itálicas, entre otras.
        .py-3.py-md-4(titulo='Buscar y reemplazar')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(src='@/assets/template/tema3/slider02/t3-s3.png', alt='Texto que describa la imagen')

            .col-md-8
              p Permite encontrar caracteres y palabras específicas dentro del documento, además de poder sustituirlas por otras.
        .py-3.py-md-4(titulo='Columna y tabla')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s4.png',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Permite crear, manipular y dar un formato a columnas y tablas.
        .py-3.py-md-4(titulo='Fusionar correo')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s5.png',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Permite realizar cartas y documentos específicos para ser almacenados en una base de datos.
        .py-3.py-md-4(titulo='Administrar archivos')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a.img-t(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s6.jpg',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Con esta función se almacenan, se accede, mueven y eliminan archivos de la computadora.
        .py-3.py-md-4(titulo='Impresión')
          .row
            .col-md-4.mb-4.mb-md-0
              img.img-a(data-aos='zoom-in')(
                  src='@/assets/template/tema3/slider02/t3-s7.png',
                  alt='Texto que describa la imagen'
                )

            .col-md-8
              p Produce una copia en papel de un archivo que haya sido almacenado en computadora de forma electrónica.

    .row.mb-5 
      .row.d-flex.justify-content-center
        .col-lg-10
          .cajon.color_cajon_tema_3_1.p-4
            p Una de las grandes posibilidades y versatilidades de los procesadores de texto, es que se puedan guardar varias versiones de un mismo documento a fin de ser analizadas y comparadas.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Creación de presentaciones y diapositivas

    .row.mb-5 
      .col-lg-12
        p Una buena presentación es fundamental hoy en día, las fotografías escogidas, el diseño, el fondo de la presentación, la musicalización, la narrativa que apoya la imagen, los efectos, los colores, el contexto son las características que bien utilizadas y combinadas hacen que se cierre un negocio, que se apruebe un proyecto o que se apruebe igualmente una tesis de grado; también es importante en el momento de realizar soportes y defensas de todo tipo de documentos que se deban presentar ante un público, con el fin de convencer, interesar o vender un producto o servicio, tangible o intangible; en este espacio es también importarte mostrar creatividad e innovación.
      .col-lg-12
        p Algunas aplicaciones de presentación de diapositivas #[em (slides)], son:

      .col-lg-12
        TabsC.color-acento-contenido
          .py-3.py-md-4(titulo='PowerPoint')
            .row
              .col-md-4.mb-4.mb-md-0
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema3/slider03/t3-s1.png',
                    alt='Texto que describa la imagen'
                  )

              .col-md-8                
                p Aplicación por excelencia de Microsoft viene en el paquete de Office se puede editar imagen, voz, video, música, es muy versátil al brindar gran variedad de plantillas o simplemente construyendo la propia desde cero, es muy fácil de trabajar, solo se requiere imaginación.
          .py-3.py-md-4(titulo='Prezi')
            .row
              .col-md-4.mb-4.mb-md-0
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema3/slider03/t3-s2.png',
                    alt='Texto que describa la imagen'
                  )

              .col-md-8
                p Es de las más conocidas para crear, desde cualquier lugar, presentaciones con una gran visualización, pudiendo desarrollar mapas interactivos y hasta efectos de <i>zoom</i> en tres dimensiones, para mostrar recorridos únicos con solo tener una conexión a Internet, aunque también cuenta con aplicación para Windows y dispositivos de Apple.
          .py-3.py-md-4(titulo='Emaze')
            .row
              .col-md-4.mb-4.mb-md-0
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema3/slider03/t3-s3.png',
                    alt='Texto que describa la imagen'
                  )

              .col-md-8
                p Cuenta con una característica muy llamativa y es que se puede añadir instrucciones de voz para controlar de modo muy sutil y original la presentación que se expone al tiempo que se habla.
          .py-3.py-md-4(titulo='PowToon')
            .row
              .col-md-4.mb-4.mb-md-0
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema3/slider03/t3-s4.png',
                    alt='Texto que describa la imagen'
                  )

              .col-md-8
                p Permite realizar videos propios, musicalizar, animar o caricaturizar las presentaciones, es gratuito.
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
