package com.nuevastecnologias.uts.proyecto.Entitys;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "tipofactura")
public class tipoFactura {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer amount;
    @OneToMany(mappedBy = "tipoFactura", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Productos> producto;
    @OneToMany(mappedBy = "tipoFactura", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Facturas> facturas;
}
