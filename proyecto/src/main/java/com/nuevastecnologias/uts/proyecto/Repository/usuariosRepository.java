package com.nuevastecnologias.uts.proyecto.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.Terceros;
import com.nuevastecnologias.uts.proyecto.Entitys.Usuarios;



@Repository
public interface usuariosRepository extends CrudRepository<Usuarios,Long>{
    @Query(value = "Select * from usuarios t where t.role=:role", nativeQuery = true)
    List<Usuarios> findByTypeRol(String role);
}
