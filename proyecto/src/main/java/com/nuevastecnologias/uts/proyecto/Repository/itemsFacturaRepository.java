package com.nuevastecnologias.uts.proyecto.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.itemsFactura;

@Repository
public interface itemsFacturaRepository extends CrudRepository<itemsFactura,Long> {
   
}
