## Comando usados

## prefix

Seletor do componente

Para mudar o prefixo é preciso ir no arquivo angular.json e alterar o atributo prefix

    "prefix": "xyz",


## Plugins utilizados

### Tether

 [Clique aqui](http://tether.io/) para conhecer

    npm i tether --save

 ### Bootstrap

 [Clique aqui](https://getbootstrap.com/) para conhecer

 Para instalar execute o seguinte comando 

    npm i bootstrap

## JQuery

    npm i jquery --save

## Adicionar Configurações ao Projeto

Para adicionar o Bootstrap no projeto é preciso adcionaro o endereço do bootstrap que está na pasta node_modules dentro do arquivo `angular.json`

        "styles": [
            "/node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.css"
        ],

 Adicionar também o script do bootstrap

        "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]  

Dependências necessárias

    "styles": [
        "./node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
    ],
    "scripts": [
        "./node_modules/bootstrap/dist/js/bootstrap.min.js",
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/tether/dist/js/tether.min.js"
    ]


# Criar componentes

    ng g c nome_do_componente

Para criar sem o arquvo spec.ts

    ng c nome_do_componente --skipTests=true

Ou

    ng c nome_do_componente --skip-tests

Transformar png para icone

https://www.favicon-generator.org/

## SERVICES

Adicionando services ao componente

    @Component({
        
        providers: [ OfertasService ]
    })

    export class HomeComponent implements OnInit {

        constructor(private _ofertasService: OfertasService) { }

        ngOnInit(): void {
            console.log(this._ofertasService.getOfertas());
            
        }
    }




![alt text](https://github.com/cbcarlos07/treinamento-angular/blob/main/angular/img/app2/page.png)


## Promises

    return new Promise((resolve, reject) => {
            //algum tipo de processamento que ao finalizar chama a funcao resolve ou reject
            console.log('serah que passou por aqui?')
            resolve( this.ofertas )
        })

## ActivatedRoute

Para recuperar um parâmetro da rota é temos algumas opções

    this.route.snapshot.params['id']

ou

    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta;
          console.log(this.oferta);
        })

## Observable

    import { Observable } from 'rxjs';
    ...
    import { map } from 'rxjs/operators';

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http
      .get<Oferta[]>(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(map((resposta) => resposta));
  }


## switchMap
    
    this.ofertas = this.subjectPesquisa // retorno do array de Ofertas
    .pipe(switchMap((termo: string) => {
      console.log('requisicao http para api  ', termo);
      if(termo.trim() === '') {
        //retornar um observable de array de ofertas vazio
        return of<Oferta[]>([])
      }
      return this.ofertasService.pesquisaOfertas(termo)   
    }))

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      console.log(ofertas);
    })


    this.subjectPesquisa.next(termoDaPesquisa)

## Template form

    <form #formulario="ngForm">

         <input 
              type="text" 
              class="form-control is-invalid" 
              placeholder="Endereço" 
              autocomplete="off" 
              minlength="5" 
              required
              name="endereco"
              ngModel
            >

    </form>

Validação dos campos é feita através de atributos(HTML)

Ngform

NgModel

## Reactive Forms

Validação de campos é feita através da classe do componente(TS)

* ReactiveFormsModule
* formGroup
* formcontrol
* validaçào dos campos é feita através da classe do componente(TS)

