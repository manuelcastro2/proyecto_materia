import React, { useState, useEffect } from 'react';
import axios from 'axios';

////para invocar al backend en la parte de productos
const endpoint = 'http://localhost:3333/producto/'

const RegisterProducto = ({ Actualizar }) => {

    //los diferentes estados
    const [Id, setId] = useState("")
    const [codeProduct, setCodeProduct] = useState("")
    const [product, setProduct] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [tipoProducto, setTipoProducto] = useState("")
    const [unidad, setUnidad] = useState("")
    const [valorUnitario, setValorUnitario] = useState(0)
    const [porcentajeIva, setPorcentajeIva] = useState(0)
    const [existencia, setExistencia] = useState("")
    const [Accion, setAccion] = useState("")
    const [EstadoAlertAccion, setEstadoAlertAccion] = useState(false)

    //funcion de guardado y actualizar con una condicion
    //para hacer funcionar la condicion se recibe de los menus para asi poder consultar al producto y asi
    //las acciones del usuario para crear o actualizar un producto
    const Save = async (e) => {
        e.preventDefault();
        if (Actualizar === undefined) {
            const response = await axios.post(endpoint, {
                codeProduct: codeProduct,
                name: product,
                description: descripcion,
                typeProduct: tipoProducto,
                unitExtent: unidad,
                valueUnitary: valorUnitario,
                percentageIVA: porcentajeIva
            })
            if (response.data !== undefined) {
                setAccion("guardo")
                setCodeProduct("")
                setProduct("")
                setDescripcion("")
                setTipoProducto("")
                setUnidad("")
                setValorUnitario("")
                setPorcentajeIva("")
                setExistencia("")
            }
        } else {
            const response = await axios.post(`${endpoint}${Id}`, {
                codeProduct: codeProduct,
                name: product,
                description: descripcion,
                typeProduct: tipoProducto,
                unitExtent: unidad,
                valueUnitary: valorUnitario,
                percentageIVA: porcentajeIva
            })
            if (response.data !== undefined) {
                setCodeProduct("")
                setProduct("")
                setDescripcion("")
                setTipoProducto("")
                setUnidad("")
                setValorUnitario("")
                setPorcentajeIva("")
                setExistencia("")
                setAccion("actualizo")
            }

            setEstadoAlertAccion(!EstadoAlertAccion)
        }

    }

    //metodo de consulta de un solo producto para asi hacer la actualizacion
    useEffect(() => {
        if (Actualizar != undefined) {
            const getIdProducto = async () => {

                await axios.get(`${endpoint}${Actualizar}`).then(item => {
                    console.log(item);
                    setId(item.data.id)
                    setCodeProduct(item.data.codeProduct)
                    setDescripcion(item.data.description)
                    setProduct(item.data.product)
                    setTipoProducto(item.data.typeProduct)
                    setUnidad(item.data.unitExtent)
                    setPorcentajeIva(item.data.percentageIVA)
                    setValorUnitario(item.data.valueUnitary)
                })

            }
            getIdProducto()
        }
        console.log(Actualizar);
    }, [])

    //lo que muestro en la pantalla
    return (
        <div className='container-RegistroTercero'>
            <h1 className='container-titulo'>
                Registrar producto
            </h1>
            <form onSubmit={Save}>
                <div className='container-interno-Tercero field'>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="codigoProducto"
                            placeholder='Codigo producto'
                            id='codigoProducto'
                            value={codeProduct}
                            onChange={(e) => setCodeProduct(e.target.value)} />
                        <label className='label-tercero' for="">Codigo producto</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="producto"
                            placeholder='Producto'
                            id='producto'
                            value={product}
                            onChange={(e) => setProduct(e.target.value)} />
                        <label className='label-tercero' for="">Producto</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="descripcion"
                            placeholder='Descripcion'
                            id='descripcion'
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)} />
                        <label className='label-tercero' for="">Descripcion</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="tipoProducto"
                            placeholder='Tipo producto'
                            id='tipoProducto'
                            value={tipoProducto}
                            onChange={(e) => setTipoProducto(e.target.value)} />
                        <label className='label-tercero' for="">Tipo producto</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="tipoUnidad"
                            placeholder='Tipo unidad'
                            id='tipoUnidad'
                            value={unidad}
                            onChange={(e) => setUnidad(e.target.value)} />
                        <label className='label-tercero' for="">Tipo Unidad</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="valorUnnitario"
                            placeholder='Valor unitario'
                            id='valorUnnitario'
                            value={valorUnitario}
                            onChange={(e) => setValorUnitario(e.target.value)} />
                        <label className='label-tercero' for="">Valor unitario</label>
                    </div>
                    <div className='container-Input'>
                        <input className='Input-text' type="text"
                            name="porcentajeIva"
                            placeholder='porcentajeIva'
                            id='porcentajeIva'
                            value={porcentajeIva}
                            onChange={(e) => setPorcentajeIva(e.target.value)} />
                        <label className='label-tercero' for="">Porcentaje IVA</label>
                    </div>
                    <div className='container-Input'>
                        <button className='Button-Entrar' type="submit">Enviar</button>
                    </div>
                </div>
            </form>
            {EstadoAlertAccion &&
                <div className='container-Fondo'>
                    <div className='Container-Alert'>
                        <div className='Container-Alert-interno'>
                            <p className='Text-Alert'>
                                <span>Se {Accion} al producto</span>
                                <button className='button-Alert' type="submit" onClick={() => setEstadoAlertAccion(!EstadoAlertAccion)}>Volver</button>
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default RegisterProducto