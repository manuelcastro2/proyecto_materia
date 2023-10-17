package com.nuevastecnologias.uts.proyecto.Services;

import java.util.List;

import com.nuevastecnologias.uts.proyecto.Entitys.Usuarios;


public interface UsuarioService {
      List<Usuarios> findAll();

     Usuarios save(Usuarios usuarios);

     void delete(Long id);

     Usuarios update(Usuarios usuarios, Long id);

     List<Usuarios> findUsuariosByTypeRol(String rol);
}
