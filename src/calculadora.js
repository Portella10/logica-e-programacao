function somarDoisNumeros(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}

function calcularMediaDeDoisNumeros(valor1, valor2) {
  // 1. Soma todos os valores
  const resultadoSomaDeDoisValores = somarDoisNumeros(valor1, valor2);

  // 2. Divide o resultado pela quantidade de valores
  const media = resultadoSomaDeDoisValores / 2;

  //3. Retorna o resultado
  return resultadoSomaDeDoisValores;
}

module.exports = {
  somarDoisNumeros,
};
