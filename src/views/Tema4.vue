<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Navegación en la web

    p.mb-5 Antes de comenzar a definir qué es la navegación en la web, observe el siguiente video:

    .row
      .col-12.mb-5
        figure(data-aos='zoom-in')
          .video
            iframe(
              width='560',
              height='315',
              src='https://www.youtube.com/embed/3l8ehmAcQ-E',
              title='YouTube video player',
              frameborder='0',
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen
            )

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11
        .cajon.color_cajon_green.p-4
          p.mb-0 Cada momento que pasa, la información se está duplicando y, en la web, hoy existe más información que ayer y mañana habrá más que hoy.

    .row.mb-5
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema4/t4-i1.png')

      .col-md-6
        p.color_texto_acento ¿Qué es un navegador? Es el <i>software</i> que permite ingresar a Internet, realizar búsquedas, dirigirse a una página web determinada y ver sus contenidos: textos, imágenes, videos, anuncios publicitarios, etc.
        p.color_texto_acento Los navegadores se pueden descargar e instalar gratuitamente; los más conocidos son Google Chrome, Opera, Safari, Microsoft Edge y Mozilla Firefox. Una vez ubicados dentro del navegador, se puede acceder a la información, a través de los buscadores, de los cuales los más conocidos son: Google, Yahoo o Bing.


    p.mb-5 Entendamos algunos términos importantes relacionados con la navegación en la web. 

    .row
      .col-lg-12.mb-5
        .tarjeta.tarjeta_lineatiempot4.p-4
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo='URL')
              .col-md-6.mb-4.mb-md-0
                p Son las siglas de Localizador Uniforme de Recursos, (<i>Uniform Resource Locator</i>). Las siglas URL se refieren a la dirección que posee un sitio en la web, similar a cuando se busca una dirección en cualquier ciudad del mundo.
                p Las URL se encuentran en la parte superior de la franja de los navegadores.


              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t1.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='Hipervínculos')
              .col-md-6.mb-4.mb-md-0
                p Se fundamenta en una conexión entre distintas páginas o variadas secciones de una misma página. Los hipervínculos se presentan de varias formas: fragmentos de texto subrayados con color azul, una imagen, un logotipo, o una ilustración, entre otros.
                p Sin embargo, sin importar la forma en que se presentan en la pantalla, todos los hipervínculos tienen en común el hecho que, al hacer clic en ellos, nos desplazan a un lugar diferente del sitio web, donde originalmente se encuentran. Es decir, se enlazan a otros contenidos.


              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t2.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='<em>Cookies</em>')
              .col-md-6.mb-4.mb-md-0
                p Las <i>cookies</i> (galletas) son pequeños bloques de datos, creados por un servidor web y colocados por el navegador en la computadora, teléfono móvil o cualquier otro dispositivo que se utilice para ingresar a la Internet.
                p La función de las <i>cookies</i> es la de recabar información sobre la identidad del usuario en la web y sus preferencias de navegación. De este modo, la siguiente vez que se retorne a una de las páginas favoritas, el sistema sabrá de quién se trata y recordará los datos del usuario sin que tenga que ingresarlos nuevamente; también recordará cuáles secciones de esa página web fueron las que más interés despertaron y desplegará publicidad más afín con los intereses del usuario.


              .col-md-6
                figure(data-aos='zoom-in')
                  img(
                    src='@/assets/template/tema4/lineatiempo/t4-t3.png',
                    alt='Texto que describa la imagen'
                  )

            .row(titulo='Favoritos e historial de navegación en la web')
              .col-md-6.mb-4.mb-md-0
                p Todos los navegadores ofrecen la opción de “Favoritos”. Se trata de un botón, normalmente situado a un lado de la barra de direcciones URL, con el cual se puede crear un acceso directo a las páginas web preferidas o redes sociales del usuario.
                p No será necesario escribir la URL o colocar un término de búsqueda; bastará con hacer clic en el ícono de la página, situado en la carpeta de favoritos.
                p Igualmente, todos los navegadores ofrecen la posibilidad de revisar el “Historial de navegación”, que es una lista con todas las páginas web que el usuario ha visitado, durante un lapso específico de tiempo.


              .col-md-6
                figure(data-aos='zoom-in')
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
