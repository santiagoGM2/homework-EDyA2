// Funciones de Arrays en JavaScript

// Creamos un array de ejemplo para usar en todas las funciones
const frutas = ['manzana', 'banana', 'naranja', 'pera', 'uva'];
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'María', edad: 30 },
  { nombre: 'Pedro', edad: 20 },
  { nombre: 'Ana', edad: 35 }
];

console.log('===== FUNCIONES DE ARRAYS EN JAVASCRIPT =====\n');

// 1. push() - Añade uno o más elementos al final del array
console.log('1. push() - Añade elementos al final del array');
const frutasConPush = [...frutas];
frutasConPush.push('mango', 'piña');
console.log('Original:', frutas);
console.log('Después de push:', frutasConPush);
console.log('-----------------------------------\n');

// 2. pop() - Elimina el último elemento del array y lo devuelve
console.log('2. pop() - Elimina el último elemento del array');
const frutasConPop = [...frutas];
const elementoEliminado = frutasConPop.pop();
console.log('Original:', frutas);
console.log('Elemento eliminado:', elementoEliminado);
console.log('Después de pop:', frutasConPop);
console.log('-----------------------------------\n');

// 3. unshift() - Añade uno o más elementos al inicio del array
console.log('3. unshift() - Añade elementos al inicio del array');
const frutasConUnshift = [...frutas];
frutasConUnshift.unshift('kiwi', 'fresa');
console.log('Original:', frutas);
console.log('Después de unshift:', frutasConUnshift);
console.log('-----------------------------------\n');

// 4. shift() - Elimina el primer elemento del array y lo devuelve
console.log('4. shift() - Elimina el primer elemento del array');
const frutasConShift = [...frutas];
const primerElemento = frutasConShift.shift();
console.log('Original:', frutas);
console.log('Elemento eliminado:', primerElemento);
console.log('Después de shift:', frutasConShift);
console.log('-----------------------------------\n');

// 5. concat() - Combina dos o más arrays
console.log('5. concat() - Combina dos o más arrays');
const verduras = ['zanahoria', 'brócoli', 'espinaca'];
const frutasYVerduras = frutas.concat(verduras);
console.log('Array 1:', frutas);
console.log('Array 2:', verduras);
console.log('Arrays combinados:', frutasYVerduras);
console.log('-----------------------------------\n');

// 6. join() - Une todos los elementos de un array en una cadena
console.log('6. join() - Une todos los elementos en una cadena');
const frutasString = frutas.join(', ');
console.log('Array original:', frutas);
console.log('String resultante:', frutasString);
console.log('-----------------------------------\n');

// 7. slice() - Devuelve una copia de una parte del array
console.log('7. slice() - Devuelve una parte del array');
const porcionFrutas = frutas.slice(1, 3);
console.log('Array original:', frutas);
console.log('Porción (índices 1 a 2):', porcionFrutas);
console.log('-----------------------------------\n');

// 8. splice() - Cambia el contenido de un array eliminando/reemplazando elementos
console.log('8. splice() - Elimina/reemplaza elementos');
const frutasConSplice = [...frutas];
const elementosEliminados = frutasConSplice.splice(1, 2, 'melocotón', 'sandía');
console.log('Array original:', frutas);
console.log('Elementos eliminados:', elementosEliminados);
console.log('Después de splice:', frutasConSplice);
console.log('-----------------------------------\n');

// 9. indexOf() - Busca un elemento en el array y devuelve su posición
console.log('9. indexOf() - Busca un elemento y devuelve su posición');
const posicionNaranja = frutas.indexOf('naranja');
const posicionMango = frutas.indexOf('mango');
console.log('Array:', frutas);
console.log('Posición de "naranja":', posicionNaranja);
console.log('Posición de "mango" (no existe):', posicionMango);
console.log('-----------------------------------\n');

// 10. lastIndexOf() - Busca un elemento desde el final y devuelve su posición
console.log('10. lastIndexOf() - Busca un elemento desde el final');
const numerosRepetidos = [1, 2, 3, 4, 2, 5, 2];
const ultimaPosicion = numerosRepetidos.lastIndexOf(2);
console.log('Array:', numerosRepetidos);
console.log('Última posición de "2":', ultimaPosicion);
console.log('-----------------------------------\n');

// 11. includes() - Determina si un array incluye un elemento
console.log('11. includes() - Verifica si un elemento existe');
const incluyePera = frutas.includes('pera');
const incluyeCereza = frutas.includes('cereza');
console.log('Array:', frutas);
console.log('¿Incluye "pera"?', incluyePera);
console.log('¿Incluye "cereza"?', incluyeCereza);
console.log('-----------------------------------\n');

