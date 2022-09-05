package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.dao.EmprestimoDao;
import br.com.stefanini.developerup.dto.EmprestimoDto;
import br.com.stefanini.developerup.model.Emprestimo;
import br.com.stefanini.developerup.parser.EmprestimoParser;

@RequestScoped
public class EmprestimoService {
	@Inject
	EmprestimoDao dao;

	public List<EmprestimoDto> listar() {

		return dao.listar().stream().map(EmprestimoParser.get()::dto).collect(Collectors.toList());
	}

	@Transactional
	public Emprestimo cadastrar(EmprestimoDto request) {
		Emprestimo emprestimo = new Emprestimo();
		setters(emprestimo, request);
		emprestimo.persistAndFlush();
		return emprestimo;
	}

	@Transactional
	public Emprestimo editar(EmprestimoDto request) {
		Emprestimo emprestimo = Emprestimo.findById(request.getId());
		setters(emprestimo, request);
		return emprestimo;
	}

	@Transactional
	public void deletar(Long id) {
		Emprestimo.deleteById(id);
	}

	private Emprestimo setters(Emprestimo emprestimo, EmprestimoDto request) {
		emprestimo.setClienteId(request.getClienteId());
		emprestimo.setLivroId(request.getLivroId());
		emprestimo.setDataDevolucao(request.getDataDevolucao());
		emprestimo.setDataEmprestimo(request.getDataEmprestimo());
		return emprestimo;
	}

}
