![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
    <td>
      <a href="https://airtable.com/shrSzEYT4idEFGB8d?prefill_clase=06-JS-V">
        <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
        <br>
        Haz click acá para dejar tu feedback sobre esta clase.
      </a>
    </td>
  </tr>
</table>

# JavaScript V

En esta lección cubriremos:

* Clases
* Prototipos

## Clases

Muchas veces al crear un objeto, estamos creando realmente una plantilla para objetos similares. En lugar de hacer copias de esa plantilla una y otra vez, Javascript nos da acceso a lo que llamamos un constructor o `class`, las cuales son útiles para crear muchos objetos que comparten algunas de las mismas propiedades y métodos. Las clases comparten gran parte de la misma funcionalidad que los objetos normales, pero también se expande mucho en esa funcionalidad. 

### Class e instanciación pseudo-clásica

Si tienes experiencia en un lenguaje orientado a objetos (como Java o C#), probablemente estés familiarizado con el concepto de clases. Si bien Javascript no proporciona un "verdadero" sistema de clases, hay algo muy familiar. En aras de la discusión, llamaremos a nuestros objetos de clase 'clases'. Se instancia de manera pseudo clásica, usando la palabra clave `new`, y puede tomar argumentos.

En este ejemplo crearemos una clase `Gato`. La convención para las clases consiste en dar un nombre en mayúscula al nombre de todo lo que se pueda instanciar con la palabra clave `new`. Cuando usamos la palabra clave `new`, Javascript hace un gran trabajo detrás de escena para nosotros y crea y devuelve un objeto automáticamente.

```js
function Gato(nombre) {
    // El nuevo operador crea un objeto, "this"
    this.nombre = nombre;
    this.maullar = function() {
        return 'Mi nombre es ' + this.nombre + ' ... Meow!';
    }
    // Devuelve el objeto "this"
}

var sam = new Gato('Sam');
var kitty = new Gato('Kitty');
console.log(sam.maullar()); // 'Mi nombre es Sam ... Meow!'
console.log(kitty.maullar()); // 'Mi nombre es Kitty ... Meow!'
```

### *`this`* en las clases

La palabra clave `this`, puede comenzar a confundir cuando comenzamos a usarla en clases. En este el último ejemplo, la usamos en el método de los maullidos. Una buena regla general si no está seguro de a qué se refiere `this`, es observar dónde se llama el método y el objeto a la izquierda del 'punto'. Ese es el objeto al que se refiere `this`.

## *`Prototype`*

La creación de funciones es costosa (hablando en términos de la capacidad de memoria de una computadora) y cada vez que creamos un nuevo objeto de clase con métodos, estamos recreando esos métodos en la memoria. Puede imaginar que si estamos creando miles de objetos de clase a partir de una clase con docenas de métodos, la memoria se acumulará rápidamente (20.000 - 40.000 métodos). Las clases tienen una forma única de establecer un método una vez y dar acceso a cada objeto de esa clase a esos métodos. Esto se llama el `prototype`. Cada clase tiene una propiedad *prototype*, que luego podemos establecer en métodos:

```javascript
function Usuario(nombre, email) {
    this.nombre = nombre;
    this.email = email;
}

Usuario.prototype.presentacion = function(){
    return 'Mi nombre es ' + this.nombre + ', mi email es ' + this.email + '.';
}

let juan = new Usuario('Juan', 'juanperez@mail.com');
let antonio = new Usuario('Antonio', 'anton@mail.com');

console.log(juan.presentacion()); // Mi nombre es Juan, mi email es juanperez@mail.com.
console.log(antonio.presentacion()); // Mi nombre es Antonio, mi email es anton@mail.com.
```

Los métodos de `prototype` tienen acceso a la palabra clave `this` y, al igual que antes, siempre apuntará al objeto (a la izquierda del punto) que lo está invocando.

Hasta ahora siempre que teníamos que crear un objeto nuevo declarábamos un object literal, sin embargo, hay otros métodos que nos da el prototype de Object para cumplir esa tarea.

### Object.create

El método `create` de los objetos nos permite crear un nuevo objeto a partir de un prototype especificado.

``` javascript
// creamos un objecto con un objeto vacio como proto
var obj = Object.create({})

console.log(obj) // Object {}

// creamos un objeto a partir de un proto de Objeto
var obj = Object.create(Object.prototype)
// que es lo mismo que crear un objeto vacio literal
var obj = {}
```

### Object.assign

El método `assign` de los objetos nos permite agregar propiedades a un objeto pasado por parámetro:

``` javascript
var obj = {}

// No es necesario guardar el resultado porque los objetos se pasan por `referencia`
Object.assign(obj, {nombre:'Emi', apellido:'Chequer'})

obj.nombre // 'Emi' 
```

## Herencia Clásica

En el paradigma de *Programación Orientada a Objetos* un tema muy importante es la *Herencia y Polimorfismo* y de las clases (los vamos a llamar constructores por ahora).

Cuando nos referimos a **Herencia**, hablamos de la capacidad que tiene un constructor de *heredar* propiedades y métodos de otro constructor, así como un Gato es Mamífero antes que Gato, y hereda sus 'propiedades' (nace, crece, se reproduce y muere).

Cuando hablamos de **Polimorfismo** nos referimos es a la capacidad de que objetos distintos puedan responder a un llamado igual de acuerdo a su propia naturaleza.

## Herencia en JavaScript

En JS, a diferencia de la herencia clásica, nos manejamos con prototipos que van a tomar los métodos pasados por sus 'padres' mediante la `Prototype Chain`.

Cuando generamos un arreglo nuevo podemos acceder a métodos como `map` o `slice`, gracias a que los heredamos del Objeto `Array` que esta vinculado en la propiedad `__proto__` y es el siguiente en el `Prototype Chain`.

También podemos generar nuestros propios constructores que dé los métodos los cuales se puedan heredar. Creamos un constructor del cual pueda haber variantes.

``` javascript
function Persona(nombre, apellido, ciudad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.ciudad = ciudad;
}

Persona.prototype.saludar = function() {
  console.log('Soy '+ this.nombre +' de '+ this.ciudad);
}

var Emi = new Persona('Emi', 'Chequer', 'Buenos Aires');

Emi.saludar(); // 'Soy Emi de Buenos Aires'
```
Ahora todo Alumno de Henry antes que un Alumno es una Persona, por tanto podríamos decir que un Alumno hereda las propiedades de ser Persona.

``` javascript
> function Alumno(nombre, apellido, ciudad, curso) {
    // podríamos copiar las mismas propiedades de Persona acá adentro
    this.nombre = nombre;
    this.apellido = apellido;
    this.ciudad = ciudad;
    this.curso = curso
  }
```
### Constructores Anidados

Pero en este caso estaríamos repitiendo código, y si en un futuro quisiéramos cambiar alguna propiedad,tendríamos que hacerlo en ambos constructores, por tanto, descartaremos esta opción.

``` javascript
// queremos reutilizar las propiedades de persona,
function Alumno(nombre, apellido, ciudad, curso) {
  // usemos nuestro constructor Persona dentro del de Alumno
  Persona.call(this, nombre, apellido, ciudad);
  // vamos a necesitar el método call porque queremos que las propiedades de persona queden bajo el objeto que va a devolver Alumno y no uno nuevo del constructor Persona.
  // luego le pasamos los valores que quiero que reciba el constructor de Alumno
  
  // finalmente le agrego los puntos propios de Alumno
  this.curso = curso;
  this.empresa = 'Soy Henry';
}

var toni = new Alumno('Toni', 'Tralice', 'Tucuman', 'Web Full Stack')

// Tenemos entonces nuestra instancia creada a partir de ambos constructores
toni.curso // Web Full Stack

toni.apellido // Tralice

toni.saludar() // Uncaught TypeError: toni.saludar is not a 'function'
```

Como podemos ver los métodos de *Personas* **NO** fueron pasados a nuestros *Alumnos*. La razón:

El constructor del `__proto__` esta ligado a Alumno y luego al `Object Object` de JS. Pero el método `saludar` esta en el objeto `prototype` de Personas, así es como debería funcionar, las instancias acceden al `__proto__` que fue vinculado por el constructor para ver que métodos tienen. Nuestro problema es que al llamar a Persona con `call` en vez de con el método `new` no se esta haciendo ese vinculo en el que `Persona.prototype` se mete en nuestro `Prototype Chain`, y entonces las instancias de Alumno no tienen acceso a los métodos de Persona.

Para solucionar esto, agregamos al prototipo los métodos de Persona, para esto vamos a usar el método `Object.create`.

``` javascript
// usamos `Object.create` porque este guardaba el argumento pasado como `__proto__` del objeto a retornar
Alumno.prototype = Object.create(Persona.prototype)

// recordemos que el objeto prototype siempre tenía una propiedad constructor que hacía referencia a la función en sí; con la asignación que hicimos arriba lo pisamos, por lo que deberíamos volver a agregarlo.
Alumno.prototype.constructor = Alumno

var Franco = new Alumno('Franco','Etcheverri','Montevideo','Bootcamp')

Franco.saludar(); // 'Soy Franco de Montevideo'
```

## Homework

Realiza los ejercicios propuestos en el archivo `homework.js` de esta misma carpeta, el cual tiene test. Si no recuerdas cómo debes correr el test, revisa el archivo `README` que se encuentra al final del repositorio.

## Recursos adicionales

* [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
* [MDN: Prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
* [Codecademy: Learn Javascript](https://www.codecademy.com/learn/learn-javascript)
* [Udacity: Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [MDN: Official Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

