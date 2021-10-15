import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''

  //controles de validacao dos campos
  public enderecoValido!: boolean
  public numeroValido!: boolean
  public complementoValido!: boolean
  public formaPagamentoValido!: boolean

  constructor(private _ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
      //this._ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(this.endereco);
    
    //se a string for mais que 3
    if(this.endereco.length > 3){
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }
    
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero
    console.log(this.numero);
    
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    console.log(this.complemento);
    
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.formaPagamento = formaDePagamento
    console.log(this.formaPagamento)
    
  }

}