// 12. find() - Devuelve el primer elemento que cumple una condición
console.log('12. find() - Encuentra el primer elemento que cumple una condición');
const personaMayor30 = personas.find(persona => persona.edad > 30);
console.log('Array de personas:', personas);
console.log('Primera persona mayor de 30:', personaMayor30);
console.log('-----------------------------------\n');

// 13. findIndex() - Devuelve el índice del primer elemento que cumple una condición
console.log('13. findIndex() - Encuentra el índice del primer elemento que cumple una condición');
const indiceMayor30 = personas.findIndex(persona => persona.edad > 30);
console.log('Array de personas:', personas);
console.log('Índice de la primera persona mayor de 30:', indiceMayor30);
console.log('-----------------------------------\n');

// 14. filter() - Crea un nuevo array con elementos que cumplen una condición
console.log('14. filter() - Filtra elementos según una condición');
const personasMayores25 = personas.filter(persona => persona.edad > 25);
console.log('Array de personas:', personas);
console.log('Personas mayores de 25:', personasMayores25);
console.log('-----------------------------------\n');

// 15. map() - Crea un nuevo array con los resultados de aplicar una función
console.log('15. map() - Transforma cada elemento del array');
const nombresPersonas = personas.map(persona => persona.nombre);
const numerosDuplicados = numeros.map(numero => numero * 2);
console.log('Array de personas:', personas);
console.log('Solo nombres:', nombresPersonas);
console.log('Números originales:', numeros);
console.log('Números duplicados:', numerosDuplicados);
console.log('-----------------------------------\n');

// 16. forEach() - Ejecuta una función para cada elemento del array
console.log('16. forEach() - Ejecuta una función para cada elemento');
console.log('Array de frutas:');
frutas.forEach((fruta, indice) => {
  console.log(`${indice}: ${fruta}`);
});
console.log('-----------------------------------\n');

// 17. reduce() - Reduce el array a un solo valor
console.log('17. reduce() - Reduce el array a un solo valor');
const sumaNumeros = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log('Array de números:', numeros);
console.log('Suma de todos los números:', sumaNumeros);
console.log('-----------------------------------\n');

// 18. reduceRight() - Como reduce pero de derecha a izquierda
console.log('18. reduceRight() - Reduce de derecha a izquierda');
const concatenacionInversa = frutas.reduceRight((acumulador, fruta) => acumulador + ' + ' + fruta);
console.log('Array de frutas:', frutas);
console.log('Concatenación inversa:', concatenacionInversa);
console.log('-----------------------------------\n');

// 19. every() - Comprueba si todos los elementos cumplen una condición
console.log('19. every() - Verifica si todos cumplen una condición');
const todosMayores18 = personas.every(persona => persona.edad > 18);
const todosMayores30 = personas.every(persona => persona.edad > 30);
console.log('Array de personas:', personas);
console.log('¿Todos son mayores de 18?', todosMayores18);
console.log('¿Todos son mayores de 30?', todosMayores30);
console.log('-----------------------------------\n');

// 20. some() - Comprueba si al menos un elemento cumple una condición
console.log('20. some() - Verifica si alguno cumple una condición');
const algunoMayor30 = personas.some(persona => persona.edad > 30);
const algunoMayor40 = personas.some(persona => persona.edad > 40);
console.log('Array de personas:', personas);
console.log('¿Alguno es mayor de 30?', algunoMayor30);
console.log('¿Alguno es mayor de 40?', algunoMayor40);
console.log('-----------------------------------\n');

// 21. sort() - Ordena los elementos del array
console.log('21. sort() - Ordena los elementos');
const frutasOrdenadas = [...frutas].sort();
const numerosOrdenados = [...numeros].sort((a, b) => a - b);
const personasOrdenadasPorEdad = [...personas].sort((a, b) => a.edad - b.edad);
console.log('Frutas originales:', frutas);
console.log('Frutas ordenadas:', frutasOrdenadas);
console.log('Números originales:', numeros);
console.log('Números ordenados:', numerosOrdenados);
console.log('Personas ordenadas por edad:', personasOrdenadasPorEdad);
console.log('-----------------------------------\n');

// 22. reverse() - Invierte el orden de los elementos
console.log('22. reverse() - Invierte el orden');
const frutasInvertidas = [...frutas].reverse();
console.log('Frutas originales:', frutas);
console.log('Frutas invertidas:', frutasInvertidas);
console.log('-----------------------------------\n');

