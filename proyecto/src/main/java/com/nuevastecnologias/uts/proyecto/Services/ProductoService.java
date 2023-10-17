package com.nuevastecnologias.uts.proyecto.Services;

import java.util.List;

import com.nuevastecnologias.uts.proyecto.Entitys.Productos;

public interface ProductoService {

    List<Productos> ListarProductos();

    Productos Save(Productos producto);

    void delete(String id);

    Productos findcodeProductByType(String codeProduct);

    Productos update(Productos producto,Long id);
}
