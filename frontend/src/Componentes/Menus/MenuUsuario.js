import React, { useState, useEffect } from 'react';
import './../../Estilos/EstiloMenu.css'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import RegistrarUsuario from '../Modales/registerUsers'
//importacion de iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import Banner from './Banner'
import Panel from './Barra'
import AlertRequerimiento from './AlertRequerimiento';
import PantallaCarga from './PantallaCarga';

//para invocar al backend en la parte de usuarios
const endpoint = 'http://localhost:3333/usuario'
const MenuTercero = () => {

    //metodo state y de estados de los datos del usuario del inicio de sesion
    //y los estados de mostrar y consultas y de los alert de que se guardo y elimino correctamente
    //y las diferentes acciones que se hacen en el menu
    const { state } = useLocation();
    const [DatosUsuario, setDatosUsuario] = useState("")
    const [DatosMostrar, setDatosMostrar] = useState([])
    const [EstadoRegistrarUsuario, setEstadoRegistrarUsuario] = useState(false)
    const [Mostraropciones, setMostraropciones] = useState(false)
    const [busqueda, setbusqueda] = useState("")
    const [Mostraradministrador, setmostraradministrador] = useState(0)
    const [Mostrarventas, setmostrarventas] = useState(0)
    const [Mostrarbodegas, setmostrarbodegas] = useState(0)
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
        if (Mostraradministrador === 1) {
            MostrarAdministrador()
        }

        if (Mostrarbodegas === 2) {
            MostrarBodegas()
        }

        if (Mostrarventas === 3) {
            MostrarVentas()
        } else {
            if (busqueda.trim() != "") {
                MostrarBusqueda()
            } else {
                MostrarTodo()
            }
        }
    }

    const MostrarTodo = async () => {
        setLoading(true)
        await axios.get(`${endpoint}/listado`).then(datos => {
            setDatosMostrar(datos.data)
            console.log(DatosMostrar);
            setLoading(false)
        })


    }

    const MostrarBusqueda = async () => {
        const response = await axios.get(`${endpoint}/cedula/${busqueda}`)
        setDatosMostrar(Array(response.data))
    }

    const MostrarAdministrador = async () => {
        const response = await axios.get(`${endpoint}/administrador`)
        setDatosMostrar(Array(response.data))
    }

    const MostrarVentas = async () => {
        const response = await axios.get(`${endpoint}/ventas`)
        setDatosMostrar(Array(response.data))
    }

    const MostrarBodegas = async () => {
        const response = await axios.get(`${endpoint}/bodegas`)
        setDatosMostrar(response.data.users)
    }

    const MostrarOpciones = () => {
        if (Mostraropciones) {
            return (
                <div className='caja-opciones'>
                    <button className='button-opciones-cliente' id='boton-cliente' value="administrador" type="submit"
                        onClick={() => {
                            setmostraradministrador(1)
                            Vista()
                        }} >Administrador
                    </button>
                    <div className='division'>
                    </div>
                    <button className='button-opciones-proveedor' id="boton-proveedor" value="bodegas" type="submit"
                        onClick={() => {
                            setmostrarbodegas(2)
                            Vista()
                        }}>Bodegas
                    </button>
                    <div className='division'>
                    </div>
                    <button className='button-opciones-proveedor' id="boton-proveedor" value="ventas" type="submit"
                        onClick={() => {
                            setmostrarventas(3)
                            Vista()
                        }}>Ventas
                    </button>
                </div>
            )
        }
    }

    const EliminarUsuario = async (id) => {
        if (DatosUsuario.id != id) {
            await axios.delete(`${endpoint}/${id}`)
            setDato("al usuario")
            setAccion("Se elimino")
            Vista()
            setEstadoAlertAccion(!EstadoAlertAccion)
        } else {
            setDato("al usuario")
            setAccion("No se peude eliminar")
            setEstadoAlertAccion(!EstadoAlertAccion)
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
                                    {item.role}
                                </div>
                                <div className='caja-nombre'>
                                    {item.name}
                                </div>
                            </div>
                            <div className='caja-Datos' id="aumentar">
                                <div className='text-Mostrar'>
                                    Apellido: {item.lastname}
                                </div>
                                <div className='text-Mostrar'>
                                    Documento: {item.document}
                                </div>
                                <div className='text-Mostrar'>
                                    Clave:<input className='password' type="password" value={item.password} disabled />
                                </div>
                                <div className='text-Mostrar'>
                                    <button className='Button-acciones' onClick={() => {
                                        SetId(item.document)
                                        setEstadoRegistrarUsuario(!EstadoRegistrarUsuario)
                                    }} type="submit">Actualizar</button>
                                    <button className='Button-acciones' onClick={() => EliminarUsuario(item.id)} type="submit">Eliminar</button>
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
                    <Panel panel="Lista Usuarios"></Panel>
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
                                setmostraradministrador(0)
                                setmostrarbodegas(0)
                                setmostrarventas(0)
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
                {EstadoRegistrarUsuario &&
                    <div className='container-Fondo'>
                        <RegistrarUsuario Actualizar={Id}></RegistrarUsuario>
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