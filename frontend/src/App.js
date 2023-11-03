import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingUp from './Componentes/SingUp';
import RegisterUsers from './Componentes/usuario/registerUsers';
import RegisterTercero from './Componentes/tercero/registerTercero';
import RegisterProducto from './Componentes/Producto/registerProducto'
import Menu from './Componentes/menus/Pantallaprincipal'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SingUp />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/usuario' element={<RegisterUsers />}></Route>
          <Route path='/tercero' element={<RegisterTercero />}></Route>
          <Route path='/producto' element={<RegisterProducto />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
