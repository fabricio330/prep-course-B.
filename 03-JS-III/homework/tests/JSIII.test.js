/* eslint-disable no-undef */
const {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  } = require('../homework');
  
  
describe('imprimirSumaNumeros()', function() {
  it('Deberia devolver la suma de los números del 1 al 10', function() {
    expect(imprimirSumaNumeros()).toBe(55);
  });
});
  
describe('encuentraPares(array)', function() {
  it('Deberia devolver un arreglo con los pares encontrados en el arreglo de enteros pasado como parámetro', function() {
    expect(encuentraPares([2,5,6,8,10,3])).toEqual([2,6,8,10]);
  });
});

describe('elevaAlCuadrado(array)', function() {
  it('Deberia devolver un arreglo con cada número del array elevado al cuadrado', function() {
    expect(elevaAlCuadrado([1,4,5,7,6])).toEqual([1,16,25,49,36]);
  });
});

describe('sumaArray(array)', function() {
  it('Deberia devolver el resultado de sumar todos los elementos de un arreglo de enteros dado', function(){
    expect(sumaArray([1,3,5,7,8])).toBe(24);
  });
});

describe('numeroDigitos(num)', function(){
  it('Debería devolver el número de dígitos de un número dado', function(){
    expect(numeroDigitos(8541)).toBe(4);
  });
});


