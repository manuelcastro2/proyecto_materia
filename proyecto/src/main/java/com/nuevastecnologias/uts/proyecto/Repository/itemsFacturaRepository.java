package com.nuevastecnologias.uts.proyecto.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.itemsFactura;

@Repository
public interface itemsFacturaRepository extends CrudRepository<itemsFactura,Long> {
   
}
