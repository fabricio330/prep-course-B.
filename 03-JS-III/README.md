![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

<table class="hide" width="100%" style='table-layout:fixed;'>
  <tr>
    <td>
      <a href="https://airtable.com/shrSzEYT4idEFGB8d?prefill_clase=03-JS-II">
        <img src="https://static.thenounproject.com/png/204643-200.png" width="100"/>
        <br>
        Haz click acá para dejar tu feedback sobre esta clase.
      </a>
    </td>
  </tr>
</table>

# JavaScript III

En esta lección cubriremos:

* Bucles
* Arrays y sus métodos

## Bucles

![loop](./img/loops.png)

La mayoría del software se ejecuta en bucles, evaluando expresiones una y otra vez hasta que devuelve lo que estamos buscando o se detiene después de cierto tiempo. Javascript tiene dos expresiones de bucle incorporadas: `for` y `while`.

### Bucle *`for`*

Los bucles `for` tienen una sintaxis única, similar a la instrucción `if`, pero un poco más compleja. Primero tenemos la palabra clave `for`, seguida de paréntesis y luego abrimos y cerramos llaves. Dentro de los paréntesis, necesitaremos tres cosas: primero, debemos declarar una variable sobre lo que se iterará o repetirá el bucle, después tendremos una expresión condicional, el ciclo continuará sucediendo hasta que esta declaración no se cumpla, ,esto es, sea `false` y, finalmente, incrementaremos nuestra variable de iteración. Las tres declaraciones están separadas por un punto y coma ( `;` )

```javascript
for (var i = 0                 ; i < 10                 ; i++          ) {
// | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    console.log(i);
}
```

En este ejemplo, vemos que inicialmente establecemos nuestra variable `i` en 0, el ciclo se ejecutará y cada vez que llegue al final, aumentará el contador en uno. El bucle `for` evaluará la expresión condicional. Si es `true`, se ejecutará nuevamente, si es `false` dejará de funcionar.

¿Recuerdas el método .length de los datos de tipo "String"? Podemos usarlo para realizar ciclos for para un string, al igual que acceder a cada caracter de este:

```javascript
function encontrarVocalA(string){
  for(var i = 0; i < string.length; i++){
    if(string[i] === 'a'){
      return "Encontramos la vocal"
    }
  }
   return "El string no tiene ninguna letra a"
}
```
En este ejemplo, la variable `i` estará recorriendo cada caracter del string y accediendo a su valor con `string[i]` para verificar si esta coincide con la vocal `a`. Cuando llega al último valor y este no coincide, el ciclo for se termina y finalmente la función retorna "El string no tiene ninguna letra a", pues no encontró ninguna letra `a` en el string. 

Debemos tener cuidado con la condición del bucle. Si esta condición es siempre `true`, entonces el ciclo nunca terminará dando lugar al llamado *Bucle infinito*, como en el siguiente ejemplo:

```javascript
for (let i = 0; i >= 0; i++) {
    console.log(i);
}
```
Debido a que nuestra expresión condicional SIEMPRE será true (i nunca será menor que 0), este ciclo se ejecutará esencialmente para siempre. Esto interrumpirá su programa y puede bloquear su navegador web o computadora.

### Bucle *`while`*

Al igual que el bucle `for`, el `while` es una manera de iterar, pero en esta declaramos una sentencia que va a ejecutar nuestro código mientras que sea verdadera.

```javascript
var n = 0;

while (n < 3) {
  n++;
}
console.log(n); //3
```
En este caso, le estamos indicando que mientras que `n` sea menor a 3, itere aumentando su valor en uno. Cuando `n` pasa a ser 3 va a dejar de iterar ya que la condición `n < 3` va a ser `false`.

¡Ten cuidado igualmente con la condición que no genere un bucle infinito!

## Arrays

Son usados para guardar información correspondiente a distintos tipos de datos como strings, números, booleanos, etc. Hacen parte del tipo de dato Object, el cual no es un primitivo (a diferencia de los ya vistos). Para escribir un arreglo, usamos una variable igualada a un corchete dentro del cual estarán los elementos a considerar separados por comas ( `,` ), por ejemplo,

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Hot Dog', 'Lasagna'];
```
Así como con los strings, podemos acceder a los elementos que componen un arreglo a partir de sus índices e iniciando también desde el índice 0:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Hot Dog', 'Lasagna'];
                  0           1           2           3
```
Así, si queremos acceder a alguno de ellos, basta usar el nombre del arreglo seguido por corchetes y dentro de estos la posición donde se encuentra el elemento:

```javascript
console.log(comidas[1]) // Hamburguesa
```
También podemos guardar el elemento en una nueva variable: 

```javascript
var comidaFavorita = comidas[1];  
console.log(comidaFavorita) // Hamburguesa
```
Podemos asignar y reasignar cualquier índice en el arreglo usando corchetes, adentro de estos el índice y luego el signo '=', seguido del valor a asignar:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Hot Dog', 'Lasagna'];

comidas[2] = 'Pastas';

console.log(comidas) // ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna']
```
### Métodos de arrays

Los array, así como los strings, numbers, etc. también tienen métodos propios. Los métodos más utilizados son:

### *.length*

El método `.length` devuelve el número de elementos que hay en un arreglo:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

console.log(comidas.length) // 4
```
Para acceder dinámicamente al último elemento del arreglo, utilizaremos también el método .length. En nuestro ejemplo, la longitud es 4. Sabemos que el primer elemento siempre será 0 y cada elemento posterior se desplaza sobre un número. Entonces, en este caso, el último elemento tiene un índice de 3. Usando nuestra propiedad de longitud mostraremos cómo se hace cuando no sabemos el número de elementos en un arreglo:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', ... , 'Lasagna'];

console.log(comidas[comidas.length - 1]);  // 'Lasagna'

```
### *.push*

Agrega un elemento al final del arreglo, incrementando así la longitud de este, y devuelve la nueva longitud:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

comida.push('Sandwich');

console.log(comidas) // ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna', 'Sandwich']
```
### *.pop*

Elimina el último elemento del arreglo disminuyendo en 1 su longitud. Devuelve el elemento eliminado:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna', 'Sandwich'];

comidas.pop();

console.log(comidas) // ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna']
```
### *.unshift*

Agregará un elemento al inicio del arreglo:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

comidas.unshift('Hot Dog');

console.log(comidas) // ['Hot Dog', 'Pizza', 'Hamburguesa', 'Pastas', 'Lasagna']
```

### *.shift*

Eliminará el primer elemento del arreglo:

```javascript
var comidas = ['Hot Dog', 'Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

comidas.shift();

console.log(comidas) // ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna']
```
### Utilizando bucles en arrays
### *for*

La mayoría de las veces, los bucles for se utilizan para iterar sobre todos los elementos de un arreglo. Usando la técnica de acceso al índice ("index access technique") podemos acceder a cada elemento del arreglo. Para hacer esto, usamos el método `.length` como punto de parada para el ciclo.

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas',  'Lasagna'];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}

// 'Pizza'
// 'Hamburguesa'
// 'Pastas'
// 'Lasagna'
```
### *for ... of*

Similar a `for`, el método `for...of` itera sobre los valores del arreglo. Su estructura es un poco diferente, dado que no tendrá expresión condicional sino que, para cada iteración, se asigna el valor de cada elemento a una variable y finaliza cuando ya no tenga más de estas asignaciones por hacer:

```javascript
for(variable of array){
  //Bloque de código que se ejecutará
}
```

Por ejemplo:

```javascript
var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

for(comida of comidas){
  console.log(comida);
}
// 'Pizza'
// 'Hamburguesa'
// 'Pastas'
// 'Lasagna'
```

Los métodos de los que vamos a hablar a continuación, se denominan "métodos de orden superior", porque toman funciones llamadas callbacks (hablaremos de esto más adelante) como argumentos.
### *.forEach*

Es un bucle for integrado en cada arreglo. El método `.forEach` toma un callback como su único argumento, e itera sobre cada elemento del arreglo y llama a la función en él. El callback puede tomar dos argumentos, el primero es el elemento en sí, el segundo es el índice del elemento (este argumento es opcional).

```javascript
var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// Podemos escribir el callback en los paréntesis como una función anónima
autos.forEach(function (elemento, indice) {
  console.log(elemento);
});

// O podemos crear una instancia de una función para usarla como callback.
// Además, no necesitamos usar el argumento de índice, si no lo necesitas, no dudes en omitirlo.
function mostrarNombres(elemento) {
  console.log(elemento);
}

// Y llamar a esta función dentro de los paréntesis del método .forEach
autos.forEach(mostrarNombres);
```
### *.map*

Se usa cuando queremos cambiar cada elemento de un arreglo bajo las mismas condiciones, de la misma manera. El método `.map ` toma una devolución de llamada como único argumento. Al igual que el método `.forEach`, el callback tiene el elemento y el índice de argumentos opcionales. Finalmente, `.map` devolverá todo el arreglo.

```javascript
var numeros = [2, 3, 4, 5];

//Definimos la función que será pasada por callback en el método .map
function multiplicarPorTres(elemento) {
  return elemento * 3;
}

var triple = numeros.map(multiplicarPorTres);

console.log(triple); // [ 6, 9, 12, 15 ]

// O simplemente pasamos como callback una función anónima
var doble = numeros.map(function (elemento) {
  return elemento * 2;
});

console.log(doble); // [ 4, 6, 8, 10 ]
```
### *.reduce*

`.reduce` ejecutará un bucle en nuestro arreglo con la intención de reducir cada elemento en un elemento que se devuelve. Como primer argumento, acepta un callback que toma dos argumentos, primero un 'acumulador' (el resultado del método de reducción hasta ahora), y el segundo es el elemento en el que se encuentra actualmente. El callback debe contener siempre una declaración de devolución ("return"). `.reduce` también toma un segundo argumento opcional, que sería el acumulador de arranque ("starting accumulator"). Si no se suministra el acumulador de arranque, la reducción comenzará en el primer elemento del arreglo. `.reduce` siempre devolverá el acumulador cuando termine de recorrer los elementos.

```javascript
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var palabras = ["Hola,", "mi", "nombre", "es", "Martin"];

// Podemos escribir la función anónima directamente en los paréntesis de .reduce
// Si omitimos el elemento inicial, siempre comenzará en el primer elemento.
var suma = numeros.reduce(function (acc, elemento) {
  return acc + elemento;
});

// Podemos escribir una función fuera de los parents de .reduce (para usar varias veces más tarde)
function multiplicarDosNumeros(a, b) {
  return a * b;
}

var productos = numeros.reduce(multiplicarDosNumeros);

// .reduce funciona en cualquier tipo de datos.
// En este ejemplo configuramos un acumulador de arranque
var frases = palabras.reduce(function (acc, elemento) {
  return acc + " " + elemento;
}, "Frase completa:");

console.log(suma); // 45
console.log(productos); // 362880
console.log(frases); // "Frase completa: Hola, mi nombre es Martin"
```


## Homework

Realiza los ejercicios propuestos en el archivo `homework.js` de esta misma carpeta, el cual tiene test. Si no recuerdas cómo debes correr el test, revisa el archivo `README` que se encuentra al final del repositorio.

## Recursos adicionales

* [MDN: for Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
* [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* [Codecademy: Learn Javascript](https://www.codecademy.com/learn/learn-javascript)
* [Udacity: Intro to Javascript](https://www.udacity.com/course/intro-to-javascript--ud803)
* [MDN: Official Javascript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

