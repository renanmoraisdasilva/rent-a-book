import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import Autor from 'src/app/global/models/autor.model';
import { AutoresService } from '../../service/autores.service';

@Component({
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ListarAutoresComponent implements OnInit {
  autores: Autor[] = [];
  displayedColumns = [
    'nome',
    'ISNI',
    'email',
    'dataNascimento',
    'biografia',
    'acoes',
  ];
  display: boolean = false;
  stateEditar: boolean = false;
  novoAutor: Autor = {
    nome: '',
    ISNI: '',
    email: '',
    dataNascimento: '',
    biografia: '',
  };

  constructor(
    private autoresApi: AutoresService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.listarAutores();
    this.primengConfig.ripple = true;
  }

  listarAutores(): void {
    this.autoresApi.listar().subscribe((res: Autor[]) => {
      this.autores = res;
      res.map((item) => {
        let date = new Date(item.dataNascimento);
        item.dataNascimento = moment(date).format('DD/MM/YYYY');
      });
    });
  }

  incluirAutor(): void {
    this.display = false;
    this.autoresApi.incluir(this.novoAutor).subscribe(
      () => {
        this.showSuccess('Autor incluído com sucesso.');
        this.listarAutores();
      },
      (err: any) => {
        this.showError('Não foi possível incluír o autor.');
        console.error(err);
      }
    );
  }

  editarAutor(): void {
    this.display = false;
    this.autoresApi.editar(this.novoAutor).subscribe(
      () => {
        this.stateEditar = false;
        this.listarAutores();
        this.showSuccess('Autor editado com sucesso.');
      },
      (err: any) => {
        console.error(err);
        this.showError('Não foi possível editar o autor.');
      }
    );
  }

  excluirAutor(autor: Autor): void {
    this.autoresApi.excluir(autor).subscribe(
      () => {
        this.listarAutores();
        this.showSuccess('Autor excluído com sucesso.');
      },
      (err: any) => {
        this.showError('Não foi possível excluir o autor.');
        console.error(err);
      }
    );
  }

  handleClickEditar(autor: Autor): void {
    this.stateEditar = true;
    this.novoAutor = { ...autor };
    this.display = true;
  }

  handleClickConcluir(): void {
    this.stateEditar ? this.editarAutor() : this.incluirAutor();
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

  confirmarExclusao(event: Event, autor: Autor) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Deseja excluir este autor?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluirAutor(autor);
      },
    });
  }
}
