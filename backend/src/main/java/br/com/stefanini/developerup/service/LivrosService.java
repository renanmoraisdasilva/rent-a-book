package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.dao.LivrosDao;
import br.com.stefanini.developerup.dto.LivrosDto;
import br.com.stefanini.developerup.model.Livros;
import br.com.stefanini.developerup.parser.LivroParser;

@RequestScoped
public class LivrosService {
	@Inject
	LivrosDao dao;

	public List<LivrosDto> listar() {
		return dao.listar().stream().map(LivroParser.get()::dto).collect(Collectors.toList());
	}

	@Transactional
	public Livros cadastrar(LivrosDto request) {
		Livros livro = new Livros();
		setters(livro, request);
		livro.persistAndFlush();
		return livro;
	}

	@Transactional
	public Livros editar(LivrosDto request) {
		Livros livro = Livros.findById(request.getId());
		setters(livro, request);
		return livro;
	}

	@Transactional
	public void deletar(Long id) {
		Livros.deleteById(id);
	}

	private Livros setters(Livros livro, LivrosDto request) {
		livro.setAnoDePublicacao(request.getAnoDePublicacao());
		livro.setAutor(request.getAutor());
		livro.setEditora(request.getEditora());
		livro.setISBN(request.getISBN());
		livro.setNome(request.getNome());
		livro.setQuantidadeExemplares(request.getQuantidadeExemplares());
		return livro;
	}
}
