import { useState } from "react"
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import { loginUser } from "src/services/auth/auth";
import { SRC_URL } from "src/services/utils/config";

export default function LoginPage() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');
    function login() {
        loginUser({ password, usuario }).then((res) => {
            console.log(res);
            if (res.success) {
                NotificationManager.success('Inicio sesion con exito', 'success');
                localStorage.setItem("usuario", res.response.username);
                localStorage.setItem("role", res.response.role);
                navigate(SRC_URL + '/admin/admin-rifa-1');
            } else {
                NotificationManager.error('Las credenciales no coinciden', 'error');
            }
        });
    }
    return <div className="min-h-screen w-full mt-14 mx-auto max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Usuario
                </label>
                <input value={usuario} onChange={(e) => setUsuario(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Usuario" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Contraseña
                </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            </div>
            <div className="flex items-center justify-between">
                <button onClick={() => login()} className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Iniciar sesion
                </button>
            </div>
        </form>
    </div>

}