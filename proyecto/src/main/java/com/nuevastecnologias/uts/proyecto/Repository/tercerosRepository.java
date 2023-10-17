package com.nuevastecnologias.uts.proyecto.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.Terceros;


@Repository
public interface tercerosRepository extends CrudRepository<Terceros,Long> {
    
    @Query(value = "Select * from terceros t where t.typethird=:typethird", nativeQuery = true)
    List<Terceros> findByTypethird(String typethird);

}
