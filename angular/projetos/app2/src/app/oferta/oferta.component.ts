import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
// import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription!: Subscription
  // private meuObservableTesteSubscription!: Subscription

  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    // console.log('Id recuperado da rota:', this.route.snapshot.params['id']);
    this.ofertasService
      .getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });

    
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

}
