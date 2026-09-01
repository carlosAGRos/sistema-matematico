function calcularBhaskara (a, b, c) {

    if (a === 0) {
        return "O valor de 'a' nao pode ser zero .";
}

    const delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        return "Delta negativo. A equacao nao possui raizes reais .";
}

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    return {
        delta: delta ,
        x1: x1 ,
        x2: x2
    };
}

module.exports = calcularBhaskara ;