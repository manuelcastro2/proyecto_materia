package com.nuevastecnologias.uts.proyecto.Services;

import java.sql.Date;
import java.util.List;

import com.nuevastecnologias.uts.proyecto.Entitys.Facturas;
import com.nuevastecnologias.uts.proyecto.Entitys.SaveFactura;

public interface FacturaService {

    String save(SaveFactura savefactura);
    
    List<Facturas> fypeFill(String typeFactura);

    List<Facturas> listar();

    List <Facturas> ListaRango(Date DateInicio, Date DateFinal);

}
