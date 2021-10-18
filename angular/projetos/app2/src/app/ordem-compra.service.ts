import { Observable } from 'rxjs';
import { Pedido } from './shared/pedido.model'
import { Injectable } from '@angular/core'
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http'
import { URL_API } from './app.api';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

constructor(private http: HttpClient) {  }

  public efetivarCompra(pedido: Pedido): Observable<number> {
    
    let headers: HttpHeaders = new HttpHeaders()

    headers.append('Content-type', 'application/json')

    return  this.http.post(
        `${URL_API}/pedidos`,
        pedido,
        {headers: headers} 
    )
    // .pipe(map((resposta: any) => { return resposta }))
    .pipe(map((resposta: any) => resposta.id))
  }
}
