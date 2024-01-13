import { useEffect, useState } from "react";
import { getCompra } from "src/services/compra/compra";
import { getAllActivas } from "src/services/configuracion-rifa/configuracion-rifa";
import whatsapp from 'src/assets/images/whatsapp.png'
export default function ConsultarFolio() {
    const [rifas, setRifas] = useState([]);
    const [folio, setFolio] = useState('');
    const [item, setItem] = useState('');
    const [compra, setCompra] = useState({
        visible: false,
        nombre_persona: '',
        folio: 0,
        status: '',
        createdAt: '',
        telefono_persona: '',
        email_persona: '',
        boleto: []
    });
    function searchFolio() {
        getCompra({
            folio: folio,
            identificador: item
        }).then((res) => {
            console.log(res);
            setCompra({
                visible: true,
                nombre_persona: res.nombre_persona,
                folio: res.folio,
                status: res.status,
                createdAt: res.createdAt,
                telefono_persona: res.telefono_persona,
                email_persona: res.email_persona,
                boleto: res.boleto
            });
        });
    }
    useEffect(() => {
        getAllActivas().then((rifas) => {
            console.log(rifas);
            setRifas(rifas);
        })
    }, []);
    return <div className="pt-14 text-center px-4 min-h-screen">
        <h1>Consulta tu con tu folio</h1>
        <input value={folio} onChange={(e) => setFolio(e.target.value)} className="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        <h1>Rifa en la que participo</h1>
        <select className="mb-4" name="" id="" onChange={(e) => setItem(e.target.value)}>
            <option value='-1'>Seleccione una opcion</option>
            {rifas.map(element => {
                return <option key={element.id} value={element.identificador}>{element.nombre_rifa}</option>
            })}
        </select><br />
        <button onClick={() => searchFolio()} className="mt-4 bg-primary text-secondary rounded-xl px-4 py-2">Consultar</button>
        <br />
        {
            compra.visible ? <div className="bg-white rounded shadow-xl mb-40 p-2 pb-10">
                <h1 className='text-red-400'>Guarde el folio o tome captura a esta pantalla</h1>
                <div className="grid grid-cols-2">
                    <h3 className="col-span-2 text-left pb-2">Folio: {compra?.folio}</h3>
                    <h3 className="col-span-2 text-left pb-2">Nombre: {compra?.nombre_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Correo: {compra?.email_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Telefono: {compra?.telefono_persona}</h3>
                    <h3 className="text-left pb-2">Boletos: {compra?.boleto?.length}</h3>
                </div>
                <div>
                    {compra?.boleto?.map(i => <span className={"text-xs font-medium mr-2 px-2.5 py-0.5 rounded border " + (compra.status === 'ESPERA' ? 'bg-yellow-100 text-yellow-800 border-yellow-400' : 'bg-green-100 text-green-800 border-green-400')} key={i.numero}>{i.numero.toString().padStart(4,"0")}</span>)}
                </div>
            </div> : ''
        }

        <div id="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=+526221555303&text=hola">
                <img className="w-14 rounded-xl shadow-2xl hover:ring-4 hover:ring-sky-500" src={whatsapp} title="Escríbenos por Whastapp" alt="Escríbenos por Whastapp" />
            </a>
        </div>
    </div>
}