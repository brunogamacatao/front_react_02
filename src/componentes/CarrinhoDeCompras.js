import React from 'react'

export default function CarrinhoDeCompras({itens}) {
  const renderItem = (i) => {
    return (<li>{i.nome} - R$ {i.valor.toFixed(2)}</li>)
  };

  const calculaTotal = () => {
    let total = 0.0;
    itens.forEach(i => total += i.valor);
    return total;
  };

  return (
    <>
      <h3>Carrinho de Compras:</h3>
      <ol>
        {itens.map(renderItem)}
      </ol>
      <h3>Total das compras: R$ {calculaTotal().toFixed(2)}</h3>
    </>
  )
}
