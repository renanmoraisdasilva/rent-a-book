import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAutoresComponent } from './views/autores/components/listar-autores/listar-autores.component';
import { ListarClientesComponent } from './views/clientes/componentes/listar-clientes/listar-clientes.component';
import { ListarEmprestimosComponent } from './views/emprestimos/components/listar-emprestimo/listar-emprestimo.component';
import { HomeComponent } from './views/home/home.component';
import { ListarLivrosComponent } from './views/livros/components/listar-livros/listar-livros.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'clientes/listar',
    component: ListarClientesComponent,
    data: { pageTitle: 'Listar Clientes' },
  },
  {
    path: 'autores/listar',
    component: ListarAutoresComponent,
    data: { pageTitle: 'Listar Autores' },
  },
  {
    path: 'livros/listar',
    component: ListarLivrosComponent,
    data: { pageTitle: 'Listar Livros' },
  },
  {
    path: 'emprestimos',
    component: ListarEmprestimosComponent,
    data: { pageTitle: 'Emprestimo' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
