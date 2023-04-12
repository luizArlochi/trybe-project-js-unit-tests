const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // 1: Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.
    const objetoRetornado = createMenu({ food: {}, drink: {} });
    expect(objetoRetornado).toHaveProperty('fetchMenu');
    expect(typeof objetoRetornado.fetchMenu).toBe('function');

    // 2: Verifique se 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`, 
    // considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.
    const menuEsperado = { food: {}, drink: {} };
    const menuRetornado = objetoRetornado.fetchMenu();
    expect(menuRetornado).toEqual(menuEsperado);

    // 3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função 'objetoRetornado.fetchMenu()'.
    const menuPassado = { food: { coxinha: 2 }, drink: { cerveja: 5 } };
    const objetoRetornado2 = createMenu(menuPassado);
    const menuRecuperado = objetoRetornado2.fetchMenu();
    expect(menuRecuperado).toEqual(menuPassado);

    // 4: Faça a implementação do item 4 do README no arquivo src/restaurant.js.

    // 5: Verifique se 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    expect(objetoRetornado.consumption).toEqual([]);

    // 6: Faça a implementação do item 6 do README no arquivo src/restaurant.js.

    // 7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro
    // - se a string existir nas chaves 'food' ou 'drink', deve ser adicionada ao array consumption
    // - senão, deve exibir a mensagem "Item indisponível" e não adicionar nada ao array
    // Ex: obj.order('coxinha') --> ['coxinha']
    // Ex: obj.order('picanha') --> Exibe "Item indisponível"
    objetoRetornado.order('coxinha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    objetoRetornado.order('picanha');
    expect(objetoRetornado.consumption).toEqual(['coxinha']);
    expect(console.log).toHaveBeenCalledWith('Item indisponível');

    // 8: Faça a implementação do item 8 do README no arquivo src/restaurant.js.

    // 9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.
    objetoRetornado.order('coxinha');
    objetoRetornado.order('cerveja');
    objetoRetornado.order('pizza');
    expect(objetoRetornado.consumption).toEqual(['coxinha', 'cerveja', 'pizza']);
  }
}