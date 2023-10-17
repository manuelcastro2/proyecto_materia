package com.nuevastecnologias.uts.proyecto.Services;

import java.util.List;

import com.nuevastecnologias.uts.proyecto.Entitys.Terceros;

public interface TerceroService {

     List<Terceros> findAll();

     Terceros save(Terceros tercero);

     void delete(String id);

     Terceros update(Terceros terceros, Long id);

     List<Terceros> findTercerosByType(String typeThird);

}
