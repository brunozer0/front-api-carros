import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ICarros } from '../models/ICarros';
import { ICores } from '../models/ICores';
import { IMarcas } from '../models/IMarcas';

import { environment } from '../environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ConcessionariaService {

  apiCarrosUrl = environment.apiCarros
  apiCoresUrl = environment.apiCores
  apiMarcasUrl = environment.apiMarcas
  constructor(private httpClient: HttpClient) { }

  getCarros() {
    return this.httpClient.get<ICarros[]>(this.apiCarrosUrl);

  }
  getCores() {
    return this.httpClient.get<ICores[]>(this.apiCoresUrl);

  }
  getMarcas() {
    return this.httpClient.get<IMarcas[]>(this.apiMarcasUrl);

  }

  cadastrarCarro(carro: ICarros) {
    return this.httpClient.post<ICarros>(this.apiCarrosUrl, carro);
  }

  updateLivro(carro: ICarros): Observable<any> {
    const url = `${this.apiCarrosUrl}/${carro.id}`;
    return this.httpClient.put(url, carro);
  }

  remover(id: number) {
    return this.httpClient.delete<void>(`${this.apiCarrosUrl}/${id}`);
  }
}
