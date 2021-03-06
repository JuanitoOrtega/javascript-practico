// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

// const perimetroCuadrado = ladoCuadrado * 4;

// Convirtiendolo en una función
function perimetroCuadrado(lado) {
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroCuadrado + "cm");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

function areaTriangulo(baseTriangulo, alturaTriangulo) {
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es de: " + radioCirculo + "cm");

// Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es de: " + diametroCirculo + "cm");

function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
// console.log("PI es: " + PI);

// Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es de: " + perimetroCirculo + "cm");

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es de: " + areaCirculo + "cm^2");

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();