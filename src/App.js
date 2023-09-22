import { useEffect, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import Rodape from "./componentes/Rodape";
import CarrinhoDeCompras from "./componentes/CarrinhoDeCompras";
import axios from "axios";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    setCarregando(true);
    axios.get('https://dummyjson.com/products').then(res => {
      let prods = res.data.products.map(p => {
        return {
          id: p.id,
          nome: p.title,
          valor: p.price,
          foto: p.images[0]
        };
      });
      setProdutos(prods);
      setCarregando(false);
    });
  }, []);

  const comprar = (p) => {
    setCarrinho([...carrinho, p]);
  };

  return (
    <>
      <Cabecalho titulo='Minha Loja'/>
      {carregando && <h1>Carregando ...</h1>}
      <ListaDeProdutos titulo='Produtos' onComprar={comprar} produtos={produtos}/>
      <hr/>
      <CarrinhoDeCompras itens={carrinho}/>
      <Rodape/>
    </>
  );
}

export default App;
