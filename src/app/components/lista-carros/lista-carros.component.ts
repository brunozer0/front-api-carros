import { Component } from '@angular/core';
import { ConcessionariaService } from 'src/app/services/concessionaria.service';
import { ICarros } from 'src/app/models/ICarros';
import { ICores } from 'src/app/models/ICores';
import { IMarcas } from 'src/app/models/IMarcas';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.scss']
})
export class ListaCarrosComponent {

  carros$ = new Observable<ICarros[]>();
  cores$ = new Observable<ICores[]>();
  marcas$ = new Observable<IMarcas[]>();
  carregando: boolean = true;

  corSelecionada: ICores = { nomecor: '' };

  carro: ICarros = {
    id: undefined,
    nomeCarro: '',
    anoFabricacaoCarro: 0,
    anoModeloCarro: 0,
    modeloCarro: '',
    marca: { marca: '' },
    cores: [{ nomecor: '' }]
  };



  constructor(private concessionariaService: ConcessionariaService,) {
    this.getCarros();
  }

  getCarros(): void {
    this.carregando = true;
    this.carros$ = this.concessionariaService.getCarros();
    this.carros$.subscribe(() => {
      setTimeout(() => {
        this.carregando = false;
      }, 500);
    });

  }
  getCamposCarro(carros: ICarros): void {
    this.carro = { ...carros };
    this.carro.id = carros.id;
    this.marcas$ = this.concessionariaService.getMarcas();
    this.cores$ = this.concessionariaService.getCores();

  }

  remover(id: number) {
    this.concessionariaService.remover(id)
      .subscribe(() => this.getCarros())
  }

  atualizarCarro() {
    if (
      !this.carro.nomeCarro ||
      !this.carro.anoFabricacaoCarro ||
      !this.carro.anoModeloCarro ||
      !this.carro.modeloCarro ||
      !this.carro.marca?.marca ||
      !this.carro.cores?.length
    ) {
      return alert("Preencha todos os campos");
    }
    this.carro.cores = [this.corSelecionada];

    const carroEditado: ICarros = {
      id: this.carro.id,
      nomeCarro: this.carro.nomeCarro,
      anoFabricacaoCarro: this.carro.anoFabricacaoCarro,
      anoModeloCarro: this.carro.anoModeloCarro,
      modeloCarro: this.carro.modeloCarro,
      marca: this.carro.marca,
      cores: this.carro.cores
    };


    this.concessionariaService.updateLivro(carroEditado)
      .subscribe(() => this.getCarros());

    this.limparInputs()
    alert(`Dados atualizados`);
  }
  limparInputs() {
    this.carro.nomeCarro = '';
    this.carro.anoFabricacaoCarro = 0;
    this.carro.anoModeloCarro = 0;
    this.carro.modeloCarro = '';
    this.carro.marca = { marca: '' },
      this.corSelecionada = { nomecor: '' };
  }
}
