import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validacao dos campos
  public enderecoValido!: boolean;
  public numeroValido!: boolean;
  public complementoValido!: boolean;
  public formaPagamentoValido!: boolean;

  //estados primitivos dos campos --- (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //controlar botao confirmar compra
  public formEstado: string = 'disabled';

  constructor() {}

  ngOnInit(): void {}

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    //console.log(this.endereco);

    this.enderecoEstadoPrimitivo = false;

    //se a string for mais que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    // console.log(this.numero);

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    // console.log(this.complemento);
    this.complementoEstadoPrimitivo = false;
    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaDePagamento: string): void {
    this.formaPagamento = formaDePagamento;
    // console.log(this.formaPagamento);
    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (
      this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true
    ) {
      this.formEstado = '';
    }else {
      this.formEstado = 'disabled';
    }
  }
}
