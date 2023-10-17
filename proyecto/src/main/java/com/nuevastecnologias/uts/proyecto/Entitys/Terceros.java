package com.nuevastecnologias.uts.proyecto.Entitys;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "terceros")
public class Terceros {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    private String typeDocument;
    @Column(unique = true)
    private String document;
    private String address;
    private String iphone;
    private String typethird;
    @OneToOne(mappedBy = "tercero",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.LAZY)
    private Facturas factura;

}
