import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ListarClientesComponent } from './views/clientes/componentes/listar-clientes/listar-clientes.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AdicionarClienteComponent } from './views/clientes/componentes/adicionar-cliente/adicionar-cliente.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ListarAutoresComponent } from './views/autores/components/listar-autores/listar-autores.component';
import { AdicionarAutorComponent } from './views/autores/components/adicionar-autor/adicionar-autor.component';
import { CalendarModule } from 'primeng/calendar';
import { ListarLivrosComponent } from './views/livros/components/listar-livros/listar-livros.component';
import { AdicionarLivroComponent } from './views/livros/components/adicionar-livro/adicionar-livro.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ListarEmprestimosComponent } from './views/emprestimos/components/listar-emprestimo/listar-emprestimo.component';
import { AdicionarEmprestimoComponent } from './views/emprestimos/components/adicionar-emprestimo/adicionar-emprestimo.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ListarClientesComponent,
    FooterComponent,
    AdicionarClienteComponent,
    ListarAutoresComponent,
    AdicionarAutorComponent,
    ListarLivrosComponent,
    AdicionarLivroComponent,
    ListarEmprestimosComponent,
    AdicionarEmprestimoComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    DialogModule,
    ButtonModule,
    InputMaskModule,
    InputTextModule,
    FormsModule,
    ToastModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    ConfirmPopupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
