import React, { useState } from 'react';
import axios from 'axios';

const endpoint = 'http://localhost:3333/producto/'

const RegisterProducto = () => {

    const [codeProduct, setCodeProduct] = useState("")
    const [product, setProduct] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [tipoProducto, setTipoProducto] = useState("")
    const [unidad, setUnidad] = useState("")
    const [valorUnitario, setValorUnitario] = useState(0)
    const [porcentajeIva, setPorcentajeIva] = useState(0)

    const Save = async (e) => {
        e.preventDefault();
        const response = await axios.post(endpoint, { codeProduct: codeProduct, product: product, description: descripcion, typeProduct: tipoProducto, unitExtent: unidad, valueUnitary: valorUnitario, percentageIVA: porcentajeIva })
        if (response.data !== undefined) {
            console.log(response.data)
        }
    }

    return (
        <div>
            <form onSubmit={Save}>
                <div>
                    <div>
                        <label for="">Codigo producto</label>
                        <input type="text"
                            name="codigoProducto"
                            placeholder='Codigo producto'
                            id='codigoProducto'
                            value={codeProduct}
                            onChange={(e) => setCodeProduct(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Producto</label>
                        <input type="text"
                            name="producto"
                            placeholder='Producto'
                            id='producto'
                            value={product}
                            onChange={(e) => setProduct(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Descripcion</label>
                        <input type="text"
                            name="descripcion"
                            placeholder='Descripcion'
                            id='descripcion'
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Tipo producto</label>
                        <input type="text"
                            name="tipoProducto"
                            placeholder='Tipo producto'
                            id='tipoProducto'
                            value={tipoProducto}
                            onChange={(e) => setTipoProducto(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Tipo Unidad</label>
                        <input type="text"
                            name="tipoUnidad"
                            placeholder='Tipo unidad'
                            id='tipoUnidad'
                            value={unidad}
                            onChange={(e) => setUnidad(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Valor unitario</label>
                        <input type="text"
                            name="valorUnnitario"
                            placeholder='Valor unitario'
                            id='valorUnnitario'
                            value={valorUnitario}
                            onChange={(e) => setValorUnitario(e.target.value)} />
                    </div>
                    <div>
                        <label for="">Porcentaje IVA</label>
                        <input type="text"
                            name="porcentajeIva"
                            placeholder='porcentajeIva'
                            id='porcentajeIva'
                            value={porcentajeIva}
                            onChange={(e) => setPorcentajeIva(e.target.value)} />
                    </div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterProducto