import Autor from './autor.model';

export default interface Livro {
  posicao?: number;
  id?: number;
  nome: string;
  anoDePublicacao: string;
  editora: string;
  ISBN: string;
  quantidadeExemplares: string;
  autor: Autor;
}
