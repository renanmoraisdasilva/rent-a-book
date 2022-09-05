package br.com.stefanini.developerup.parser;

import br.com.stefanini.developerup.dto.LivrosDto;
import br.com.stefanini.developerup.model.Livros;

public class LivroParser {

    public static LivroParser get() {
        return new LivroParser();
    }

    public LivrosDto dto(Livros entidade) {
        LivrosDto dto = new LivrosDto();

        dto.setId(entidade.getId());
        dto.setNome(entidade.getNome());
        dto.setISBN(entidade.getISBN());
        dto.setAnoDePublicacao(entidade.getAnoDePublicacao());
        dto.setEditora(entidade.getEditora());
        dto.setQuantidadeExemplares(entidade.getQuantidadeExemplares());
        dto.setAutor(entidade.getAutor());

        return dto;
    }
}
