<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Entornos de desarrollo y configuración del proyecto
    
    p En la ingeniería de #[i software], los entornos de trabajo y la correcta configuración de un proyecto son fundamentales para crear aplicaciones robustas, mantenibles y escalables. Estas plataformas no solo facilitan la escritura de código, sino que incorporan herramientas para depurar, probar, administrar dependencias y gestionar versiones. Una configuración adecuada asegura el funcionamiento coherente de los componentes en contextos como prueba, implementación y producción.
    p.mb-4 Un entorno de desarrollo es el conjunto de herramientas que permiten a los programadores crear #[i software] de forma eficiente. Estos entornos pueden variar desde editores simples hasta plataformas altamente integradas; encontrando:

    .row.justify-content-center.BG02.p-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema2/img1.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-6 col-xl-6")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema2/img2.svg", alt="alt").img100.m-auto
            h5.text-center IDE (Entorno de Desarrollo Integrado)
            p.text-center.mb-0 Incluyen herramientas completas como depuradores, compiladores y gestión de proyectos (IntelliJ, Eclipse, Visual Studio).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema2/img3.svg", alt="alt").img100.m-auto
            h5.text-center Editores de código
            p.text-center.mb-0 Son ligeros y extensibles mediante plugins (Visual Studio Code, Sublime Text).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema2/img4.svg", alt="alt").img100.m-auto
            h5.text-center Entornos en la nube
            p.text-center.mb-0 Permiten programar desde cualquier lugar sin instalar #[i software] (GitHub Codespaces, Replit).
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema2/img5.svg", alt="alt").img100.m-auto
            h5.text-center Terminales y CLI
            p.text-center.mb-0 Interfaces basadas en comandos para automatización y control avanzado.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-5
                img(src="@/assets/curso/temas/tema2/img6.svg", alt="alt").img100.m-auto
            h5.text-center Herramientas de depuración
            p.text-center.mb-0 Permiten identificar errores paso a paso durante la ejecución.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Entornos de codificación

    p.mb-4 Constituyen un componente esencial en el desarrollo de #[i software] moderno. Proporcionan un conjunto de herramientas que permiten a los desarrolladores escribir, analizar, depurar y mantener código de forma eficiente. La elección adecuada de un entorno impacta directamente en la productividad, la calidad del #[i software] y la colaboración en equipos de desarrollo.

    .row.justify-content-center.align-items-center.mb-2
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6
            .tarjeta-bg6.p-4
              p.mb-4 Dentro de sus funcionalidades clave se destacan:
              ul.lista-ul
                li
                  i.fas.fa-cloud-arrow-down
                  | Resaltado de sintaxis que mejora la legibilidad.

                li
                  i.fas.fa-cloud-arrow-down
                  | Autocompletado inteligente que reduce errores.

                li
                  i.fas.fa-cloud-arrow-down
                  | Depuración paso a paso.

                li
                  i.fas.fa-cloud-arrow-down
                  | Integración con control de versiones.

          .col-lg-6
            figure
              img(src="@/assets/curso/temas/tema2/img7.png", alt="alt").img100.m-auto

        p.mb-4 En cuanto al soporte para extensiones, estas funcionalidades permiten optimizar el proceso de desarrollo, reducir errores y mejorar la comprensión del código. A continuación, una breve relación de esta codificación:
    
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3.
              span Entornos de codificación
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12
            .tabla-a.color-acento-contenido 
              .tabla-a   
                table
                  thead
                    tr.tarjeta-bg7
                      th Tipo
                      th Ejemplo
                      th Ventajas
                      th Limitaciones
                  tbody
                    tr
                      th.text-center Editor
                      td VS Code
                      td Ligero, rápido
                      td Configurar extensiones.
                    tr
                      th.text-center IDE
                      td IntelliJ
                      td Completo
                      td Mayor consumo.
                    tr
                      th.text-center Nube
                      td Replit
                      td Accesible
                      td Depende de internet.
        p.text-center.mb-4 Sus buenas prácticas en el uso de entornos se dan al momento de:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6.mb-3
            .tarjeta-bg1.p-4
              p.mb-0.text-center Seleccionar el entorno según el tipo de proyecto.
          .col-lg-6.mb-3
            .tarjeta-bg1.p-4
              p.mb-0.text-center Mantener herramientas actualizadas.
          .col-lg-6.mb-3
             .tarjeta-bg1.p-4
              p.mb-0.text-center Utilizar control de versiones.
          .col-lg-6.mb-3
            .tarjeta-bg1.p-4
              p.mb-0.text-center Evitar instalar extensiones innecesarias.
          .col-lg-6.text-center
            .tarjeta-bg1.p-4
              p.mb-0 Documentar la configuración.
        
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Los entornos de codificación influyen directamente en la productividad del desarrollador. Un entorno bien configurado facilita la detección de errores, mejora la organización del código y permite una integración eficiente con otras herramientas del ciclo de desarrollo.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Instalación y configuración del entorno

    p.mb-4 JavaScript es uno de los lenguajes más utilizados en el desarrollo web moderno. Para trabajar de manera eficiente, es fundamental contar con un entorno de codificación correctamente instalado y configurado. Los siguientes son unos pasos necesarios para preparar un entorno profesional de desarrollo en JavaScript:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 a) Instalación de herramientas básicas
        .row.justify-content-center.align-items-center.mb-4
            .col-lg-12
              .bloque-texto-gg.color-primario
                .bloque-texto-gg__texto.p-4
                  ul.lista-ul
                    li
                      i.fas.fa-cloud-arrow-down
                      | Instalar Node.js: esto permite ejecutar JavaScript fuera del navegador.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Instalar npm (gestor de paquetes incluido con Node.js).
                    li
                      i.fas.fa-cloud-arrow-down
                      | Instalar un editor de código como Visual Studio Code.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Instalar Git para control de versiones.

                .bloque-texto-gg__img(
                  :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img9.png')})`}"
                )

        p.mb-4 Node.js es esencial porque proporciona el entorno de ejecución para JavaScript en el servidor. Además, npm permite instalar librerías necesarias para el desarrollo.

        .tarjeta.tarjeta-bg8.p-3(data-aos="zoom-in")
          .row.justify-content-between.align-items-center
            .col-sm-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', width='180', alt='Texto que describa la imagen')
            .col.mb-3.mb-sm-0
              h5.mb-1 Visual Studio Code
              p.mb-0 Como apoyo a este contenido, el siguiente video muestra paso a paso cómo instalar y configurar Java en Visual Studio Code, explicando la preparación del entorno de trabajo y la integración de las herramientas necesarias para comenzar a programar desde el editor.
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=57ekn6xnrqU')" target="_blank")
                span Abrir video
                i.fas.fa-file-video

       
    .BG01.px-5
      .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            figure
              img(src='@/assets/curso/temas/tema2/img11.png', width='180', alt='Texto que describa la imagen')
          .col-lg-5
            .titulo.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
              h5 b) Configuración del entorno
            ul.lista-ul.mb-5
              li
                i.fas.fa-cloud-arrow-down
                | Verificar instalación con comandos: node -v y npm -v.
              li
                i.fas.fa-cloud-arrow-down
                | Configurar variables de entorno si es necesario.
              li
                i.fas.fa-cloud-arrow-down
                | Instalar extensiones en VS Code (ESLint, Prettier, Live Server).
              li
                i.fas.fa-cloud-arrow-down
                | Configurar formato automático de código.
              li
                i.fas.fa-cloud-arrow-down
                | Inicializar proyecto con npm init.
            .titulo.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
              h5 c) Buenas prácticas en JavaScript
            ul.lista-ul.mb-0
              li
                i.fas.fa-cloud-arrow-down
                | Usar ESLint para detectar errores.
              li
                i.fas.fa-cloud-arrow-down
                | Formatear código con Prettier.
              li
                i.fas.fa-cloud-arrow-down
                | Usar control de versiones con Git.
              li
                i.fas.fa-cloud-arrow-down
                | Organizar el proyecto correctamente.
              li
                i.fas.fa-cloud-arrow-down
                | Actualizar dependencias regularmente.
    p Un entorno de JavaScript bien configurado mejora la productividad, permitiendo a los desarrolladores trabajar de manera más eficiente y profesional.
    p.mb-4 Como base de apoyo a los procesos de instalación de JavaScript se presentan las siguientes guías: 
    .tarjeta.tarjeta-bg8.p-3.mb-4(data-aos="zoom-in")
      .row.justify-content-between.align-items-center
        .col-sm-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/img12.svg', width='180', alt='Texto que describa la imagen')
        .col.mb-3.mb-sm-0
          h5.mb-1 JavaScript Windows
          p.mb-0 Este documento presenta una guía sencilla para realizar la descarga manual e instalación de Java en Windows, explicando los pasos básicos para obtener el instalador oficial, ejecutarlo correctamente y verificar que la instalación se haya completado con éxito.
        .col-sm-auto
          a.boton.color-acento-botones(:href="('https://www.java.com/es/download/help/windows_manual_download.html')" target="_blank")
            span Enlace Web
            i.fas.fa-file-code
      
    .tarjeta.tarjeta-bg8.p-3.mb-4(data-aos="zoom-in")
      .row.justify-content-between.align-items-center
        .col-sm-auto.d-none.d-lg-block
          figure
            img(src='@/assets/curso/temas/tema2/img12.svg', width='180', alt='Texto que describa la imagen')
        .col.mb-3.mb-sm-0
          h5.mb-1 JavaScript macOS
          p.mb-0 Este documento relaciona una guía de ayuda sobre instalación y uso de Java en macOS, donde se explica cómo obtener Java para Mac, los requisitos del sistema, las instrucciones para instalarlo y actualizarlo, así como otros aspectos como activar o desinstalar Java y cómo comprobar la versión instalada, todo desde la documentación oficial de Java.com.
        .col-sm-auto
          a.boton.color-acento-botones(:href="('https://www.java.com/es/download/help/java_mac.html')" target="_blank")
            span Enlace Web
            i.fas.fa-file-code

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Creación de proyectos de programación

    p.mb-5 La creación de proyectos requiere de la identificación de requerimientos o requisitos de un sistema de información del cual se describen los servicios que ha de ofrecer, las restricciones asociadas a su funcionamiento; es decir, las propiedades o restricciones que deben estar registradas, determinadas de forma precisa.
    p.mb-5 Los siguientes son tres aspectos informativos a tener en cuenta:
    .BG03.px-5
      SlyderB.tarjeta--fondo3.p-4.mb-4(:datos="datosSlyder")
    
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p A continuación, se presenta una descripción integrada de los elementos clave que conforman la documentación de un proyecto de #[i software], abordando de manera progresiva su definición, desarrollo, implementación y validación:
       
        LineaTiempoE.color-acento-contenido
          .row(titulo="1")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', alt='Texto que describa la imagen')
            .col-lg-9.mb-4.mb-lg-0
              h4  Definición del proyecto de #[i software] 
              p En primer lugar, en la definición del proyecto de #[i software] se debe describir de forma clara la idea general, explicando la funcionalidad principal del sistema de información y el problema que busca resolver. Asimismo, es necesario establecer los objetivos del desarrollo, indicando la necesidad que cubre el sistema, e identificar a los usuarios o entidades que interactuarán con él, junto con el nivel de experiencia del público al que está dirigido el informe.

          .row(titulo="2")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img18.svg', alt='Texto que describa la imagen')
            .col-lg-9.mb-4.mb-lg-0
              h4 Especificación de requerimientos
              p A partir de esta base, la especificación de requerimientos debe detallar las pautas generales que rigen el funcionamiento del proyecto y los requisitos funcionales que describen los servicios, tareas y comportamientos que el sistema debe realizar. De igual manera, se debe aclarar la autoría del #[i software], indicando si se trata de un desarrollo original o si forma parte de un sistema preexistente, además de definir los alcances y limitaciones del sistema en coherencia con los objetivos establecidos.
          
          .row(titulo="3")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img19.svg', alt='Texto que describa la imagen')
            .col-lg-9.mb-4.mb-lg-0
              h4 Procedimientos de desarrollo 
              p Posteriormente, en los procedimientos de desarrollo del sistema de información se describen las herramientas y tecnologías empleadas, tales como entornos de desarrollo integrados, plataformas y lenguajes de programación necesarios para la implementación. Junto con ello, se presenta una planificación general que expone la metodología utilizada y los principales pasos seguidos durante la ejecución del proyecto.
          
          .row(titulo="4")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema2/img20.svg', alt='Texto que describa la imagen')
            .col-lg-9.mb-4.mb-lg-0
              h4 Procedimientos de instalación y prueba 
              p Finalmente, los procedimientos de instalación y prueba deben contemplar los requisitos no funcionales que afectan el desempeño del sistema, como restricciones relacionadas con tiempos de respuesta. Además, se debe incluir una guía sencilla para la obtención e instalación del #[i software], dirigida al nivel de usuario definido previamente, así como las especificaciones técnicas de la plataforma y los entornos requeridos para la prueba y ejecución del sistema.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Arquitectura del sistema
    p Un #[i software] de tamaño pequeño se identifica de la composición de varios módulos o partes interconectados de alguna forma. La especificación de la arquitectura del sistema de información de los cuáles son estas partes; qué rol tienen dentro del #[i software] y la forma en que se organizan e interconectan.
    p.mb-4 La información sobre la arquitectura debe incluir como mínimo:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema2/img21.png', alt='')
      .col-lg-8
        
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Descripción jerárquica")
            p Indica de qué forma se organizan jerárquicamente los componentes del sistema de información; es decir, anotar si los mismos están organizados en paquetes, espacios de nombres o bien si el #[i software] posee una estructura monolítica.
          .row(numero="2" titulo="Diagrama de módulos")
            p Consiste en el diseño un diagrama donde se representan todas las partes que componen el sistema; es decir, qué tipos interacciones intervienen y las relaciones que existen entre estas. Su objetivo consiste en presentar una perspectiva generalizada de la arquitectura y los componentes del sistema, no deberá contener detalles técnicos sobre los módulos o las conexiones entre estos.
          .row(numero="3" titulo="Descripción individual de los módulos")
            p Cada módulo o parte del sistema, requiere una breve descripción del mismo, la cual debería incluir mínimamente cada proceso o tarea que desarrolla:
            
            ul.lista-ul.mb-0
              li.mb-0 #[b • Descripción y propósito]: ¿qué es y qué debería hacer el módulo?
              li.mb-0 #[b • Responsabilidad y restricciones]: ¿cuál es su función dentro del sistema?, ¿qué tareas puede y no puede hacer?
              li.mb-0 #[b • Dependencias]: describir cuales son los requisitos de cada módulo, es decir se debe contestar a preguntas tales como, ¿qué necesita o requiere el módulo para funcionar?, ¿necesita de servicios brindados por otros módulos o por librerías externas?
              li.mb-0 #[b • Implementación]: describir en qué archivo o archivos se encuentra la implementación del módulo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .cajon-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 No es el objetivo de esta sección dar detalles de cómo se realiza la implementación de los módulos, sino únicamente dar una idea generalizada de la existencia de los módulos que hacen parte del sistema.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Diseño del modelo de datos
    p.mb-4 Es donde se deben identificar cuáles son los agentes involucrados en el sistema de información y nombrarlas en un formato de lenguaje agnóstico. El siguiente es uno ejemplo de este lenguaje:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.tarjeta-bg6.p-5
            .row.justify-content-center.mb-4
              .col-3
                figure
                  img(src='@/assets/curso/temas/tema2/img22.svg', alt='Texto que describa la imagen')
              
            h5.text-center Descripción
            p El sistema debe calcular el total de una compra multiplicando el precio de un producto por la cantidad seleccionada.
          .col-md.tarjeta.tarjeta-bg1.p-5
            .row.justify-content-center.mb-4
              .col-3
                figure
                  img(src='@/assets/curso/temas/tema2/img23.svg', alt='Texto que describa la imagen')
            h5.text-center Pseudocódigo
            p.mb-0 INICIO
            p.mb-0.ms-3    LEER precio
            p.mb-0.ms-3   LEER cantidad
            p.mb-0.ms-3    Total= precio * cantidad
            p.mb-0.ms-3    MOSTRAR total
            p.mb-0 FIN
      p Puede ser un diseño orientado a objetos, relacional, etc., se debe tener una idea general del módulo de datos: entidades, atributos y las relaciones entre ellas. Par consiguiente, es imprescindible incluir diagramas o gráficos que ayuden a visualizar y entender el modelo.
      p.mb-4 Un programa, aplicación o librería puede a su vez trabajar con varios tipos de datos (entrada, internos o de salida).

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Descripción de procesos y servicios ofrecidos por el sistema
    p.mb-4 Se debe explicar de manera clara cuáles son las tareas o servicios que el sistema ofrece y los procesos que ejecuta para cumplirlos, con el fin de que el lector comprenda su funcionamiento general y la forma en que pueden utilizarse. Para apoyar esta explicación, es conveniente emplear recursos como pseudo-algoritmos o diagramas de flujo que representen el comportamiento del sistema. No se espera mostrar el código ni detallar funciones específicas, sino describir brevemente qué hace cada proceso, su propósito y los datos de entrada y salida, indicando su tipo, cantidad y significado.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img24.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este punto es fundamental que el código fuente de la aplicación esté adecuadamente documentado mediante comentarios claros y pertinentes. Estos constituyen la base de la documentación del proyecto y deben permitir comprender, a un nivel general, el funcionamiento de los procesos y servicios del sistema, así como la estructura y propósito de sus funciones, subrutinas, módulos o clases.

    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Documentación técnica - Especificación API
    p.mb-4 Se indica el propósito y breve descripción de cada método/función, con su prototipo indicando argumentos (nombre, tipo, propósito de cada uno) y respuesta (tipo, descripción).
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon-color-secundario.p-5.mb-4
          p Para llevar a cabo esta tarea, es posible utilizar una variedad de herramientas de generación de documentación automática, a partir del código en el encabezado de cada función (Javadoc, PHPDoc, Doxygen, etc).
          p.mb-0 La documentación técnica debe pensarse como el manual del programador y apuntar a aquellas personas que estarán a cargo de mantener, ampliar o crear un proyecto derivado a partir de nuestro proyecto.
    p.mb-4.text-center Para finalizar, se dan los siguientes aspectos relevantes que se deben tener presentes:
    .BG04.p-4.px-5
      .p-5
        SlyderA(tipo="b")
          .row
            .col-lg-6.mb-4.mb-md-0
              h4 Guía de uso del programa
              p Indicar de forma clara cómo ejecutar el programa, especificando los parámetros obligatorios y opcionales, la función de cada uno y el comportamiento por defecto cuando no se proporcionan. Esta información constituye la base del manual de usuario final de la aplicación.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img25.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-md-0
              h4 Descripción de la solución y arquitectura
              p Incorporar diagramas de flujo y explicaciones a nivel de método que describan la estrategia general de resolución del problema. Debe mostrarse cómo se organiza la solución y cómo interactúan los distintos módulos entre sí, permitiendo comprender la lógica global del sistema sin necesidad de revisar el código.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img26.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-md-0
              h4 Documentación de tipos de datos abstractos
              p Los tipos de datos abstractos deben estar correctamente documentados en el código y descritos en el manual, indicando cómo se representa cada estructura, cuáles son sus limitaciones y qué métodos ofrece para la manipulación y gestión de los datos, facilitando su uso y mantenimiento.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img27.png', alt='Texto que describa la imagen')
          .row
            .col-lg-6.mb-4.mb-md-0
              h4 Conclusiones y lecciones aprendidas
              p Incluir una sección final donde se sinteticen las principales dificultades encontradas durante el desarrollo, las decisiones o políticas adoptadas para resolverlas, las restricciones del problema original, los casos particulares abordados y los aprendizajes obtenidos a partir de la experiencia del proyecto.

            .col-lg-6
              figure
                img(src='@/assets/curso/temas/tema2/img28.png', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Definición general del software',
        texto:
          'Consiste en describir de forma clara el sistema de información o la solución a desarrollar, explicando la idea central, la funcionalidad principal y el alcance del proyecto. Incluye los propósitos, objetivos generales y el contexto en el que será utilizado, permitiendo comprender su utilidad y valor dentro del entorno para el cual fue concebido.',
        imagen: require('@/assets/curso/temas/tema2/img14.png'),
      },
      {
        titulo: 'Especificación de requerimientos',
        texto:
          'Es fundamental detallar de manera precisa los requerimientos técnicos y funcionales del sistema, así como los alcances, restricciones y limitaciones de la implementación. Debe indicarse si el proyecto forma parte de un sistema previamente existente y, en tal caso, aclarar si corresponde a una nueva versión, una ampliación o una derivación, garantizando una correcta integración.',
        imagen: require('@/assets/curso/temas/tema2/img15.png'),
      },
      {
        titulo: 'Procedimientos de instalación y prueba',
        texto:
          'Debe organizarse de forma detallada el proceso para obtener, instalar y ejecutar el software, incluyendo los pasos necesarios para su correcta puesta en funcionamiento. También se deben describir las pruebas básicas de verificación, las condiciones del entorno, la plataforma requerida y los criterios que aseguran que el sistema opere de manera adecuada.',
        imagen: require('@/assets/curso/temas/tema2/img16.png'),
      },
    ],
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
