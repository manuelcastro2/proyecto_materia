package com.nuevastecnologias.uts.proyecto.Services.Implements;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuevastecnologias.uts.proyecto.Controllers.productoController;
import com.nuevastecnologias.uts.proyecto.Entitys.Facturas;
import com.nuevastecnologias.uts.proyecto.Entitys.SaveFactura;
import com.nuevastecnologias.uts.proyecto.Entitys.itemsFactura;
import com.nuevastecnologias.uts.proyecto.Repository.facturasRepository;
import com.nuevastecnologias.uts.proyecto.Repository.itemsFacturaRepository;
import com.nuevastecnologias.uts.proyecto.Services.FacturaService;

@Service
public class facturasServiceImpl implements FacturaService {

    @Autowired
    facturasRepository facturasrepository;

    @Autowired
    itemsFacturaRepository itemsFaRepository;

    productoController productocontroller;

    @Override
    public String save(SaveFactura savefacturas) {

        Facturas factura = savefacturas.getFactura();
        List<itemsFactura> itemsfactura = savefacturas.getItemsfactura();
        float valorTotal = 0;
        for (itemsFactura items : itemsfactura) {
            Float total;
            total = (float) items.getCount() * items.getProductos().getValueUnitary();
            items.setTotalValueProduct(total);
            valorTotal += total;
        }
        factura.setTotalOperation(valorTotal);
        itemsFaRepository.saveAll(itemsfactura);
         facturasrepository.save(factura);
         return " "+savefacturas;

    }

    @Override
    public List<Facturas> fypeFill(String factura) {
        return facturasrepository.findByTypeFactura(factura);
    }

    @Override
    public List<Facturas> listar() {
        return (List<Facturas>) facturasrepository.findAll();
    }

    @Override
    public List<Facturas> ListaRango(Date DateInicial,Date DateFinal) {
        return facturasrepository.findRandBill(DateInicial, DateFinal);
    }

   

}
