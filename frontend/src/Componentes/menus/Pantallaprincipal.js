import React, { useState, useEffect } from 'react';
import './../../Estilos/EstiloMenu.css'
import { useNavigate, useLocation } from 'react-router-dom';
import Barra from './Panel'
import Menu from './menu'

const MenuAdministrador = () => {
    const { state } = useLocation();
    const [DatosUsuario, setDatosUsuario] = useState("")
    const [loading, setLoading] = useState(true)
    const [EstadoSesion, SetEstadoSesion] = useState(true)

    const [MenuUsuario,setMenuUsuario]=useState(false)
    const [MenuVenta,setMenuVenta]=useState(false)
    const [MenuPedido,setMenuPedido]=useState(false)
    const [MenuTercero,setMenuTercero]=useState(false)
    const [MenuProducto,setMenuProducto]=useState(false)
    const [MenuInforme,setMenuInforme]=useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (state && state.DatosUsuario) {
            setTimeout(() => {
                setDatosUsuario(state.DatosUsuario);
                setLoading(false);
            }, 2000);
            SetEstadoSesion(false)
        }
    }, [state]);

    function AlertSesion() {
        navigate('/')
    }


    if (EstadoSesion) {
        return (
            <div className='container-principal'>
                <form onSubmit={AlertSesion}>
                    <div className='Container-Alert'>
                        <div className='Container-Alert-interno'>
                            <p className='Text-Alert'>
                                <p>ES REQUERIDO INICIAR SESION</p>
                                <button className='button-Alert' type="submit" >Volver</button>
                            </p>

                        </div>
                    </div>
                </form>
            </div>
        )
    } else {
        if (loading) {
            return (
                <div className='container-principal'>
                    <div class="wrapper">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container-principal'>
                    <Menu DatosUsuario={DatosUsuario}>
                    </Menu>
                    <Barra></Barra>
                </div>
            )
        }
    }
}

export default MenuAdministrador