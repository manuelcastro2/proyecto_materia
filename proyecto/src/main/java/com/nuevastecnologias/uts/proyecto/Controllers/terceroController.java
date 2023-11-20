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

import com.nuevastecnologias.uts.proyecto.Entitys.Terceros;
import com.nuevastecnologias.uts.proyecto.Services.TerceroService;

@Import(configuracion.class)
@RestController
@RequestMapping("/tercero")
public class terceroController {
    
    @Autowired
    private TerceroService terceroService;

    @GetMapping("/listado")
    public List<Terceros> findAll(){
        return terceroService.findAll();
    }

    @GetMapping("/{tipotercero}")   
    public List<Terceros> findByTypethird(@PathVariable String tipotercero){
        return terceroService.findTercerosByType(tipotercero);
    }

    @PostMapping("/")
    public Terceros save(@RequestBody Terceros terceros){
        return terceroService.save(terceros);
    }

    @PostMapping("/{id}")
    public Terceros update(@RequestBody Terceros terceros,@PathVariable String id){
        return terceroService.update(terceros, Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        terceroService.delete(id);
    }

    @GetMapping("/document/{document}")
    public Terceros FindDocument(@PathVariable String document){
        return terceroService.FindDocument(document);
    }

}
