class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concessionaria {
    private endereco: string
    private listaDeCarros: any

    constructor(endereco: string) {
        this.endereco = endereco
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    public mostrarListaDeCarros(): any {
        this.listaDeCarros = ['hilux', 'brasília', 'fusca']
        return this.listaDeCarros
    }
}

let concessionaria = new Concessionaria('Av Paulista')
console.log(concessionaria)
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

class Pessoa {
    private nome: string
    private carroPreferido:string
    private carro: string

    constructor(_nome: string, _carroPreferido: string, _carro: string){
        this.nome = _nome
        this.carroPreferido = _carroPreferido
        this.carro = _carro
    }

    dizerNome(): string {
        return this.nome
    }

    dizerCarroPreferido(): string {
        return this.carroPreferido
    }

    comprarCarro(): string{
        return this.carro
    }

    dizerCarroQueTem(): string{
        return this.carro
    }
}

let pessoa = new Pessoa('Carlos','hilux', 'fusca')
console.log(`Meu nome é "${pessoa.dizerNome()}"`);
console.log(`Meu carro preferido é "${pessoa.dizerCarroPreferido()}"`);
console.log(`O carro que eu tenho é "${pessoa.dizerCarroQueTem()}"`);
console.log(`Quem quer comprar meu "${pessoa.comprarCarro()}"?`);

      