<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Depuración y manejo de errores en programas
    p.mb-4 En el desarrollo de aplicaciones, los errores y las excepciones son inevitables. Al tener el rol de programadores, se posee la responsabilidad manejarlos adecuadamente para evitar que la experiencia del usuario se vea afectada. Una correcta gestión de errores también permite a los desarrolladores depurar el código y comprender mejor sus causas para poder solucionarlos de manera eficiente.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 JavaScript ha sido un lenguaje de programación ampliamente utilizado durante más de tres décadas. Con él se desarrollan aplicaciones web, móviles, PWA y del lado del servidor, utilizando diversas bibliotecas populares (como ReactJS) y frameworks (como Next.js, Remix, entre otros).
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p.mb-4.text-center Al ser un lenguaje de tipado dinámico, JavaScript presenta el desafío de manejar correctamente la seguridad de tipos. TypeScript ayuda a controlar este aspecto, pero aun así es necesario gestionar los errores en tiempo de ejecución de manera eficiente dentro del código.
        .tarjeta--fondo1.p-4.mb-4
          p.mb-0 Errores como TypeError, RangeError y ReferenceError probablemente sean familiares si se tiene experiencia desarrollando en JavaScript. Todos estos pueden generar datos inválidos, comportamientos incorrectos en la navegación, resultados inesperados o incluso provocar que la aplicación falle completamente, lo cual afecta negativamente la experiencia del usuario final.
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Depuración de código
    p.mb-4 La depuración de código (debugging) es el proceso mediante el cual los desarrolladores identifican, analizan y corrigen errores dentro de un programa. En JavaScript, esta práctica es fundamental debido a que muchos errores se detectan en tiempo de ejecución.
    h5.text-center.mb-4 ¿Qué es la depuración?
    p.mb-3.text-center La depuración consiste en detectar errores, analizar el comportamiento del programa y corregir fallos en la lógica del código.
    p.mb-3.text-center Las siguiente son las herramientas de depuración:

    .row.justify-content-center.fondo-slyder.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema5/img2.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Consola (console.log)]
            p.mb-3 Permite mostrar información en la consola.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.text-small.mb-0.text-white let nombre = 'Carlos';
                p.text-small.mb-0.text-white console.log(nombre);
                p.text-small.mb-0.text-white Resultado: Carlos
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Herramientas de desarrollador (DevTools)]
            p.mb-3 Permiten inspeccionar, depurar y analizar el comportamiento del código directamente en el navegador.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.text-small.mb-0.text-white let edad = 18;
                p.text-small.mb-0.text-white let resultado = edad >= 18 ? "Mayor de edad" : "Menor de edad";
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Breakpoints]
            p.mb-3 Permiten pausar la ejecución del programa en una línea específica.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.text-small.mb-0.text-white for (let i = 0; i < 5; i++) {
                p.text-small.mb-0.text-white    // breakpoint aquí
                p.text-small.mb-0.text-white  }
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Sentencia debugger]
            p.mb-3 Detiene la ejecución del código desde el propio programa.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.text-small.mb-0.text-white function prueba() {
                p.text-small.mb-0.text-white    debugger;
                p.text-small.mb-0.text-white    let x = 10;
                p.text-small.mb-0.text-white  }
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Visual Studio Code]
            p.mb-3 Editor de código que permite depuración avanzada.
            .p-2
              .tarjeta--fondo4.p-2
                p.text-small.mb-0.text-white function suma(a, b) {
                p.text-small.mb-0.text-white    return a + b;
                p.text-small.mb-0.text-white  }
                p.text-small.mb-0.text-white  console.log(suma(2,3));
    p.mb-4.text-center Igualmente, para detectar errores en Java existen unas técnicas de depuración como son: 
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.cajon-color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img3.svg', alt='Texto que describa la imagen')
          
        p.mb-0 Ejecución paso a paso.
      .col-md.tarjeta.tarjeta--fondo7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img4.svg', alt='Texto que describa la imagen')
          
        p.mb-0 Inspección de variables.         
      .col-md.tarjeta.tarjeta--fondo1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img5.svg', alt='Texto que describa la imagen')
          
        p.mb-0 Análisis del flujo del programa.           
      .col-md.tarjeta.tarjeta--fondo8.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img6.svg', alt='Texto que describa la imagen')
        p.mb-0 Uso de registros (logs).

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Fallas de sintaxis
    p.mb-4 En el desarrollo de software, uno de los errores más comunes que enfrentan los programadores son las fallas de sintaxis, también conocidas como SyntaxError. Estas ocurren cuando el código escrito no cumple con las reglas gramaticales del lenguaje de programación, impidiendo que el intérprete o el motor de JavaScript pueda comprender y ejecutar correctamente el programa.
    p.mb-4 JavaScript, al ser un lenguaje interpretado, analiza el código antes de ejecutarlo. Durante este proceso, si detecta una estructura incorrecta —como paréntesis sin cerrar, comillas mal utilizadas, palabras reservadas mal escritas o una mala organización del código— genera un error de sintaxis y detiene la ejecución del programa. Esto significa que, a diferencia de otros errores, las fallas de sintaxis deben corregirse obligatoriamente antes de que el código pueda ejecutarse.                
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
            .col-lg-12
              .bloque-texto-gg.color-primario
                .bloque-texto-gg__texto1.p-4
                  p.mb-3 Las fallas de sintaxis pueden presentarse en diferentes formas, tales como:
                  ul.lista-ul
                    li
                      i.fas.fa-cloud-arrow-down
                      | Falta de punto y coma al finalizar instrucciones.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Uso incorrecto de llaves {} o paréntesis ().
                    li
                      i.fas.fa-cloud-arrow-down
                      | Declaraciones incompletas o mal estructuradas.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Errores en cadenas de texto (comillas abiertas o mal cerradas).
                    li
                      i.fas.fa-cloud-arrow-down
                      | Uso incorrecto de palabras reservadas del lenguaje.

                .bloque-texto-gg__img1(
                  :style="{'background-image':`url(${require('@/assets/curso/temas/tema5/img7.png')})`}"
                )
        p.mb-4.text-center Para la sintaxis de fallas, se ejemplifica con los siguientes códigos de programación:          

        .row.justify-content-center.mb-4
          .col-lg-10
            .d-none.d-lg-block
              ImagenInfografica.color-acento-botones
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/tema5/img8.svg', alt='Infografía de matriz RACI')
            .d-block.d-lg-none
              figure
                img(src='@/assets/curso/temas/tema5/img8_1.svg', alt='Matriz RACI para dispositivos móviles')
                
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-0 A continuación, se presentan distintas formas y escenarios prácticos para generar, gestionar y clasificar errores, desde la creación de errores personalizados hasta el uso de estructuras modernas para el control de fallos y la identificación de los tipos de errores más comunes en JavaScript:          

    h5.mb-4 a) Generar errores personalizados
    p.mb-4 Es posible generar errores de forma manual utilizando la instrucción throw.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 manejoErrores.js
                p.text-white.mb-1 function checkAge(age) {
                p.text-white.ms-2.mb-1 if (age < 18) {
                p.text-white.ms-3.mb-1 throw new Error("You must be 18 or older.");
                p.text-white.ms-2.mb-1 }
                p.text-white.ms-2.mb-1 return "Access granted";
                p.text-white.mb-1 }
                p.text-white.mb-1  
                p.text-white.mb-1 try {
                p.text-white.ms-2.mb-1 console.log(checkAge(16));
                p.text-white.mb-1 } catch (error) {
                p.text-white.ms-2.mb-1 console.log("Error:", error.message);
                p.text-white.mb-1 } // Fin del manejo de errores              
        p.mb-4.text-center ¿Cuándo usar el manejo de errores de JavaScript?
        p.mb-4.text-center El manejo de errores en JavaScript es fundamental en situaciones donde pueden presentarse problemas inesperados. Algunos casos comunes son:
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-4.mb-4
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img
            img(src='@/assets/curso/temas/tema5/img9.png' alt='Gestión de errores')
          .tarjeta-foto-hover__content
            .tarjeta-foto-hover__icon
              i.fas.fa-chevron-up
            h5.mb-0 Gestión de errores de API y red
            .tarjeta-foto-hover__body
              p.text-small.mb-0 Si una solicitud a una API falla, el sistema puede reintentar la operación o mostrar un mensaje de error al usuario.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img
            img(src='@/assets/curso/temas/tema5/img10.png' alt='Validación de entrada')
          .tarjeta-foto-hover__content
            .tarjeta-foto-hover__icon
              i.fas.fa-chevron-up
            h5.mb-0 Validación de la entrada del usuario
            .tarjeta-foto-hover__body
              p.text-small.mb-0 Si el usuario introduce datos inválidos, el sistema puede solicitar correcciones sin interrumpir la ejecución de la aplicación.

      .col-md-6.col-lg-4.mb-4
        .tarjeta-foto-hover
          .tarjeta-foto-hover__img
            img(src='@/assets/curso/temas/tema5/img11.png' alt='Prevención de fallos')
          .tarjeta-foto-hover__content
            .tarjeta-foto-hover__icon
              i.fas.fa-chevron-up
            h5.mb-2 Prevención de fallos en la aplicación
            .tarjeta-foto-hover__body
              p.text-small.mb-0 Al manejar valores inesperados o datos faltantes, se garantiza que el sistema continúe funcionando correctamente.
    p.mb-4.text-center Se relacionan algunos ejemplos de manejo de errores en JavaScript, partiendo de lo siguiente: 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta--fondo1.p-4
          p.mb-4 ¿Cómo manejar errores en código asíncrono? Cuando se trabaja con funciones asíncronas y promesas, los errores pueden gestionarse usando .catch().             
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 fetch("https://jsonplaceholder.typicode.com/posts/1")
                p.text-white.ms-2.mb-1 .then(response => response.json())
                p.text-white.ms-2.mb-1 .then(data => console.log(data))
                p.text-white.ms-2.mb-1 .catch(error => console.error("Error fetching data:", error.message));                
    p.mb-4.text-center Si la solicitud falla (por ejemplo, por falta de conexión), el método .catch() maneja el error adecuadamente.            
    
    h5.mb-4 b) Manejo de errores con async y await
    p.mb-4 Para una gestión más clara en funciones asíncronas, se utiliza try...catch.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta--fondo1.p-4
          p.mb-4 ¿Cómo manejar errores en código asíncrono? Cuando se trabaja con funciones asíncronas y promesas, los errores pueden gestionarse usando .catch().             
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 async function fetchData() {
                p.text-white.ms-2.mb-1 try {
                p.text-white.ms-3.mb-1 const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
                p.text-white.ms-3.mb-1 const data = await response.json();
                p.text-white.ms-3.mb-1 console.log(data);
                p.text-white.ms-2.mb-1 } catch (error) {
                p.text-white.ms-3.mb-1 console.error("Error fetching data:", error.message);
                p.text-white.ms-2.mb-1 }
                p.text-white.mb-1 }
                p.text-white.mb-1  
                p.text-white.mb-1 fetchData();
    p.mb-4 Esto evita promesas no controladas y permite un manejo estructurado de errores.
    h5.mb-4 Utilizar finally para limpieza
    p.mb-4 El bloque finally asegura que ciertas acciones se ejecuten siempre, incluso si ocurre un error.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 function processTask() {
                p.text-white.ms-2.mb-1 try {
                p.text-white.ms-3.mb-1 console.log("Processing...");
                p.text-white.ms-3.mb-1 throw new Error("Something went wrong!");
                p.text-white.ms-2.mb-1 } catch (error) {
                p.text-white.ms-3.mb-1 console.error("Caught error:", error.message);
                p.text-white.ms-2.mb-1 } finally {
                p.text-white.ms-3.mb-1 console.log("Task completed (cleaning up resources).");
                p.text-white.ms-2.mb-1 }
                p.text-white.mb-1 }
                p.text-white.mb-1  
                p.text-white.mb-1 processTask();
    h5.mb-4 Diferentes tipos de errores de JavaScript              
    p.mb-4 Los errores en JavaScript se clasifican en distintas categorías:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.cajon-color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img12.svg', alt='Texto que describa la imagen')
        h5.text-center ReferenceError
        p.mb-2 Se intenta usar una variable que no ha sido definida.
        p.mb-0 #[b Ejemplo]
        .tarjeta--fondo4.mb-4
              p.text-white.mb-1.text-small console.log(nonExistentVar); // ReferenceError
      .col-md.tarjeta.tarjeta--fondo7.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img13.svg', alt='Texto que describa la imagen')
        h5.text-center TypeError
        p.mb-2 Se intenta ejecutar una operación sobre un tipo de dato incorrecto.
        p.mb-0 #[b Ejemplo]
        .tarjeta--fondo4.mb-4
              p.text-white.mb-1.text-small let num = 42;
              p.text-white.mb-1.text-small  num.toUpperCase(); // TypeError
      .col-md.tarjeta.tarjeta--fondo1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img14.svg', alt='Texto que describa la imagen')
        h5.text-center SyntaxError
        p.mb-2 Se presenta cuando la sintaxis del código no es válida.
        p.mb-0 #[b Ejemplo]
        .tarjeta--fondo4.mb-4
              p.text-white.mb-1.text-small javascript
              p.text-white.mb-1.text-smallCopyEdit
              p.text-white.mb-1.text-smallconsole.log("Hello;") // SyntaxError: Falta cerrar una comilla          
      .col-md.tarjeta.tarjeta--fondo8.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema5/img15.svg', alt='Texto que describa la imagen')
        h5.text-center RangeError
        p.mb-2 Ocurre cuando se excede el rango permitido de valores.
        p.mb-0 #[b Ejemplo]
        .tarjeta--fondo4.mb-4
              p.text-white.mb-1.text-small function recurse() {
              p.text-white.mb-1.text-small return recurse();
              p.text-white.mb-1.text-small }
              p.text-white.mb-1.text-small recurse(); // RangeError: Se excedió el tamaño máximo de la pila de llamadas
    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Fallas de lógica
    p.mb-4 Las fallas de lógica en JavaScript son errores que no impiden que el programa se ejecute, pero sí producen resultados incorrectos, inconsistentes o distintos a los esperados. A diferencia de los errores de sintaxis, estas fallas no siempre muestran un mensaje en pantalla, por lo que suelen ser más difíciles de detectar. En la práctica profesional, este tipo de errores aparece cuando la lógica del programa, las condiciones, los cálculos o la manipulación de datos no reflejan correctamente la intención del desarrollador.            
     .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img16.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 A continuación, se presentan algunas de las fallas lógicas más comunes en JavaScript, organizadas en distintos escenarios que suelen afectar el flujo del programa, la correcta evaluación de condiciones y el manejo de datos. Cada numeral ilustra un tipo de error frecuente, acompañado de ejemplos y correcciones, con el fin de ayudarte a identificar, comprender y prevenir estos problemas durante el desarrollo de aplicaciones:
     AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="a) Uso incorrecto de operadores")
        p.mb-2 Una de las fallas más comunes en JavaScript ocurre al utilizar operadores equivocados dentro de una condición o una expresión. El caso más frecuente es usar el operador de asignación (=) en lugar de un operador de comparación (== o ===). Cuando esto sucede, el valor de la variable cambia y la condición puede evaluarse como verdadera, aunque esa no fuera la intención del programador. Este error altera el flujo lógico del programa y puede provocar comportamientos difíciles de identificar.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let a = 5;
              p.text-white.mb-1.text-small  if (a = 10) {
              p.text-white.mb-1.text-small    console.log('Verdadero');
              p.text-white.mb-1.text-small  }
              p.text-white.mb-1.text-small  // Error: se usa '=' en lugar de '==' o '==='
                En este caso, la variable a recibe el valor 10 y la condición resulta verdadera, por lo que el bloque se ejecuta. La forma correcta sería utilizar un operador de comparación estricta.
              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let a = 5;
              p.text-white.mb-1.text-small  if (a === 10) {
              p.text-white.mb-1.text-small    console.log('Verdadero');
              p.text-white.mb-1.text-small  } else {
              p.text-white.mb-1.text-small    console.log('Falso');
              p.text-white.mb-1.text-small  }  
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img17.svg', alt='Texto que describa la imagen')   
      .row(titulo="b) Condiciones mal planteadas")
        p.mb-2 Las condiciones mal formuladas son otra fuente frecuente de fallas de lógica. Esto sucede cuando la expresión condicional no representa correctamente la regla del problema. Por ejemplo, al trabajar con edades, rangos, notas o límites, un pequeño detalle como usar > en vez de >= puede modificar totalmente el resultado del programa.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let edad = 18;
              p.text-white.mb-1.text-small  if (edad > 18) {
              p.text-white.mb-1.text-small    console.log('Mayor de edad');
              p.text-white.mb-1.text-small  }
              p.text-white.mb-1.text-small  // Error: debería ser >= 18
              p.text-white.mb-1.text-small  Aquí, una persona de 18 años no sería reconocida como mayor de edad, aunque en muchos contextos sí lo es. El error no está en la sintaxis, sino en la lógica de la condición.
              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let edad = 18;
              p.text-white.mb-1.text-small  if (edad >= 18) {
              p.text-white.mb-1.text-small    console.log('Mayor de edad');
              p.text-white.mb-1.text-small  } else {
              p.text-white.mb-1.text-small    console.log('Menor de edad');
              p.text-white.mb-1.text-small  }  
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img18.svg', alt='Texto que describa la imagen')   
      .row(titulo="c) Bucles infinitos")
        p.mb-2 Un bucle infinito ocurre cuando la condición de repetición nunca deja de cumplirse o cuando la variable de control no se actualiza correctamente. Esta falla puede congelar la aplicación, consumir recursos innecesarios y afectar seriamente el rendimiento del sistema.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let i = 0;
              p.text-white.mb-1.text-small  while (i < 5) {
              p.text-white.mb-1.text-small    console.log(i);
              p.text-white.mb-1.text-small  }
              p.text-white.mb-1.text-small  // Error: falta incrementar i
              p.text-white.mb-1.text-small  En este caso, la variable i nunca cambia, por lo que la condición i < 5 siempre será verdadera. El ciclo se ejecutará indefinidamente.

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let i = 0;
              p.text-white.mb-1.text-small  while (i < 5) {
              p.text-white.mb-1.text-small    console.log(i);
              p.text-white.mb-1.text-small    i++;
              p.text-white.mb-1.text-small  }
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img19.svg', alt='Texto que describa la imagen')   
      .row(titulo="d) Comparación de tipos incorrecta")
        p.mb-2 JavaScript permite conversiones implícitas de tipos cuando se usa el operador ==. Esto puede generar resultados engañosos, ya que dos valores de diferente tipo pueden considerarse iguales. En aplicaciones reales, esta situación puede causar validaciones erróneas, decisiones equivocadas y errores de negocio.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small console.log(5 == '5'); // true
              p.text-white.mb-1.text-small  console.log(5 === '5'); // false
              p.text-white.mb-1.text-small  Con ==, JavaScript convierte automáticamente la cadena '5' en número y luego realiza la comparación. Con ===, en cambio, también verifica el tipo de dato, lo cual lo hace más seguro.

              p.text-white.mb-1.text-small  Recomendación: usar preferiblemente el operador === para evitar ambigüedades y mantener un código más confiable.
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img20.svg', alt='Texto que describa la imagen')   
      .row(titulo="e) Variables no inicializadas")
        p.mb-2 Usar variables no inicializadas puede provocar resultados inesperados, como undefined o NaN. Este problema es común cuando el programador asume que una variable ya contiene un valor, pero en realidad nunca fue inicializada correctamente.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let x;
              p.text-white.mb-1.text-small  console.log(x + 5); // NaN

              p.text-white.mb-1.text-small  Como x no tiene un valor numérico asignado, la operación no puede realizarse adecuadamente y el resultado es NaN (Not a Number). Este tipo de fallas suele afectar cálculos, formularios y procesos de validación.

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let x = 0;
              p.text-white.mb-1.text-small  console.log(x + 5); // 5
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img21.svg', alt='Texto que describa la imagen')   
      .row(titulo="f) Índices fuera de rango")
        p.mb-2 En los arreglos, acceder a una posición inexistente no produce necesariamente un error visible, pero sí devuelve undefined. Esto puede generar efectos en cadena cuando se intenta usar ese valor en operaciones, comparaciones o métodos posteriores.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let arr = [1, 2, 3];
              p.text-white.mb-1.text-small  console.log(arr[5]); // undefined

              p.text-white.mb-1.text-small  Si después se intenta sumar, convertir o manipular ese valor, el programa puede producir resultados erróneos. Por esta razón, es importante validar siempre los límites del arreglo.

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let arr = [1, 2, 3];
              p.text-white.mb-1.text-small  if (arr[2] !== undefined) {
              p.text-white.mb-1.text-small    console.log(arr[2]);
              p.text-white.mb-1.text-small }
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img22.svg', alt='Texto que describa la imagen')   
      .row(titulo="g) Mutación no deseada de datos")
        p.mb-2 En JavaScript, cuando se asigna un arreglo u objeto a otra variable, en muchos casos no se crea una copia independiente, sino una referencia al mismo dato en memoria. Esto significa que, al modificar una variable, la otra también cambia. Esta situación genera fallas lógicas difíciles de detectar, especialmente en programas grandes.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let lista = [1, 2, 3];
              p.text-white.mb-1.text-small  let copia = lista;
              p.text-white.mb-1.text-small  copia[0] = 99;
              p.text-white.mb-1.text-small  // lista también cambia
              p.text-white.mb-1.text-small  Aquí, copia no es un nuevo arreglo, sino una referencia al mismo arreglo original. Por eso, al cambiar copia[0], también cambia lista[0].

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  let lista = [1, 2, 3];
              p.text-white.mb-1.text-small  let copia = [...lista];
              p.text-white.mb-1.text-small  copia[0] = 99;
              p.text-white.mb-1.text-small  // lista permanece igual
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img23.svg', alt='Texto que describa la imagen')   
      .row(titulo="h) Retornos incorrectos en funciones")
        p.mb-2 Otra falla lógica frecuente ocurre cuando una función no retorna el valor esperado o no retorna nada. En estos casos, el código puede seguir ejecutándose, pero las operaciones que dependen del resultado fallan.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small function sumar(a, b) {
              p.text-white.mb-1.text-small    let resultado = a + b;
              p.text-white.mb-1.text-small  }
              p.text-white.mb-1.text-small  console.log(sumar(2, 3)); // undefined
              p.text-white.mb-1.text-small  La función realiza el cálculo, pero no usa return. Por tanto, el resultado no sale de la función.

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  function sumar(a, b) {
              p.text-white.mb-1.text-small    let resultado = a + b;
              p.text-white.mb-1.text-small    return resultado;
              p.text-white.mb-1.text-small  }
              p.text-white.mb-1.text-small  console.log(sumar(2, 3)); // 5
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img24.svg', alt='Texto que describa la imagen')   
      .row(titulo="i) Uso incorrecto de condiciones compuestas")
        p.mb-2 Las condiciones compuestas con && y || pueden causar errores lógicos cuando no se agrupan correctamente o cuando se interpretan mal las prioridades de evaluación. Esto ocurre con frecuencia en validaciones complejas.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let edad = 20;
              p.text-white.mb-1.text-small  let tieneDocumento = false;
              p.text-white.mb-1.text-small  if (edad >= 18 || tieneDocumento) {
              p.text-white.mb-1.text-small    console.log('Puede ingresar');
              p.text-white.mb-1.text-small  }

              p.text-white.mb-1.text-small  Si la regla real exige ser mayor de edad y además tener documento, esta condición está mal planteada, porque basta con cumplir una de las dos.

              p.text-white.mb-1.text-small  Corrección:
              p.text-white.mb-1.text-small  if (edad >= 18 && tieneDocumento) {
              p.text-white.mb-1.text-small    console.log('Puede ingresar');
              p.text-white.mb-1.text-small  } else {
              p.text-white.mb-1.text-small    console.log('No puede ingresar');
              p.text-white.mb-1.text-small  }
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img25.svg', alt='Texto que describa la imagen')   
      .row(titulo="j) Confusión entre incremento previo y posterior")
        p.mb-2 El uso de ++ antes o después de una variable puede cambiar el resultado de una expresión. Esta diferencia puede parecer pequeña, pero en ciclos, asignaciones y cálculos produce errores lógicos.
        p.mb-2 #[b Ejemplo:]
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            .tarjeta--fondo4.p-4
              p.text-white.mb-1.text-small let x = 5;
              p.text-white.mb-1.text-small  let y = x++;
              p.text-white.mb-1.text-small  console.log(x); // 6
              p.text-white.mb-1.text-small  console.log(y); // 5

              p.text-white.mb-1.text-small  Aquí, y recibe primero el valor actual de x y luego x se incrementa. Si el desarrollador esperaba que y valiera 6, tendría una falla lógica.

              p.text-white.mb-1.text-small  Comparación:
              p.text-white.mb-1.text-small  let a = 5;
              p.text-white.mb-1.text-small  let b = ++a;
              p.text-white.mb-1.text-small  console.log(a); // 6
              p.text-white.mb-1.text-small  console.log(b); // 6
          .col-lg-2
            figure
              img(src='@/assets/curso/temas/tema5/img26.svg', alt='Texto que describa la imagen')   

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Manejo de errores y excepciones
    .BG01.px-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1
          figure
            img(src='@/assets/curso/temas/tema5/img27.svg', alt='Texto que describa la imagen')           
        .col-lg-11    
          p.mb-0 Para entender estos errores, se presentan dos situaciones comunes en las que el manejo de errores resulta esencial para evitar fallos en la ejecución del programa: el control de operaciones matemáticas inválidas y la gestión de datos incorrectos provenientes de fuentes externas. Estos ejemplos muestran cómo el uso de try...catch permite anticipar errores y mantener la estabilidad de la aplicación:    
      h5.mb-3 a) Manejo de la división por cero
      p.mb-4 A continuación, se tiene una función que divide un número entre otro. Para ello, se pasa parámetros a la función para ambos números. Deseando asegurarnos de que la división nunca genere un error al dividir un número entre cero (0).
      p.mb-4 Como medida preventiva, se ha escrito una condición que, si el divisor es cero, generará un error indicando que la división por cero no está permitida. En cualquier otro caso, se procederá con la división. Si se produce un error, el bloque catch lo gestionará y realizará las acciones necesarias (en este caso, registrar el error en la consola):            
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 public class EjemploArreglo {
                p.text-white.ms-2.mb-1 public static void main(String[] args) {
                p.text-white.ms-3.mb-1 // Declaración e inicialización de un arreglo
                p.text-white.ms-3.mb-1 int[] numeros = {10, 20, 30, 40, 50};
                p.text-white.ms-3.mb-1 // Acceso a un elemento del arreglo
                p.text-white.ms-3.mb-1 System.out.println("Primer elemento: " + numeros[0]);
                p.text-white.ms-3.mb-1 // Modificar un elemento
                p.text-white.ms-3.mb-1 numeros[2] = 35;
                p.text-white.ms-3.mb-1 // Recorrer el arreglo con un ciclo for
                p.text-white.ms-3.mb-1 System.out.println("Elementos del arreglo:");
                p.text-white.ms-3.mb-1 for (int i = 0; i < numeros.length; i++) {
                p.text-white.ms-4.mb-1 System.out.println(numeros[i]);
                p.text-white.ms-3.mb-1 }
                p.text-white.ms-2.mb-1 } // Fin del método main
                p.text-white.mb-1 } // Fin de la clase EjemploArreglo            
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8
                p.mb-3 Ahora bien, si se invoca la función con los siguientes argumentos, se obtendrá un resultado de 5, y el segundo argumento es un valor distinto de cero:
                .tarjeta--fondo5.p-4.mb-3
                  p.mb-0.text-white divideNumbers(15, 3); // The result is 5
                  p.mb-0.text-white  Pero si pasamos el valor 0 como segundo argumento, el programa generará un error y este se registrará en la consola.
                  p.mb-0.text-white  divideNumbers(15, 0);
                  p.mb-0.text-white  Producción:
              .col-lg-4
                figure
                  img(src="@/assets/curso/temas/tema5/img28.png", alt="alt").img400.m-auto   
    h5.mb-3 b) Error matemático
    p.mb-4 A menudo, se recibirá JSON como respuesta a una llamada a la API. Se necesita analizar este JSON en el código JavaScript para extraer los valores. ¿Qué ocurre si la API te envía un JSON mal formado por error? No puede permitirse que la interfaz de usuario falle por esto. Se debe gestionar correctamente y aquí es donde el bloque try…catch vuelve a ser la salvación:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 function parseJSONSafely(str) {
                p.text-white.ms-2.mb-1 try {
                p.text-white.ms-3.mb-1 return JSON.parse(str);
                p.text-white.ms-2.mb-1 } catch (err) {
                p.text-white.ms-3.mb-1 console.error("Invalid JSON:", err.message);
                p.text-white.ms-3.mb-1 return null;
                p.text-white.ms-2.mb-1 }
                p.text-white.mb-1 }
                p.text-white.mb-1  
                p.text-white.mb-1 const userData = parseJSONSafely('{"name": "tapaScript"}'); // Parsed
                p.text-white.mb-1 const badData = parseJSONSafely('name: tapaScript'); // Handled gracefully
                p.text-white.mb-1  
                p.text-white.mb-1 Sin try...catch, la segunda llamada provocará que la aplicación falle.     
</template>

<script>
export default {
  name: 'Tema5',
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
