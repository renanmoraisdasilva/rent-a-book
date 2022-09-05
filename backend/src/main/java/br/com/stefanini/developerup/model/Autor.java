package br.com.stefanini.developerup.model;

import java.text.SimpleDateFormat;
import java.util.List;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import org.eclipse.microprofile.openapi.annotations.media.Schema;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "tb_autor")
public class Autor extends PanacheEntityBase {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank(message = "O campo ISNI é obrigatório!")
	@Column(name = "ISNI", unique = true)
	private String ISNI;

	@NotBlank(message = "O campo nome é obrigatório!")
	@Size(max = 50, message = "o nome deve conter no maximo 50 caracteres")
	@Column(name = "nome")
	private String nome;

	@Email(message = "Email inválido!")
	@Pattern(regexp = ".+@.+\\..+", message = "Email inválido!")
	@Column(name = "email")
	@Schema(example = "email@email.com")
	@NotBlank(message = "O campo e-mail é obrigatório!")
	private String email;

	@NotBlank(message = "O campo data de nasciemento é obrigatório!")
	@Column(name = "data_nascimento")
	private String dataNascimento;

	@NotBlank(message = "O campo biografia é obrigatório!")
	@Size(max = 200, message = "A biografia deve possuir no maximo 200 caracteres")
	@Column(name = "biografia")
	private String biografia;

	@JsonbTransient
	@OneToMany(mappedBy = "autor", cascade = CascadeType.REMOVE)
	@JsonIgnoreProperties("autor")
	private List<Livros> livros;

	// SimpleDateFormat fmt = new SimpleDateFormat("dd/MM/yyyy");

	public Autor() {
	}

	public Autor(String nome, String ISNI, String email, String dataNascimento,
			String biografia) {

		this.nome = nome;
		this.ISNI = ISNI;
		this.email = email;
		this.dataNascimento = dataNascimento;
		this.biografia = biografia;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getISNI() {
		return ISNI;
	}

	public void setISNI(String iSNI) {
		this.ISNI = iSNI;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getBiografia() {
		return biografia;
	}

	public void setBiografia(String biografia) {
		this.biografia = biografia;
	}

	public List<Livros> getLivros() {
		return livros;
	}

	public void setLivros(List<Livros> livros) {
		this.livros = livros;
	}

}
