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

import com.nuevastecnologias.uts.proyecto.Entitys.Productos;
import com.nuevastecnologias.uts.proyecto.Services.ProductoService;

@Import(configuracion.class)
@RestController
@RequestMapping("/producto")
public class productoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping("/listado")
    public List<Productos> findAll() {
        return productoService.ListarProductos();
    }

    @GetMapping("/{codeProduct}")
    public Productos findOne(@PathVariable String codeProduct){
        return productoService.findcodeProductByType(codeProduct);
    }

    @PostMapping("/")
    public Productos save(@RequestBody Productos producto){
        return productoService.Save(producto);
    }

    @PostMapping("/{id}")
    public Productos update(@RequestBody Productos producto,@PathVariable String id){
        return productoService.update(producto, Long.parseLong(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        productoService.delete(id);
    }

    @PostMapping("/tipoProduct/{tipo}")
    public List<Productos> tipoProducto(@PathVariable String tipo){
        return productoService.findTypeList(tipo);
    }


}
