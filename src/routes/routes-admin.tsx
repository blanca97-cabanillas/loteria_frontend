import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import { RequireAuth } from './requireAuth';
import RifaUno from 'src/pages/rifa-1';
import AdminRifaUno from 'src/pages/admin/page/AdminRifa1';

export default function RoutesComponentAdmin() {
    return (
        <>
            <Routes>
                {/* public routes */}
                <Route path='/admin/rifa-1' element={<AdminRifaUno />} />

                <Route element={<RequireAuth allowedRoles={['ADMIN']} />}>

                </Route>

                {/* catch all */}
                <Route path="*" element={<Home />} />
            </Routes>
        </>
    );
}
