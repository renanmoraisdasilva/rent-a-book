package br.com.stefanini.developerup.model;

import java.time.LocalDate;
import java.util.List;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "tb_empr")
public class Emprestimo extends PanacheEntityBase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotNull(message = "O campo livro é obrigatório!")
	@Lob
	@Column(name = "livro")
	private Number livroId;

	@NotNull(message = "O campo cliente é obrigatório!")
	@Lob
	@Column(name = "cliente_id")
	private Number clienteId;

	@NotBlank(message = "A data de inicio é obrigatória!")
	@Column(name = "data_inicio")
	private String dataEmprestimo;

	@Column(name = "data_entrega")
	private String dataDevolucao;

	public Emprestimo() {
	}

	public Emprestimo(Number livroId, Number clienteId, String dataEmprestimo,
			String dataDevolucao) {
		this.livroId = livroId;
		this.clienteId = clienteId;
		this.dataEmprestimo = dataEmprestimo;
		this.dataDevolucao = dataDevolucao;
	}

	public Number getLivroId() {
		return livroId;
	}

	public void setLivroId(Number livroId) {
		this.livroId = livroId;
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

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
