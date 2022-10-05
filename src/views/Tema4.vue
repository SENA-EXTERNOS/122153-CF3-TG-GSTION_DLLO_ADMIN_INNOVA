<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Navegación en la 
       i web

    .row.mb-5
      .col-lg-12
        p Antes de comenzar a definir qué es la navegación en la 
          i web,
          |
          span.color_texto_acento observe el siguiente video.

    .row.mb-5
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

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11
        .cajon.color_cajon_green.p-4
          p Cada momento se está doblando la información, hoy existe más información en la 
          i web 
          |  que ayer y mañana más que hoy.

    .row.mb-5
      .col-md-6
        figure
          img(src='@/assets/template/tema4/t4-i1.png')

      .col-md-6
        span.color_texto_acento ¿Y qué es el navegador?
        | Es el
        i  software
        |  que permite ingresar a internet, realizar búsquedas, dirigirse a una página 
        i web 
        |  determinada y ver sus contenidos: textos, imágenes, videos, anuncios publicitarios, etc.
        br
        br
        p Los navegadores se pueden descargar e instalar gratuitamente; los más conocidos son
        i Google Chrome, Opera, Safari, Microsoft Edge y Mozilla Firefox.
        | Ya dentro del navegador, se puede acceder a la información a través de los buscadores, los más conocidos son:
        i Google, Yahoo o Bing.

    .row.mb-5
      .col-lg-12
        p Conozca algunos términos importantes relacionados con la navegación en la 
          i web.

      .col-lg-12.mb-5
        .tarjeta.tarjeta_lineatiempot4.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo='URL')
              .col-md-6.mb-4.mb-md-0
                p Son las siglas en inglés de
                  i  Uniform Resource Locator
                  | (Localizador Uniforme de Recursos). Esta es la dirección que posee un sitio en la 
                  i web, 
                  |  similar a cuando se busca una dirección en una ciudad en el mundo.
                br
                p Las URL se encuentran en la parte superior de la franja de los navegadores.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t1.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='Hipervínculos')
              .col-md-6.mb-4.mb-md-0
                p Es una conexión entre diferentes páginas o entre distintas secciones de una misma página. Los hipervínculos se presentan en varias formas: fragmentos de texto subrayados y de color azul, una imagen, un logotipo o una ilustración.
                br
                p Sin embargo, sin importar la forma en que se presenta en la pantalla, todos los hipervínculos tienen en común el hecho que, al hacer clic en ellos, lo llevarán a un lugar distinto del sitio web donde se encuentra. Es decir, lo enlazarán a otros contenidos.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t2.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='Cookies')
              .col-md-6.mb-4.mb-md-0
                p Las 
                  i cookies 
                  | (galletas) son pequeños bloques de datos creados por un servidor 
                  i web 
                  |  y colocados por el navegador en la computadora, teléfono móvil u otro dispositivo que se use para ingresar a 
                  i internet.
                br
                p La función de las 
                 i cookies
                 |  es recabar información sobre la identidad del usuario en la 
                 i web 
                 |  y sus preferencias de navegación. De este modo, la siguiente vez que regrese a una de las páginas favoritas, el sistema sabrá quién se trata y recordará los datos del usuario sin que tenga que ingresarlo nuevamente; también recordará cuáles secciones de esa página 
                 i web
                 |  son las que más fueron de interés y mostrará publicidad más afín a los intereses del usuario.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t3.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='Favoritos e historial de navegación en la web')
              .col-md-6.mb-4.mb-md-0
                p Todos los navegadores ofrecen la opción de “Favoritos”. Se trata de un botón, normalmente situado a un lado de la barra de direcciones URL, con el cual se puede crear un acceso directo a las páginas web favoritas o redes sociales del usuario.
                br
                p Ya no será necesario escribir la URL o colocar un término de búsqueda, bastará con hacer clic en el ícono de la página situado en la carpeta de favoritos.
                br
                p Igualmente, todos los navegadores ofrecen la posibilidad de revisar el “Historial de navegación”, que es una lista con todas las páginas web que has visitado dentro de un lapso específico de tiempo.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t4.png',
                    alt='Texto que describa la imagen'
                  )
</template>

<script>
export default {
  name: 'Tema4',
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
