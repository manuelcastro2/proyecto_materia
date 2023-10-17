package com.nuevastecnologias.uts.proyecto.Services.Implements;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuevastecnologias.uts.proyecto.Entitys.Usuarios;
import com.nuevastecnologias.uts.proyecto.Repository.usuariosRepository;
import com.nuevastecnologias.uts.proyecto.Services.UsuarioService;

@Service
public class usuariosServiceImpl implements UsuarioService {

    @Autowired
    usuariosRepository usuariosrepository;

    @Override
    public List<Usuarios> findAll() {
        return (List<Usuarios>) usuariosrepository.findAll();
    }

    @Override
    public Usuarios save(Usuarios usuarios) {
        return usuariosrepository.save(usuarios);
    }

    @Override
    public void delete(Long id) {
        usuariosrepository.deleteById(id);
    }

    @Override
    public Usuarios update(Usuarios usuarios, Long id) {
         Optional<Usuarios> terceroOptional = usuariosrepository.findById(id);
      
      if (terceroOptional.isPresent()) {
          Usuarios terceroCurrent = terceroOptional.get();
          terceroCurrent.setDocument(usuarios.getDocument());
          terceroCurrent.setName(usuarios.getName());
          terceroCurrent.setLastname(usuarios.getLastname());
          terceroCurrent.setRole(usuarios.getRole());
          terceroCurrent.setPassword(usuarios.getPassword());
          usuariosrepository.save(terceroCurrent);
          return terceroCurrent;
      } else {
          return null;
      }
    }

    @Override
    public List<Usuarios> findUsuariosByTypeRol(String rol) {
        return usuariosrepository.findByTypeRol(rol);
    }

}
