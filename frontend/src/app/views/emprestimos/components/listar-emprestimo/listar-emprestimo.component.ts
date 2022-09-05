import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import * as moment from 'moment';
import Autor from 'src/app/global/models/autor.model';
import Cliente from 'src/app/global/models/cliente.model';
import Emprestimo from 'src/app/global/models/emprestimo.model';
import Livro from 'src/app/global/models/livro.model';
import { ClienteService } from 'src/app/views/clientes/service/clientes.service';
import { LivrosService } from 'src/app/views/livros/service/livros.service';
import { EmprestimosService } from '../../service/emprestimo.service';

@Component({
  templateUrl: './listar-emprestimo.component.html',
  styleUrls: ['./listar-emprestimo.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ListarEmprestimosComponent implements OnInit {
  clientes: Cliente[] = [];
  livros: Livro[] = [];
  emprestimos: Emprestimo[] = [];
  displayedColumns = [
    'nomeCliente',
    'nomeLivro',
    'dataEmprestimo',
    'dataDevolucao',
    'acoes',
  ];
  display: boolean = false;
  stateEditar: boolean = false;
  novoEmprestimo: Emprestimo = {
    livroId: 0,
    clienteId: 0,
    dataEmprestimo: '',
  };

  constructor(
    private emprestimosApi: EmprestimosService,
    private clienteApi: ClienteService,
    private messageService: MessageService,
    private livrosApi: LivrosService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit(): void {
    this.listarEmprestimos();
    this.primengConfig.ripple = true;
  }

  listarEmprestimos(): void {
    this.emprestimosApi.listar().subscribe((res: Emprestimo[]) => {
      this.emprestimos = res;
      res.map((item) => {
        let date = new Date(item.dataEmprestimo);
        if (item.dataDevolucao) {
          let date = new Date(item.dataDevolucao);
          item.dataDevolucao = moment(date).format('DD/MM/YYYY');
        }
        item.dataEmprestimo = moment(date).format('DD/MM/YYYY');
      });
      this.listarCliente();
    });
  }

  listarCliente(): void {
    this.clienteApi.listar().subscribe((res: Cliente[]) => {
      this.clientes = this.parseSelect(res);
      this.listarLivros();
    });
  }

  parseSelect(object: any): any {
    return object.map((item: any) => ({
      ...item,
      label: item.nome,
      value: item.id,
    }));
  }

  listarLivros(): void {
    this.livrosApi.listar().subscribe((res: Livro[]) => {
      this.livros = this.parseSelect(res);
      this.parseEmprestimo();
    });
  }

  parseEmprestimo(): void {
    this.emprestimos.map((emprestimo) => {
      let cliente = this.clientes.find(
        (cliente) => cliente.id == emprestimo.clienteId
      );
      let livro = this.livros.find((livro) => livro.id == emprestimo.livroId);
      emprestimo.cliente = cliente;
      emprestimo.livro = livro;
    });
  }

  incluirEmprestimos(): void {
    this.display = false;
    this.emprestimosApi.incluir(this.novoEmprestimo).subscribe(
      () => {
        this.showSuccess('Emprestimo incluído com sucesso.');
        this.listarEmprestimos();
      },
      (err: any) => {
        this.showError('Não foi possível incluír o empréstimo.');
        console.error(err);
      }
    );
  }

  devolverEmprestimo(emprestimo: Emprestimo): void {
    let hoje = new Date();
    emprestimo.dataDevolucao = moment(hoje).format('DD/MM/YYYY');
    this.emprestimosApi.editar(emprestimo).subscribe(
      () => {
        this.listarEmprestimos();
        this.showSuccess('Livro devolvido com sucesso.');
      },
      (err: any) => {
        console.error(err);
        this.showError('Não foi possível devolver o livro.');
      }
    );
  }

  editarEmprestimos(): void {
    this.display = false;
    this.emprestimosApi.editar(this.novoEmprestimo).subscribe(
      () => {
        this.stateEditar = false;
        this.listarEmprestimos();
        this.showSuccess('Empréstimo editado com sucesso.');
      },
      (err: any) => {
        console.error(err);
        this.showError('Não foi possível editar o empréstimo.');
      }
    );
  }

  excluirEmprestimos(emprestimo: Emprestimo): void {
    this.emprestimosApi.excluir(emprestimo).subscribe(
      () => {
        this.listarEmprestimos();
        this.showSuccess('Empréstimo excluído com sucesso.');
      },
      (err: any) => {
        console.error(err);
        this.showError('Não foi possível excluir o empréstimo.');
      }
    );
  }

  handleClickEditar(emprestimo: Emprestimo): void {
    this.stateEditar = true;
    this.novoEmprestimo = { ...emprestimo };
    this.display = true;
  }

  handleClickConcluir(): void {
    this.stateEditar ? this.editarEmprestimos() : this.incluirEmprestimos();
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

  confirmarDevolucao(event: Event, emprestimo: Emprestimo) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Deseja devolver este livro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.devolverEmprestimo(emprestimo);
      },
    });
  }

  confirmarExclusao(event: Event, emprestimo: Emprestimo) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Deseja excluir este livro?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluirEmprestimos(emprestimo);
      },
    });
  }
}