// 23. fill() - Rellena todos los elementos con un valor estático
console.log('23. fill() - Rellena con un valor estático');
const arrayRelleno = new Array(5).fill('X');
const numerosModificados = [...numeros].fill(0, 2, 4);
console.log('Array relleno con "X":', arrayRelleno);
console.log('Números originales:', numeros);
console.log('Números con posiciones 2-3 rellenadas con 0:', numerosModificados);
console.log('-----------------------------------\n');

// 24. flat() - Aplana arrays anidados
console.log('24. flat() - Aplana arrays anidados');
const arrayAnidado = [1, 2, [3, 4, [5, 6]]];
const arrayAplanado1 = arrayAnidado.flat();
const arrayAplanadoCompleto = arrayAnidado.flat(Infinity);
console.log('Array anidado:', arrayAnidado);
console.log('Array aplanado (1 nivel):', arrayAplanado1);
console.log('Array aplanado (todos los niveles):', arrayAplanadoCompleto);
console.log('-----------------------------------\n');

// 25. flatMap() - Mapea y aplana en una sola operación
console.log('25. flatMap() - Mapea y aplana');
const frasesPorPersona = personas.flatMap(persona => [`${persona.nombre} tiene ${persona.edad} años`, `${persona.nombre} nació en ${new Date().getFullYear() - persona.edad}`]);
console.log('Array de personas:', personas);
console.log('Frases generadas con flatMap:', frasesPorPersona);
console.log('-----------------------------------\n');

// 26. Array.from() - Crea un nuevo array a partir de un objeto iterable
console.log('26. Array.from() - Crea array desde iterable');
const cadena = 'Hola';
const arrayDesdeString = Array.from(cadena);
const arrayPersonalizado = Array.from({length: 5}, (_, i) => i * 2);
console.log('String original:', cadena);
console.log('Array desde string:', arrayDesdeString);
console.log('Array personalizado:', arrayPersonalizado);
console.log('-----------------------------------\n');

// 27. Array.of() - Crea un nuevo array con los argumentos proporcionados
console.log('27. Array.of() - Crea array con argumentos');
const arrayOf = Array.of(1, 'dos', true, {nombre: 'Juan'});
console.log('Array.of():', arrayOf);
console.log('-----------------------------------\n');

// 28. Array.isArray() - Verifica si un valor es un array
console.log('28. Array.isArray() - Verifica si es un array');
console.log('¿frutas es un array?', Array.isArray(frutas));
console.log('¿"Hola" es un array?', Array.isArray('Hola'));
console.log('¿{} es un array?', Array.isArray({}));
console.log('-----------------------------------\n');

// 29. entries() - Devuelve un iterador con pares [índice, valor]
console.log('29. entries() - Devuelve pares [índice, valor]');
const iteradorEntries = frutas.entries();
console.log('Array original:', frutas);
console.log('Pares [índice, valor]:');
for (const entry of iteradorEntries) {
  console.log(entry);
}
console.log('-----------------------------------\n');

// 30. keys() - Devuelve un iterador con las claves del array
console.log('30. keys() - Devuelve las claves');
const iteradorKeys = frutas.keys();
console.log('Array original:', frutas);
console.log('Claves del array:');
for (const key of iteradorKeys) {
  console.log(key);
}
console.log('-----------------------------------\n');

// 31. values() - Devuelve un iterador con los valores del array
console.log('31. values() - Devuelve los valores');
const iteradorValues = frutas.values();
console.log('Array original:', frutas);
console.log('Valores del array:');
for (const value of iteradorValues) {
  console.log(value);
}
console.log('-----------------------------------\n');

// 32. copyWithin() - Copia una parte del array a otra ubicación
console.log('32. copyWithin() - Copia parte del array');
const numerosCopy = [...numeros];
numerosCopy.copyWithin(0, 3, 6);
console.log('Array original:', numeros);
console.log('Después de copyWithin:', numerosCopy);
console.log('-----------------------------------\n');

// 33. toString() - Convierte el array a string
console.log('33. toString() - Convierte a string');
const frutasString2 = frutas.toString();
console.log('Array original:', frutas);
console.log('Como string:', frutasString2);
console.log('-----------------------------------\n');

// 34. toLocaleString() - Convierte el array a string localizado
console.log('34. toLocaleString() - Convierte a string localizado');
const fechas = [new Date(), new Date(2022, 0, 1)];
const numerosLocales = [1000, 2000, 3000];
console.log('Array de fechas:', fechas);
console.log('Fechas localizadas:', fechas.toLocaleString('es-ES'));
console.log('Array de números:', numerosLocales);
console.log('Números localizados:', numerosLocales.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'}));
console.log('-----------------------------------\n');

console.log('===== FIN DE LA DEMOSTRACIÓN =====');