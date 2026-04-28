<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de programación
    
    p.mb-4(data-aos="flip-up") Los fundamentos de programación constituyen la base esencial para el desarrollo de #[i software] o sistemas de información, permitiendo a los programadores comprender cómo diseñar, estructurar y ejecutar soluciones computacionales eficientes según la necesidad del cliente. Estos fundamentos incluyen conceptos clave como algoritmos, estructuras de control, tipos de datos y lógica de programación, los cuales son necesarios para resolver problemas de manera sistemática.    
    .bloque-texto-gg.bloque-texto-gg--inverso.color-primario.mb-5(data-aos="flip-up")
      .bloque-texto-gg__texto.p-4
        p.mb-4 Uno de los elementos principales en la programación es el algoritmo, que se define como una serie de pasos ordenados y finitos que permiten resolver un problema específico. Los algoritmos deben ser claros, precisos y eficientes, ya que de ellos depende el rendimiento del programa.
        p.mb-0 En la programación también se utilizan variables, que son espacios en memoria donde se almacenan datos que pueden cambiar durante la ejecución del programa. Estas variables tienen tipos de datos específicos como números, cadenas de texto o valores booleanos.
      .bloque-texto-gg__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/img1.png')})`}"
      )

    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="flip-up")
        p.mb-0 Las estructuras de control permiten dirigir el flujo del programa. Entre ellas se encuentran:
      
    .tarjeta--container.row.mb-4(data-aos="flip-up")
      .col-md.tarjeta.tarjeta-bg2.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
          
        h5.text-center Estructuras secuenciales
        p Conjunto de instrucciones que se ejecutan de manera continua y ordenada, una después de la otra, siguiendo el flujo natural del programa.
      .col-md.tarjeta.tarjeta-bg4.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')
          
        h5.text-center Estructuras condicionales
        p Permiten evaluar condiciones y tomar decisiones, ejecutando diferentes acciones según se cumpla o no una condición (if, else).
      .col-md.tarjeta-bg3.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema1/img4.svg', alt='Texto que describa la imagen')
          
        h5.text-center Estructuras repetitivas
        p Facilitan la ejecución de un bloque de instrucciones varias veces, mientras se cumpla una condición o durante un número definido de iteraciones (for, while).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10(data-aos="flip-up")
        p.mb-4 Otro aspecto importante es la sintaxis, que corresponde a las reglas que definen cómo se debe escribir el código en un lenguaje de programación. Una sintaxis incorrecta genera errores que impiden la ejecución del programa.
        p.mb-4 La lógica de programación es fundamental, ya que permite construir soluciones coherentes. Un programa puede estar bien escrito sintácticamente, pero si su lógica es incorrecta, no producirá los resultados esperados.
        p.mb-0 Los lenguajes de programación se clasifican en:

    .row.mb-4
      .col-lg-6(data-aos="flip-up")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img5.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.tarjeta-bg5
            .p-4
              h5 Compilados
              p Necesitan que el código fuente sea traducido completamente a código máquina antes de ejecutarse. Este proceso genera un archivo ejecutable, mejora el rendimiento del programa y permite detectar muchos errores antes de la ejecución.
      .col-lg-6(data-aos="flip-up")
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.tarjeta-bg5
            .p-4
              h5 Interpretados
              p Se ejecutan a través de un intérprete que traduce y ejecuta el código instrucción por instrucción en tiempo real. Esto facilita la prueba, la corrección de errores y la adaptación del programa a distintos entornos.
    p(data-aos="flip-up") El desarrollo de habilidades en programación también implica el uso de buenas prácticas como la documentación del código, el uso de nombres descriptivos para variables y funciones, y la organización adecuada del proyecto.
    p.mb-0(data-aos="flip-up") Finalmente, comprender los fundamentos de programación es esencial para avanzar hacia temas más complejos como estructuras de datos, desarrollo #[i web], inteligencia artificial y sistemas distribuidos.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.1 Conceptos básicos de programación
    p.mb-4(data-aos="fade-right") Para desglosar un poco esta temática, se invita a acceder a al siguiente video introductorio, en el cual se presentan de manera general los conceptos básicos de la programación. A través de explicaciones claras y ejemplos sencillos, se aborda qué es un programa, cómo se estructuran los algoritmos y cuál es el papel de las variables y los datos, proporcionando una base conceptual para el estudio de la programación:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/S2n1fsyxr4U" title="Conceptos básicos de programación" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
    p.mb-4(data-aos="fade-right") Ejemplos de tipos de datos que existen en lenguajes de programación son: 
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Tipos de datos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        .tabla-a.color-acento-contenido 
          .tabla-a     
            table
              thead
                tr.tarjeta-bg7
                  th.text-center Tipo de dato
                  th.text-center Representación
                  th.text-center Tamaño (bytes)
                  th.text-center Rango de valores
                  th.text-center Valor por defecto
                  th.text-center Clase asociada
              tbody
                tr
                  td.text-center: b byte
                  td Numérico entero con signo
                  td.text-center 1
                  td -128 a 127
                  td.text-center 0
                  td Byte
                tr
                  td.text-center: b short
                  td Numérico entero con signo
                  td.text-center 2
                  td -32,768 a 32,767
                  td.text-center 0
                  td Short
                tr
                  td.text-center: b int
                  td Numérico entero con signo
                  td.text-center 4
                  td -2,147,483,648 a 2,147,483,647
                  td.text-center 0
                  td Integer
                tr
                  td.text-center: b long
                  td Numérico entero con signo
                  td.text-center 8
                  td -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807
                  td.text-center 0L
                  td Long
                tr
                  td.text-center: b float
                  td Coma flotante (simple, IEEE 754)
                  td.text-center 4
                  td ±3.4×10^38
                  td.text-center 0.0f
                  td Float
                tr
                  td.text-center: b double
                  td Coma flotante (doble, IEEE 754)
                  td.text-center 8
                  td ±1.8×10^308
                  td.text-center 0.0d
                  td Double
                tr
                  td.text-center: b char
                  td Carácter Unicode
                  td.text-center 2
                  td \u0000 a \uFFFF
                  td.text-center \u0000
                  td Character
                tr
                  td.text-center: b boolean
                  td Dato lógico
                  td.text-center -
                  td true o false
                  td.text-center false
                  td Boolean
                tr
                  td.text-center: b void
                  td Ausencia de valor
                  td.text-center -
                  td -
                  td.text-center -
                  td Void

    .BG01.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10(data-aos="fade-right")
          p Los operadores permiten realizar operaciones sobre los datos, existen operadores aritméticos, relacionales y lógicos que permiten construir expresiones más complejas.
          p.mb-0 Estos son algunos Ejemplos:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img7.png', alt='')
        .col-lg-6(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="Operadores aritméticos")
                p.text-small.mb-0 Se utilizan para realizar operaciones matemáticas básicas.
                p.text-small.mb-0 Suma (+) → 5 + 3 = 8.
                p.text-small.mb-0 Resta (−) → 5 − 3 = 2.
                p.text-small.mb-0 Multiplicación (*) → 5 * 3 = 15.
                p.text-small.mb-0 División (/) → 6 / 2 = 3.
                p.text-small.mb-0 Módulo (%) → 5 % 2 = 1.
          
            .row(numero="2" titulo="Operadores relacionales")
                p.text-small.mb-0 Sirven para comparar dos valores y devuelven un resultado lógico (verdadero o falso).
                p.text-small.mb-0 Mayor que (>) → 10 > 5 → verdadero.
                p.text-small.mb-0 Menor que (<) → 3 < 2 → falso.
                p.text-small.mb-0 Igual (==) → 4 == 4 → verdadero.
                p.text-small.mb-0 Diferente (!=) → 4 != 5 → verdadero.
                p.text-small.mb-0 Mayor o igual (>=) → 5 >= 5 → verdadero.

            .row(numero="3" titulo="Operadores lógicos")
                p.text-small.mb-0 Permiten combinar o negar condiciones.
                p.text-small.mb-0 AND (&&) → (5 > 3 && 2 < 4) → verdadero.
                p.text-small.mb-0 OR (||) → (5 < 3 || 2 < 4) → verdadero.
                p.text-small.mb-0 NOT (!) → !(5 > 3) → falso.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          p.mb-0 Por su parte, las estructuras de control son fundamentales para dirigir el flujo del programa. Estas incluyen estructuras condicionales como:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-6(data-aos="fade-right")
          LineaTiempoD.color-acento-botones
            .row(numero="1" titulo="if")
                p.text-small.mb-0 1.INICIO
                p.text-small.mb-0 2.Leer numero
                p.text-small.mb-0 3.SI numero > 0 ENTONCES
                p.text-small.mb-0 4.Mostrar "El número es positivo"
                p.text-small.mb-0 5.FIN SI
                p.text-small.mb-0 6.FIN
          
            .row(numero="2" titulo="for")
                p.text-small.mb-0 1.INICIO
                p.text-small.mb-0 2.PARA i ← 1 HASTA 5 HACER
                p.text-small.mb-0 3.Mostrar i
                p.text-small.mb-0 4.PARA
                p.text-small.mb-1 5.FIN

                p.text-small.mb-0 Muestra los números del 1 al 5

            .row(numero="3" titulo="while")
                p.text-small.mb-0 1.INICIO
                p.text-small.mb-0 2.Leer numero
                p.text-small.mb-0 3.MIENTRAS numero < 0 HACER
                p.text-small.mb-0 4.Mostrar "Ingrese un número positivo"
                p.text-small.mb-0 5.Leer numero
                p.text-small.mb-0 6.FIN MIENTRAS
                p.text-small.mb-0 7.Mostrar "Número válido"
                p.text-small.mb-0 8.FIN
        .col-lg-4
          figure
            img(src='@/assets/curso/temas/tema1/img8.png', alt='')
    p(data-aos="fade-right") Además, la programación requiere seguir buenas prácticas como la correcta indentación del código, el uso de nombres significativos y la documentación mediante comentarios.
    p.mb-4(data-aos="fade-right") Finalmente, comprender estos conceptos básicos es esencial para avanzar hacia temas más complejos en ingeniería de #[i software]. Es importante tener en cuenta los elementos de la programación:

    .row.justify-content-center.BG02.p-4.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img9.png", alt="alt").img400.m-auto
      .col-lg-8(data-aos="fade-right")
        
        SlyderF.p-4.mb-4(columnas="col-lg-6 col-xl-4")
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img10.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Algoritmos
            p.text-center.mb-5 Pasos para resolver problemas.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img11.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Variables
            p.text-center.mb-5 Almacenamiento de datos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img12.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Tipos de datos
            p.text-center.mb-5 Clasificación de la información.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Operadores
            p.text-center.mb-5 Manipulación de datos.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img13.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Estructuras de control
            p.text-center.mb-5 Flujo del programa.
          .tarjeta.tarjeta--slyder.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src="@/assets/curso/temas/tema1/img14.svg", alt="alt").img100.m-auto
            h5.text-center.mb-4 Funciones
            p.text-center.mb-5 Reutilización de código.
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-right")
        p El aprendizaje de la programación también implica desarrollar habilidades de pensamiento lógico y resolución de problemas.
        p.mb-4 Se debe tener presente:

        .tarjeta-bg1.p-4
          ul.lista-ul
            li
              i.fas.fa-cloud-arrow-down
              | Practicar constantemente para afianzar los conocimientos adquiridos.

            li
              i.fas.fa-cloud-arrow-down
              | El uso de diagramas de flujo puede ayudar a visualizar la lógica de un algoritmo antes de implementarlo.

            li
              i.fas.fa-cloud-arrow-down
              | Los errores son parte del proceso de aprendizaje y permiten mejorar las habilidades del programador.

            li
              i.fas.fa-cloud-arrow-down
              | El trabajo en equipo y el uso de herramientas colaborativas son fundamentales en proyectos de #[i software].

            li
              i.fas.fa-cloud-arrow-down
              | Comprender estos conceptos facilita el aprendizaje de cualquier lenguaje de programación.

            li
              i.fas.fa-cloud-arrow-down
              | La abstracción permite simplificar problemas complejos en partes manejables.

            li
              i.fas.fa-cloud-arrow-down
              | La programación es una habilidad clave en la transformación digital actual.

            li
              i.fas.fa-cloud-arrow-down
              | El uso de estándares mejora la calidad del código.

            li
              i.fas.fa-cloud-arrow-down
              | La revisión de código permite detectar errores y mejorar soluciones.

            li
              i.fas.fa-cloud-arrow-down
              | El aprendizaje de la programación también implica desarrollar habilidades de pensamiento lógico y resolución de problemas.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 1.2 Tipos de lenguajes de programación: compilados e interpretados

    p.mb-4(data-aos="fade-right") En el ámbito de la ingeniería de #[i software], los lenguajes de programación se clasifican comúnmente según la forma en que su código es ejecutado. Dos de las categorías más importantes son los lenguajes compilados e interpretados. Esta clasificación influye directamente en el rendimiento, portabilidad, seguridad y proceso de desarrollo del #[i software].
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Lenguajes compilados

    p.mb-4(data-aos="fade-right") Este tipo de lenguaje es aquel en el que el programa escrito por el desarrollador (código fuente) se traduce completamente a lenguaje máquina antes de ejecutarse, mediante una herramienta llamada compilador. Este proceso genera un archivo ejecutable que puede correr directamente en el sistema sin necesidad del código original.
    p.mb-4(data-aos="fade-right") A diferencia de otros tipos de lenguajes, en los compilados la traducción ocurre una sola vez antes de la ejecución, lo que permite que el programa funcione de manera más rápida y eficiente, ya que el computador entiende directamente las instrucciones generadas.
    .tarjeta-bg2.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-3 Sus características son:
          .tarjeta--slyder.p-3.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2
                img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt").img100.m-auto
              .col-lg-10
                ul.lista-ul
                  li
                    i.fas.fa-cloud-arrow-down
                    | El código fuente se traduce completamente a lenguaje máquina antes de ejecutarse.

                  li
                    i.fas.fa-cloud-arrow-down
                    | Se genera un archivo ejecutable independiente del código original.

                  li
                    i.fas.fa-cloud-arrow-down
                    | Ofrecen mayor rendimiento y eficiencia en tiempo de ejecución.

                  li
                    i.fas.fa-cloud-arrow-down
                    | Detectan muchos errores en tiempo de compilación.
          p #[b Ejemplos:] C, C++, Go, Rust.
          p.mb-0 El proceso de compilación transforma el código escrito por el programador en instrucciones que el procesador puede ejecutar directamente. Esto permite que los programas sean rápidos y eficientes, especialmente en sistemas donde el rendimiento es crítico.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Lenguajes interpretados
    p(data-aos="fade-right") Un lenguaje interpretado es aquel en el que el código fuente se ejecuta línea por línea en tiempo real, mediante un programa llamado intérprete, sin necesidad de generar previamente un archivo ejecutable.
    p.mb-4(data-aos="fade-right") En este tipo de lenguajes, el código no se traduce completamente antes de ejecutarse, sino que el intérprete va leyendo, traduciendo y ejecutando cada instrucción al momento. Esto permite una mayor flexibilidad y facilita la prueba y corrección de errores durante el desarrollo.
    .tarjeta-bg3.p-4.mb-4(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-10
          p Por ejemplo, en lenguajes como JavaScript o Python, se puede escribir una instrucción y ejecutarla inmediatamente sin necesidad de compilar todo el programa.
          p.mb-4 Sus características son:
          .tarjeta--slyder.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-2
                img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt").img100.m-auto
              .col-lg-10
                ul.lista-ul
                  li
                    i.fas.fa-cloud-arrow-down
                    | El código se ejecuta línea por línea mediante un intérprete.

                  li
                    i.fas.fa-cloud-arrow-down
                    | No se genera un archivo ejecutable independiente.

                  li
                    i.fas.fa-cloud-arrow-down
                    | Son más flexibles y fáciles de depurar.

                  li
                    i.fas.fa-cloud-arrow-down
                    | Permiten mayor portabilidad entre sistemas.
          p #[b Ejemplos:] Python, JavaScript, Ruby.
          p.mb-0 En los lenguajes interpretados, el intérprete analiza y ejecuta el código en tiempo real. Esto facilita la experimentación y el desarrollo rápido, aunque puede implicar menor rendimiento en comparación con los compilados. 

    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p.mb-4 La siguiente tabla, relaciona un poco cada proceso que diferencia cada uno de estos lenguajes:
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 2.
              span Comparación de lenguajes de programación
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .tabla-a.color-acento-contenido 
              .tabla-a   
                table
                  thead
                    tr.tarjeta-bg7
                      th Característica
                      th Compilados
                      th Interpretados
                      th Impacto
                  tbody
                    tr
                      th.text-center Ejecución
                      td Previo a ejecución
                      td En tiempo real
                      td Velocidad vs flexibilidad
                    tr
                      th.text-center Rendimiento
                      td Alto
                      td Medio
                      td Optimización vs facilidad
                    tr
                      th.text-center Errores
                      td En compilación
                      td En ejecución
                      td Detección temprana vs dinámica
                    tr
                      th.text-center Portabilidad
                      td Dependiente del sistema
                      td Alta
                      td Compatibilidad
                    tr
                      th.text-center Ejemplos
                      td C, C++
                      td Python, JS
                      td Aplicación práctica 
        p.mb-0 La elección entre un lenguaje compilado o interpretado depende del contexto del proyecto, incluyendo requisitos de rendimiento y velocidad de desarrollo; además, se debe tener en cuenta lo siguiente:
    
    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img19.svg' alt="Imagen decorativa")
        p.text-center.mb-0 En sistemas embebidos y videojuegos, los lenguajes compilados suelen ser preferidos por su eficiencia.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img20.svg' alt="Imagen decorativa")
        p.text-center.mb-0 En aplicaciones #[i web] y análisis de datos, los lenguajes interpretados ofrecen mayor productividad.
      .col-lg.col-md-6.tarjeta--tabla.tarjeta--tabla3.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img21.svg' alt="Imagen decorativa")
        p.text-center.mb-0 El uso de entornos de ejecución como máquinas virtuales permite mejorar la portabilidad del #[i software].
      .col-lg.col-md-6.tarjeta--tabla.tarjeta--tabla4.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema1/img22.svg' alt="Imagen decorativa")
        p.text-center.mb-0 El proceso de desarrollo también cambia: los lenguajes interpretados permiten pruebas rápidas sin necesidad de compilación.
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        p.mb-0 Los compiladores modernos también incluyen herramientas de análisis estático para mejorar la calidad del código, comprender estas diferencias permite seleccionar la mejor tecnología para cada tipo de solución.
    
    .row.justify-content-center.align-items-center
      .col-lg-10(data-aos="fade-right")
        .cajon-color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema1/img23.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asociatividad no es solo unirse: es organizarse con propósito. Cuando la cooperación se convierte en estructura, los objetivos individuales se transforman en logros colectivos.
  


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
