package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.dao.AutorDao;
import br.com.stefanini.developerup.dto.AutorDto;
import br.com.stefanini.developerup.model.Autor;
import br.com.stefanini.developerup.parser.AutorParser;

@RequestScoped
public class AutorService {

	@Inject
	AutorDao dao;

	public List<AutorDto> listar() {
		return dao.listar().stream().map(AutorParser.get()::dto).collect(Collectors.toList());
	}

	@Transactional
	public Autor cadastrar(AutorDto request) {
		Autor autor = new Autor();
		setters(autor, request);
		autor.persistAndFlush();
		return autor;
	}

	@Transactional
	public Autor editar(AutorDto request) {
		Autor autor = Autor.findById(request.getId());
		setters(autor, request);
		return autor;
	}

	@Transactional
	public void deletar(Long id) {
		Autor.deleteById(id);
	}

	private Autor setters(Autor autor, AutorDto request) {
		autor.setBiografia(request.getBiografia());
		autor.setISNI(request.getISNI());
		autor.setNome(request.getNome());
		autor.setEmail(request.getEmail());
		autor.setDataNascimento(request.getDataNascimento());
		return autor;
	}
}
