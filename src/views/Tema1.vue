<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Teoría general de sistemas y sistemas de información

    .row.mb-5(titulo='Teoría general de sistemas y sistemas de información')
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema1/t1-i1.jpg')

      .col-md-6
        p Se define como sistema todo arreglo que tenga una entrada, un proceso y una salida, el arreglo puede estar conformado por personas o por otros sistemas.
        |
        | La teoría de los sistemas ha cobrado mucho valor y auge en las últimas cinco décadas (años 70´s aproximadamente), cuando ya organizacionalmente hemos entrado a analizar los procesos, los procedimientos, las funciones, o las disposiciones de los departamentos en las empresas. Se ha hablado mucho de la teoría de los sistemas en cuanto a la estructura de distribución poblacional, organizacional, e incluso desde el comportamiento que nosotros tenemos socialmente. A diario vemos disposiciones de sistemas muy eficientes que funcionan excelentemente y subsistemas que están involucrados dentro de unos sistemas mucho más ambiciosos, mucho más elaborados, básicamente se tienen también sistemas muy sencillos que funcionan adecuada y eficientemente útiles.

    .row.d-flex.justify-content-center.mb-5
      .col-lg-10
        .cajon.color_cajon_green.p-5
          p Las características de los sistemas son las siguientes:
          br
          ul
            li.mb-2 
              i.fas.fa-check.color-icon-check
              |
              | Deben tener entrada(s), proceso(s) y salida(s).
            li.mb-2 
              i.fas.fa-check.color-icon-check
              |
              | Cada elemento debe guardar relación con otros elementos o sistemas.
            li.mb-2 
              i.fas.fa-check.color-icon-check
              |
              | Los efectos de los subsistemas son interdependientes del sistema total.
            li.mb-0
              i.fas.fa-check.color-icon-check
              |
              | Todo sistema es un conjunto, pero no todo conjunto es un sistema.

    .row.mb-5
      .col-md-6.mb-5
        p Para clasificar los sistemas existen varios criterios de acuerdo a la necesidad que se tenga y a las características comunes por las cuales necesitemos agrupar, como propiedades específicas y características de uso, características de comportamiento, características de funcionalidad que sean comunes y exclusivas de los subgrupos o grupos seleccionados; estas características deben definir el grupo, y a esto se le puede llamar sistemas.
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema1/t1-i2.jpg')

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Sistemas de información (SI)
    .row
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema1/t1-i3.jpg')

      .col-md-6.mb-5
        p El sistema de información son todas las herramientas, métodos y procedimientos, que dan orden, control y ajustes para ser procesados fácil y rápidamente.
        |
        | Basándose en la interconexión de sus componentes, los sistemas de información, buscan un propósito informativo planeado y estructurado, como puede ser el procesamiento estadístico, compilar información comercial (CRM) o simplemente bases de datos de clientes activos y potenciales.

      .col-md-12.mb-5.mt-5
        p Existen diferentes formas especializadas o aplicadas de SI, dependiendo del campo puntual y de las funciones específicas que se esperan de cada uno. Algunas de ellas son:

      .col-md-12.mb-5
        .tarjeta.tarjeta--green.p-5
          SlyderA(tipo='b')(data-aos='zoom-in')
            .row
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información por estructura organizacional
                br
                br
                | La información es el sistema nervioso de las organizaciones, logrando que llegue al sitio adecuado, en el momento adecuado y con los requerimientos de información solicitados en el preciso momento, es un elemento clave para la oportuna, clara y concisa toma de decisiones, bajando la probabilidad de falla.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s1.jpg',
                    alt='Texto que describa la imagen'
                  )

            .row.justify-content-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información por área funcional
                br
                br
                | Es toda la información que llega específicamente a cada área funcional, busca brindar herramientas de “sistemas informáticos” y “sistemas informativos” a fin de lograr objetivos departamentales o por áreas funcionales de trabajo en la organización.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s2.jpg',
                    alt='Texto que describa la imagen'
                  )
            .row.justify-content-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información en producción y fabricación
                br
                br
                | Son los que se encargan que recolectar datos (cantidades de materia prima en inventario, inventario en proceso, inventario de producto final, costos de cada uno de los&nbsp;
                i stocks&nbsp;
                | en planta), mediante los programas de Planificación de recursos empresariales, ERP, y Técnica de revisión y evaluación de programas, PERT, entre otros. La información en planta es de suma importancia, para saber en qué momento se hacen requisiciones de materias primas e insumos, a qué puestos de trabajo se deben llevar y cuánto puede costar por unidad en producto en proceso. La información también debe dar cuota de los tiempos y requerimientos de recurso humano y maquinaria asociada, a cada proceso.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s3.jpg',
                    alt='Texto que describa la imagen'
                  )
            .row.justify-content-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información en administración y financiera
                br
                br
                | La información que aquí llega, cruza con todos los departamentos, en costos de generales y específicos en producción, los presupuestos de compras y adquisiciones, costos de nóminas directas e indirectas, costos de servicios de “tercerización” si existen, costos de publicidad y&nbsp;
                i marketing
                | , costos de todas las áreas de apoyo y sistemas de gestión. Aquí llega y se cruza la información del sistema financiero de la organización con los bancos, proveedores, clientes y otros interesados, se generan transacciones en diferentes direcciones.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s4.jpg',
                    alt='Texto que describa la imagen'
                  )
            .row.justify-content-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información en&nbsp;
                  i marketing
                br
                br
                | La información puntual de los clientes se gestiona desde esta área, aquí se proyectan los prospectos, y se lleva el seguimiento de los actuales. El
                |
                i marketing&nbsp;
                | relacional proporciona una plataforma de seguimiento, dicha plataforma brinda información sobre eventos puntuales que ha suministrado los clientes, cruza la información con ventas y otras áreas con objeto de “perfilar” al cliente y desarrollar el producto de acuerdo a estas necesidades; igualmente a través de información de tipo primario se obtiene del mercado los cambios y las nuevas tendencias en los gustos relacionados con el producto ofertado.

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s5.jpg',
                    alt='Texto que describa la imagen'
                  )
            .row.justify-content-center.my-lg-4
              .col-md-6.mb-4.mb-md-0
                strong Sistema de información desde RRHH
                br
                br
                | Es importante tener un banco de información de todos los colaboradores, desde las hojas de vida, el comportamiento dentro de la organización, hasta de la composición familiar y social de cada uno de ellos. El perfil de los colaboradores debe estar alineado con la misión organizacional, la información suministrada por mismos colaboradores y otros interesados (psicólogos organizacionales, médicos laborales, profesionales en recursos humanos).

              .col-md-6
                figure
                  img(
                    src='@/assets/template/tema1/slider01/t1-s6.jpg',
                    alt='Texto que describa la imagen'
                  )

      .col-12.mb-5(data-aos='zoom-in')
        .row.d-flex.justify-content-center
          .col-lg-9
            .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
              .bloque-texto-g__img(
                :style='{ "background-image": `url(${require("@/assets/template/tema1/t1-i4.jpg")})` }'
              )
              .bloque-texto-g__texto.px-4.py-5
                p.mb-0 Existen otros ejemplos de información que, de acuerdo con el manejo que se les otorgue y cómo se representen, por lo general, son transversales a las áreas funcionales y organizacionales.

      .col-12.mb-5
        p Conozcamos cada uno de estos modelos:
      .col-12.mb-5
        .row 
          .col-lg-6.col-md-6.col-12.mb-3
            .crd.crd--avatarHorizontal.crd--complete.py-4
              .row.align-items-center
                .col-auto
                  figure(data-aos='zoom-in')
                    img.img100(
                      src='@/assets/template/tema1/cards01/t1-c1.svg',
                      alt='alt'
                    )
                .col
                  h5 Sistemas de Procesamiento de Transacciones (TPS)
                  p Conocidos como sistemas de gestión operativa, recopilan la información pertinente a las transacciones de la organización, es decir, de su funcionamiento.
          .col-lg-6.col-md-6.col-12.mb-3
            .crd.crd--avatarHorizontal.crd--complete.py-4
              .row.align-items-center
                .col-auto
                  figure(data-aos='zoom-in')
                    img.img100(
                      src='@/assets/template/tema1/cards01/t1-c2.svg',
                      alt='alt'
                    )
                .col
                  h5 Sistemas de Información Ejecutiva (EIS)
                  p Monitoriza las variables gerenciales de un área específica de la organización, a partir de la información interna y externa de la misma.
          .col-lg-6.col-md-6.col-12.mb-3
            .crd.crd--avatarHorizontal.crd--complete.py-4
              .row.align-items-center
                .col-auto
                  figure(data-aos='zoom-in')
                    img.img100(
                      src='@/assets/template/tema1/cards01/t1-c3.svg',
                      alt='alt'
                    )
                .col
                  h5 Sistemas de Información Gerencial (MIS)
                  p Contemplan la información general de la organización y la comprenden como un todo.
          .col-lg-6.col-md-6.col-12.mb-3
            .crd.crd--avatarHorizontal.crd--complete.py-4
              .row.align-items-center
                .col-auto
                  figure(data-aos='zoom-in')
                    img.img100(
                      src='@/assets/template/tema1/cards01/t1-c4.svg',
                      alt='alt'
                    )
                .col
                  h5 Sistemas de soporte de decisiones (DSS)
                  p Orientados al procesamiento de información intra y extra organizacional, para el apoyo en la conducción de la empresa.

    h3.mb-4
      i.fas.fa-square.cac.me-3
      | Funciones

    p Son muchas las funciones que realizan los sistemas de información en la actualidad, dada cantidad de datos que fluyen en diferentes vías y en todo momento.
    p Estas funciones se pueden agrupar en cuatro fases esenciales:

    TabsC.color-acento-contenido.mb-5(data-aos='zoom-in')
      .py-3.py-md-4(titulo='Captar y recolectar datos')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/pestaña01/t1-p1.jpg')

          .col-md-6
            h4 Captar y recolectar datos
            p Esta función es de suma importancia por ser la primera fase, donde se recolecta la información desde el exterior o desde el interior. Esta información se filtra inicialmente entre la que sirve para los propósitos organizacionales y la que realmente no es útil a estos propósitos. Otro aspecto importante en esta fase de filtración es que, de acuerdo con los protocolos de seguridad, se distingue entre información segura y no segura.

      .py-3.py-md-4(titulo='Almacenar datos')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/pestaña01/t1-p2.jpg')

          .col-md-6
            h4 Almacenar datos
            p Cuando se tiene la información depurada lista, se debe guardar en algún lugar, se puede almacenar en un repositorio o archivo central con acceso restringido a usuarios por áreas de interés o de uso general. También se puede almacenar directamente en los archivos de los departamentos de interés con acceso a usuarios en estas áreas específicas, identificándose con claves y usuarios particulares. En este estado de la información también se hace importante llevar seguridad de uso de información a través de controles de seguridad informática en los dispositivos y usuarios.

      .py-3.py-md-4(titulo='Tratamiento de la información')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/pestaña01/t1-p3.jpg')
          .col-md-6
            h4 Tratamiento de la información
            p Cuando se depura la información, transformándola en información de interés, que sea significativa, que sea individual al usuario que la necesita y acorde a las necesidades, se ha llegado a la tercera fase, el tratamiento de la información; en esta instancia se ha “filtrado” lo necesario para que sea apropiada y correcta para los usuarios que la requieran. Este proceso, por ser masivo, generalmente lo realizan medio informáticos y&nbsp;
              i software&nbsp;
              | especiales, para reducir los costos de proceso.

      .py-3.py-md-4(titulo='Distribución')
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/pestaña01/t1-p4.jpg')
          .col-md-6
            h4 Distribución
            p En este último proceso, se realiza el análisis pertinente con el usuario que interpreta la información para la toma final de decisiones. Esta información, a pesar de ser segmentada, se recomienda llegue a diferentes departamentos a fin de que las decisiones que se tomen utilizando la información suministrada sea consensuada y en equipo.

    h3 Seguridad de la información
    .row.mb-5
      .col-md-6
        figure(data-aos='zoom-in')
          img(src='@/assets/template/tema1/t1-i5.jpg')
      .col-md-6
        p La seguridad de la información, se refiere a la confidencialidad, la integridad y la disponibilidad de la información y los datos importantes para la organización, independientemente del formato que tengan. Este formato puede ser
        |
        ul
          li 
            i.fas.fa-check.color_texto_acento
            |
            | Electrónico
          li 
            i.fas.fa-check.color_texto_acento
            |
            | Papel.
          li 
            i.fas.fa-check.color_texto_acento
            |
            | Audio y video, etc.
          p
          |
          sapan.color_texto_acento Recuerde:
          |
          | las organizaciones públicas, no gubernamentales y privadas, tienen grandes cantidades de información que debe ser tratada, administrada, gestionada, controlada y asegurada.

    .row.d-flex.justify-content-center.mb-5
      .col-lg-11
        .cajon.color_cajon_tema1_2.p-4
          p.mb-0 Se puede decir que la seguridad de la información se refiere a todas las practicas, técnicas, medidas, acciones y controles que se emplean, para salvaguardar y mantener seguros los datos suministrados, adquiridos (bajos las normas vigentes de protección de datos), compartidos y enviados, para que fluyan sin sufrir modificaciones que afecten su veracidad, así como también, la pérdida parcial o total de estos.

    .row.mb-5
      .col-md-12
        p El siglo XXI trajo consigo una serie de variantes y ruptura de paradigmas que, dado el fortalecimiento de la utilización y utilidad que prestan los equipos móviles, el uso de la web y la internet, generando gran cantidad de información y datos en diferentes vías, igualmente trajo problemas de uso de tanta información, básicamente para depurarla y tratarla con el fin que sea verídica, afín y sobre todo no fraudulenta. La información se distorsiona cada vez que se comparte y recibe desde diferentes servidores (emisores), agregando o quitando parte o total del sentido de esta en cada reenvío.
        br
        p Por los motivos anteriormente descritos, la seguridad de la información busca lograr estos principios:

    .row.justify-content-center.px-5(data-aos='zoom-in')
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.p-4.altura_card_t_1
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/template/tema1/cards02/t1-c1.png', alt='')
          h2.text-center Integridad
          p.text-center Se refiere a que la información no pierda veracidad, o sea, que permanezca real a su esencia inicial, y para esto los equipos con que se procesa la información, deben garantizar que no habrá variación alguna de esta. Si existe variación de la información debe ser autorizada y valorada por algún responsable y asumir dichos cambios para evitar manipulaciones.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.p-4.altura_card_t_1
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/template/tema1/cards02/t1-c2.png', alt='')
          h2.text-center Confidencialidad
          p.text-center La información administrada debe ser salvaguarda del uso indebido y no autorizado de datos de vital importancia organizacional, como información clave para el éxito organizacional o datos privados financieros, así como datos particulares que hayan sido suministrados, para que no lleguen a terceros no autorizados. Igualmente, los equipos deben asegurar que no se filtre dicha información.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.p-4.altura_card_t_1
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/template/tema1/cards02/t1-c3.png', alt='')
          h2.text-center Disponibilidad
          p.text-center La información debe estar disponible 24/7 los 365 días del año a quienes tengan autorización de uso y gestión de la información almacenada. Este aspecto es clave en el éxito organizacional en la actualidad.
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
