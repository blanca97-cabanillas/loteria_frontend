import { useNavigate } from "react-router-dom";
import { SRC_URL } from "src/services/utils/config";

export default function RifaCard({ nombre, numeroBoletos, img, identificador }) {
    const navigate = useNavigate();
    function navigateRifa(idn) {
        if(idn === 'rifa_01'){
            navigate(SRC_URL + '/rifa-1')
        }
        if(idn === 'rifa_02'){
            navigate(SRC_URL + '/rifa-2')
        }
        if(idn === 'rifa_03'){
            navigate(SRC_URL + '/rifa-3')
        }
        
        // 
    }
    return <div className="text-center">
        <div>
            <h1 className="font-bold text-xl bg-secondary p-2">{nombre}</h1>
        </div>
        <div className="flex justify-center"><img src={img} alt="" /></div>
        <div>Numero boletos: {numeroBoletos}</div>
        <div className="mb-8"><button className="hover:ring-4 hover:ring-sky-500 bg-primary text-secondary p-4 rounded-xl" onClick={() => navigateRifa(identificador)}>Enlace para participar</button></div>
    </div>
}