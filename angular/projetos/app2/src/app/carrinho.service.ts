import { Oferta } from './shared/oferta.model';
import { ItemCarrinho } from './shared/item-carrinho.model';

class CarrinhoService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho  =  new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    )
    console.log(itemCarrinho);

  }
}

export default CarrinhoService;
