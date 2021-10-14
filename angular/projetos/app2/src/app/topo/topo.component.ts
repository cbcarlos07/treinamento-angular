import { Observable, of, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService],
})
export class TopoComponent implements OnInit {
  public ofertas!: Observable<Oferta[]>;
  public ofertas2!: Oferta[]

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // retorno do array de Ofertas
    .pipe(debounceTime(1000))           // executa a acao do swtich map apos 1 seg
    .pipe(distinctUntilChanged())       // para fazer pesquisas distintas
    .pipe(switchMap((termo: string) => {
      console.log('requisicao http para api  ', termo);
      if(termo.trim() === '') {
        //retornar um observable de array de ofertas vazio
        return of<Oferta[]>([])
      }
      return this.ofertasService.pesquisaOfertas(termo)   
    }))
    .pipe(catchError((err: any) => {
      return of<Oferta[]>([])
    }))

    this.ofertas.subscribe((ofertas: Oferta[]) => {
       console.log(ofertas);
       this.ofertas2 = ofertas
    })

  }

  public pesquisa(termoDaPesquisa: string): void {
      console.log('keyup carcter ', termoDaPesquisa);
      
      this.subjectPesquisa.next(termoDaPesquisa.trim())




    // this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro status: ', erro.status),
    //   () => console.log('fluxo de enventos completo!')
    // );
  }
}
