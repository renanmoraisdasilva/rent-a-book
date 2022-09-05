import Cliente from './cliente.model';
import Livro from './livro.model';

export default interface Emprestimo {
  cliente?: Cliente;
  livro?: Livro;
  posicao?: number;
  id?: number;
  dataEmprestimo: string;
  dataDevolucao?: string;
  livroId: number;
  clienteId: number;
}
