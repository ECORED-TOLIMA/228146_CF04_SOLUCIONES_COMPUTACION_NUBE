<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estructuras de datos y algoritmos básicos
    p Las estructuras de datos y los algoritmos son conceptos fundamentales en programación, ya que permiten gestionar y procesar la información de forma eficiente para resolver problemas. Las estructuras de datos definen cómo se disponen y administran los datos dentro de un programa, facilitando su acceso y uso adecuado.
    p.mb-4 A continuación, se presentan algunas de las principales estructuras de datos utilizadas en programación, con una breve descripción y ejemplos sencillos que permitirán comprender su funcionamiento y aplicación práctica en la gestión de la información:

    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img1.svg' alt="Imagen decorativa")
        p.text-center #[b Arreglos (arrays)]
        p.text-center.mb-3 Permiten almacenar múltiples valores en una sola variable.
        p.text-center.mb-0 Ejemplo
        .tarjeta--fondo4.p-3
              p.text-white.mb-1 let numeros = [1, 2, 3, 4];
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img2.svg' alt="Imagen decorativa")
        p.text-center #[b Objetos (objects)]
        p.text-center.mb-3 Permiten almacenar información en pares clave–valor.
        p.text-center.mb-0 Ejemplo
        .tarjeta--fondo4.p-3
              p.text-white.mb-1 let persona = {
              p.text-white.mb-1  nombre: 'Juan',
              p.text-white.mb-1  edad: 25
              p.text-white.mb-1  };
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img3.svg' alt="Imagen decorativa")
        p.text-center #[b Pilas (stacks)]
        p.text-center.mb-3 Siguen el principio LIFO (último en entrar, primero en salir).
        p.text-center.mb-0 Ejemplo
        .tarjeta--fondo4.p-3
              p.text-white.mb-1 let pila = [];
              p.text-white.mb-1  pila.push(1);
              p.text-white.mb-1  pila.pop();
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img4.svg' alt="Imagen decorativa")
        p.text-center #[b Colas (queues)]
        p.text-center.mb-3 Siguen el principio FIFO (primero en entrar, primero en salir).
        p.text-center.mb-0 Ejemplo
        .tarjeta--fondo4.p-3
              p.text-white.mb-1 let cola = [];
              p.text-white.mb-1  cola.push(1);
              p.text-white.mb-1  cola.shift();
    
    p.mb-4.text-center De igual manera, se presentan algunos algoritmos básicos ampliamente utilizados en programación, orientados a la búsqueda, organización y recorrido de datos, con ejemplos que facilitan la comprensión de su lógica y aplicación práctica:

    .row.justify-content-center.mb-4
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-3.text-center #[b Búsqueda]
          p.mb-2 Permite encontrar un elemento dentro de una lista.
          p.mb-2 Ejemplo

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 function buscar(lista, valor) {
              p.text-white.mb-1    for (let i = 0; i < lista.length; i++) {
              p.text-white.mb-1      if (lista[i] === valor) return i;
              p.text-white.mb-1    }
              p.text-white.mb-1    return -1;
              p.text-white.mb-1  }
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-3.text-center #[b Ordenamiento]
          p.mb-2 Permite organizar los datos.
          p.mb-2 Ejemplo

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 function ordenar(lista) {
              p.text-white.mb-1  for (let i = 0; i < lista.length; i++) {
              p.text-white.mb-1    for (let j = 0; j < lista.length - 1; j++) {
              p.text-white.mb-1    if (lista[j] > lista[j + 1]) {
              p.text-white.mb-1      let temp = lista[j];
              p.text-white.mb-1      lista[j] = lista[j + 1];
              p.text-white.mb-1      lista[j + 1] = temp;
              p.text-white.mb-1    }
              p.text-white.mb-1    }
              p.text-white.mb-1  }
              p.text-white.mb-1  return lista;
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-3.text-center #[b Recorrido]
          p.mb-2 Consiste en visitar cada elemento de una estructura.
          p.mb-2 Ejemplo

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 let numeros = [1,2,3];
              p.text-white.mb-1  numeros.forEach(n => console.log(n));          

    p.mb-0 Las estructuras de datos y algoritmos permiten organizar mejor la información, optimizar el rendimiento de los programas y resolver problemas de manera eficiente, comprender las estructuras de datos y los algoritmos es esencial para desarrollar #[i software] eficiente y de calidad en JavaScript.

    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Estructuras de datos

    p.mb-4 Generalmente, al desarrollar programas, se declaran e inicializan variables para realizar diferentes operaciones. Estas resultan muy útiles para almacenar de manera temporal valores que serán utilizados durante la ejecución del programa. En esta sección se estudian los arreglos, los cuales ofrecen la posibilidad de contar con un contenedor de valores u objetos de un mismo tipo. Son especialmente útiles cuando se requiere almacenar un conjunto de datos homogéneos, como por ejemplo calificaciones, nombres de personas o temperaturas; los ejemplos pueden ser muy diversos. Sin duda, en muchos casos, el uso de arreglos facilitará las operaciones en los programas que se desarrollen.
    .BG01.px-5
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-8
              .tarjeta--fondo4.p-2.mb-3
                p.mb-0.text-center.text-white Ejemplo:
                p.mb-0.text-center.text-white String[] arregloTextos = new String[7];
              p Para definir un arreglo, se indica el tipo de dato que contendrá. Luego, se agregan corchetes de apertura y cierre [ ].
              p En el anterior ejemplo, se utiliza String[] como tipo de arreglo. Posteriormente, se escribe el nombre con el cual se identificará el arreglo. Se añade el operador de asignación =, seguido de la palabra reservada new, y nuevamente el tipo de dato con sus corchetes, pero esta vez indicando dentro de ellos la longitud del arreglo. Para este caso, new String[7].
              p.mb-0 Un aspecto importante a considerar es que los arreglos pueden ser de cualquier tipo, incluyendo datos primitivos.
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema4/img5.png", alt="alt").img400.m-auto
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.text-center
        .titulo3.p-4(data-aos="fade-left")
          p Ejemplo de Arreglos en java:
    .row.justify-content-center.align-items-center.mb-4
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
        .cajon-color-primario.p-4.mb-5
          p.mb-3 Explicación:
          ul.lista-ul
            li
              i.fas.fa-cloud-arrow-down
              | int[] numeros → Declara un arreglo de enteros.
            li
              i.fas.fa-cloud-arrow-down
              | {10, 20, 30, 40, 50} → Inicializa el arreglo con valores.
            li
              i.fas.fa-cloud-arrow-down
              | numeros[0] → Accede al primer elemento (los índices empiezan en 0).
            li
              i.fas.fa-cloud-arrow-down
              | numeros.length → Obtiene el tamaño del arreglo.
            li
              i.fas.fa-cloud-arrow-down
              | El for permite recorrer todos los elementos.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema4/img6.png", alt="alt").img400.m-auto
      .col-lg-5
        .titulo.mb-3(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Matrices

        p En JavaScript, las matrices son una estructura de datos bidimensional que se implementan como un arreglo de arreglos. Esto permite organizar la información en forma de filas y columnas, similar a una tabla.
        p.mb-0 Ejemplo:
        .row
          .col-lg-5
            .tarjeta--fondo5.p-3
              p.text-white.mb-1 let matriz = [
              p.text-white.mb-1    [1, 2, 3],
              p.text-white.mb-1    [4, 5, 6],
              p.text-white.mb-1    [7, 8, 9]
              p.text-white.mb-1  ];   
    p.mb-4 Partiendo de lo anterior, se describen los aspectos fundamentales para trabajar con matrices en JavaScript, desde el acceso y recorrido de sus elementos hasta sus aplicaciones más comunes y algunas buenas prácticas que facilitan un uso correcto y eficiente de esta estructura de datos:
    
    .row.justify-content-center.BG02.p-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema4/img7.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Acceso a elementos]
            p.mb-3 Para acceder a un elemento se utilizan dos índices: fila y columna.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white matriz[0][1]; // Accede al valor 2
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Recorrido de una matriz]
            p.mb-3 Para recorrer una matriz se utilizan ciclos anidados.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white for (let i = 0; i < matriz.length; i++) {
                p.mb-0.text-white    for (let j = 0; j < matriz[i].length; j++) {
                p.mb-0.text-white      console.log(matriz[i][j]);
                p.mb-0.text-white    }
                p.mb-0.text-white  }
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Modificación de valores]
            p.mb-3 Los valores de una matriz pueden modificarse accediendo a su posición.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white matriz[1][2] = 10;
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Aplicaciones prácticas]
            p.mb-3 Las matrices se utilizan en múltiples escenarios como:            
            p.mb-0 o Representación de tablas de datos.
            p.mb-0 o Juegos (tableros).
            p.mb-0 o Procesamiento de imágenes.
            p.mb-0 o Sistemas de coordenadas.

          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Buenas prácticas]
            p.mb-0 o Mantener filas del mismo tamaño.
            p.mb-0 o Validar índices antes de acceder.
            p.mb-0 o Usar nombres descriptivos.
            p.mb-0 o Evitar estructuras desordenadas.
    
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Métodos de ordenamiento

    p Los métodos de ordenamiento son algoritmos fundamentales en programación que permiten organizar los elementos de un arreglo en un orden específico, ya sea ascendente o descendente. En el desarrollo de #[i software], el ordenamiento es clave para optimizar búsquedas, mejorar el rendimiento y facilitar el análisis de datos.
    p.mb-4 Los algoritmos de ordenamiento se utilizan en múltiples escenarios reales, como, por ejemplo:
    .row.mb-4
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img8.svg' alt="Imagen decorativa")
        p.text-center Listas de usuarios.
      .col-lg.col-md-6.tarjeta--tabla3.p-4(data-aos="flip-right")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img9.svg' alt="Imagen decorativa")
        p.text-center Sistemas de reportes.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img10.svg' alt="Imagen decorativa")
        p.text-center Procesamiento de datos.
      .col-lg.col-md-6.tarjeta--tabla3.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img11.svg' alt="Imagen decorativa")
        p.text-center Bases de datos.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema4/img12.svg' alt="Imagen decorativa")
        p.text-center Aplicaciones #[i web] y móviles.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p.mb-0 Un buen algoritmo de ordenamiento puede reducir significativamente el tiempo de ejecución de un programa.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Tipos de algoritmos de ordenamiento
    p.mb-4 Existen dos grandes categorías:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta-bg5
            .p-4
              p Algoritmos simples (O(n²))
              p Fáciles de entender, pero menos eficientes.
      .col-lg-6
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema4/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta-bg5
            .p-4
              p Algoritmos eficientes (O(n log n))
              p Usados en aplicaciones reales.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Bubble Sort (Ordenamiento burbuja)
    p Este algoritmo compara elementos adyacentes e intercambia sus posiciones si están en el orden incorrecto.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.text-center
        .titulo3.p-4(data-aos="fade-left")
          p Complejidad: O(n²).
    p.mb-4.text-center Ejemplo
    .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #81d4fa;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #b39ddb;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #4dd0e1;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 function burbuja(arr) {
                p.text-white.ms-2.mb-1 for (let i = 0; i < arr.length; i++) {
                p.text-white.ms-3.mb-1 for (let j = 0; j < arr.length - 1; j++) {
                p.text-white.ms-4.mb-1 if (arr[j] > arr[j + 1]) {
                p.text-white.ms-5.mb-1 let temp = arr[j];
                p.text-white.ms-5.mb-1 arr[j] = arr[j + 1];
                p.text-white.ms-5.mb-1 arr[j + 1] = temp;
                p.text-white.ms-4.mb-1 }
                p.text-white.ms-3.mb-1 }
                p.text-white.ms-2.mb-1 }
                p.text-white.ms-2.mb-1 return arr;
                p.text-white.mb-1 } // Fin de la función burbuja

    p.mb-4.text-center Estos algoritmos se dividen de la siguiente manera y se explican sus respectivas acciones:
    SlyderB.tarjeta--fondo3.p-4.mb-5(:datos="datosSlyder")
    p.mb-4 Basado en lo anterior, se resume y relaciona la comparación de algoritmos:
    .row.mb-5
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-right")
        p.text-center #[b Burbuja]
        p.text-center O(n²) - simple.
      .col-lg.col-md-6.tarjeta--tabla3.p-4(data-aos="flip-right")
        p.text-center #[b Selección]
        p.text-center O(n²) - básico.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="flip-left")
        p.text-center #[b Inserción]
        p.text-center O(n²) - eficiente en datos pequeños.
      .col-lg.col-md-6.tarjeta--tabla3.p-4(data-aos="fade-left")
        p.text-center #[b QuickSort]
        p.text-center O(n log n) - rápido en la práctica.
      .col-lg.col-md-6.tarjeta--tabla.p-4(data-aos="fade-left")
        p.text-center #[b MergeSort]
        p.text-center O(n log n) - estable y eficiente.
    .row.justify-content-center.align-items-center
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img19.png' alt='AvatarTop')
      .col-lg-6
        .titulo.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Método sort() en JavaScript
        p.mb-4 JavaScript incluye un método nativo para ordenar arreglos:
        .tarjeta--fondo4.p-2.mb-4
          p.mb-0.text-white.text-center array.sort((a,b)=>a-b);
        p.mb-0 Este método utiliza algoritmos optimizados internamente, por lo que es el más recomendado en la mayoría de los casos.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Métodos de búsqueda para datos numéricos, textos y registros

    p.mb-4 En el desarrollo de #[i software], uno de los problemas más frecuentes consiste en localizar información dentro de un conjunto de datos. Este proceso se conoce como búsqueda y es fundamental en prácticamente cualquier aplicación informática, desde sistemas simples hasta plataformas complejas que manejan grandes volúmenes de información.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon-color-primario.mb-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-7
              p.mb-4
              p.mb-4 En JavaScript, los métodos de búsqueda permiten encontrar elementos específicos dentro de estructuras de datos, como arreglos u objetos. Estos elementos pueden ser de diferentes tipos, tales como datos numéricos, cadenas de texto o registros más complejos (por ejemplo, objetos que representan usuarios, productos o transacciones).
              p.mb-4 La importancia de los métodos de búsqueda radica en que permiten acceder de manera eficiente a la información, lo cual impacta directamente en el rendimiento y la experiencia del usuario. Por ejemplo, en una aplicación #[i web], cada vez que un usuario busca un producto, filtra resultados o accede a un registro específico, se está utilizando algún tipo de algoritmo o método de búsqueda.
            .col-lg-3
              figure
                img(src='@/assets/curso/temas/tema4/img20.svg' alt='AvatarTop')   
        p.mb-4 Existen diferentes enfoques para realizar búsquedas, los cuales varían según la estructura de los datos y el contexto del problema. Entre los más comunes se encuentran:
        
        ol.lista-ol--cuadro
          li
          .lista-ol--cuadro__vineta
            span 1
          |  Búsqueda lineal, que recorre todos los elementos hasta encontrar el valor deseado.
          hr.mb-3
          .lista-ol--cuadro__vineta
            span 2
          |  Búsqueda binaria, que es más eficiente, pero requiere que los datos estén previamente ordenados.
          hr.mb-3
          .lista-ol--cuadro__vineta
            span 3
          |  Métodos nativos de JavaScript como find(), filter(), includes() e indexOf(), que facilitan la búsqueda sin necesidad de implementar algoritmos desde cero.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img21.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Cuando se trabaja con datos numéricos, la búsqueda suele centrarse en encontrar valores específicos o rangos dentro de listas. En el caso de datos de texto, es común buscar coincidencias exactas o parciales dentro de cadenas. Por otro lado, cuando se manejan registros (objetos), la búsqueda puede implicar condiciones más complejas, como encontrar un objeto que cumpla ciertos criterios en una o varias de sus propiedades.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Además, en el contexto profesional, no solo es importante encontrar los datos, sino hacerlo de manera eficiente y escalable. A medida que el volumen de información crece, elegir el método de búsqueda adecuado se vuelve crucial para evitar problemas de rendimiento.
        p.mb-0 En JavaScript moderno, el uso de funciones de orden superior y métodos de los arreglos ha simplificado considerablemente la implementación de algoritmos de búsqueda, permitiendo escribir código más limpio, legible y mantenible. No obstante, comprender los principios que los sustentan sigue siendo fundamental para tomar decisiones informadas y optimizar soluciones en escenarios de mayor complejidad.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
          .tarjeta-bg6.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-auto.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema4/img22.svg', width='180', alt='Texto que describa la imagen')
              .col-lg-10
                p.mb-0 En conclusión, los métodos de búsqueda en JavaScript constituyen una herramienta fundamental para el manejo de datos, ya que permiten localizar, filtrar y procesar información de manera eficiente, siendo una base clave en el desarrollo de aplicaciones modernas.
  
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Selection Sort',
        texto:
          'Busca el valor mínimo del arreglo y lo coloca en la posición correcta. Complejidad: O(n²). Uso: útil para aprendizaje y estructuras pequeñas.',
        imagen: require('@/assets/curso/temas/tema4/img15.png'),
      },
      {
        titulo: 'Insertion Sort',
        texto:
          'Inserta cada elemento en su posición adecuada dentro de una lista parcialmente ordenada. Complejidad: O(n²). Ventaja: eficiente en listas pequeñas o casi ordenadas.',
        imagen: require('@/assets/curso/temas/tema4/img16.png'),
      },
      {
        titulo: 'QuickSort',
        texto:
          'Algoritmo basado en la técnica “divide y vencerá”. Utiliza un pivote para dividir el arreglo. Complejidad promedio: O(n log n). Es uno de los algoritmos más utilizados en sistemas reales.',
        imagen: require('@/assets/curso/temas/tema4/img17.png'),
      },
      {
        titulo: 'MergeSort',
        texto:
          'Divide el arreglo en partes iguales, las ordena y luego las combina. Complejidad: O(n log n) Ventaja: rendimiento estable incluso con grandes volúmenes de datos.',
        imagen: require('@/assets/curso/temas/tema4/img18.png'),
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
