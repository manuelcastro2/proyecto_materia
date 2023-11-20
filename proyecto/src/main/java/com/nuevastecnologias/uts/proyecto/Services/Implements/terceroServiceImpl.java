package com.nuevastecnologias.uts.proyecto.Services.Implements;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nuevastecnologias.uts.proyecto.Entitys.Terceros;
import com.nuevastecnologias.uts.proyecto.Repository.tercerosRepository;
import com.nuevastecnologias.uts.proyecto.Services.TerceroService;

@Service
public class terceroServiceImpl implements TerceroService{

      @Autowired
      private tercerosRepository tercerosRepository;


    @Override
    public List<Terceros> findAll() {
       return (List<Terceros>) tercerosRepository.findAll();
    }

    @Override
    public Terceros save(Terceros tercero) {
       return tercerosRepository.save(tercero);
    }

    @Override
    public void delete(String id) {
        tercerosRepository.deleteById(Long.parseLong(id));
    }

    @Override
    public List<Terceros> findTercerosByType(String typethird) {
       return (List<Terceros>)tercerosRepository.findByTypethird(typethird);
    }

   @Override
   public Terceros update(Terceros terceros, Long id) {
      Optional<Terceros> terceroOptional = tercerosRepository.findById(id);
      
      if (terceroOptional.isPresent()) {
          Terceros terceroCurrent = terceroOptional.get();
          terceroCurrent.setName(terceros.getName());
          terceroCurrent.setTypeDocument(terceros.getTypeDocument());
          terceroCurrent.setDocument(terceros.getDocument());
          terceroCurrent.setAddress(terceros.getAddress());
          terceroCurrent.setTypethird(terceros.getTypethird());
          terceroCurrent.setIphone(terceros.getIphone()); //  
          tercerosRepository.save(terceroCurrent);
          return terceroCurrent;
      } else {
          return null;
      }
      
   }

   @Override
   public Terceros FindDocument(String document) {
     return tercerosRepository.findByDocument(document);
   }
    
}
