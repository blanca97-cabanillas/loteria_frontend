import { useNavigate } from 'react-router-dom';
import logo from 'src/assets/logo-loteria.jfif'
import { SRC_URL } from 'src/services/utils/config';
export default function TopBar() {
    const navigate = useNavigate();
    function navigateConsultar() {
        navigate(SRC_URL + '/consultar')
    }
    function navigateHome(){
        navigate(SRC_URL)
    }
    return <>
        <div className='relative'>
            <img onClick={() => navigateHome()} src={logo} className='w-28 absolute top-5 left-10 rounded-full border-8 border-secondary z-20' alt="" />
            <button onClick={() => navigateConsultar()} className='absolute px-4 py-2 top-2 right-4 rounded-xl bg-secondary text-primary'>Consultar</button>
            <div className='bg-primary h-20 border-b-8 border-secondary'></div>
        </div>
    </>
}