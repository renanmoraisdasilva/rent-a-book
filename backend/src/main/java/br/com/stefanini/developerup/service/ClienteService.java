package br.com.stefanini.developerup.service;

import br.com.stefanini.developerup.dao.ClienteDao;
import br.com.stefanini.developerup.dto.ClienteDto;
import br.com.stefanini.developerup.model.Cliente;
import br.com.stefanini.developerup.parser.ClienteParser;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Danilo Dorgam
 *         email danilodorgam@gmail.com
 *         created 30/03/2022
 * @version 0.1.0
 */
@RequestScoped
public class ClienteService {
    @Inject
    ClienteDao dao;

    public List<ClienteDto> listar() {
        return dao.listar().stream().map(ClienteParser.get()::dto).collect(Collectors.toList());
    }

    @Transactional
    public Cliente cadastrar(ClienteDto request) {
        Cliente cliente = new Cliente();
        setters(cliente, request);
        cliente.persistAndFlush();
        return cliente;
    }

    @Transactional
    public Cliente editar(ClienteDto request) {
        Cliente cliente = Cliente.findById(request.getId());
        setters(cliente, request);
        return cliente;
    }

    @Transactional
    public void deletar(Long id) {
        Cliente.deleteById(id);
    }

    private Cliente setters(Cliente cliente, ClienteDto request) {
        cliente.setEmail(request.getEmail());
        cliente.setContato(request.getContato());
        cliente.setNome(request.getNome());
        return cliente;
    }
}
