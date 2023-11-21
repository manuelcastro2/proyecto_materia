import React, { useState, useEffect } from 'react';
import './../../Estilos/EstiloMenu.css'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { GenerarPdf } from './GenerarFacturas'
import Banner from './Banner'
import Panel from './Barra'
import AlertRequerimiento from './AlertRequerimiento';
import PantallaCarga from './PantallaCarga';
import RegisterFactura from './../Modales/registerFacturasVenta'

const endpoint = 'http://localhost:3222/factura/'

const MenuTercero = () => {

    const { state } = useLocation();
    const [DatosUsuario, setDatosUsuario] = useState("")
    const [DatosMostrar, setDatosMostrar] = useState([])
    const [EstadoRegistrarUsuario, setEstadoRegistrarUsuario] = useState(false)
    const factura = {}
    const [Tercero, setTercero] = useState('')
    const [busqueda, setbusqueda] = useState("")
    const [EstadoSesion, SetEstadoSesion] = useState(false)
    const [EstadoAlertAccion, setEstadoAlertAccion] = useState(false)
    const [loading, setLoading] = useState(false)
    const [Accion, setAccion] = useState("")
    const [Dato, setDato] = useState("")
    const [Id, SetId] = useState(undefined)

    useEffect(() => {
        if (state && state.DatosUsuario) {
            setDatosUsuario(state.DatosUsuario);
            console.log(state.DatosUsuario);
            Vista()
        } else {
            SetEstadoSesion(true)
        }
    }, []);

    const Vista = () => {
        if (busqueda.trim() != "") {
        } else {
            MostrarTodo()
        }

    }

    const MostrarTodo = async () => {
        setLoading(true)
        await axios.post(`${endpoint}filtro`, {
            tipoFactura: "FacturaVenta"
        }).then(datos => {
            setTercero(datos.data.facturas)
            setDatosMostrar(datos.data.facturas)
            console.log(Tercero);
            setLoading(false)
        }).catch(error => {
            console.error(error);
        })


    }
    
    const MostrarInfo = () => {
        if (loading) {
            return (
                <div className='container-listado'>
                    <PantallaCarga />
                </div>
            )
        } else {
            return (
                <div className='container-listado-vista'>
                    {DatosMostrar.map((item) => (
                        <div className='caja-vista'>
                            <div className='caja-vista-principal'>
                                <div className='caja-principal'>
                                    {item.nroFactura}
                                </div>
                                <div className='caja-nombre'>
                                    {item.tipoFactura}
                                </div>
                            </div>
                            <div className='caja-Datos' id="aumentar">
                                <div className='text-Mostrar'>
                                    Tercero: {item.tercero.nombre}
                                </div>
                                <div className='text-Mostrar'>
                                    Tipo tercero: {item.tercero.tipoTercero}
                                </div>
                                <div className='text-Mostrar'>
                                    Fecha: {item.fecha}
                                </div>
                                <div className='text-Mostrar'>
                                    ValorTotal: {item.totalOperacion}
                                </div>
                                <div className='text-Mostrar'>
                                    <button className='Button-acciones'
                                        type="submit"
                                        onClick={() => {

                                            GenerarPdf({
                                                nroFactura: item.nroFactura,
                                                tipofactura: item.tipofactura,
                                                nombreCliente: item.tercero.nombre,
                                                documento: item.tercero.documento,
                                                fecha: item.fecha,
                                                elementos: item.elementos,
                                                valor: item.totalOperacion
                                            })
                                        }}
                                    >Ver factura</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            )
        }
    }

    if (EstadoSesion) {
        return (
            <AlertRequerimiento />
        )
    } else {

        return (
            <div className='container-principal'>
                <div className='container-menu'>
                    <Banner DatosUsuario={DatosUsuario}></Banner>
                    <button onClick={() => {
                        setEstadoRegistrarUsuario(!EstadoRegistrarUsuario)
                        SetId(undefined)
                    }} className='button-Agregar' type="submit"><p className='text-PANEL'>Agregar</p></button>
                </div>
                <div className='container-panel'>
                    <Panel panel="Lista facturas venta"></Panel>
                    <div className='container-info'>
                        <div className='container-busqueda'>
                            <div className='container-busqueda-input'>
                                <input className='Input-text' type="text" placeholder='Filtrar'
                                    value={busqueda}
                                    onChange={(event) => setbusqueda(event.target.value)} />
                                <label className='label-tercero' for="">Busqueda</label>
                                <button className='Button-Entrar' type="submit"
                                    onClick={() => Vista()}
                                >Buscar</button>
                            </div>
                        </div>
                        <div className='container-listado'>
                            {MostrarInfo()}
                        </div>
                    </div>
                </div>
                {EstadoRegistrarUsuario &&
                    <div className='container-Fondo'>
                        <RegisterFactura></RegisterFactura>
                        <button onClick={() => {
                            Vista()
                            setEstadoRegistrarUsuario(!EstadoRegistrarUsuario)
                        }} className='Button-Exit' type="submit">X</button>
                    </div>
                }
                {EstadoAlertAccion &&
                    <div className='container-Fondo'>
                        <div className='Container-Alert'>
                            <div className='Container-Alert-interno'>
                                <p className='Text-Alert'>
                                    <p>{Accion} {Dato}</p>
                                    <button className='button-Alert' type="submit" onClick={() => {
                                        setEstadoAlertAccion(!EstadoAlertAccion)
                                        Vista()
                                    }}>Cerrar</button>
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default MenuTercero