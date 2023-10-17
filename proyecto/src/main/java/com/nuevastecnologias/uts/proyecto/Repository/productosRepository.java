package com.nuevastecnologias.uts.proyecto.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.Productos;


@Repository
public interface productosRepository extends CrudRepository<Productos, Long> {

    @Query(value = "Select * from productos t where t.code_product=:codeProduct", nativeQuery = true)
    Productos findcodeProduct(String codeProduct);
}
