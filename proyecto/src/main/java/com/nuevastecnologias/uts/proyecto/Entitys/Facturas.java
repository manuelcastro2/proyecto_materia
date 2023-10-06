package com.nuevastecnologias.uts.proyecto.Entitys;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "facturas")
public class Facturas {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String typeBill;
    private Integer nroFactura;
    private Date date;
    private Float totalOperacion;
    @OneToOne(mappedBy = "terceros", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Terceros tecero;
    @JoinColumn(name = "tipofactura_id")
    private tipoFactura tipofactura;
}
