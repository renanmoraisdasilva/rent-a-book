import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EmprestimosService } from './emprestimo.service';

describe('EmprestimosService', () => {
  let service: EmprestimosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmprestimosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('>> listarEmprestimos | deve retornar Emprestimos[]', () => {
  //   const expectedData = [
  //     {
  //       livroId: 'teste',
  //       clienteId: 'teste',
  //       dataEmprestimo: 'teste',
  //     },
  //   ];

  //   service.listar().subscribe((res) => {
  //     expect(res).toEqual(expectedData);
  //   });

  //   const req = httpMock.expectOne('http://localhost:8080/api/emprestimo');
  //   expect(req.request.method).toBe('GET');
  //   req.flush(expectedData);
  // });
});
