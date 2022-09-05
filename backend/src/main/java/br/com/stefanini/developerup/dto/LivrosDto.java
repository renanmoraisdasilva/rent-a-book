package br.com.stefanini.developerup.dto;

import br.com.stefanini.developerup.model.Autor;

public class LivrosDto {

	private Long id;

	private String ISBN;

	private String nome;

	private String anoDePublicacao;

	private String editora;

	private Integer quantidadeExemplares;

	private Autor autor;

	public String getISBN() {
		return ISBN;
	}

	public void setISBN(String iSBN) {
		this.ISBN = iSBN;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getAnoDePublicacao() {
		return anoDePublicacao;
	}

	public void setAnoDePublicacao(String anoDePublicacao) {
		this.anoDePublicacao = anoDePublicacao;
	}

	public String getEditora() {
		return editora;
	}

	public void setEditora(String editora) {
		this.editora = editora;
	}

	public Integer getQuantidadeExemplares() {
		return quantidadeExemplares;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public void setQuantidadeExemplares(Integer quantidadeExemplares) {
		this.quantidadeExemplares = quantidadeExemplares;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
