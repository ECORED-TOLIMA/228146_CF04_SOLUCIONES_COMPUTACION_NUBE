<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sintaxis y estructuras de programación en JavaScript
    
    p(data-aos="flip-up") JavaScript es un lenguaje de programación que mejora HTML al agregar animaciones, interactividad y efectos visuales dinámicos. Permite una retroalimentación automática en las páginas #[i web]; es decir que todos códigos que son agregados a una página #[i web] se reflejan inmediatamente. JavaScript puede crear interfaces interactivas, como presentaciones animadas y consejos emergentes, adicionalmente es considerado como el lenguaje fundamental en el desarrollo de #[i software] actual, especialmente en aplicaciones #[i web]. Comprender su sintaxis y estructuras de programación es esencial para construir soluciones eficientes, mantenibles y escalables.
    p.mb-4(data-aos="flip-up") La siguiente imagen ejemplifica este proceso: 
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12(data-aos="flip-up")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span Interactividad Zajuna
    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="flip-up")
        .d-none.d-lg-block
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img1.png', alt='Infografía de matriz RACI')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img1_1.png', alt='Matriz RACI para dispositivos móviles')
    p.mb-4 Un ejemplo concreto es la página Zajuna del SENA, donde gran parte de la interactividad se soporta en JavaScript. Gracias a ello, es posible encontrar efectos dinámicos como el resaltado de textos, sombras, animaciones y movimiento de imágenes, entre otros elementos que mejoran la experiencia del usuario.
    p.mb-4 Zajuna es una plataforma #[i web] interactiva que:
    .row.justify-content-center.mb-4
      .col-lg-3
        .tarjeta-bg6.p-4.h-100
          p.mb-0.text-center Permite iniciar sesión.
      .col-lg-3
        .tarjeta--fondo1.p-4.h-100
          p.mb-0.text-center Permite gestionar cursos, usuarios y contenido.
      .col-lg-3
        .tarjeta-bg6.p-4.h-100
          p.mb-0.text-center Navegar entre cursos.
      .col-lg-3
        .tarjeta--fondo1.p-4.h-100
          p.mb-0.text-center Mostrar contenido dinámico.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p Todo eso requiere JavaScript para funcionar correctamente.
        p.mb-4 Adicionalmente, JavaScript trasciende el ámbito de las páginas #[i web], ya que puede emplearse en aplicaciones como Yahoo! Widgets, Google Apps y en la automatización de tareas dentro de #[i software] de Adobe, entre otros usos. Asimismo, ha ganado relevancia en el desarrollo del lado del servidor mediante plataformas como Node.js, lo que amplía las oportunidades para el desarrollo full-stack utilizando un solo lenguaje.
        .row.justify-content-center.align-items-center.mb-4
            .col-lg-12
              .bloque-texto-gg.color-primario
                .bloque-texto-gg__texto1.p-4
                  p.mb-3 Con JavaScript se puede crear:
                  ul.lista-ul
                    li
                      i.fas.fa-cloud-arrow-down
                      | Páginas #[i web].
                    li
                      i.fas.fa-cloud-arrow-down
                      | Aplicaciones móviles.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Sistemas completos (frontend + backend).
                    li
                      i.fas.fa-cloud-arrow-down
                      | Juegos.
                    li
                      i.fas.fa-cloud-arrow-down
                      | Programas de escritorio.

                .bloque-texto-gg__img1(
                  :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img2.svg')})`}"
                )
        p.mb-4 Este conocimiento permite abordar proyectos de #[i software] de forma estructurada y eficiente; además, su comprensión facilita la resolución de problemas complejos en entornos reales de desarrollo. En el contexto actual del desarrollo de #[i software], estas habilidades son altamente valoradas y demandadas en la industria tecnológica.
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Estructura de programación en JavaScript 
        p.mb-4 Para entender esta estructura, se relaciona el siguiente ejemplo de un código de un programa en Java, seguido de su debida explicación:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 MiClase.java
                p.text-white.mb-1 class MiClase { 
                p.text-white.mb-2 public static void main(String[] args){ 
                p.text-white.ms-3.mb-4  System.out.println(“Hola mundo”);
                p.text-white.ms-2.mb-1    } // Fin del método main 
                p.text-white.ms-1.mb-2   } // Fin de la clase MiClase
                p.text-white.mb-1 Hola mundo
          figcaption #[b Nota:] escriba el código del ejemplo anterior en un editor de texto plano, guarde el archivo con el nombre y extensión.            
        .tarjeta-bg3.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              img(src="@/assets/curso/temas/tema3/img3.svg", alt="alt").img100.m-auto
            .col-lg-10
              p MiClase.java
              p.mb-0 Es importante respetar las letras en mayúsculas y las letras en minúsculas; es decir, el nombre del archivo debe ser exactamente el que se muestra en la línea 1, así también, la extensión debe ser .java. Como cualquier nuevo conocimiento, conforme se realicen más ejercicios, poco a poco se irá familiarizando con la estructura general de los programas en Java. 
    p.mb-4.text-center A continuación, se da la explicación de cada línea del código:
    .BG05.px-5.py-3.p-4.mb-4
      .tarjeta--fondo2.p-4
        PasosB.color-acento-botones
          .row(titulo="")

            .col-lg-6.col-12.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img4.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h5 Línea 1: class MiClase {
              p Marca el inicio de la definición de la clase MiClase. En Java, todo programa debe contar con al menos una clase. Para declarar dicha clase se utiliza la palabra reservada class, seguida del nombre que identificará la clase. Las palabras reservadas siempre se escriben en minúsculas y son exclusivas del lenguaje Java. Finalmente, la llave de apertura { indica que, a partir de ese punto, todo el contenido pertenece a esa clase.

          .row(titulo="")
            .col-lg-6.col-12.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img5.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h5 Línea 2: public static void main(String[] args){
              p Corresponde al método que se ejecuta para iniciar el programa. Por ahora no es necesario comprender completamente esta línea; a medida que se avance en el aprendizaje, se entenderá el significado de cada una de sus partes. Lo importante es reconocer que todo programa en Java necesita una clase, y dentro de ella debe existir un método main para poder ejecutarse. Al final de la línea se observa nuevamente una llave de apertura {, la cual señala el comienzo de las instrucciones que ejecutará el programa.

          .row(titulo="")
            .col-lg-6.col-12.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img6.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h5 Línea 3: System.out.println(“Hola mundo”);
              p Se encarga de mostrar el texto Hola mundo en la pantalla. Es importante notar que, al ejecutar el programa, el mensaje aparece sin las comillas dobles. En Java, las cadenas de texto se escriben entre comillas dobles. Aunque aún no se comprenda cada parte de esta instrucción, con el tiempo se logrará entender en detalle. Por ahora, si se desea imprimir texto en pantalla, basta con utilizar la instrucción mostrada en esta línea.

          .row(titulo="")
            .col-lg-6.col-12.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img7.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h5 Línea 4: } // Fin del método main
              p Inicia con una llave de cierre }, lo cual indica el término de las instrucciones que forman parte del método main. Al utilizar dos barras diagonales //, todo el contenido que sigue en esa misma línea es ignorado por el compilador de Java. Esto se conoce como comentario de línea y se utiliza para añadir aclaraciones o información que facilite la comprensión del código.

          .row(titulo="")
            .col-lg-6.col-12.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img8.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              h5 Línea 5: } // Fin de la clase MiClase
              p Comienza también con una llave de cierre }, indicando el final del cuerpo de la clase MiClase. Esta línea incluye un comentario de línea, por lo que todo el texto que aparece después de las dos barras diagonales // será ignorado por el compilador hasta que se llegue a la siguiente línea. Todos los programas en Java seguirán esta misma estructura.
    p.mb-4.text-center Por otra parte, los símbolos en Java son importantes, pues son la estructura del programa como tal y para que su ejecución se dé, se tiene lo siguiente:
    SlyderF(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img9.svg' alt='AvatarTop')
        h5.text-center Los paréntesis ()
        p Los paréntesis cumplen dos funciones principales en un programa Java, las cuales son:
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Delimitan listas de parámetros en los métodos.
          li.mb-0 #[b •] Alteran la prioridad en una expresión aritmética.

      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h5.text-center Las llaves {}
        p Las llaves en el lenguaje de programación Java se utilizan en los siguientes casos:
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Definen un bloque de código, el cual puede estar anidado.
          li.mb-0 #[b •] Permiten declarar valores iniciales de los arreglos, separados por comas.

      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
        h5.text-center Los corchetes []
        p Los corchetes se emplean en un programa Java para:
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Declarar arreglos (vectores).
          li.mb-0 #[b •] Acceder a los elementos de los arreglos.

      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
        h5.text-center El punto y coma «;»
        p El punto y coma indica el final de una instrucción en un programa Java.
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Finaliza una línea de código.

      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img13.svg' alt='AvatarTop')
        h5.text-center La coma «,»
        p La coma se utiliza para:
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Separar identificadores en declaraciones.

      .tarjeta.tarjeta-bg2.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/curso/temas/tema3/img14.svg' alt='AvatarTop')
        h5.text-center El punto «.»
        p El punto en un programa Java se utiliza para:
        ul.lista-ul.mb-0
          li.mb-0 #[b •] Acceder a métodos de una clase instanciada.
          li.mb-0 #[b •] Referenciar subpaquetes dentro de un paquete.

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Tipos de datos, operadores y orden de evaluación
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este apartado introduce los conceptos fundamentales relacionados con los tipos de datos, los operadores y las reglas que determinan el orden en que se evalúan las expresiones, elementos esenciales para comprender cómo se procesan y ejecutan las instrucciones dentro de un programa.
    
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Tipos de datos
    p.mb-4 Los tipos de datos permiten establecer cómo se representan y gestionan los valores dentro de un programa, facilitando la organización de la información y el correcto procesamiento de las operaciones durante la ejecución del #[i software]. Dentro de ellos se encuentran:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo2.p-3.mb-4(data-aos="fade-left")
          h5 a) Tipos de datos primitivos
        p.mb-4 Los tipos de datos utilizados en el lenguaje de programación Java, conocidos como tipos de datos primitivos, incluyen para números enteros: byte, short, int y long; para números reales: float y double; para valores lógicos: boolean; y para caracteres: char. El tamaño de estos tipos de datos primitivos está definido por la plataforma Java y se clasifican de la siguiente manera:
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-12
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4.
              span Clasificación tipos de datos primitivos
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            .tabla-a.color-acento-contenido 
              .tabla-a   
                table
                  thead
                    tr.tarjeta-bg7
                      th Tipo
                      th Primitiva
                      th Definición
                  tbody
                    tr
                      th.text-center(rowspan="4") Entero
                      td byte
                      td Entero en complemento a dos.
                    tr
                      td short
                      td con signo de 8 bits.
                    tr
                      td int
                      td con signo de 16 bits.
                    tr
                      td long
                      td con signo de 32 bits.
                    tr
                      th.text-center(rowspan="2") Real
                      td float
                      td con signo de 64 bits.
                    tr
                      td double
                      td la norma IEEE 754 de 32 bits.
        p.mb-0 Es posible encapsular los tipos de datos primitivos para manejarlos como cualquier otro objeto en Java. Por ejemplo, existe una clase envolvente para el tipo primitivo int llamada integer. La utilidad de estas clases envolventes se comprenderá mejor al estudiar las clases contenedoras de datos.
    .tarjeta-bg6.p-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/tema3/img16.svg' alt='AvatarTop')
        .col-lg-10
          p.mb-4 Ejemplos de declaración de variables:
          p.mb-0 La declaración de variables en un programa Java se realiza utilizando el siguiente formato: tipo variables; 
          p.mb-0 int a; (declara la variable entera a).
          p.mb-0 int a, b; (declara las variables enteras a y b).
          p.mb-0 int a, b, c; (declara las variables enteras a, b y c).
          p.mb-0 int a=0; (declara la variable entera y la inicializa con valor cero).
          p.mb-0 float a=0.0f, b=5.0f; (declara las variables reales a y b y las inicializa a la variable a en 0.0 y a la variable b en 5.0).
          p.mb-0 Nota: en el caso de solo las variables float, cuando se inicializa la variable con un valor real este valor debe terminar en f de float.
          p.mb-0 doublé a=0.0, b=0.0; (declara las variables reales a y b y las inicializa con valor cero, no requiere de ninguna letra en el valor cero).
          p.mb-0 boolean sw; (declara la variable lógica sw).
          p.mb-0 char letra = ‘a’; (declara la variable char letra y la inicializa con el valor de a minúscula, observe que el valor a està entre apóstrofes).
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo2.p-3.mb-4(data-aos="fade-left")
          h5 b) Tipos de datos referencia
        p En Java, los objetos (instancias de clases) se gestionan mediante referencias. Cuando se crea una nueva instancia de una clase utilizando el operador new, este retorna una referencia del tipo de la clase. Para comprenderlo mejor, se relaciona un ejemplo:
        p.mb-4 Se tiene definida e implementada una clase llamada factorial, como se muestra a continuación:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                p.text-white.mb-1 public class Factorial {
                p.text-white.ms-2.mb-1 // Atributos
                p.text-white.ms-2.mb-1 int n, fact;
                p.text-white.ms-2.mb-1 // Metodos
                p.text-white.ms-2.mb-1 public void EstablecerNumero(int n1) {
                p.text-white.ms-3.mb-1 n = n1;
                p.text-white.ms-2.mb-1 }
                p.text-white.ms-2.mb-1 public void CalcularFactorial() {
                p.text-white.ms-3.mb-1 fact = 1;
                p.text-white.ms-3.mb-1 for (int i = 1; i <= n; i++) {
                p.text-white.ms-4.mb-1 fact = fact * i;
                p.text-white.ms-3.mb-1 }
                p.text-white.ms-2.mb-1 }
                p.text-white.ms-2.mb-1 public int ObtenerFactorial() {
                p.text-white.ms-3.mb-1 return fact;
                p.text-white.ms-2.mb-1 }
                p.text-white.mb-1 } // Fin de la clase Factorial
        p.mb-4 Y en la clase de aplicación, se tiene el siguiente código de programa:
        .tarjeta.color-primario.p-0.mt-3.overflow-hidden.mb-4
          .px-3.py-2(style="background-color: #311a6a; display: flex; align-items: center;")
            .d-flex
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #69D7E5;")
              .circle.me-1(style="width: 12px; height: 12px; border-radius: 50%; background-color: #6CB9FF;")
              .circle(style="width: 12px; height: 12px; border-radius: 50%; background-color: #FFD453;")
          .p-4(style="background-color: #0d0d2b;")
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                  p.text-white.mb-1 EjecutaFactorial.java
                  p.text-white.mb-1 import java.util.Scanner;
                  p.text-white.mb-1 public class EjecutaFactorial {
                  p.text-white.ms-2.mb-1 public static void main(String[] args) {
                  p.text-white.ms-3.mb-1 // atributos 
                  p.text-white.ms-3.mb-1 int n;
                  p.text-white.ms-3.mb-1 // establecer objeto de entrada 
                  p.text-white.ms-3.mb-1 Scanner teclado = new Scanner(System.in);
                  p.text-white.ms-3.mb-1 // Instancia de clase 
                  p.text-white.ms-3.mb-1 Factorial objFactorial = new Factorial();
                  p.text-white.ms-3.mb-1 System.out.print("Ingrese Numero: ");
                  p.text-white.ms-3.mb-1 n = teclado.nextInt();
                  p.text-white.ms-3.mb-1 objFactorial.EstablecerNumero(n);
                  p.text-white.ms-3.mb-1 objFactorial.CalcularFactorial();
                  p.text-white.ms-3.mb-1 System.out.println("***** RESULTADO *******");
                  p.text-white.ms-3.mb-1 System.out.println("El factorial es: " + objFactorial.ObtenerFactorial());
                  p.text-white.ms-2.mb-1 } // Fin del método main
                  p.text-white.mb-1 } // Fin de la clase EjecutaFactorial
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Operadores Java
    p.mb-4  Los operadores permiten realizar asignaciones, cálculos, comparaciones y evaluaciones lógicas dentro de un programa; a continuación, se explican y ejemplifican para mayor entendimiento, algunos de los más utilizados en el lenguaje Java:            
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-8
            .tarjeta--fondo1.p-4
              .titulo2.p-2.mb-4(data-aos="fade-left")
                h5 a) Operadores de asignación Java operador
              p.mb-0 = para Asignación simple,
              p.mb-0 ejemplo:
              p.mb-0 C = 8;
              p.mb-0 operador += para Asignación suma, ejemplo:
              p.mb-0 n+=5;
              p.mb-0 n=n+5;
              p.mb-0 Estos dos ejemplos dan el mismo resultado operador -= para Asignación Resta,
              p.mb-0 ejemplo: 
              p.mb-0 n-=5;
              p.mb-0 n=n-5;
              p.mb-0 Estos dos ejemplos dan el mismo resultado:
              p.mb-0 operador *= para Asignación Multiplicación, ejemplo:
              p.mb-0 n*=5; 
              p.mb-0 n=n*5; 
              p.mb-0 Estos dos ejemplos dan el mismo resultado operador /= para Asignación División, ejemplo:  
              p.mb-0 n/=5;   
              p.mb-0 n= n/5; 
              p.mb-0 Estos dos ejemplos dan el mismo resultado operador % = para Asignación Módulo, ejemplo: 
              p.mb-0 n%=5;
              p.mb-0 n=n%5;
              p.mb-0 Estos dos ejemplos dan el mismo resultado
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img17.svg' alt='AvatarTop')
    .BG01.px-5.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-10
          .titulo2.p-2.mb-3(data-aos="fade-left")
            h5 b) Operadores aritméticos Java
          p.mb-0 operador + para Suma, ejemplo c=a+b
          p.mb-0 operador - para Resta, ejemplo c=a-b
          p.mb-0 operador * para Multiplicación, ejemplo c=a*b
          p.mb-0 operador / para División, ejemplo c=a/b
          p.mb-0 operador % para Modulo (resto), ejemplo c=a%b 
          p.mb-4 operador ++ para Incrementar, ejemplo a++ ; significa a=a+1 operador -- para Decrementar, ejemplo a--; significa a=a-1
          .row.justify-content-center.align-items-center
            .col-lg-5.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img18.png' alt='AvatarTop') 
            .col-lg-7
              .titulo2.p-2.mb-3(data-aos="fade-left")
                h5 c) Operadores relacionales Java
              p.mb-0 operador < para Menor a operador > para Mayor a
              p.mb-0 operador <= para Menor o igual a 
              p.mb-0 operador >= para Mayor o igual a 
              p.mb-0 operador == para Igual a  
              p.mb-2 operador != para Diferente a

              .titulo2.p-2.mb-3(data-aos="fade-left")
                h5 d) Operadores lógicos Java
              p.mb-0 operador !  para No (Complemento
              p.mb-0 operador && para y (And)}
              p.mb-0 operador || para o (or)
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Orden de evaluación 
    p.mb-3 En JavaScript se refiere a la forma en que el intérprete determina qué partes de una expresión se ejecutan primero y en qué secuencia. Esto es importante porque puede influir directamente en el resultado de una operación. Dentro de ellos se encuentran:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          .row(numero="A" titulo="Precedencia de operadores")
            p.mb-1 JavaScript utiliza reglas de precedencia para definir qué operadores se evalúan primero.
            p.mb-1 #[b Ejemplo:]
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let resultado = 2 + 3 * 4;
                p.mb-0.text-white Primero se realiza la multiplicación (3 * 4 = 12), luego la suma (2 + 12 = 14).
                    
          .row(numero="B" titulo="Asociatividad")
            p.mb-1 Cuando los operadores tienen la misma precedencia, se aplica la asociatividad.
            p.mb-1 #[b Ejemplo:]
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let resultado = 10 - 5 - 2;
                p.mb-0.text-white Se evalúa de izquierda a derecha: (10 - 5) = 5, luego 5 - 2 = 3.
                    
          .row(numero="C" titulo="Uso de paréntesis")
            p.mb-1 Los paréntesis permiten modificar el orden de evaluación.
            p.mb-1 #[b Ejemplo:]
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let resultado = (2 + 3) * 4;
                p.mb-0.text-white Primero se resuelve el paréntesis (2 + 3 = 5) y luego la multiplicación (5 * 4 = 20).
                    
          .row(numero="D" titulo="Evaluación de izquierda a derecha")
            p.mb-1 En general, las expresiones se evalúan de izquierda a derecha respetando la precedencia.
            p.mb-1 #[b Ejemplo:]
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white console.log(1 + 2 * 3);
                    
          .row(numero="E" titulo="Evaluación corta (Short-circuit)")
            p.mb-1 Algunos operadores lógicos detienen la evaluación anticipadamente.
            p.mb-1 #[b Ejemplo:]
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white false && console.log('Hola');
                p.mb-0.text-white El mensaje no se ejecuta porque el resultado ya es false.
      .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img19.png', alt='')
    .row.justify-content-center.align-items-center
      .col-lg-10
        .bloque-texto-gg.color-primario
          .bloque-texto-gg__texto1.p-4
             p.mb-3 En conclusión, orden de evaluación depende de:
             ul.lista-ul
              li
                i.fas.fa-cloud-arrow-down
                | La precedencia de operadores.
              li
                i.fas.fa-cloud-arrow-down
                | La asociatividad.
              li
                i.fas.fa-cloud-arrow-down
                | El uso de paréntesis.
                li
                i.fas.fa-cloud-arrow-down
                | La evaluación lógica (short-circuit).

          .bloque-texto-gg__img1(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img20.svg')})`}"
          )          
                  
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Expresiones, funciones y comentarios

    p.mb-4 Este apartado aborda los elementos básicos que permiten construir instrucciones significativas en JavaScript, organizar la lógica del programa y documentar el código, facilitando su comprensión, reutilización y mantenimiento dentro del proceso de desarrollo de #[i software].

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Expresiones
        p.mb-4 En JavaScript, una expresión es cualquier fragmento de código que produce un valor. Las expresiones son la base de la programación, ya que permiten realizar cálculos, comparaciones, asignaciones y evaluaciones lógicas dentro de un programa.
        p.mb-0 Los siguientes, son los tipos de expresiones:
    
    .row.justify-content-center.BG02.p-4
      .col-lg-4.d-none.d-lg-block
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema3/img21.png", alt="alt").img400.m-auto
      .col-lg-8
        p.mb-5
        SlyderF.custom.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones aritméticas]
            p.mb-3 Se utilizan para realizar operaciones matemáticas como suma, resta, multiplicación y división.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let resultado = 5 + 3 * 2; // Resultado: 11
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones relacionales]
            p.mb-3 Sirven para comparar valores y devuelven un resultado booleano (true o false).
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let esMayor = 10 > 5; // true
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones lógicas]
            p.mb-3 Permiten combinar condiciones utilizando operadores como AND (&&), OR (||) y NOT (!).
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let valido = (10 > 5) && (3 < 8); // true
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones de asignación]
            p.mb-3 Se usan para asignar valores a variables.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let x = 10;
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones de cadena]
            p.mb-3 Permiten trabajar con texto (strings).
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white let saludo = 'Hola ' + 'mundo';
          .tarjeta.tarjeta--slyder.p-4
            p.mb-3 #[b • Expresiones de función]
            p.mb-3 Son funciones definidas dentro de una expresión.
            p.mb-3 Ejemplo:
            .p-2
              .tarjeta--fondo4.p-2
                p.mb-0.text-white const suma = function(a, b) { return a + b; };
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta--fondo1.p-4.mb-4
          p.mb-2 Las expresiones en JavaScript se evalúan siguiendo reglas de precedencia, asociatividad y uso de paréntesis.
          p.mb-2 Ejemplo:
          p.mb-0.text-white.tarjeta--fondo4.p-2 let resultado = (2 + 3) * 4; // 20
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5
            p.mb-2 Los siguientes son algunos ejercicios prácticos:
            p.mb-0 #[b Ejercicio 1]
            p.mb-0 let a = 10 + 5 * 2; // ¿Cuál es el resultado?
            p.mb-0 #[b Ejercicio 2]
            p.mb-0 let b = (10 + 5) * 2; // ¿Cuál es el resultado?
            p.mb-0 #[b Ejercicio 3]
            p.mb-0 let c = (5 > 3) && (2 < 1); // ¿Cuál es el resultado?
          .col-lg-7.d-none.d-lg-block
            figure
              img(src="@/assets/curso/temas/tema3/img22.png", alt="alt").img400.m-auto
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/img23.svg", alt="alt").img400.m-auto
      .col-lg-9
        .titulo.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
          h5 Funciones
        p.mb-3 En JavaScript, una función es un bloque de código diseñado para realizar una tarea específica. Las funciones permiten reutilizar código, organizar mejor los programas y facilitar el mantenimiento.
        p.mb-3 Una función se define utilizando la palabra reservada function, seguida de un nombre, paréntesis y un bloque de código.
        .p-4.tarjeta--fondo4
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                  p.text-white.mb-1 Ejemplo:
                  p.text-white.mb-1 function saludar() {
                  p.text-white.mb-1   console.log('Hola mundo');
                  p.text-white.mb-1 }
    p.mb-4 Las siguientes son las funciones más destacadas y sus ejemplificaciones:
    .row.justify-content-center.mb-4
      .col-lg-4.mb-3
        .cajon-color-primario.p-4.h-100
          p.mb-3 #[b Funciones con parámetros]
          p.mb-0 Las funciones pueden recibir datos de entrada llamados parámetros.
          p.mb-0 #[b Ejemplo: ]
          .tarjeta--fondo5.p-2
            p.mb-0.text-white function sumar(a, b) {
            p.mb-0.text-white  return a + b;
            p.mb-0.text-white }
      .col-lg-4.mb-3
        .tarjeta-bg1.p-4.h-100
          p.mb-3 #[b Funciones con retorno]
          p.mb-0 Una función puede devolver un valor utilizando la palabra return.
          p.mb-0 #[b Ejemplo: ]
          .tarjeta--fondo4.p-2
            p.mb-0.text-white let resultado = sumar(5, 3); // 8
      .col-lg-4.mb-3
        .cajon-color-primario.p-4.h-100
          p.mb-3 #[b Funciones anónimas]
          p.mb-0 Son funciones sin nombre que pueden asignarse a una variable.
          p.mb-0 #[b Ejemplo: ]
          .tarjeta--fondo5.p-2
            p.mb-0.text-white const saludo = function() {
            p.mb-0.text-white  console.log('Hola');
            p.mb-0.text-white };
      .col-lg-4.mb-3
        .tarjeta-bg1.p-4.h-100
          p.mb-3 #[b Funciones flecha (Arrow Functions)]
          p.mb-0 Son una forma más corta de escribir funciones.
          p.mb-0 #[b Ejemplo: ]
          .tarjeta--fondo4.p-2
            p.mb-0.text-white const suma = (a, b) => a + b;
      .col-lg-4.mb-3
         .cajon-color-primario.p-4.h-100
          p.mb-3 #[b Ámbito (Scope) de las funciones]
          p.mb-0 El scope define el alcance de las variables dentro de una función.
          p.mb-0 #[b Ejemplo: ]
          .tarjeta--fondo5.p-2
            p.mb-0.text-white function ejemplo() {
            p.mb-0.text-white  let x = 10;
            p.mb-0.text-white }
            p.mb-0.text-white // x no es accesible fuera de la función
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5.order-2.order-lg-1
            p.mb-2 Igualmente, se presentan los siguientes ejercicios prácticos:
            p.mb-0 #[b Ejercicio 1]
            p.mb-0 Crear una función que reciba un número y devuelva su cuadrado.
            p.mb-0 #[b Ejercicio 2]
            p.mb-0 Crear una función que reciba un nombre y muestre un saludo.
            p.mb-0 #[b Ejercicio 3]
            p.mb-0 Crear una función flecha que multiplique dos números.
          .col-lg-7.col-10.mb-4.mb-lg-0.order-1.order-lg-2
            figure
              img(src="@/assets/curso/temas/tema3/img24.png", alt="alt").img400.m-auto
        p.mb-4.text-center Comprendiendo lo que tiene que ver tanto con las expresiones, como con las funciones, se relaciona la importancia de cada una:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta--container.row
          .col-md.tarjeta.tarjeta-bg2.p-5
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema3/img25.svg', alt='Texto que describa la imagen')
              
            h5.text-center Importancia de las funciones
            p Las funciones son fundamentales en JavaScript porque permiten dividir el código en partes más pequeñas, reutilizables y fáciles de entender, comprender el uso de funciones en JavaScript es esencial para desarrollar aplicaciones eficientes y bien estructuradas.
          .col-md.tarjeta.tarjeta-bg3.p-5
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/temas/tema3/img26.svg', alt='Texto que describa la imagen')
            h5.text-center Importancia de las expresiones
            p.mb-2 Las expresiones permiten construir la lógica de un programa, realizar cálculos, evaluar condiciones y manipular datos.
            p.mb-2 Comprender las expresiones en JavaScript es fundamental para desarrollar programas eficientes. Estas permiten realizar múltiples operaciones y son esenciales en cualquier aplicación.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Comentarios
    p.mb-4 Los comentarios en el lenguaje de programación Java se utilizan para añadir anotaciones o mensajes aclaratorios dentro del código; no son ejecutados y se clasifican en tres tipos:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Comentarios de una sola línea")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Inician con los caracteres // seguidos del contenido del comentario.
              p.mb-0 #[b Ejemplo: ]
              .tarjeta--fondo4
                p.mb-0.text-white // Atributos int a,b,c; // a,b,c representan atributos enteros de la clase
          .row(titulo="Comentarios de bloques")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Comienzan con los caracteres /* en cualquier parte de la línea de código, continúan con el contenido del comentario y finalizan con los caracteres /
              p.mb-0 #[b Ejemplo: ]
              .tarjeta--fondo4
                p.mb-0.text-white /
                p.mb-0.text-white  Texto de los comentarios en bloque
                p.mb-0.text-white  / comentarios en bloque
                p.mb-0.text-white  /
                p.mb-0.text-white  xxxxxxxxxxxxxxxxxx
                p.mb-0.text-white  */
          .row(titulo="Comentarios de documentación")
            .col-md-12.mb-4.mb-md-0
              p.mb-3 Se utilizan para documentar el programa. Empiezan con los caracteres /** en cualquier parte de la línea de instrucción, luego se escribe el contenido del comentario y finalizan con los caracteres /
              p.mb-0 #[b Ejemplo: ]
              .tarjeta--fondo4
                p.mb-0.text-white /*
                p.mb-0.text-white  Texto de los comentarios de documentación
                p.mb-0.text-white  /
                p.mb-0.text-white  Este es un ejemplo de comentarios de documentación:
                p.mb-0.text-white  /* * *
                p.mb-0.text-white  @author jorger
                p.mb-0.text-white  */
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img27.png', alt='Texto que describa la imagen')
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Estructuras de selección
    p.mb-4 Las estructuras de selección en JavaScript permiten tomar decisiones dentro de un programa, ejecutando diferentes bloques de código según se cumplan o no determinadas condiciones. Las siguientes son este tipo de estructuras:
    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Estructura if")
        .px-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/tema3/img28.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p.mb-3 Se utiliza para ejecutar un bloque de código si una condición es verdadera.
                p.mb-0 #[b Ejemplo: ]
                .tarjeta--fondo4.p-3
                  p.mb-0.text-white if (x > 0) {
                  p.mb-0.text-white   console.log('Número positivo');
                  p.mb-0.text-white }
      .py-3.py-md-4(titulo="Estructura if - else")
        .px-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img29.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p.mb-3 Permite ejecutar un bloque de código si la condición es verdadera y otro si es falsa.
                p.mb-0 #[b Ejemplo: ]
                .tarjeta--fondo4.p-3
                  p.mb-0.text-white if (x > 0) {
                  p.mb-0.text-white    console.log('Positivo');
                  p.mb-0.text-white  } else {
                  p.mb-0.text-white    console.log('Negativo o cero');
                  p.mb-0.text-white  }
      .py-3.py-md-4(titulo="Estructura if - else if - else")
        .px-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img30.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p.mb-3 Se utiliza para evaluar múltiples condiciones.
                p.mb-0 #[b Ejemplo: ]
                .tarjeta--fondo4.p-3
                  p.mb-0.text-white if (x > 0) {
                  p.mb-0.text-white    console.log('Positivo');
                  p.mb-0.text-white  } else if (x < 0) {
                  p.mb-0.text-white    console.log('Negativo');
                  p.mb-0.text-white  } else {
                  p.mb-0.text-white    console.log('Cero');
                  p.mb-0.text-white  }
      .py-3.py-md-4(titulo="Estructura switch")
        .px-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img31.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p.mb-3 Permite seleccionar una opción entre múltiples casos.
                p.mb-0 #[b Ejemplo: ]
                .tarjeta--fondo4.p-3
                  p.mb-0.text-white switch (dia) {
                  p.mb-0.text-white    case 1:
                  p.mb-0.text-white      console.log('Lunes');
                  p.mb-0.text-white      break;
                  p.mb-0.text-white    case 2:
                  p.mb-0.text-white      console.log('Martes');
                  p.mb-0.text-white      break;
                  p.mb-0.text-white    default:
                  p.mb-0.text-white      console.log('Otro día');
                  p.mb-0.text-white  }
      .py-3.py-md-4(titulo="Operador ternario")
        .px-4
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema3/img32.png', alt='Texto que describa la imagen')
            .col-lg-6.mb-4.mb-md-0
              p.mb-3 Es una forma abreviada de la estructura if-else.
                p.mb-0 #[b Ejemplo: ]
                .tarjeta--fondo4.p-3
                  p.mb-0.text-white let mensaje = (x > 0) ? 'Positivo' : 'Negativo';
        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img33.svg', alt='Texto que describa la imagen')
          .col-lg-8
            p.mb-3 #[b Ejercicios propuestos:]
            ol.lista-ol--cuadro
              li
              .lista-ol--cuadro__vineta
                span 1
              |  Crear un programa que determine si un número es mayor de edad.
              li
              .lista-ol--cuadro__vineta
                span 2
              |  Crear un programa que determine el mayor de dos números.
              li
              .lista-ol--cuadro__vineta
                span 3
              |  Usar switch para mostrar el nombre de un mes según su número.
        p.mb-4 Soluciones sugeridas:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4.h-100
            .tarjeta--fondo5.p-2
              ol.lista-ol--cuadro
              li.text-white
                .lista-ol--cuadro__vineta
                  span 1
                |  if (edad >= 18) {<br>
                |    console.log('Mayor de edad');<br>
                |  } else {<br>
                |    console.log('Menor de edad');<br>
                |  }
          .col-lg-4.h-100
            .tarjeta--fondo5.p-2
              ol.lista-ol--cuadro
              li.text-white
                .lista-ol--cuadro__vineta
                  span 2
                |  if (a > b) {<br>
                |    console.log(a);<br>
                |  } else {<br>
                |    console.log(b);<br>
                |  }
          .col-lg-4.h-100
            .tarjeta--fondo5.p-2
              ol.lista-ol--cuadro
              li.text-white
                .lista-ol--cuadro__vineta
                  span 3
                |  switch (mes) {<br>
                |  case 1: console.log('Enero'); break;<br>
                |  case 2: console.log('Febrero'); break;<br>
                |  default: console.log('Otro');<br>
                |  }
        .cajon.cajon-color-primario.p-4
          p.mb-0 Las estructuras de selección son fundamentales en JavaScript, ya que permiten controlar el flujo del programa y tomar decisiones basadas en condiciones.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Estructuras de repetición (for y while)
    p.mb-4 Las estructuras de repetición permiten ejecutar un conjunto de instrucciones de manera repetida, ya sea un número determinado de veces o mientras se cumpla una condición específica. En Java, los bucles for y while son ampliamente utilizados para automatizar tareas repetitivas y controlar el flujo del programa de forma eficiente, según las necesidades de cada situación.
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Repetición sobre un rango determinado:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-3 El for es una estructura de repetición que permite ejecutar un conjunto de instrucciones tantas veces como sea necesario. Esta estructura consta de tres partes fundamentales: la variable de inicio, la condición y el incremento.
        p.mb-3 Bucle for, su sintaxis y formato es la siguiente:
        .p-2.tarjeta--fondo4.p-3
            .row.align-items-center
              .col-md-8.mb-3.mb-md-0
                  p.text-white.mb-1 for(iniciación; condición; incremento)
                  p.text-white.mb-1  {
                  p.text-white.mb-1  // Bloque de instrucciones
                  p.text-white.mb-1  }
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema3/img39.svg", alt="alt").img400.m-auto
    .BG01.px-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          p.mb-4 En la sección de iniciación se puede declarar una variable de control del ciclo, cuyo alcance estará limitado al propio bucle. Tanto en la parte de iniciación como en la de incremento se pueden incluir varias expresiones separadas por comas, pero esto no es permitido en la parte de la condición.
          p.mb-4 La condición debe ser una expresión booleana o una expresión que se evalúe como un valor booleano.
          p.mb-4 Ejemplos:
          .tarjeta--fondo5.p-4.mb-4
            p.text-white.mb-1 for (int i=0;i<=5;i++){
            p.text-white.mb-1  /* variable inicial = i, condición i menor o igual a 5, incremento i++ equivalente a i+1 */
            p.text-white.mb-1  System.out.println("hola");
            p.text-white.mb-1  }
          figure.mb-4
            img(src="@/assets/curso/temas/tema3/img34.png", alt="alt").img400.m-auto
          p.mb-4 Como resultado, este bucle for imprimirá 6 veces la palabra hola, ya que en Java el ciclo for inicia desde el valor definido (en este caso 0). Por lo tanto, si se requieren 10 repeticiones, la condición debería ser i<=9, comenzando desde cero.
          .tarjeta--fondo4.p-4.mb-4
            p.text-white.mb-1 for (int j = 1; j< 4;j++){
            p.text-white.mb-1  System.out.print(objArray01.muestra(j)+" ");
            p.text-white.mb-1  }
    .titulo.mb-4(data-aos="fade-left")
      img(src='@/assets/curso/icon.svg', alt='Imagen decorativa')
      h5 Repeticiones condicionales: whileRepeticiones condicionales: while
    p El while, al igual que el for, es una estructura de repetición; la diferencia principal es que el while no requiere una variable de control ni un incremento explícito, ya que solo necesita una condición para ejecutarse. El while evalúa dicha condición y, si se cumple, ejecuta el bloque de instrucciones; posteriormente vuelve a evaluar la condición. Cuando esta deja de cumplirse, el ciclo se detiene y el programa continúa con su flujo normal.
    p.mb-4 Su sintaxis y funcionamiento son similares a los de C/C++. En la estructura while, la condición se evalúa antes de ejecutar el bloque de instrucciones.
    .row.justify-content-center.align-items-center
      .col-lg-10
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6
            .tarjeta--fondo5.p-4
              p.text-white.mb-1 while(condición) {
              p.text-white.mb-1  // Bloque de instrucciones
              p.text-white.mb-1  }
              p.text-white.mb-1  Ejemplo
              p.text-white.mb-1
              p.text-white.mb-1  int A=0;
              p.text-white.mb-1  int B=5;
              p.text-white.mb-1  while(A < B) { // repetir mientras A sea menor que B //
              p.text-white.mb-1  A=A+1;
              p.text-white.mb-1  }
          .col-lg-6
            figure
              img(src="@/assets/curso/temas/tema3/img35.png", alt="alt").img400.m-auto
        p.mb-0 Este ejemplo del ciclo while finalizará cuando A deje de ser menor que B; es decir, cuando la variable A alcance el valor de 6. En cada iteración del ciclo, A se incrementa en 1; por lo tanto, cuando A sea igual a 6, la condición ya no se cumple y el ciclo termina.
    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Estructuras de salto (continue, break, return)
    p.mb-4 Las estructuras de salto en JavaScript permiten alterar el flujo normal de ejecución de un programa. Estas estructuras son útiles para controlar ciclos, salir de bloques de código o devolver valores desde funciones.
    .row.justify-content-center.mb-4
      .col-lg-4
        .tarjeta-bg1.p-4.h-100
          p.mb-2 #[b Sentencia continue]
          p.mb-2 La sentencia continue se utiliza para omitir la iteración actual de un bucle y continuar con la siguiente.
          p.mb-2 #[b Ejemplo:]
          .tarjeta--fondo4.p-4.mb-4
              p.text-white.mb-1 for (let i = 0; i < 5; i++) {
              p.text-white.mb-1   if (i === 2) {
              p.text-white.mb-1     continue;
              p.text-white.mb-1   }
              p.text-white.mb-1   console.log(i);
              p.text-white.mb-1 }
              p.text-white.mb-1 // Imprime: 0, 1, 3, 4
      .col-lg-4
        .tarjeta-bg1.p-4.h-100
          p.mb-2 #[b Sentencia break]
          p.mb-2 La sentencia break se utiliza para terminar de forma inmediata un bucle o una estructura switch.
          p.mb-2 #[b Ejemplo:]
          .tarjeta--fondo4.p-4.mb-4
              p.text-white.mb-1 for (let i = 0; i < 5; i++) {
              p.text-white.mb-1    if (i === 3) {
              p.text-white.mb-1      break;
              p.text-white.mb-1    }
              p.text-white.mb-1    console.log(i);
              p.text-white.mb-1  }
              p.text-white.mb-1  // Imprime: 0, 1, 2
      .col-lg-4
        .tarjeta-bg1.p-4.h-100
          p.mb-2 #[b Sentencia return]
          p.mb-2 La sentencia return se utiliza dentro de una función para devolver un valor y finalizar su ejecución.
          p.mb-2 #[b Ejemplo:]
          .tarjeta--fondo4.p-4.mb-4
              p.text-white.mb-1 function sumar(a, b) {
              p.text-white.mb-1    return a + b;
              p.text-white.mb-1  }
              p.text-white.mb-1  let resultado = sumar(3, 4);
              p.text-white.mb-1  // resultado = 7

    p.mb-4.text-center Las diferencias principales entre estas sentencias son:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        .bloque-texto-gg.tarjeta--fondo7
          .bloque-texto-gg__texto.p-4
            h5.mb-0 break
            p.mb-0 Finaliza completamente un ciclo o switch.
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img36.svg')})`}"
          )           
      .col-lg-4.col-8.mb-4.mb-lg-0
        .bloque-texto-gg.tarjeta--fondo7
          .bloque-texto-gg__texto.p-4
            h5.mb-0 continue
            p.mb-0 Salta a la siguiente iteración del ciclo.
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img37.svg')})`}"
          )           
      .col-lg-4.col-8
        .bloque-texto-gg.tarjeta--fondo7
          .bloque-texto-gg__texto.p-4
            h5.mb-0 return
            p.mb-0 Finaliza una función y devuelve un valor.
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img38.svg')})`}"
          )  
    p.mb-4.text-center Ejercicios propuestos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-2 Crear un ciclo que imprima números del 1 al 10, pero que se detenga cuando llegue a 6.

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 for (let i = 1; i <= 10; i++) {
              p.text-white.mb-1    if (i === 6) break;
              p.text-white.mb-1    console.log(i);
              p.text-white.mb-1  }
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-2 Crear un ciclo que imprima números del 1 al 10, pero que omita el número 5.

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 for (let i = 1; i <= 10; i++) {
              p.text-white.mb-1    if (i === 5) continue;
              p.text-white.mb-1    console.log(i);
              p.text-white.mb-1  }
      .col-lg-4
        .cajon-color-primario.p-4.h-100
          p.mb-2 Crear una función que reciba un número y retorne si es par o impar.

          .tarjeta--fondo5.p-4.mb-4
              p.text-white.mb-1 function esPar(n) {
              p.text-white.mb-1    return (n % 2 === 0) ? 'Par' : 'Impar';
              p.text-white.mb-1  }
    p.text-center Las estructuras de salto son herramientas clave en JavaScript que permiten controlar el flujo de ejecución de manera eficiente, facilitando la construcción de programas más claros y optimizados.
</template>

<script>
export default {
  name: 'Tema3',
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
