<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda de manera integral los fundamentos de la programación, iniciando con los conceptos básicos y la comprensión de los lenguajes compilados e interpretados. Posteriormente, se estudian los entornos de desarrollo, la instalación y configuración del ambiente de trabajo y la creación de proyectos, estableciendo una base sólida para la codificación. A continuación, se profundiza en la sintaxis y las estructuras de programación en JavaScript, incluyendo tipos de datos, operadores, funciones, estructuras de control, repetición y salto, que permiten construir soluciones lógicas y estructuradas. Asimismo, se introducen las estructuras de datos y los algoritmos básicos de ordenamiento y búsqueda, aplicados a diferentes tipos de información. Finalmente, el componente desarrolla habilidades para la depuración de código, la identificación de fallas de sintaxis y lógica, y el manejo de errores y excepciones, fortaleciendo la capacidad de crear programas confiables, eficientes y mantenibles.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un mapa conceptual que organiza de forma progresiva los fundamentos de la programación, iniciando con los conceptos básicos y los tipos de lenguajes. Se articulan los entornos de desarrollo y la configuración de proyectos con la sintaxis y las estructuras de programación en JavaScript, destacando el manejo de datos, funciones y estructuras de control. Asimismo, se integran las estructuras de datos y los algoritmos básicos de búsqueda y ordenamiento, finalizando con la depuración, la identificación de fallas y el manejo de errores, lo que permite comprender la relación entre los distintos temas y su aplicación coherente en el desarrollo de programas funcionales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
