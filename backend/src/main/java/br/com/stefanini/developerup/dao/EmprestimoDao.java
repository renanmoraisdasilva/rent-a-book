package br.com.stefanini.developerup.dao;

import java.util.List;

import javax.enterprise.context.RequestScoped;

import br.com.stefanini.developerup.model.Emprestimo;
import io.quarkus.panache.common.Sort;

@RequestScoped
public class EmprestimoDao {

    public List<Emprestimo> listar() {
        return Emprestimo.listAll(Sort.by("livroId,cliente_id,data_inicio,data_entrega").ascending());
    }

}
