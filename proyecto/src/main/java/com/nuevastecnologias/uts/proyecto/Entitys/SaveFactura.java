package com.nuevastecnologias.uts.proyecto.Entitys;


import java.util.List;

import lombok.Data;

@Data
public class SaveFactura {
    private List<itemsFactura> itemsfactura;
    private Facturas factura;
    
}
