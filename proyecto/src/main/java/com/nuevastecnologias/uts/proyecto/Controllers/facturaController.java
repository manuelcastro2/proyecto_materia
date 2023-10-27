package com.nuevastecnologias.uts.proyecto.Controllers;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nuevastecnologias.uts.proyecto.Entitys.Facturas;
import com.nuevastecnologias.uts.proyecto.Entitys.SaveFactura;
import com.nuevastecnologias.uts.proyecto.Services.FacturaService;

@RestController
@RequestMapping("/factura")
@ResponseBody
public class facturaController {

  @Autowired
  private FacturaService facturaservice;

  @PostMapping("/")
  public void save(@RequestBody SaveFactura savefactura) {
    facturaservice.save(savefactura);
  }

  @GetMapping("/{typefactura}")
  public List<Facturas> TypeFactura(@PathVariable String typefactura) {
    return facturaservice.fypeFill(typefactura);

  }

  @GetMapping("/")
  public List<Facturas> findAll() {
    return facturaservice.listar();

  }

  @GetMapping("/{fechaInicial}/{fechaFinal}")
  public List<Facturas> rangoFecha(@PathVariable Date fechaInicial, @PathVariable Date fechaFinal) {
    return facturaservice.ListaRango(fechaInicial, fechaFinal);
  }

}
