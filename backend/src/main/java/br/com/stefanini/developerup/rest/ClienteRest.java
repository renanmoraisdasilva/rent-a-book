package br.com.stefanini.developerup.rest;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
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
import org.eclipse.microprofile.openapi.annotations.parameters.RequestBody;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.dto.ClienteDto;
import br.com.stefanini.developerup.service.ClienteService;

/**
 * @author Danilo Dorgam
 *         email danilodorgam@gmail.com
 *         created 30/03/2022
 * @version 0.1.0
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/cliente")
@RequestScoped
public class ClienteRest {
    @Inject
    ClienteService service;

    @GET
    @Operation(summary = "Listar", description = "Retorna uma lista de Clientes")
    @APIResponse(responseCode = "200", description = "ClienteDto", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
    public Response listar() {
        return Response.status(Response.Status.OK).entity(service.listar()).build();
    }

    @POST
    @Operation(summary = "Cadastar", description = "Cadastar um Clientes")
    @APIResponse(responseCode = "200", description = "ClienteDto", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
    public Response cadastrar(ClienteDto request) {
        return Response
                .status(Response.Status.OK)
                .entity(service.cadastrar(request))
                .build();
    }

    @PUT
    @Operation(summary = "Atualizar", description = "Atualizar um Clientes")
    @Path("{id}")
    @APIResponse(responseCode = "200", description = "ClienteDto", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
    public Response editar(ClienteDto request) {
        return Response.status(Response.Status.OK).entity(service.editar(request)).build();
    }

    @DELETE
    @Operation(summary = "Deletar", description = "Deletar um Clientes")
    @Path("{id}")
    @APIResponse(responseCode = "202", description = "ClienteDto", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
    public Response deletar(@PathParam("id") Long id) {
        service.deletar(id);
        return Response.status(Response.Status.ACCEPTED).build();
    }

}
