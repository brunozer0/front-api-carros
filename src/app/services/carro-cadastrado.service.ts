import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarroCadastradoService {

  private carroCadastrado = new Subject<boolean>();
  carroCadastrado$ = this.carroCadastrado.asObservable();

  notificarCadastroCarro() {
    this.carroCadastrado.next(true);
  }
}
