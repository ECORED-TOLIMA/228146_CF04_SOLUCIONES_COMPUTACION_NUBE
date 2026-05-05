export default {
  global: {
    Name: 'Codificación de algoritmos',
    Description:
      'Este componente introduce los principios de la programación, los tipos de lenguajes y el uso de entornos de desarrollo. Aborda la sintaxis y estructuras de JavaScript, el manejo de datos, algoritmos básicos de búsqueda y ordenamiento, y el proceso de depuración, identificando errores de sintaxis, lógica y su adecuado tratamiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de programación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos básicos de programación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Tipos de lenguajes de programación: compilados e interpretados',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entornos de desarrollo y configuración del proyecto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Entornos de codificación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Instalación y configuración del entorno',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Creación de proyectos de programación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sintaxis y estructuras de programación en JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Tipos de datos, operadores y orden de evaluación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Expresiones, funciones y comentarios',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Estructuras de selección',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Estructuras de repetición (for y while)',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estructuras de salto (continue, break, return)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estructuras de datos y algoritmos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estructuras de datos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Métodos de ordenamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Métodos de búsqueda para datos numéricos, textos y registros',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Depuración y manejo de errores en programas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Depuración de código',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fallas de sintaxis',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Fallas de lógica',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Manejo de errores y excepciones',
            hash: 't_5_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA4_228146_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'es un conjunto ordenado y finito de pasos o instrucciones que se siguen para resolver un problema o realizar una tarea específica. En programación, los algoritmos son la base para desarrollar soluciones eficientes y estructuradas.',
    },
    {
      termino: 'Bucle',
      significado:
        'es una estructura que permite repetir un bloque de instrucciones varias veces, ya sea un número determinado de veces o mientras se cumpla una condición.',
    },
    {
      termino: 'Compilado',
      significado:
        'se refiere a un tipo de lenguaje que necesita ser traducido completamente a código máquina antes de ejecutarse. Este proceso se realiza mediante un compilador y suele generar programas más rápidos en ejecución.',
    },
    {
      termino: 'Condicional',
      significado:
        'es una estructura de control que permite ejecutar diferentes bloques de código dependiendo de si una condición es verdadera o falsa, facilitando la toma de decisiones en el programa.',
    },
    {
      termino: 'Expresión',
      significado:
        'es una combinación de valores, variables, operadores y funciones que se evalúa para producir un resultado dentro de un programa.',
    },
    {
      termino: 'Función',
      significado:
        'es un bloque de código reutilizable que realiza una tarea específica. Puede recibir datos de entrada (parámetros), procesarlos y devolver un resultado, lo que permite estructurar mejor el programa.',
    },
    {
      termino: 'Interpretado',
      significado:
        'es un tipo de lenguaje que se ejecuta línea por línea mediante un intérprete, sin necesidad de compilar todo el código previamente. Esto facilita la prueba y corrección de errores durante el desarrollo.',
    },
    {
      termino: 'JavaScript',
      significado:
        'es un lenguaje de programación interpretado, orientado a objetos y basado en prototipos, ampliamente utilizado para desarrollar aplicaciones web interactivas, tanto en el lado del cliente como del servidor.',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'es un sistema formal compuesto por reglas y símbolos que permite a los desarrolladores comunicarse con la computadora para crear programas, aplicaciones y sistemas informáticos.',
    },
    {
      termino: 'Matriz',
      significado:
        'es una estructura de datos bidimensional, es decir, un arreglo de arreglos, que permite organizar la información en filas y columnas para representar datos más complejos.',
    },
    {
      termino: 'Objeto',
      significado:
        'es una estructura que permite almacenar información en forma de pares clave-valor, lo que facilita representar entidades del mundo real con múltiples atributos.',
    },
    {
      termino: 'Operador',
      significado:
        'es un símbolo o conjunto de símbolos que permiten realizar operaciones sobre uno o más valores, como operaciones matemáticas, comparaciones o evaluaciones lógicas.',
    },
    {
      termino: 'Variable',
      significado:
        'es un espacio reservado en la memoria del sistema que permite almacenar datos que pueden cambiar durante la ejecución de un programa. Las variables tienen un nombre identificador y un tipo de dato asociado.',
    },
  ],
  referencias: [
    {
      referencia:
        'Divcode. (2023, 2 de enero). Cómo instalar JAVA en Visual Studio Code. [Video] YouTube.',
      link: 'https://www.youtube.com/watch?v=57ekn6xnrqU',
    },
    {
      referencia:
        'Haverbeke, M. (2018). Eloquent JavaScript (3rd ed.). No Starch Press.',
      link: '',
    },
    {
      referencia:
        'JAVA. (2025). ¿Cómo puedo descargar e instalar Java en un equipo con Windows de forma manual?',
      link:
        'https://www.java.com/es/download/help/windows_manual_download.html',
    },
    {
      referencia: 'JAVA. (2025). Instalación y uso de Oracle Java en macOS',
      link: 'https://www.java.com/es/download/help/java_mac.html',
    },
    {
      referencia:
        'Mozilla Developer Network (MDN). (2025). Referencia de JavaScript.',
      link: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
