import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import Autor from 'src/app/global/models/autor.model';
import Livro from 'src/app/global/models/livro.model';
import { AutoresService } from 'src/app/views/autores/service/autores.service';

@Component({
  selector: 'app-adicionar-livro',
  templateUrl: './adicionar-livro.component.html',
  styleUrls: ['./adicionar-livro.component.scss'],
})
export class AdicionarLivroComponent implements OnInit {
  autores: Autor[] = [];

  @Input() novoLivro: Livro = {
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

  @Output() novoLivroChange = new EventEmitter<Livro>();

  years: SelectItem[] = [];

  constructor(private autoresApi: AutoresService) {
    this.years = [];
    for (let i = 0; i < 100; i++) {
      let year = new Date().getFullYear() - i;
      this.years.push({
        label: String(year),
        value: year,
      });
    }
  }

  ngOnInit(): void {
    this.listarAutores();
  }

  listarAutores(): void {
    this.autoresApi.listar().subscribe((res: Autor[]) => {
      this.autores = res.map((item) => ({
        ...item,
        label: item.nome,
        value: item.id,
      }));
    });
  }
}
