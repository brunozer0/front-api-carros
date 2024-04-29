import { Component } from '@angular/core';
import { ConcessionariaService } from 'src/app/services/concessionaria.service';
import { ICarros } from 'src/app/models/ICarros';
import { Observable } from 'rxjs';
import { ICores } from 'src/app/models/ICores';
import { IMarcas } from 'src/app/models/IMarcas';
import { CarroCadastradoService } from 'src/app/services/carro-cadastrado.service';
@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.scss']
})
export class CadastroCarroComponent {
  cores$ = new Observable<ICores[]>();
  marcas$ = new Observable<IMarcas[]>();

  cores: ICores[] = [];
  marcas: IMarcas[] = [];


  corSelecionada: ICores = { nomecor: '' };


  carro: ICarros = {
    nomeCarro: '',
    anoFabricacaoCarro: 0,
    anoModeloCarro: 0,
    modeloCarro: '',
    marca: { marca: '' },
    cores: [{ nomecor: '' }]
  };


  constructor(private concessionariaService: ConcessionariaService, private AtualizacaoDeCarros: CarroCadastradoService) {
    this.getCores();
    this.getMarcas();
  }

  cadastrarCarro() {
    if (!this.carro.nomeCarro || !this.carro.anoFabricacaoCarro || !this.carro.anoModeloCarro ||
      !this.carro.modeloCarro || !this.carro.marca || !this.carro.cores) {
      return alert("Preencha todos os campos");
    }
    this.carro.cores = [this.corSelecionada];
    this.concessionariaService.cadastrarCarro(this.carro).subscribe(() => {
      this.AtualizacaoDeCarros.notificarCadastroCarro();
    });

    this.limparInputs()
    alert("carro cadastrado");
  }

  limparInputs() {
    this.carro.nomeCarro = '';
    this.carro.anoFabricacaoCarro = 0;
    this.carro.anoModeloCarro = 0;
    this.carro.modeloCarro = '';
    this.carro.marca = { marca: '' },
      this.corSelecionada = { nomecor: '' };
  }

  getCores(): void {
    this.cores$ = this.concessionariaService.getCores();
  }
  getMarcas(): void {
    this.marcas$ = this.concessionariaService.getMarcas();
  }
}
