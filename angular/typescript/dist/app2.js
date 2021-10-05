"use strict";
var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco) {
        this.endereco = endereco;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        this.listaDeCarros = ['hilux', 'brasília', 'fusca'];
        return this.listaDeCarros;
    };
    return Concessionaria;
}());
var concessionaria = new Concessionaria('Av Paulista');
console.log(concessionaria);
console.log(concessionaria.mostrarListaDeCarros());
/*
Pessoa
    Atributos
      nome
      carroPreferido
      carro
    Metodos
      dizerNome()
      dizerCarroPreferido()
      comprarCarro()
      dizerCarroQueTem()
*/
var Pessoa = /** @class */ (function () {
    function Pessoa(_nome, _carroPreferido, _carro) {
        this.nome = _nome;
        this.carroPreferido = _carroPreferido;
        this.carro = _carro;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function () {
        return this.carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('Carlos', 'hilux', 'fusca');
console.log("Meu nome \u00E9 \"" + pessoa.dizerNome() + "\"");
console.log("Meu carro preferido \u00E9 \"" + pessoa.dizerCarroPreferido() + "\"");
console.log("O carro que eu tenho \u00E9 \"" + pessoa.dizerCarroQueTem() + "\"");
console.log("Quem quer comprar meu \"" + pessoa.comprarCarro() + "\"?");
