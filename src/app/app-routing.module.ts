import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCarroComponent } from './components/cadastro-carro/cadastro-carro.component';
import { ListaCarrosComponent } from './components/lista-carros/lista-carros.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro-veiculo', pathMatch: 'full' },
  { path: 'cadastro-veiculo', component: CadastroCarroComponent },
  { path: 'lista-carros', component: ListaCarrosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
