package br.com.stefanini.developerup.dto;

public class EmprestimoDto {

	private Long id;

	private Number livroId;

	private Number clienteId;

	private String dataEmprestimo;

	private String dataDevolucao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Number getLivroId() {
		return livroId;
	}

	public void setLivroId(Number livro) {
		this.livroId = livro;
	}

	public Number getClienteId() {
		return clienteId;
	}

	public void setClienteId(Number clienteId) {
		this.clienteId = clienteId;
	}

	public String getDataEmprestimo() {
		return dataEmprestimo;
	}

	public void setDataEmprestimo(String dataEmprestimo) {
		this.dataEmprestimo = dataEmprestimo;
	}

	public String getDataDevolucao() {
		return dataDevolucao;
	}

	public void setDataDevolucao(String dataDevolucao) {
		this.dataDevolucao = dataDevolucao;
	}

}
