<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="flip-up") Los fundamentos de programación abarcan los principios básicos para desarrollar #[i software], incluyendo conceptos como variables, algoritmos y control de flujo, así como la diferencia entre lenguajes compilados (que se traducen antes de ejecutarse) e interpretados (que se ejecutan línea por línea).
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Adicionalmente, los entornos de desarrollo permiten escribir y organizar código mediante herramientas como editores o IDEs, junto con la instalación y configuración necesarias y la creación de proyectos; en JavaScript, la sintaxis define el uso de tipos de datos, operadores, expresiones, funciones y comentarios, así como estructuras de selección (if, switch), repetición (for, while) y salto (break, continue, return).
    p.mb-4(data-aos="flip-up") Finalmente, las estructuras de datos y algoritmos permiten organizar y procesar información mediante vectores, matrices, registros, métodos de ordenamiento y técnicas de búsqueda; finalmente, la depuración y manejo de errores incluye la identificación de fallas de sintaxis y lógica, así como el uso de mecanismos como try-catch para controlar excepciones durante la ejecución del programa.
    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/S2n1fsyxr4U" title="Conceptos básicos de programación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
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
