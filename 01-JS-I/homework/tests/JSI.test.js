/* eslint-disable no-undef */
const {
    nuevaString,
    nuevoNum,
    nuevoBool,
    nuevaResta,
    nuevaMultiplicacion,
    nuevoModulo,
  } = require('../homework.js');
  
  describe('nuevaString', function() {
    it('Deberia ser un string', function() {
      expect(typeof nuevaString).toBe('string');
    });
  });
  
  describe('nuevoNum', function() {
    it('Deberia ser un numero', function() {
      expect(typeof nuevoNum).toBe('number');
    });
  });
  
  describe('nuevoBool', function() {
    it('Deberia ser un booleano', function() {
      expect(typeof nuevoBool).toBe('boolean');
    });
  });
  
  describe('nuevaResta', function() {
    it('Deberia ser un booleano', function() {
      expect(nuevaResta).toBe(true);
    });
  });
  
  describe('nuevaMultiplicacion', function() {
    it('Deberia ser un booleano', function() {
      expect(nuevaMultiplicacion).toBe(true);
    });
  });
  
  describe('nuevoModulo', function() {
    it('Deberia ser un booleano', function() {
      expect(nuevoModulo).toBe(true);
    });
  });