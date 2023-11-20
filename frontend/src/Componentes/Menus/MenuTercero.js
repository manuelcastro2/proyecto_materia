import React, { useState, useEffect } from 'react';
import './../../Estilos/EstiloMenu.css'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import RegistrarTercero from '../Modales/registrarTercero'
//importacion de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner'
import Panel from './Barra'
import AlertRequerimiento from './AlertRequerimiento';
import PantallaCarga from './PantallaCarga';

//para invocar al backend en la parte de productos
const endpoint = 'http://localhost:3333/tercero'

//funcion general
const MenuTercero = () => {

    //metodo state y de estados de los datos del usuario del inicio de sesion
    //y los estados de mostrar y consultas y de los alert de que se guardo y elimino correctamente
    //y las diferentes acciones que se hacen en el menu
    const { state } = useLocation();
    const [DatosUsuario, setDatosUsuario] = useState("")
    const [DatosMostrar, setDatosMostrar] = useState([])
    const [EstadoRegistrarTercero, setEstadoRegistrarTercero] = useState(false)
    const [Mostraropciones, setMostraropciones] = useState(false)
    const [busqueda, setbusqueda] = useState("")
    const [Mostrarcientes, setmostrarClientes] = useState(0)
    const [Mostrarproveedor, setmostrarProveedor] = useState(0)
    const [EstadoSesion, SetEstadoSesion] = useState(false)
    const [EstadoAlertAccion, setEstadoAlertAccion] = useState(false)
    const [Accion, setAccion] = useState("")
    const [Dato, setDato] = useState("")
    const [loading, setLoading] = useState(false)
    const [Id, SetId] = useState(undefined)

    //validadcion de datos
    useEffect(() => {
        if (state && state.DatosUsuario) {
            setDatosUsuario(state.DatosUsuario);
            Vista()
        } else {
            SetEstadoSesion(true)
        }
    }, []);

    //funcion de mostrar si es general o especifico
    const Vista = () => {
        if (Mostrarcientes === 1) {
            MostrarCliente()
        }

        if (Mostrarproveedor === 2) {
            MostrarProveedor()
        } else {
            if (busqueda.trim() != "") {
                MostrarBusqueda()
            } else {
                MostrarTodo()
            }
        }
    }

    //funcion de consulta todo
    const MostrarTodo = async () => {
        setLoading(true)
        await axios.get(`${endpoint}/listado`).then(datos => {
            setLoading(false)
            setDatosMostrar(datos.data)
        })



    }

    //funcion de consulta especifica
    const MostrarBusqueda = async () => {
        const response = await axios.get(`${endpoint}/document/${busqueda}`)
        setDatosMostrar(Array(response.data))
    }

    //funcion de consulta rol cliente
    const MostrarCliente = async () => {
        const response = await axios.get(`${endpoint}/cliente`)
        setDatosMostrar(response.data)
    }

    //funcion de consulta rol proveedor
    const MostrarProveedor = async () => {
        const response = await axios.get(`${endpoint}/proveedor`)
        setDatosMostrar(response.data)
    }
    //funcion de eliminar tercero
    const EliminarTercero = async (id) => {
        await axios.delete(`${endpoint}/${id}`)
        setDato("tercero")
        setAccion("elimino")
        setEstadoAlertAccion(!EstadoAlertAccion)
        Vista()
    }

    //funcion de mostrar y poder interatuar  con las funciones de consultas clientes y proveedores
    const MostrarOpciones = () => {
        if (Mostraropciones) {
            return (
                <div className='caja-opciones'>
                    <button className='button-opciones-cliente' id='boton-cliente' value="cliente" type="submit"
                        onClick={() => {
                            setmostrarClientes(1)
                            Vista()
                        }} >Cliente
                    </button>

                    <div className='division'>
                    </div>
                    <button className='button-opciones-proveedor' id="boton-proveedor" value="proveedor" type="submit"
                        onClick={() => {
                            setmostrarProveedor(2)
                            Vista()
                        }}>Proveedor
                    </button>
                </div>
            )
        }
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
                                    {item.typethird}
                                </div>
                                <div className='caja-nombre'>
                                    {item.name}
                                </div>
                            </div>
                            <div className='caja-Datos' id="aumentar">
                                <div className='text-Mostrar'>
                                    Tipo documento: {item.typeDocument}
                                </div>
                                <div className='text-Mostrar'>
                                    Documento: {item.document}
                                </div>
                                <div className='text-Mostrar'>
                                    Direccion: {item.address}
                                </div>
                                <div className='text-Mostrar'>
                                    Telefono: {item.iphone}
                                </div>
                                <div className='text-Mostrar'>
                                    <button className='Button-acciones' onClick={() => {
                                        SetId(item.document)
                                        setEstadoRegistrarTercero(!EstadoRegistrarTercero)
                                    }} type="submit">Actualizar</button>
                                    <button className='Button-acciones' onClick={() => EliminarTercero(item.id)} type="submit">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
    }

    //condicion de estado de sesion
    if (EstadoSesion) {
        return (
            <AlertRequerimiento />
        )
    } else {
        //todo esto es lo que retorno a la pantalla
        return (
            <div className='container-principal'>
                <div className='container-menu'>
                    <Banner DatosUsuario={DatosUsuario}></Banner>
                    <button onClick={() => {
                        SetId(undefined)
                        setEstadoRegistrarTercero(!EstadoRegistrarTercero)
                    }} className='button-Agregar' type="submit"><p className='text-PANEL'>Agregar</p></button>
                </div>
                <div className='container-panel'>
                    <Panel panel="Lista Terceros"></Panel>
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
                            <button className='Button-Filtro' type="submit" onClick={() => {
                                setmostrarClientes(0)
                                setmostrarProveedor(0)
                                setMostraropciones(!Mostraropciones)
                                Vista()
                            }}>
                                <FontAwesomeIcon icon={faFilter}>
                                </FontAwesomeIcon>
                            </button>
                            {MostrarOpciones()}
                        </div>
                        <div className='container-listado'>
                            {MostrarInfo()}
                        </div>
                    </div>
                </div>
                {EstadoRegistrarTercero &&
                    <div className='container-Fondo'>
                        <RegistrarTercero Actualizar={Id}></RegistrarTercero>
                        <button onClick={() => {
                            setEstadoRegistrarTercero(!EstadoRegistrarTercero)
                            Vista()
                        }} className='Button-Exit' type="submit">X</button>
                    </div>
                }
                {EstadoAlertAccion &&
                    <div className='container-Fondo'>
                        <div className='Container-Alert'>
                            <div className='Container-Alert-interno'>
                                <p className='Text-Alert'>
                                    <p>Se {Accion} al {Dato}</p>
                                    <button className='button-Alert' type="submit" onClick={() => setEstadoAlertAccion(!EstadoAlertAccion)}>Cerrar</button>
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