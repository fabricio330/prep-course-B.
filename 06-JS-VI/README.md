![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
    <td>
      <a href="https://airtable.com/shrSzEYT4idEFGB8d?prefill_clase=07-JS-VI">
        <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
        <br>
        Haz click acá para dejar tu feedback sobre esta clase.
      </a>
    </td>
  </tr>
</table>

# JavaScript VI

En esta lección cubriremos:

* Callbacks

## Callbacks

Cuando hablamos de los métodos de los arrays, nos encontramos con algunos de ellos los cuales tenían por característica, que se les pasaba dentro de los paréntesis una función. Ahora, vamos a centrarnos un poco más en el estudio de este concepto.

En Javascript, es muy importante hablar de la capacidad de pasar una función como argumento de otra función. Estas funciones se denominan `callbacks` y pueden llamarse en cualquier momento y pasar argumentos dentro de la función. Pronto descubriremos por qué las devoluciones de llamada son tan importantes para Javascript. La convención es usar `cb` como argumento para la variable que se usará de callback. Veamos un ejemplo de esto:

```javascript
function decirHolaAlUsuario(usuario) {
  return "Hola " + usuario + "!";
}

function decirAdiosAlUsuario(usuario) {
  return "Adiós " + usuario + "!";
}

function crearSaludo(usuario, cb) {
  return cb(usuario);
}

crearSaludo("Dan", decirHolaAlUsuario); // 'Hello Dan!'
crearSaludo("Dan", decirAdiosAlUsuario); // 'Goodbye Dan!'
```

En el ejemplo anterior, hemos definido tres funciones: `decirHolaAlUsuario`, `decirAdiosAlUsuario` y `crearSaludo`. Las dos primeras reciben un usuario como parámetro, mientras que la tercera, recibe usuario y cb, indicando que se trata de una función de callback. Al ejecutar la función `crearSaludo`, esta recibe como argumento de callback la función `decirHolaAlUsuario` la cual se ejecuta con el argumento ``"Dan"``, retornando así el saludo 'Hello Dan!', esto es, usamos una función como argumento de otra para que se ejecute dentro de la primera. De forma análoga para la función `decirAdiosAlUsuario`.

Nota: Observemos que la función que es pasada como argumento **NO** va ejecutada: solo se hace el llamado de esta sin ejecutarse y luego se realiza su ejecución dentro de la primera función.
## Homework

Realiza los ejercicios propuestos en el archivo `homework.js` de esta misma carpeta, el cual tiene test. Si no recuerdas cómo debes correr el test, revisa el archivo `README` que se encuentra al final del repositorio.

## Recursos adicionales

* [Understanding Callback Functions and How to Use Them](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/)
* [Codecademy: Learn Javascript](https://www.codecademy.com/learn/learn-javascript)
* [Udacity: Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [MDN: Official Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

