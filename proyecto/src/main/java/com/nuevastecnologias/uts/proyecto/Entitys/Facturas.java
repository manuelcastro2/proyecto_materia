package com.nuevastecnologias.uts.proyecto.Entitys;

import java.sql.Date;
import javax.persistence.Column;
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
    @Column(unique = true)
    private String nroFactura;
    private Date date;
    private Float totalOperation;
    @JoinColumn(name = "tercero_id")
    @OneToOne(fetch = FetchType.LAZY)
    private Terceros tercero;
 
}
