/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

/*
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência.
  Se não for especificado um raio, a função retorna `undefined`.
  Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no console do navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Outra dica: que tal pesquisar se existe um matcher que compara valores próximos?
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Testa se a função circle retorna undefined quando o parâmetro passado não é um número', () => {
    expect(circle('string')).toBeUndefined();
  });

  it('Testa se a função circle retorna um objeto', () => {
    const validCircle = circle(5);
    expect(typeof validCircle).toBe('object');
  });

  it('Testa se o objeto retornado pela função circle possui 3 propriedades', () => {
    const validCircle = circle(5);
    expect(Object.keys(validCircle)).toHaveLength(3);
  });

  it('Testa se a função circle retorna undefined quando não recebe nenhum parâmetro', () => {
    const invalidCircle = circle();
    expect(invalidCircle).toBeUndefined();
  });

  it('Testa se o objeto retornado pela função circle possui a circunferência correta para um círculo de raio 2', () => {
    const validCircle = circle(2);
    expect(validCircle.circumference).toBe(12.56);
  });

  it('Testa se o objeto retornado pela função circle possui a área correta para um círculo de raio 3', () => {
    const validCircle = circle(3);
    expect(validCircle.circumference).toBe(18.84);
  });

  it('Testa se a função circle retorna os dados corretos de um círculo de raio 3', () => {
    const validCircle = circle(3);
    expect(validCircle).toEqual({
      radius: 3,
      area: 28.259999999999998,
      circumference: 18.84,
    });
  });
});

// Tentei colocar os parametros do que é esperado de forma a não setar um valor especifico,
// e sim com que o teste fizesse o calculo utilizando os parametros da função, por exemplo

// it('Testa se a função circle retorna os dados corretos de um círculo de raio 3', () => {
//   const validCircle = circle(3);
//   expect(validCircle).toBeClose({
//     radius: 3,
//     area: Math.PI * 3 * 3,
//     circumference: 2 * Math.PI * 3,
//   });
// });

// O que acredito eu teria uma lógica mais próxima do ideal, 
// porém não estou sabendo usar os matchers e o teste está retornando um erro referente as casas decimais
// Expected
//     -   "area": 28.274333882308138,
// -   "circumference": 18.84955592153876,
// Received
// +   "area": 28.259999999999998,
// +   "circumference": 18.84,