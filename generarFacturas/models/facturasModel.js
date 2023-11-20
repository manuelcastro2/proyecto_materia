const conexion = require('../db/conexxionDB')

const facturaShema = new conexion.Schema({
    nroFactura: {
        type: String,
        unique: true,
        required: true
    },
    tipoFactura: { type: String },
    tercero: {
        nombre: { type: String },
        tipoTercero: { type: String },
        documento: { type: String },
        direccion: { type: String },
        telefono: { type: Number }
    },
    fecha: Date,
    elementos: [{
        codigoProducto: { type: Number },
        nombre: { type: String },
        unidad: { type: String },
        valorUnitario: { type: Number },
        porcentajeIva: { type: Number },
        cantidad: { type: Number },
        ValorProducto: { type: Number }
    }],
    totalOperacion: { type: Number },
}, {
    collection: 'facturas',
    versionKey: false
})

const facturaModel = conexion.model('facturas', facturaShema)

module.exports = facturaModel