package br.com.stefanini.developerup.parser;

import br.com.stefanini.developerup.dto.AutorDto;
import br.com.stefanini.developerup.model.Autor;

public class AutorParser {

    public static AutorParser get() {
        return new AutorParser();
    }

    public AutorDto dto(Autor entidade) {
        AutorDto dto = new AutorDto();

        dto.setNome(entidade.getNome());
        dto.setEmail(entidade.getEmail());
        dto.setBiografia(entidade.getBiografia());
        dto.setDataNascimento(entidade.getDataNascimento());
        dto.setISNI(entidade.getISNI());
        dto.setId(entidade.getId());
        return dto;
    }

}
