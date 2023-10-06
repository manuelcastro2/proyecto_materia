package com.nuevastecnologias.uts.proyecto.Entitys;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "productos")
public class Productos {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer codeProduct;
    private String Description;
    private String typeProduct;
    private String unitExtent;
    private Float valueUnitary;
    private Float percentageIVA;
    @ManyToOne
    @JoinColumn(name = "tipofactura_id")
    private tipoFactura tipofactura;
}
