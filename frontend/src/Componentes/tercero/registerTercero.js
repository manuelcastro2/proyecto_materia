import React, { useState } from 'react';
import axios from 'axios';
import './../../Estilos/EstiloRegistroTercero.css'

const endpoint = 'http://localhost:3333/tercero/'

function RegisterTercero() {

    const [name, setName] = useState("")
    const [tipoDoc, setTipoDoc] = useState("")
    const [cedula, setCedula] = useState("")
    const [direccion, setDireccion] = useState("")
    const [telefono, setTelefono] = useState("")
    const [tipoTercero, setTipoTercero] = useState("")

    const Save = async (e) => {
        e.preventDefault();
        const response = await axios.post(endpoint, { name: name, typeDocument: tipoDoc, document: cedula, address: direccion, iphone: telefono, typethird: tipoTercero })
        if (response.data !== undefined) {
            console.log(response.data)
        }

        return (
            <div className='container-Fondo'>
                <div className='container-RegistroTercero'>
                    <h1 className='container-titulo'>
                        Registrar tercero
                    </h1>
                    <form onSubmit={Save}>
                        <div className='container-interno-Tercero field'>
                            <div className='container-Input'>
                                <input className='Input-text' type="text"
                                    name="tipotercero"
                                    placeholder='Tipotercero'
                                    id='tipotercero'
                                    value={tipoTercero}
                                    onChange={(e) => setTipoTercero(e.target.value)} />
                                <label className='label-tercero' for="">Tipo tercero</label>
                            </div>
                            <div className='container-Input'>
                                <input className='Input-text' type="text"
                                    name="Name"
                                    placeholder='Name'
                                    id='Name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                                <label className='label-tercero' for="">Name</label>
                            </div>
                            <div className='container-Input'>
                                <input className='Input-text' type="text"
                                    name="tipoDoc"
                                    placeholder='Tipo documento'
                                    id='tipoDoc'
                                    value={tipoDoc}
                                    onChange={(e) => setTipoDoc(e.target.value)} />
                                <label className='label-tercero' for="">Tipo documento</label>
                            </div>
                            <div className='container-Input'>

                                <input className='Input-text' type="text"
                                    name="cedula"
                                    placeholder='Cedula'
                                    id='cedula'
                                    value={cedula}
                                    onChange={(e) => setCedula(e.target.value)} />
                                <label className='label-tercero' for="">Cedula</label>
                            </div>
                            <div className='container-Input'>
                                <input className='Input-text' type="text"
                                    name="direccion"
                                    placeholder='direccion'
                                    id='direccion'
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)} />
                                <label className='label-tercero' for="">Direccion</label>
                            </div>
                            <div className='container-Input'>
                                <input className='Input-text' type="text"
                                    name="telefono"
                                    placeholder='Telefono'
                                    id='telefono'
                                    value={telefono}
                                    onChange={(e) => setTelefono(e.target.value)} />
                                <label className='label-tercero' for="">Telefono</label>
                            </div>
                            <button className='Button-Entrar' type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterTercero