import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import Banner from './Banner'
import Panel from './Barra'
import AlertRequerimiento from './AlertRequerimiento';

function MenuInformes() {

    const [EstadoSesion, SetEstadoSesion] = useState(false)
    const [DatosUsuario, setDatosUsuario] = useState("")
    const [EstadoRegistrarUsuario, setEstadoRegistrarUsuario] = useState(false)
    const [Mostraropciones, setMostraropciones] = useState(false)

    const { state } = useLocation();

    useEffect(() => {
        if (state && state.DatosUsuario) {
            setDatosUsuario(state.DatosUsuario);
        } else {
            SetEstadoSesion(true)
        }
    }, []);

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
                    }} className='button-Agregar' type="submit"><p className='text-PANEL'>Generar Informe</p></button>
                </div>
                <div className='container-panel'>
                    <Panel panel="Informe de ventas"></Panel>
                    <div className='container-info'>
                        <div className='container-listado'>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuInformes
