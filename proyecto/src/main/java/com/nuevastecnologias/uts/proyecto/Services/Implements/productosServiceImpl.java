package com.nuevastecnologias.uts.proyecto.Services.Implements;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuevastecnologias.uts.proyecto.Entitys.Productos;
import com.nuevastecnologias.uts.proyecto.Repository.productosRepository;
import com.nuevastecnologias.uts.proyecto.Services.ProductoService;

@Service
public class productosServiceImpl implements ProductoService{

    @Autowired
    private productosRepository productorepository;

    @Override
    public List<Productos> ListarProductos() {
       return (List<Productos>) productorepository.findAll();
    }

    @Override
    public Productos Save(Productos producto) {
      return productorepository.save(producto);
    }

    @Override
    public void delete(String id) {
        productorepository.deleteById(Long.parseLong(id));
    }

    @Override
    public Productos findcodeProductByType(String codeProduct) {
       return (Productos) productorepository.findcodeProduct(codeProduct);
    }

    @Override
    public Productos update(Productos producto,Long id) {
        Optional<Productos> productoOptional = productorepository.findById(id);
      
      if (productoOptional.isPresent()) {
          Productos productoCurrent = productoOptional.get();
          productoCurrent.setCodeProduct(producto.getCodeProduct());
          productoCurrent.setProduct(producto.getProduct());
          productoCurrent.setDescription(producto.getDescription());
          productoCurrent.setTypeProduct(producto.getTypeProduct());
          productoCurrent.setUnitExtent(producto.getUnitExtent());
          productoCurrent.setValueUnitary(producto.getValueUnitary());
          productoCurrent.setPercentageIVA(producto.getPercentageIVA());
          productorepository.save(productoCurrent);
          return productoCurrent;
      } else {
          return null;
      }
    }

    @Override
    public List<Productos> findTypeList(String typeproduct) {
       return productorepository.findTypeProductos(typeproduct);
    }
    
}
