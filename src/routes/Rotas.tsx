import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import RecuperarSenha from '../pages/RecuperarSenha';
import RedefinirSenha from '../pages/RedefinirSenha';
import AdminLayout from '../layouts/AdminLayout';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/Produtos';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path='/recuperar-senha' element={<RecuperarSenha />} />
                    <Route path='/redefinir-senha' element={<RedefinirSenha />} />
                </Route>
                <Route path='/admin' element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='/admin/produtos' element={<Produtos />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;