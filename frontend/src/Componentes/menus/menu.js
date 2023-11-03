import React, { useState, useEffect } from 'react';
import './../../Estilos/EstiloMenu.css'

const Menu = ({ DatosUsuario }) => {

    const [EstadoModalTercero, setModalTercero] = useState(false)

    function ModalTercero(){
        setModalTercero(!EstadoModalTercero)
    }

    function menuRol() {
        if (DatosUsuario && DatosUsuario.rol) {
            if (DatosUsuario.rol == "bodega") {
                return (
                    <div>
                        <div className='button-grupo'>
                            <div className='button-ESTANDAR'>
                                <p className='text-PANEL'>pedidos</p>
                            </div>
                        </div>
                    </div>
                )
            } else if (DatosUsuario.rol == "ventas") {
                return (
                    <div>
                        <div className='button-ESTANDAR'>
                            <p className='text-PANEL'>ventas</p>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <div className='button-grupo'>
                            <div className='button-ESTANDAR'>
                                <p className='text-PANEL'>ventas</p>
                            </div>
                            <div className='button-ESTANDAR'>
                                <p className='text-PANEL'>pedidos</p>
                            </div>
                        </div>
                        <div className='button-ESTANDAR'>
                            <p className='text-PANEL'>usuarios</p>
                        </div>
                    </div>
                )
            }
        }
    }

    return (
        <div className='container-menu'>
            <div className='banner-bienvenido'>
                <p className='text-bienvenido'>BIENVENIDO</p>
                <p>{DatosUsuario.nombre + ' ' + DatosUsuario.apellido}</p>
                <p>{DatosUsuario.rol}</p>
            </div>
            <div className='button-INICIO'>
                INICIO
            </div>
            {menuRol()}
            <div className='button-grupo'>
                <div className='button-ESTANDAR'>
                    <p className='text-PANEL'>productos</p>
                </div>
            </div>
            <button onClick={ModalTercero} className='button-ESTANDAR'>
                <p className='text-PANEL'>terceros</p>
            </button>
            <div className='button-ESTANDAR'>
                <p className='text-PANEL'>informes</p>
            </div>
           
        </div>

    )

}

export default Menu;