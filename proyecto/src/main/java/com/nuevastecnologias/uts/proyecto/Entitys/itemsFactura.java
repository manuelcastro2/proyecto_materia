package com.nuevastecnologias.uts.proyecto.Entitys;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
@Entity
@Table(name = "itemsfactura")
public class itemsFactura {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Integer count;
    private Float totalValueProduct;

    @ManyToOne
    @JoinColumn(name = "productos_id")
    @NotNull
    private Productos productos;

    @ManyToOne
    @NotNull
    @JoinColumn(name = "factura_id")
    private Facturas facturas;

}
