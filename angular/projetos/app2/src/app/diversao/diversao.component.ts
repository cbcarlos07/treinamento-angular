import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/src/app/ofertas.service';
import { Oferta } from 'src/src/app/shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasService]
})
export class DiversaoComponent implements OnInit {
  ofertas: Oferta[] = []
  constructor(private _ofertasService: OfertasService) { }

  ngOnInit(): void {
    this._ofertasService.getOfertasPorCategoria('diversao')
        .then( (_ofertas: Oferta[]) => {
          console.log(_ofertas);
          
            this.ofertas = _ofertas;
        })
  }

}
