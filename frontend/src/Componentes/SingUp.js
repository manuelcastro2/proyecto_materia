import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './../Estilos/InicioSesion.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList, faCircleRight } from '@fortawesome/free-regular-svg-icons'



const endpoint = 'http://localhost:3333/usuario'
function SingUp() {

    const [cedula, setCedula] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const Datos = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${endpoint}/${cedula}/${password}`)
        navigate('/menu', {
            state: {
                DatosUsuario: {
                    nombre: response.data.name,
                    apellido: response.data.lastname,
                    rol: response.data.role
                }
            }
        })
    }

    return (
        <div>
            <form onSubmit={Datos}>
                <div className='container-Inicio'>
                    <h1>INVCONTROL</h1>
                    <div className='container-Inputs'>
                        <FontAwesomeIcon className='icon' icon={faRectangleList} />
                        <div className='container-Input'>   
                            <input type="text"
                                className='Input-text'
                                name="cedula"
                                placeholder='Cedula'
                                id='cedula'
                                value={cedula}
                                onChange={(e) => setCedula(e.target.value)} />
                                <label className='label-tercero' for="">Cedula</label>
                        </div>
                        <div className='container-Input Input-center'>
                            <input type="text"
                                className='Input-text'
                                name="Password"
                                placeholder='Password'
                                id='Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                                <label className='label-tercero' for="">Clave</label>
                        </div>
                    </div>
                    <button className='Button-Entrar' type="submit">
                        <FontAwesomeIcon className='icon-Next' icon={faCircleRight} />
                    </button>
                </div>
            </form>
        </div>
    )

}

export default SingUp