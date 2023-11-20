import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './../../Estilos/EstiloVisualizar.css'

const endpoint = 'http://localhost:3222/factura'
const endpoint2 = 'http://localhost:3333/tercero'
const endpoint3 = 'http://localhost:3333/producto'

const RegisterUsuario = () => {

    const [Id, setId] = useState("")
    const [typeBill, settypeBill] = useState("FacturaCompra")
    const [nroFacturas, setNroFactura] = useState("")
    const [date, setDate] = useState("")
    const [terceros, setTeceros] = useState([])
    const [Idtercero, setIdTeceros] = useState("")
    const [productos, setProductos] = useState([])
    const [totalOperation, settotalOperation] = useState(0)
    const [count, setcount] = useState({})
    const [Accion, setAccion] = useState("")
    const [EstadoAlertAccion, setEstadoAlertAccion] = useState(false)
    const [ArrayProductos, setArrayProductos] = useState([])
    const [EstadoAgregarProductos, setEstadoAgregarProductos] = useState(false)

    const Save = async (e) => {
        e.preventDefault();

        // Validación de datos
        if (!typeBill || !nroFacturas || !date || !Idtercero || ArrayProductos.length === 0) {
            console.error("Por favor, complete todos los campos obligatorios.");
            // Puedes mostrar un mensaje al usuario indicando que algunos campos son obligatorios
            return;
        }
        console.log(Idtercero);
        try {
            const response = await axios.post(`${endpoint}/`, {
                tipoFactura: typeBill,
                nroFactura: nroFacturas,
                totalOperacion: totalOperation,
                fecha: date,
                tercero: Idtercero,
                elementos: ArrayProductos
            });

            if (response.data !== undefined) {
                setAccion("guardo");
            }

            setEstadoAlertAccion(!EstadoAlertAccion);
        } catch (error) {
            console.error("Error al enviar la solicitud:", error.message);
            if (error.response) {
                console.error("Respuesta del servidor:", error.response.data);
            }
        }
    };


    useEffect(() => {
        ProductosAll()
        TercerosAll()
        let total = 0;
        ArrayProductos.forEach((item) => {
            total += item.ValorProducto || 0;
        });
        if (total !== totalOperation) {
            settotalOperation(total);
        }
    }, [ArrayProductos, totalOperation])

    const TercerosAll = async () => {
        await axios.get(`${endpoint2}/${'proveedor'}`).then(datos => {
            setTeceros(datos.data)
        })
    }
    const ProductosAll = async () => {
        await axios.get(`${endpoint3}/listado`).then(datos => {
            setProductos(datos.data)
        })
    }

    const handleInputChange = (productId, value) => {
        setcount((prevent) => ({
            ...prevent,
            [productId]: value,
        }))
    };

    const handleCheckboxChange = (productId) => {
        const selectedProduct = productos.find(product => product.id === productId);
        if (selectedProduct) {
            setArrayProductos(prevArray => [
                ...prevArray,
                {
                    nombre: selectedProduct.product,
                    unidad: selectedProduct.unitExtent,
                    cantidad: Number(count[productId]) || 0,
                    valorUnitario: Number(selectedProduct.valueUnitary),
                    porcentajeIva: selectedProduct.percentageIVA,
                    ValorProducto: Number(count[productId] * (selectedProduct.valueUnitary + (selectedProduct.valueUnitary * (selectedProduct.percentageIVA / 100))))
                }
            ]);
        }
        terceros.forEach((item) => {
            if (item.id === Number(Idtercero)) {
                setIdTeceros({
                    nombre: item.name,
                    tipoTercero: item.typethird,
                    documento: item.document,
                    direccion: item.address,
                    telefono: item.iphone
                })
            }
        })

    };

    return (
        <div className='container-RegistroTercero'>
            <h1 className='container-titulo'>
                Registrar factura compra
            </h1>
            <div className='container-interno-Tercero field'>
                <div className='container-Input'>
                    <select className='Input-text' value={typeBill}>
                        <option value="FacturaCompra">Factura compra</option>
                    </select>
                </div>
                <div className='container-Input'>
                    <input className='Input-text' type="text"
                        name="nroFactura"
                        placeholder='nroFactura'
                        id='nroFactura'
                        value={nroFacturas}
                        onChange={(e) => setNroFactura(e.target.value)} />
                    <label className='label-tercero' for="">Nro.Facturas</label>
                </div>
                <div className='container-Input'>
                    <input className='Input-text' type="date"
                        name="date"
                        placeholder='date'
                        id='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)} />
                    <label className='label-tercero' for="">Date</label>
                </div>
                <div className='container-Input'>
                    <select className=' Input-text' onChange={(e) => {
                        setIdTeceros(e.target.value)
                    }}>
                        <option value="">Selecion una opcion</option>
                        {terceros.map((items) => (
                            <option value={items.id}>{items.name}</option>
                        ))}
                    </select>
                    <label className='label-tercero' for="">Tercero</label>
                </div>
                <div className='container-elementos'>
                    <div className='container-agregar'>
                        <label for="">Elementos</label>
                        <button type="submit"
                            className='Button-acciones'
                            onClick={() => setEstadoAgregarProductos(!EstadoAgregarProductos)}>
                            +
                        </button>
                    </div>
                    <div className='container-vista-producto'>
                        {ArrayProductos.map((item) => (
                            <div className='vista-producto'>
                                <div className='caja-elemento1'>
                                    {item.nombre}
                                </div>
                                <div className='caja-elemento2'>
                                    {item.unidad}
                                </div>
                                <div className='caja-elemento3'>
                                    {item.cantidad}
                                </div>
                                <div className='caja-elemento4'>
                                    ${item.valorUnitario}
                                </div>
                                <div className='caja-elemento4'>
                                    ${item.ValorProducto}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='container-Input'>
                    <input className='Input-text' type="text"
                        name="nroFactura"
                        placeholder='nroFactura'
                        id='nroFactura'
                        value={totalOperation}
                        onChange={(e) => settotalOperation(e.target.value)} disabled />
                    <label className='label-tercero' for="">Total factura</label>
                </div>
                <div className='container-Input'>
                    <button className='Button-Entrar' type="submit"
                        onClick={Save}>Enviar</button>
                </div>
            </div>
            {EstadoAlertAccion &&
                <div className='container-Fondo'>
                    <div className='Container-Alert'>
                        <div className='Container-Alert-interno'>
                            <p className='Text-Alert'>
                                <span>Se genero factura de compra</span>
                                <button className='button-Alert' type="submit" onClick={() => setEstadoAlertAccion(!EstadoAlertAccion)}>Volver</button>
                            </p>
                        </div>
                    </div>
                </div>
            }
            {EstadoAgregarProductos &&
                <div className='container-Fondo'>
                    <div className='container-RegistroTercero3'>
                        <button type="submit"
                            className='Button-Exit2'
                            onClick={() => setEstadoAgregarProductos(!EstadoAgregarProductos)}>X</button>
                        <div className='container-info'>
                            <h1>Agregar Producto</h1>
                            <div className='caja-lista'>
                                {productos.map((item) => (
                                    <div className='listaProductos'>
                                        <div>
                                            Producto: {item.product}
                                        </div>
                                        <div>
                                            {item.unitExtent}
                                        </div>
                                        <input type="text"
                                            key={item}
                                            id={item.id}
                                            value={count[item.id]}
                                            placeholder='cantidad'
                                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                                            className='Input-texto' />
                                        <div>
                                            {item.valueUnitary}
                                        </div>
                                        <input type="checkbox"
                                            onChange={() => handleCheckboxChange(item.id)} />
                                    </div>
                                ))}
                                <button type="submit"
                                    className='Button-acciones'
                                    onClick={() => {
                                        setEstadoAgregarProductos(!EstadoAgregarProductos)
                                    }}
                                >agregar</button>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default RegisterUsuario