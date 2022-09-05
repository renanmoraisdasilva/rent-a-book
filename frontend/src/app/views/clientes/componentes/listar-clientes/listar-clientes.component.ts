import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import Cliente from 'src/app/global/models/cliente.model';
import { ClienteService as ClienteService } from '../../service/clientes.service';

@Component({
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class ListarClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'contato', 'acoes'];
  display: boolean = false;
  stateEditar: boolean = false;
  novoCliente: Cliente = {
    nome: '',
    email: '',
    contato: '',
  };

  constructor(
    private clienteApi: ClienteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.listarCliente();
  }

  listarCliente(): void {
    this.clienteApi.listar().subscribe((res: Cliente[]) => {
      this.clientes = res;
    });
  }

  incluirCliente(): void {
    this.display = false;
    this.clienteApi.incluir(this.novoCliente).subscribe(
      () => {
        this.showSuccess('Cliente salvo com sucesso.');
        this.listarCliente();
      },
      (err: any) => {
        this.showError('Não foi possível gravar o cliente.');
        console.error(err);
      }
    );
  }

  editarCliente(): void {
    this.display = false;
    this.clienteApi.editar(this.novoCliente).subscribe(
      () => {
        this.stateEditar = false;
        this.showSuccess('Cliente editado com sucesso.');
        this.listarCliente();
      },
      (err: any) => {
        this.showError('Não foi possível editar o cliente.');
        console.error(err);
      }
    );
  }

  excluirCliente(cliente: Cliente): void {
    this.clienteApi.excluir(cliente).subscribe(
      () => {
        this.listarCliente();
        this.showSuccess('Cliente excluído com sucesso.');
      },
      (err: any) => {
        this.showError('Não foi possível excluir o cliente.');
        console.error(err);
      }
    );
  }

  handleClickEditar(cliente: Cliente): void {
    this.stateEditar = true;
    this.novoCliente = { ...cliente };
    this.display = true;
  }

  handleClickConcluir(): void {
    this.stateEditar ? this.editarCliente() : this.incluirCliente();
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

  confirmarExclusao(event: Event, cliente: Cliente) {
    this.confirmationService.confirm({
      target: event.target!,
      message: 'Deseja excluir este cliente?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excluirCliente(cliente);
      },
    });
  }
}
