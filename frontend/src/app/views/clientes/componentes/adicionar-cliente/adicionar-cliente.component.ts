import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Cliente from 'src/app/global/models/cliente.model';

@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.scss'],
})
export class AdicionarClienteComponent {
  @Input() novoCliente: Cliente = {
    nome: '',
    email: '',
    contato: '',
  };

  @Output() novoClienteChange = new EventEmitter<Cliente>();

  constructor() {}
}
