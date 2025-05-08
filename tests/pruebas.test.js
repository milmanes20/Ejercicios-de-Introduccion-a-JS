/* eslint-disable no-undef */
const {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
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

describe('devolverString(str)', function() {
  it('Deberia devolver el string provisto', function() {
    let string = 'lambdaSchool';
    expect(devolverString(string)).toBe(string);
  });
});

describe('suma(x, y)', function() {
  it('Deberia devolver la suma de los dos argumentos', function() {
    expect(suma(5, 5)).toBe(10);
    expect(suma(-1, 5)).toBe(4);
  });
});

describe('resta(x, y)', function() {
  it('Deberia devolver la diferencia de los dos argumentos', function() {
    expect(resta(5, 5)).toBe(0);
    expect(resta(-1, 5)).toBe(-6);
    expect(resta(5, -5)).toBe(10);
    expect(resta(0, 0)).toBe(0);
  });
});

describe('divide(x, y)', function() {
  it('Deberia devolver la division de los dos argumentos', function() {
    expect(divide(5, 5)).toBe(1);
    expect(divide(10, 5)).toBe(2);
    expect(divide(11, 2)).toBe(5.5);
  });
});

describe('multiplica(x, y)', function() {
  it('Deberia devolver el producto de los dos argumentos', function() {
    expect(multiplica(5, 5)).toBe(25);
    expect(multiplica(10, -5)).toBe(-50);
    expect(multiplica(11, 0)).toBe(0);
  });
});


describe('sonIguales(x, y)', function() {
  it('Deberia devolver true si los argumentos son iguales y sino false', function() {
    expect(sonIguales(15, 15)).toBe(true);
    expect(sonIguales(90, 50)).toBe(false);
    expect(sonIguales('test', 'test')).toBe(true);
  });
});

describe('tienenMismaLongitud(str1, str2)', function() {
  it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
    expect(tienenMismaLongitud('hi', 'there')).toBe(false);
    expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
  });
});

describe('menosQueNoventa(num)', function() {
  it('Deberia devolver true si el numero es menor a noventa sino false', function() {
    expect(menosQueNoventa(15)).toBe(true);
    expect(menosQueNoventa(90)).toBe(false);
    expect(menosQueNoventa(100)).toBe(false);
  });
});

describe('mayorQueCincuenta(num)', function() {
  it('Deberia devolver true si el numero es mayor a cincuenta sino false', function() {
    expect(mayorQueCincuenta(15)).toBe(false);
    expect(mayorQueCincuenta(50)).toBe(false);
    expect(mayorQueCincuenta(60)).toBe(true);
  });
});

describe('obtenerResto(x, y)', function() {
  it('Deberia devolver el resto de dividir x sobre y', function() {
    expect(obtenerResto(15, 5)).toBe(0);
    expect(obtenerResto(21, 5)).toBe(1);
    expect(obtenerResto(22, 5)).toBe(2);
  });
});

