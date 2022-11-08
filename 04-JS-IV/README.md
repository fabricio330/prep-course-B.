![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
    <td>
      <a href="https://airtable.com/shrSzEYT4idEFGB8d?prefill_clase=05-JS-IV">
        <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
        <br>
        Haz click acá para dejar tu feedback sobre esta clase.
      </a>
    </td>
  </tr>
</table>

# JavaScript IV

En esta lección cubriremos:

* Objetos
* Bucle *`for...in`*
* keyword *this*

## Introducción a los Objetos

Hemos visto los arreglos como una estructura para almacenar información independientemente del tipo de dato que se desee guardar. Los objetos tienen cierta similitud, en el sentido que también sirven para guardar información pero, en este caso, sobre una sola cosa. Se instancian usando las llaves (`{}`), por ejemplo,

```javascript
var objetoNuevo = {}
```
### Pares Clave:Valor (Key:Value) de un objeto 
Vimos que los arreglos tenían índices y elementos y que cada índice estaba asociado a un elemento en particular. En los objetos, encontramos pares clave:valor, donde la **clave** (*key*) es el identificador y el **valor** (*value*) es lo que deseamos guardar en esa clave. Su sintáxis es `clave:valor`. A las claves también se les llama `propiedad del objeto`. 

Un ojeto puede contener muchos de estos pares `clave:valor`, los cuales estarán separados por coma ( ` , ` ). Cada clave en un objeto es única, pero podemos tener distintas claves con el mismo valor. Los valores pueden ser de cualquier tipo de dato: string, number, boolean, array, función e incluso otro objeto:

```javascript
var usuario = {
  nombre: "Andres",
  contraseña: "hola123",
  edad: 26,
  online: true
}
```
### Accediendo a los valores en un objeto

Una vez que tengamos los pares clave-valor, podemos acceder a esos valores llamando al nombre del objeto seguido de la clave correspondiente al valor que queremos consultar. Hay dos formas diferentes de hacer esto: usando puntos o usando corchetes.

Con puntos, escribimos el nombre del objeto seguido de punto ( ` .` ) y finalmente el nombre de la clave:

```javascript
usuario.nombre; // Andres
usuario.online; // true
```
Con corchetes, es similar a como hacemos con los arrays pero debemos usar una string, número o variable que apunte a una string o número. También podemos llamar cada clave envolviéndola entre comillas:

```javascript
var password = 'contraseña';

usuario['nombre']; // Andres
usuario['edad']; // 26
usuario[password]; // hola123
```
Por lo general, los corchetes casi siempre se usan con variables.

### Asignando valores a objeto

De la misma forma en que accedemos a valores en un objeto, así también asignamos valores a este, ya sea con notación de puntos o de corchetes:

```javascript
var nuevoUsuario = {
  esNuevo: true
}

var profesion = 'gamer';

nuevoUsuario.username = 'Felipe';
nuevoUsuario['contraseña'] = 'hola12345';
nuevoUsuario[profesion] = true;
```
### Eliminando propiedades de un objeto

Usamos la palabra clave `delete`, para eliminar una propiedad dentro de un objeto:

```javascript
var otroObjeto = {
  claveAEliminar: true
}

delete otroObjeto.claveAEliminar;
```
Es raro que veamos el uso de la palabra clave `delete`, muchos consideran que la mejor práctica es establecer el valor de una palabra clave en `undefined`. Dependerá de ti cuando llegue el momento.

### Métodos de un objeto

En los objetos, los valores de las claves se pueden establecer en funciones. Las funciones guardadas en un objeto se denominan *métodos*. Podemos establecer una clave para un nombre y el valor para una función. Al igual que otras veces que llamamos métodos, llamaremos a este método usando notación de puntos y paréntesis finales (Nota: podemos llamar a un método con argumentos como lo haríamos con una función normal):

```javascript
var nuevoObjeto = {
    decirHola: function() {
        console.log('Hola a todo el mundo!');
    }
}

nuevoObjeto.decirHola(); //Hola a todo el mundo!
```
###  Bucle *`for...in`*

A veces queremos iterar sobre cada par clave-valor en nuestro objeto. Con los arreglos, utilizamos un estándar para el bucle y una variable de número de índice. Los objetos no contienen índices numéricos, por lo que el bucle estándar no funcionará para los objetos. Javascript tiene un segundo tipo de bucle for integrado llamado "for ... in loop". Es una sintaxis ligeramente diferente, comienza igual pero entre paréntesis declararemos una variable, la palabra clave in y el nombre del objeto. Esto recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves. Podemos usar esta clave, y la notación de corchetes, en nuestro bucle for para acceder al valor asociado con esa clave.

```javascript
var usuario = {
  nombre: "Andres",
  contraseña: "hola123",
  edad: 26,
  online: true
}

for(var clave in usuario){
  console.log(clave);
  console.log(usuario[clave]);
}

// nombre
// "Andres"
// contraseña
// "hola123"
// edad
// 26
// online
// true
```

### Keyword *`this`*

Los objetos tienen una palabra clave autorreferencial que se puede aplicar en cada objeto llamada this. Cuando se llama dentro de un objeto, se refiere a ese mismo objeto. this puede usarse para acceder a otras claves en el mismo objeto, y es especialmente útil en los métodos:

```javascript
var usuario = {
  nombre: "Andres",
  contraseña: "hola123",
  edad: 26,
  online: true
  saludar: function(){
    console.log('hola, ' + this.nombre);
  }
}

usuario.saludar(); // 'hola, Andres'
```
Nota: la palabra clave `this` a veces puede ser uno de los temas más difíciles en Javascript. Lo estamos usando muy básicamente aquí, pero el tema se vuelve mucho más complejo muy pronto.


## Homework

Realiza los ejercicios propuestos en el archivo `homework.js` de esta misma carpeta, el cual tiene test. Si no recuerdas cómo debes correr el test, revisa el archivo `README` que se encuentra al final del repositorio.

## Recursos adicionales

* [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
* [MDN: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
* [MDN: for...in Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
* [Codecademy: Learn Javascript](https://www.codecademy.com/learn/learn-javascript)
* [Udacity: Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [MDN: Official Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

