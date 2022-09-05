package br.com.stefanini.developerup.dto;

public class AutorDto {

	private Long id;

	private String ISNI;

	private String nome;

	private String email;

	private String dataNascimento;

	private String biografia;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getISNI() {
		return ISNI;
	}

	public void setISNI(String ISNI) {
		this.ISNI = ISNI;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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

}
