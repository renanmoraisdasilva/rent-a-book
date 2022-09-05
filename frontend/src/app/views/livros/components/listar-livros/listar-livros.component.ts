import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import Autor from 'src/app/global/models/autor.model';
import Livro from 'src/app/global/models/livro.model';
import { LivrosService } from '../../service/livros.service';

@Component({
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ListarLivrosComponent implements OnInit {
  livros: Livro[] = [];
  displayedColumns = [
    'nome',
    'ISBN',
    'anoDePublicacao',
    'editora',
    'autor',
    'quantidadeExemplares',
    'acoes',
  ];
  display: boolean = false;
  stateEditar: boolean = false;
  novoLivro: Livro = {
    nome: '',
    anoDePublicacao: '',
    editora: '',
    ISBN: '',
    quantidadeExemplares: '',
    autor: {
      nome: '',
      ISNI: '',
      email: '',
      dataNascimento: '',
      biografia: '',
    },
  };

  constructor(
    private livrosApi: LivrosService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.listarLivros();
  }

  listarLivros(): void {
    this.livrosApi.listar().subscribe((res: Livro[]) => {
      this.livros = res;
    });
  }

  incluirLivros(): void {
    this.display = false;
    this.livrosApi.incluir(this.novoLivro).subscribe(
      () => {
        this.showSuccess('Livro incluído com sucesso.');
        this.listarLivros();
      },
      (err: any) => {
        this.showError('Não foi possível incluír o livro.');
        console.error(err);
      }
    );
  }

  editarLivros(): void {
    this.display = false;
    this.livrosApi.editar(this.novoLivro).subscribe(
      () => {
        this.stateEditar = false;
        this.listarLivros();
        this.showSuccess('Livro editado com sucesso.');
      },
      (err: any) => {
        console.error(err);
        this.showError('Não foi possível editar o livro.');
      }
    );
  }

  excluirLivros(livro: Livro): void {
    this.livrosApi.excluir(livro).subscribe(
      () => {
        this.listarLivros();
        this.showSuccess('Livro excluído com sucesso.');
      },
      (err: any) => {
        this.showError('Não foi possível excluir o livro.');
        console.error(err);
      }
    );
  }

  handleClickEditar(livro: Livro): void {
    this.stateEditar = true;
    this.novoLivro = { ...livro };
    this.display = true;
  }

  handleClickConcluir(): void {
    this.stateEditar ? this.editarLivros() : this.incluirLivros();
  }

  showSuccess(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Successo',
      detail: message,
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: message,
    });
  }

  confirmarExclusao(event: Event, livro: Livro) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Deseja excluir este livro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluirLivros(livro);
      },
    });
  }
}
