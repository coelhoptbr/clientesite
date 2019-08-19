import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';


const routes: Routes = [
  { path: '', redirectTo: 'cliente', pathMatch: 'full' },
  { path: 'clientes', component: ListarClienteComponent },
  { path: 'incluir', component: IncluirClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
