import { useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import ListaDeProdutos from "./componentes/ListaDeProdutos";
import Rodape from "./componentes/Rodape";
import CarrinhoDeCompras from "./componentes/CarrinhoDeCompras";

function App() {
  let produtos = [
    {id: 0, nome: 'Maçã Kg', valor: 10.0, foto: 'https://static1.squarespace.com/static/5b8edfa12714e508f756f481/5b901c270e2e720f73c99a8c/5bb650ee15fcc0b381896bad/1544795114405/?format=1500w'},
    {id: 1, nome: 'Chokito', valor: 3.0, foto: 'https://uploads.consultaremedios.com.br/product_variation_images/full/3cb4841b0d398c7af5b436deec34169a05ff754f.jpg?1510950497'},
    {id: 2, nome: 'Formitol', valor: 9.0, foto: 'https://images-americanas.b2w.io/produtos/87311295/imagens/mata-formigas-formicida-formitol-gel-seringa-chemone/87311298_1_xlarge.jpg'},
    {id: 3, nome: 'Maçã Kg', valor: 10.0, foto: 'https://static1.squarespace.com/static/5b8edfa12714e508f756f481/5b901c270e2e720f73c99a8c/5bb650ee15fcc0b381896bad/1544795114405/?format=1500w'},
    {id: 4, nome: 'Chokito', valor: 3.0, foto: 'https://uploads.consultaremedios.com.br/product_variation_images/full/3cb4841b0d398c7af5b436deec34169a05ff754f.jpg?1510950497'},
    {id: 5, nome: 'Formitol', valor: 9.0, foto: 'https://images-americanas.b2w.io/produtos/87311295/imagens/mata-formigas-formicida-formitol-gel-seringa-chemone/87311298_1_xlarge.jpg'},
  ];

  let produtosTI = [
    {id: 0, nome: 'Teclado', valor: 100.0, foto: 'https://images.tcdn.com.br/img/img_prod/740836/teclado_gamer_mecanico_km_d9_rgb_10977_1_7210deb58b779e6e2e87e0fc8912ef31.jpg'},
    {id: 1, nome: 'Mouse', valor: 80.0, foto: 'https://media.istockphoto.com/id/157289518/photo/retro-mouse-horizontal.jpg?s=612x612&w=0&k=20&c=HOBNC3YktO8dEIVQvu5YYbPiWCi8zfio8GSffQjz54g='},
    {id: 2, nome: 'Computador', valor: 1800.0, foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGiJM64CgqcAO0hkHZnmgRUrqwldaxmtdevk2qGToJ5goKyVdX9HJ1KUBJdiSOV15aJN4&usqp=CAU'},
  ];

  const [carrinho, setCarrinho] = useState([]);

  const comprar = (p) => {
    setCarrinho([...carrinho, p]);
  };

  return (
    <>
      <Cabecalho titulo='Minha Loja'/>
      <ListaDeProdutos titulo='Supermercado' onComprar={comprar} produtos={produtos}/>
      <hr/>
      <ListaDeProdutos titulo='Informática' onComprar={comprar} produtos={produtosTI}/>
      <hr/>
      <CarrinhoDeCompras itens={carrinho}/>
      <Rodape/>
    </>
  );
}

export default App;
