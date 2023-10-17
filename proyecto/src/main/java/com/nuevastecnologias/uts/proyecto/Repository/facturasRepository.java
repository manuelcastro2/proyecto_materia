package com.nuevastecnologias.uts.proyecto.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nuevastecnologias.uts.proyecto.Entitys.Facturas;


@Repository
public interface facturasRepository extends CrudRepository<Facturas,Long> {
    
 @Query(value = "Select * from itemsfactura r,facturas t where r.factura_id=t.id and t.type_bill=:typeBill", nativeQuery = true)
    List<Facturas> findByTypeFactura(String typeBill);
}
