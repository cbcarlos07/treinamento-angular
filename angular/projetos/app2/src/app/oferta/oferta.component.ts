import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
import CarrinhoService from 'src/src/app/carrinho.service';
import { ItemCarrinho } from 'src/src/app/shared/item-carrinho.model';
// import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
    selector: 'app-oferta',
    templateUrl: './oferta.component.html',
    styleUrls: ['./oferta.component.css'],
    providers: [OfertasService, CarrinhoService],
})
export class OfertaComponent implements OnInit, OnDestroy {
    // private tempoObservableSubscription!: Subscription
    // private meuObservableTesteSubscription!: Subscription
    
    public oferta!: Oferta;
    
    constructor(
        private route: ActivatedRoute,
        private ofertasService: OfertasService,
        private carrinhoService: CarrinhoService
        ) {}
        
        ngOnInit(): void {
            this.route.params.subscribe((parametros: Params) => {
                this.ofertasService
                .getOfertaPorId(parametros.id)
                .then((oferta: Oferta) => {
                    this.oferta = oferta;
                });
            });

            
            
            // console.log('Id recuperado da rota:', this.route.snapshot.params['id']);
            
            // this.route.params.subscribe(
            //     (parametro: any) => {console.log(parametro)}),
            //     (erro: any) => console.log(erro),
            //     () => console.log('processamento foi classificado como concluido');
            
            // let tempo = interval(2000);
            // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
            //   console.log(intervalo);
            // });
            
            // //observable(observavel)
            //   let meuObservableTeste = new Observable((observer: Observer<number>) => {
            //     observer.next(1)
            //     observer.next(3)
            //     observer.complete()
            //     observer.next(5)
            //   })
            
            // //observable(observador)
            //   this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
            //     (resultado: number) => console.log(resultado + 10),
            //     (erro: string) => console.log(erro),
            //     () => console.log('stream de enventos foi finalizada')
            //   )
        }
        
        ngOnDestroy() {
            // this.meuObservableTesteSubscription.unsubscribe()
            // this.tempoObservableSubscription.unsubscribe()
        }

        public adicionarAoCarrinho(){

            let itemCarrinho: ItemCarrinho = new ItemCarrinho(this.oferta.id, this.oferta.imagens, this.oferta.titulo, this.oferta.descricao_oferta, this.oferta.valor, 1);

            this.carrinhoService.adicionarAoCarrinho( itemCarrinho )

        }
    }
    