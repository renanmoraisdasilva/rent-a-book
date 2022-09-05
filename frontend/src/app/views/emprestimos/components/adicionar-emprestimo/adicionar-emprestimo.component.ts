import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import Autor from 'src/app/global/models/autor.model';
import Cliente from 'src/app/global/models/cliente.model';
import Emprestimo from 'src/app/global/models/emprestimo.model';
import Livro from 'src/app/global/models/livro.model';
import { AutoresService } from 'src/app/views/autores/service/autores.service';
import { EmprestimosService } from '../../service/emprestimo.service';

@Component({
  selector: 'app-adicionar-emprestimo',
  templateUrl: './adicionar-emprestimo.component.html',
  styleUrls: ['./adicionar-emprestimo.component.scss'],
})
export class AdicionarEmprestimoComponent implements OnInit {
  @Input() novoEmprestimo: Emprestimo = {
    livroId: 0,
    clienteId: 0,
    dataEmprestimo: '',
  };
  @Input() clientes: Cliente[] = [];
  @Input() livros: Livro[] = [];

  @Output() novoEmprestimoChange = new EventEmitter<Emprestimo>();

  years: SelectItem[] = [];

  constructor() {}

  ngOnInit(): void {}
}
