// 1. Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla
    let resultado;
    resultado = 2 + 5;
    
    console.log(`La suma es ${resultado}`);

// 2. Un estudiante realiza 4 exámenes, calcular el promedio de estos
    examen1 = 09;
    examen2 = 12;
    examen3 = 14;
    examen4 = 08;

    resultado = ((examen1 + examen2 + examen3 + examen4) / 4);

    console.log(`El promedio es ${resultado}`);

// 3. Calcular el área de un rectángulo
    // A = b * a

    base = 12;
    altura = 6;

    resultado = (base * altura);

    console.log(`El área del rectángulo es ${resultado}`);


// 4. Calcular el área de un triángulo
    // (b * a) / 2

    base = 12;
    altura = 6;

    resultado = ((base * altura) / 2);

    console.log(`El área del triángulo es ${resultado}`);


// 5. Calcular el área de una circunferencia
    // Pi * r2
    Pi = Math.PI;
    radio = 3;

    resultado = (radio * radio) * Pi;

    console.log(`El área de la circunferencia es ${resultado}`);

// 6. Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
    sueldo = 30;
    horas = 35;

    resultado = sueldo * horas;

    console.log(`El sueldo semanal es de S/${resultado}`);

// 7. Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. Represéntelo mediante el diagrama de flujo y el pseudocódigo (1 pulgada = 0.0254 m).
    metros = 1;

    resultado = metros * 39.37;
    
    console.log(`Debe pedir ${resultado} pulgadas de tela`);

// 8. Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano
    soles = 3
    valorDolarHoy = 3.34;

    resultado = (soles * valorDolarHoy);

    console.log(`Con S/${soles} puedes adquirir $${resultado} de acuerdo al valor del dólar hoy`);

// 9. Una empresa que contrata personal requiere determinar la edad de las personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que nacieron
    fechaNacimiento = 1993;
    fechaActual = 2021;

    resultado = (fechaActual - fechaNacimiento);

    console.log(`La edad de la persona es de ${resultado} años`);

// 10. Se tiene el nombre y la edad de tres personas. Se desea saber el nombre y la edad de la persona de menor edad
    /*
    Definir nombres de persona1, persona2 y persona3
    Definir edades de persona1, persona2 y persona3

    si edad1 < edad 2 entonces
    si edad 1 < edad 3
    Entonces el menor es persona1
    SiNo
    Entonces el menor es persona3
    SiNo
    Entonces el menor es persona2
    */

// 11. Se les dará un bono por antigüedad a los empleados de una tienda. Si tienen un año, se les dará $100; si tienen 2 años, $200, y así sucesivamente hasta los 5 años. Para los que tengan más de 5, el bono será de $1000. Realice un algoritmo y represéntelo, que permita determinar el bono que recibirá un trabajador
    /*
    si la persona trabajó 1 año entonces recibe S/100
    SiNo
    si la persona trabajó 2 años entonces recibe S/200
    SiNo
    si la persona trabajó 3 años entonces recibe S/300
    SiNo
    si la persona trabajó 4 años entonces recibe S/400
    SiNo
    si la persona trabajó 5 años entonces recibe S/500
    SiNo
    si la persona trabajó 6 años o más entonces recibe S/500
    */

// 12. Un profesor tiene un salario inicial de $1500, y recibe un incremento de 10 % anual durante 6 años. ¿Cuál es su salario al cabo de 6 años? ¿Qué salario ha recibido en cada uno de los 6 años? Realice el algoritmo y representan la solución, utilizando el ciclo apropiado
    salarioInicial = 1500;

    primerAno = 1500 + (1500 * 0.1);
    segundoAno = primerAno + (primerAno * 0.1);
    tercerAno = segundoAno + (segundoAno * 0.1);
    cuartoAno = tercerAno + (tercerAno * 0.1);
    quintoAno = cuartoAno + (cuartoAno * 0.1);
    sextoAno = (quintoAno + (quintoAno * 0.1));

    console.log(`El salario al cabo de 6 años es de S/ ${sextoAno}`);
    console.log(`El primer año recibió S/1500, el segundo año ${segundoAno}, el tercer año ${tercerAno}, el cuarto año ${cuartoAno}, el quinto año ${quintoAno} y el último año recibió ${sextoAno}`);

    // ya sé que podría usar trim, floor o ceil, pero ese es el número tal cual xd

// 13. Realice un algoritmo para leer las calificaciones de N alumnos y determine el número de aprobados y reprobados
    /*
    si la nota es 11 o mayor a 11 entonces es aprobada
    SiNo
    es desaprobada
    */

// 14. Una compañía fabrica focos de colores (verdes, blancos y rojos). Se desea contabilizar, de un lote de N focos, el número de focos de cada color que hay en existencia
    /*
    si es verde
    SiNo
    si no es verde y no es blanco
    entonces es rojo
    SiNo
    entonces es blanco
    */


// 15. Realice un algoritmo para determinar si una persona puede votar con base en su edad en las próximas elecciones
    /*
    persona coloca su edad
    si la edad de la persona es menor a 18 entonces no puede votar
    */