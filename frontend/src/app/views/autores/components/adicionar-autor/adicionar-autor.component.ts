import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Autor from 'src/app/global/models/autor.model';

@Component({
  selector: 'app-adicionar-autor',
  templateUrl: './adicionar-autor.component.html',
  styleUrls: ['./adicionar-autor.component.scss'],
})
export class AdicionarAutorComponent {
  @Input() novoAutor: Autor = {
    nome: '',
    ISNI: '',
    email: '',
    dataNascimento: '',
    biografia: '',
  };

  @Output() novoAutorChange = new EventEmitter<Autor>();

  constructor() {}
}
