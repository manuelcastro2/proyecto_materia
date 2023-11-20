package com.nuevastecnologias.uts.proyecto.Entitys;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Entity
@Data
@Table(name = "productos")
public class Productos {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(unique = true)
    private String codeProduct;
    private String product;
    private String description;
    private String typeProduct;
    private String unitExtent;
    private Float valueUnitary;
    private Float percentageIVA;
}
