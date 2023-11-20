import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './Componentes/InicioSesion'
import Menu from './Componentes/Menus/MenuPrincipal'
import MenuTercero from './Componentes/Menus/MenuTercero'
import MenuUsuario from './Componentes/Menus/MenuUsuario'
import MenuProducto from './Componentes/Menus/MenuProducto'
import MenuFacturaVenta from './Componentes/Menus/MenuFacturaVenta'
import MenuFacturaCompra from './Componentes/Menus/MenuFacturaCompra'
import MenuInforme from './Componentes/Menus/MenuInformes'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/menu/tercero' element={<MenuTercero />}></Route>
          <Route path='/menu/usuario' element={<MenuUsuario />}></Route>
          <Route path='/menu/producto' element={<MenuProducto />}></Route>
          <Route path='/menu/facturaventa' element={<MenuFacturaVenta />}></Route>
          <Route path='/menu/facturacompra' element={<MenuFacturaCompra />}></Route>
          <Route path='/menu/informe' element={<MenuInforme />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
