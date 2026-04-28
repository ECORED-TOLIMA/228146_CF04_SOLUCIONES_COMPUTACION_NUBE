<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Codificación de algoritmos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> aplicar los fundamentos de la programación en JavaScript mediante la implementación de estructuras de control, funciones, estructuras de datos y algoritmos básicos, así como el uso de técnicas de depuración y manejo de errores, para desarrollar programas funcionales y correctamente estructurados.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un algoritmo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un lenguaje de programación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un conjunto de instrucciones ordenadas.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Un tipo de dato.', esCorrecta: false },
            { id: 'd', texto: 'Un compilador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Recuerde que la característica del algoritmo es resolver un problema o realizar una tarea específica mediante una serie de pasos ordenados y definidos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué tipo de lenguaje es JavaScript?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Compilado.', esCorrecta: false },
            { id: 'b', texto: 'Interpretado.', esCorrecta: true },
            { id: 'c', texto: 'Ensamblador de objetos.', esCorrecta: false },
            { id: 'd', texto: 'Binario interpretado.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! JavaScript el código se ejecuta línea por línea, no necesita ser compilado completamente antes de ejecutarse.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es un entorno de desarrollo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un navegador.', esCorrecta: false },
            { id: 'b', texto: 'Un editor o IDE.', esCorrecta: true },
            { id: 'c', texto: 'Un sistema operativo.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Base de datos solo numérica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Perfecto! Un entorno de desarrollo (IDE o editor de código) es una herramienta que facilita la creación de programas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es un ejemplo de editor de código?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Windows.', esCorrecta: false },
            { id: 'b', texto: 'Visual Studio Code.', esCorrecta: true },
            { id: 'c', texto: 'Google crome.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Generar reportes automáticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Bien! Visual Studio Code es un editor de código fuente gratuito y muy utilizado en el desarrollo de software.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué tipo de dato representa verdadero o falso?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'boolean.', esCorrecta: true },
            { id: 'b', texto: 'string.', esCorrecta: false },
            { id: 'c', texto: 'number.', esCorrecta: false },
            { id: 'd', texto: 'array.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! El tipo de dato boolean representa valores lógicos; es decir, solo puede tener dos posibles estados, para este caso falso o verdadero.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué operador se usa para comparar igualdad estricta?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '=', esCorrecta: false },
            { id: 'b', texto: '==', esCorrecta: false },
            { id: 'c', texto: '===', esCorrecta: true },
            { id: 'd', texto: '!=', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Significa igualdad estricta, compara dos valores verificados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué es una función?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un error.', esCorrecta: false },
            { id: 'b', texto: 'Consulta datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Un bloque de código reutilizable.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Un operador.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Es un bloque de código que realiza una tarea específica y puede reutilizarse dentro de un programa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Para qué sirven los comentarios?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ejecutar código.', esCorrecta: false },
            { id: 'b', texto: 'Documentar el código.', esCorrecta: true },
            { id: 'c', texto: 'Mostrar resultados.', esCorrecta: false },
            { id: 'd', texto: 'Crear variables.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien! Son partes del código que no se ejecutan y se utilizan para explicar o documentar el programa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Cuál es una estructura condicional?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'for.', esCorrecta: false },
            { id: 'b', texto: 'if.', esCorrecta: true },
            { id: 'c', texto: 'while.', esCorrecta: false },
            { id: 'd', texto: 'return.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Es una instrucción que permite tomar decisiones dentro de un programa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Cuál es un bucle en JavaScript?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'if.', esCorrecta: false },
            { id: 'b', texto: 'switch.', esCorrecta: false },
            { id: 'c', texto: 'for.', esCorrecta: true },
            { id: 'd', texto: 'break.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Es una estructura de repetición que permite ejecutar un bloque de código varias veces de forma controlada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué hace la instrucción break?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Continúa el ciclo.', esCorrecta: false },
            { id: 'b', texto: 'Termina el ciclo.', esCorrecta: true },
            { id: 'c', texto: 'Repite el ciclo.', esCorrecta: false },
            { id: 'd', texto: 'Define una variable.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Se utiliza para interrumpir o salir inmediatamente de una estructura de control, como bucles o condicionales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué es un array?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un número.', esCorrecta: false },
            { id: 'b', texto: 'Una lista de elementos.', esCorrecta: true },
            { id: 'c', texto: 'Un texto.', esCorrecta: false },
            { id: 'd', texto: 'Inserta datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Un array (arreglo o vector) es una estructura de datos que permite almacenar múltiples valores en una sola variable.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué es una matriz?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Un dato simple.', esCorrecta: false },
            { id: 'b', texto: 'Un operador.', esCorrecta: false },
            { id: 'c', texto: 'Un arreglo bidimensional.', esCorrecta: true },
            { id: 'd', texto: 'Un bucle.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Una matriz es una estructura de datos bidimensional; es decir, un arreglo de arreglos, que permite organizar información en filas y columnas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué hace un algoritmo de ordenamiento?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Organiza datos.', esCorrecta: true },
            { id: 'b', texto: 'Busca datos.', esCorrecta: false },
            { id: 'c', texto: 'Elimina datos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Controlar, revisar, usar y depurar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Un algoritmo de ordenamiento es un conjunto de instrucciones que permite organizar datos en un orden específico (ascendente o descendente).',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué hace un algoritmo de búsqueda?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ordena datos.', esCorrecta: false },
            { id: 'b', texto: 'Encuentra datos.', esCorrecta: true },
            { id: 'c', texto: 'Una tabla secundaria.', esCorrecta: false },
            { id: 'd', texto: 'Un tipo de dato.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Un algoritmo de búsqueda es un conjunto de pasos que permite encontrar un elemento dentro de una estructura de datos, como un arreglo o lista.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué es la depuración?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear código.', esCorrecta: false },
            { id: 'b', texto: 'Corregir errores.', esCorrecta: true },
            { id: 'c', texto: 'Eliminar variables.', esCorrecta: false },
            { id: 'd', texto: 'Ejecutar código.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Bien! La depuración es el proceso que permite identificar, analizar y corregir errores en un programa.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué es un error de sintaxis?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Error en la lógica.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Error en la estructura del código.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Error de usuario.', esCorrecta: false },
            { id: 'd', texto: 'Error del sistema.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Perfecto! La sintaxis es el conjunto de reglas que indican cómo se debe escribir el código correctamente en un lenguaje de programación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué es un error lógico?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El código no se ejecuta.', esCorrecta: false },
            { id: 'b', texto: 'El programa funciona mal.', esCorrecta: true },
            { id: 'c', texto: 'El sistema se apaga.', esCorrecta: false },
            { id: 'd', texto: 'No hay error.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Muy bien! Un error lógico es un tipo de error en programación donde el código se ejecuta sin fallar, pero produce resultados incorrectos.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué estructura se usa para manejar errores?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'if.', esCorrecta: false },
            { id: 'b', texto: 'try...catch.', esCorrecta: true },
            { id: 'c', texto: 'for.', esCorrecta: false },
            { id: 'd', texto: 'Switch.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Exacto! Se utiliza para manejar errores en tiempo de ejecución, permitiendo que el programa no se detenga abruptamente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto: '¿Qué hace console.log()?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Detiene el programa.', esCorrecta: false },
            { id: 'b', texto: 'Mayor rigidez.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Muestra información en consola.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crea funciones.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente! Es una función que permite mostrar información en la consola, principalmente para depuración y verificación del código.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
