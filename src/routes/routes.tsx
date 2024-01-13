import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import { RequireAuth } from './requireAuth';
import RifaUno from 'src/pages/rifa-1';
import AdminPage from 'src/pages/admin';
import AdminRifaUno from 'src/pages/admin/page/AdminRifa1';
import AdminRifaDos from 'src/pages/admin/page/AdminRifa2';
import AdminRifaTres from 'src/pages/admin/page/AdminRifa3';
import ConsultarFolio from 'src/pages/home/consultar';
import LoginPage from 'src/pages/admin/login';
import RifaDos from 'src/pages/rifa-2';
import RifaTres from 'src/pages/rifa-3';

export default function RoutesComponent() {
    return (
        <>
            <Routes>
                {/* public routes */}
                <Route path='/' element={<Home />} />
                <Route path='/rifa-1' element={<RifaUno />} />
                <Route path='/rifa-2' element={<RifaDos />} />
                <Route path='/rifa-3' element={<RifaTres />} />
                <Route path='/consultar' element={<ConsultarFolio />} />
                <Route path='/login-admin' element={<LoginPage />} />
                {/* Cambiar a admin */}
                <Route element={<RequireAuth allowedRoles={['admin']} />}>
                    <Route path='/admin-rifa-1' element={<AdminRifaUno />} />
                    <Route path='/admin-rifa-2' element={<AdminRifaDos />} />
                    <Route path='/admin-rifa-3' element={<AdminRifaTres />} />
                    <Route path='/admin-home' element={<Home />} />
                    <Route path='/admin/*' element={<AdminPage />}>
                    </Route>
                </Route>


                {/* catch all */}
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}
