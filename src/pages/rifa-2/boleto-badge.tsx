import { useEffect, useState } from "react"

export default function BoletoBadge({ numero, status, kartChange }) {
    const [classnameStyle, setClassnameStyle] = useState('');
    useEffect(() => {
        // L libre, C comprado, E espera, M del cliente
        switch (status) {
            case 'L':
                setClassnameStyle('bg-gray-100 text-gray-800 cursor-pointer');
                break;
            case 'C':
                setClassnameStyle('bg-gray-100 text-gray-200 cursor-not-allowed');
                break;
            case 'E':
                setClassnameStyle('bg-yellow-200 text-yellow-800 cursor-not-allowed');
                break;
            case 'M':
                setClassnameStyle('bg-green-200 text-green-800 cursor-pointer');
                break;
            default:
                break;
        }
    }, [status]);
    function maskNumber(numero) {

    }
    function boletoClick(numero, status) {
        if(status === 'L'){
            kartChange(numero,'+');
        }
        if(status === 'M'){
            kartChange(numero,'-');
        }
    }
    return <>
        <span onClick={() => boletoClick(numero, status)} className={"mt-2 text-sm text-center font-medium mr-2 px-2 py-1 rounded " + classnameStyle}>{numero.toString().padStart(4,"0")}</span>
    </>
}