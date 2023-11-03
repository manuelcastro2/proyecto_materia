import React, { useState } from 'react';
import './../../Estilos/EstiloMenu.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const Var = () => {

    const navigate = useNavigate()
    const [Cerrar, SetCerrar] = useState(false)

    function CerrarSesion() {
        SetCerrar(!Cerrar)
    }

    function Salir() {
        navigate('/')
    }

    return (
        <div className='container-panel'>
            <div className='panel-barra'>
                <p className='text-PANEL'>panel</p>
                <div className='Panel-Opciones'>
                    <button type="submit" onClick={CerrarSesion}>
                        <FontAwesomeIcon className='Icon-Salir' icon={faArrowAltCircleLeft} />
                    </button>
                </div>
            </div>
            {Cerrar && <div>
                <form onSubmit={Salir}>
                    <div className='container-Fondo'>
                        <div className='Container-Alert'>
                            <div className='Container-Alert-interno'>
                                <p className='Text-Alert'>
                                    <p>SE CERRO LA SESION</p>
                                    <button className='button-Alert' type="submit" >Volver</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>}
        </div>
    )
}

export default Var