describe('esPar(num)', function() {
  it('Deberia devolver true si el numero es par sino false', function() {
    expect(esPar(6)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
  });
});

describe('esImpar(num)', function() {
  it('Deberia devolver true si el numero es impar sino false', function() {
    expect(esImpar(6)).toBe(false);
    expect(esImpar(7)).toBe(true);
    expect(esImpar(0)).toBe(false);
  });
});

describe('elevarAlCuadrado(num)', function() {
  it('Deberia devolver el numero elevado al cuadrado', function() {
    expect(elevarAlCuadrado(6)).toBe(36);
    expect(elevarAlCuadrado(7)).toBe(49);
    expect(elevarAlCuadrado(0)).toBe(0);
    expect(elevarAlCuadrado(-5)).toBe(25);
  });
});

describe('elevarAlCubo(num)', function() {
  it('Deberia devolver el numero elevado al cubo', function() {
    expect(elevarAlCubo(3)).toBe(27);
    expect(elevarAlCubo(0)).toBe(0);
    expect(elevarAlCubo(-5)).toBe(-125);
  });
});

describe('elevar(num, exponent)', function() {
  it('Deberia devolver el numero elevado al exponente indicado', function() {
    expect(elevar(2, 2)).toBe(4);
    expect(elevar(2, 3)).toBe(8);
    expect(elevar(0, 5)).toBe(0);
    expect(elevar(10, 1)).toBe(10);
  });
});

describe('redondearNumero(num)', function() {
  it('Deberia devolver el numero redondeado', function() {
    expect(redondearNumero(1.5)).toBe(2);
    expect(redondearNumero(2)).toBe(2);
    expect(redondearNumero(0.1)).toBe(0);
  });
});

describe('redondearHaciaArriba(num)', function() {
  it('Deberia devolver el numero redondeado para arriba', function() {
    expect(redondearHaciaArriba(1.5)).toBe(2);
    expect(redondearHaciaArriba(2)).toBe(2);
    expect(redondearHaciaArriba(0.1)).toBe(1);
  });
});

describe('agregarSimboloExclamacion(str)', function() {
  it('Deberia agregar un signo de exclamacion al final del string', function() {
    expect(agregarSimboloExclamacion('hello world')).toBe('hello world!');
    expect(agregarSimboloExclamacion('Soy Henry')).toBe('Soy Henry!');
  });
});

describe('combinarNombres(firstName, lastName)', function() {
  it('Deberia devolver los strings combinados con un espacio en el medio', function() {
    expect(combinarNombres('hello', 'world')).toBe('hello world');
    expect(combinarNombres('Soy', 'Henry')).toBe('Soy Henry');
  });
});

describe('obtenerSaludo(name)', function() {
  it('Deberia devolver el string \'Hola {name}!\'', function() {
    expect(obtenerSaludo('Martin')).toBe('Hola Martin!');
    expect(obtenerSaludo('Antonio')).toBe('Hola Antonio!');
  });
});

describe('obtenerAreaRectangulo(alto, ancho)', function() {
  it('Deberia retornar el area correcta del rectangulo', function() {
    expect(obtenerAreaRectangulo(2, 2)).toBe(4);
    expect(obtenerAreaRectangulo(3, 6)).toBe(18);
    expect(obtenerAreaRectangulo(0, 2)).toBe(0);
  });
});

describe('obtenerMayor(x, y)', function() {
  it('should return x if it is larger than y', function() {
    expect(obtenerMayor(10, 5)).toBe(10);
  });
  it('should return y if it is larger than x', function() {
    expect(obtenerMayor(50, 100)).toBe(100);
  });
  it('should return either one if they are the same', function() {
    expect(obtenerMayor(1000, 1000)).toBe(1000);
  });
});

describe('saludo(idioma)', function() {
  it('should return \'Guten Tag!\' for aleman', function() {
    expect(saludo('aleman')).toBe('Guten Tag!');
  });
  it('should return \'Hola!\' for ingles', function() {
    expect(saludo('ingles')).toBe('Hello!');
  });
  it('should return \'Ni Hao!\' for mandarin', function() {
    expect(saludo('mandarin')).toBe('Ni Hao!');
  });
  it('should return \'Hola!\' if no argument is passed in or if a idioma beyond ingles, mandarin, and aleman is passed in.', function() {
    expect(saludo('frances')).toBe('Hola!');
    expect(saludo()).toBe('Hola!');
  });
});

describe('esDiezOCinco(num)', function() {
  it('should return true if num is 10 or 5', function() {
    expect(esDiezOCinco(10)).toBe(true);
    expect(esDiezOCinco(5)).toBe(true);
  });
  it('should return false if num is not 10 or 5', function() {
    expect(esDiezOCinco(11)).toBe(false);
    expect(esDiezOCinco(6)).toBe(false);
    expect(esDiezOCinco(0)).toBe(false);
    expect(esDiezOCinco(5.01)).toBe(false);
  });
});

describe('estaEnRango(num)', function() {
  it('should return true if num is inside range', function() {
    expect(estaEnRango(35.5)).toBe(true);
    expect(estaEnRango(40)).toBe(true);
    expect(estaEnRango(49)).toBe(true);
    expect(estaEnRango(21)).toBe(true);
  });
  it('should return false if outside of range', function() {
    expect(estaEnRango(10)).toBe(false);
    expect(estaEnRango(20)).toBe(false);
    expect(estaEnRango(50)).toBe(false);
    expect(estaEnRango(100)).toBe(false);
  });
});

describe('esEntero(num)', function() {
  it('should return true if num is 5', function() {
    expect(esEntero(5)).toBe(true);
  });
  it('should return false if num is 0.5', function() {
    expect(esEntero(0.5)).toBe(false);
  });
  it('should return true if num is -20', function() {
    expect(esEntero(-20)).toBe(true);
  });
  it('should return true for 0', function() {
    expect(esEntero(0)).toBe(true);
  });
});

describe('fizzBuzz(num)', function() {
  it('should return fizz if divisible by 3', function() {
    expect(fizzBuzz(9)).toBe('fizz');
  });
  it('should return buzz if divisible by 5', function() {
    expect(fizzBuzz(10)).toBe('buzz');
  });
  it('should return fizzbuzz if divisible by 3 and 5', function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('should return num if not divisible by 3 or 5', function() {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe('esPrimo(num)', function() {
  it('should return true if num is prime', function() {
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(97)).toBe(true);
  });
  it('should return false if num is not prime', function() {
    expect(esPrimo(10)).toBe(false);
    expect(esPrimo(100)).toBe(false);
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
  });
});
