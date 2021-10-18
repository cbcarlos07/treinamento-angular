import { ItemCarrinho } from './shared/item-carrinho.model'

class CarrinhoService {
    public itens: ItemCarrinho[] = []
    
    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }


    public adicionarAoCarrinho(item: ItemCarrinho): void {
        this.itens.push(item)
    }
    
}

export default CarrinhoService
