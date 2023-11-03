    package com.nuevastecnologias.uts.proyecto.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nuevastecnologias.uts.proyecto.Entitys.Usuarios;
import com.nuevastecnologias.uts.proyecto.Services.UsuarioService;

@Import(configuracion.class)
@RestController
@RequestMapping("/usuario")
public class usuariosController {
    
    @Autowired
    UsuarioService usuarioService;

     @GetMapping("/listado")
    public List<Usuarios> findAll(){
        return usuarioService.findAll();
    }

    @GetMapping("/{tipotercero}")   
    public List<Usuarios> findByTypethird(@PathVariable String tipotercero){
        return usuarioService.findUsuariosByTypeRol(tipotercero);
    }

    @PostMapping("/")
    public Usuarios save(@RequestBody Usuarios terceros){
        return usuarioService.save(terceros);
    }

    @PostMapping("/{id}")
    public Usuarios update(@RequestBody Usuarios terceros,@PathVariable String id){
        return usuarioService.update(terceros, Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        usuarioService.delete(Long.parseLong(id));
    }

    @PostMapping("/{cedula}/{password}")
    public Usuarios inicioSesion(@PathVariable String cedula,@PathVariable String password){
       return usuarioService.singUp(cedula, password);
    }

}
