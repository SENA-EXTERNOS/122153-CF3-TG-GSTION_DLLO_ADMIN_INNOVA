<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row 
      .col-lg-10.col-12 
        .titulo-sexto.color-acento-botones.mb-5
          h5 Gestión del desarrollo administrativo e innovación
          br
          span Síntesis: Introducción a la administración
      .col-lg-2.d-none.d-lg-block
        img(src="@/assets/template/logo-sena-naranja.svg", height="60"  alt="alt")
        
    p.mb-5 A continuación, encontrará una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/template/sintesis/s-1.jpg", alt="alt")

    .col-md-3.mx-auto
          a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Sintesis.pdf')" target="_blank" type="application/pdf")
            span Descargar 
            i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Sintesis',
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
