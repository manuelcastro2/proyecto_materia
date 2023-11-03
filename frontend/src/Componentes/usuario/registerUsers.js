import React, { useState } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:3333/usuario/'

const RegisterUsuario = () => {

    const [name, setName] = useState("")
    const [apellido, setApellido] = useState("")
    const [cedula, setCedula] = useState("")
    const [rol, setRol] = useState("")
    const [password, setPassword] = useState("")

    const Save = async (e) => {
        e.preventDefault();
        const response = await axios.post(endpoint, { name: name, lastname: apellido, document: cedula, role: rol, password: password })
        if (response.data !== undefined) {
            console.log(response.data)
        }
    }

    return (
        <div>
            <form onSubmit={Save}>
            <div>
                <div>
                    <label for="">Name</label>
                    <input type="text"
                        name="Name"
                        placeholder='Name'
                        id='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label for="">Apellido</label>
                    <input type="text"
                        name="Apellido"
                        placeholder='Apellido'
                        id='Apellido'
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)} />
                </div>
                <div>
                    <label for="">Cedula</label>
                    <input type="text"
                        name="cedula"
                        placeholder='Cedula'
                        id='cedula'
                        value={cedula}
                        onChange={(e) => setCedula(e.target.value)} />
                </div>
                <div>
                    <label for="">Rol</label>
                    <input type="text"
                        name="Rol"
                        placeholder='Rol'
                        id='rol'
                        value={rol}
                        onChange={(e) => setRol(e.target.value)} />
                </div>
                <div>
                    <label for="">Password</label>
                    <input type="text"
                        name="Password"
                        placeholder='Password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Enviar</button>
            </div>
            </form>
        </div>
    )
}

export default RegisterUsuario