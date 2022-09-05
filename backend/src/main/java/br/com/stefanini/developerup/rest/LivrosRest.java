package br.com.stefanini.developerup.rest;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.dto.LivrosDto;
import br.com.stefanini.developerup.service.LivrosService;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/livros")
@RequestScoped
public class LivrosRest {
	@Inject
	LivrosService service;

	@GET
	@Operation(summary = "Listar", description = "Retorna uma lista de livros")
	@APIResponse(responseCode = "200", description = "LivrosDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivrosDto.class)) })
	public Response listar() {
		return Response.status(Response.Status.OK).entity(service.listar()).build();
	}

	@POST
	@Operation(summary = "Cadastrar", description = "Cadastrar um livro")
	@APIResponse(responseCode = "200", description = "LivrosDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivrosDto.class)) })
	public Response cadastrar(LivrosDto request) {
		return Response.status(Response.Status.OK).entity(service.cadastrar(request)).build();
	}

	@PUT
	@Operation(summary = "Atualizar", description = "Atualizar um livro")
	@Path("{id}")
	@APIResponse(responseCode = "200", description = "LivrosDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivrosDto.class)) })
	public Response editar(LivrosDto request) {
		return Response.status(Response.Status.OK).entity(service.editar(request)).build();
	}

	@DELETE
	@Operation(summary = "Deletar", description = "Deletar um livro")
	@Path("{id}")
	@APIResponse(responseCode = "200", description = "LivrosDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivrosDto.class)) })
	public Response deletar(@PathParam("id") Long id) {
		service.deletar(id);
		return Response.status(Response.Status.ACCEPTED).build();
	}
}
