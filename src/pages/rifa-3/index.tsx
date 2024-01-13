import { useEffect, useState } from "react";
import RifaSelector from "./rifa-selector";
import { getBoletosRifa1, getBoletosRifa3 } from "src/services/boletos/boletos";
import FormularioCompra from "./formulario";
import PaginadorBoletos from "./paginadorBoletos";
import { getConfiguracion } from "src/services/configuracion-rifa/configuracion-rifa";
import { NotificationManager } from "react-notifications";
const IDENTIFICADOR = 'rifa_03';
export default function RifaTres() {
    const [azarNumero, setAzarNumero] = useState('');
    const [nombreRifa, setNombreRifa] = useState('');
    const [total_boletos, setTotal_Boletos] = useState(0);
    const [precio_boletos, setPrecio_boletos] = useState(0);
    const [listBoletos, setListBoletos] = useState([]);
    const [kart, setKart] = useState([]);
    // Funcion para consultar boletos al back pasandole un limite inferior y superior
    function getBoletos(limitBot, limitTop) {
        // Peticion al back de los boletos de la rifa 1
        getBoletosRifa3({ limitBot: limitBot, limitTop: limitTop }).then(function (res) {
            let auxListBoletos = [];
            // Ciclo para saber cuales estan comprados, cuales estan libres y cuales estan en el carrito
            for (let i = limitBot; i <= limitTop; i++) {
                if (res.some(e => e.numero === i)) {
                    auxListBoletos.push({ status: 'C', numero: i });
                } else if (kart.some(e => e === i)) {
                    auxListBoletos.push({ status: 'M', numero: i });
                } else {
                    auxListBoletos.push({ status: 'L', numero: i });
                }
            }
            setListBoletos(auxListBoletos);
        });
    }
    // Funcion que se activa cada que seleccionamos un badge
    function kartChange(numero, operacion) {
        let auxListBoletos = [...listBoletos];
        let auxKart = [...kart];
        const index = listBoletos.findIndex(e => e.numero === numero);
        if (operacion === '+') {
            auxListBoletos[index] = { numero: numero, status: 'M' };
            auxKart.push(numero);
        } else {
            auxListBoletos[index] = { numero: numero, status: 'L' };
            auxKart = auxKart.filter(i => i != numero)
        }
        setKart(auxKart)
        setListBoletos(auxListBoletos);
    }
    // Funcion que se ejecuta cuando clickeamos en el paginador
    function handleClickPaginador(limitBot, limitTop) {
        getBoletos(limitBot, limitTop);
    }
    // Funcion para separar caracteres pegados
    function sanitizadorString(kart) {
        let newKart = kart.map(e => {
            return e.toString().padStart(4, "0");
        });
        return newKart.toString().replace(/,/g, ", ");
    }
    function getAzarTickets(numero) {
        getBoletosRifa3({ limitBot: 1, limitTop: total_boletos }).then(function (res) {
            let boletosDisponibles = [];
            // Ciclo para saber cuales estan comprados, cuales estan libres y cuales estan en el carrito
            for (let i = 1; i <= total_boletos; i++) {
                if (res.some(e => e.numero === i)) {

                } else {
                    boletosDisponibles.push(i);
                }
            }
            let nuevaLista = [];
            if (numero >= boletosDisponibles.length) {
                setKart([]);
                NotificationManager.error('No hay suficientes boletos disponibles', 'error');
                return;
            }
            for (let index = 0; index < numero; index++) {
                let azar = Math.floor(Math.random() * (boletosDisponibles.length - 0 + 1) + 0);
                nuevaLista.push(boletosDisponibles[azar]);
                if (boletosDisponibles[azar] === undefined) {
                    setKart([]);
                    NotificationManager.error('No hay suficientes boletos disponibles', 'error');
                    return;
                }
                const filtrados = boletosDisponibles.filter((item, index) => index !== azar);
                boletosDisponibles = filtrados;
            }
            setKart([...nuevaLista]);
        });
    }
    useEffect(() => {
        // cargar todos los boletos al entrar a la pagina
        getConfiguracion(IDENTIFICADOR).then((rifa) => {
            setNombreRifa(rifa.nombre_rifa);
            console.log(rifa);
            setPrecio_boletos(rifa.precio_boleto);
            setTotal_Boletos(rifa.numero_boletos);
        });
        getBoletos(1, 500);
    }, []);

    return <div className="grid justify-items-center pt-14">
        <h1 className="text-primary text-3xl">{nombreRifa}</h1>
        <div className="w-full">
            <RifaSelector listBoletos={listBoletos} kartChange={kartChange}></RifaSelector>
        </div>
        <div className="pt-4">
            <PaginadorBoletos total={total_boletos} handleClick={handleClickPaginador}></PaginadorBoletos>
        </div>
        <div className="text-center p-4">
            <input onChange={(e) => setAzarNumero(e.target.value)} value={azarNumero} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="number" placeholder="Numero" />
            <button className="bg-primary m-4 p-2 text-secondary" onClick={() => getAzarTickets(azarNumero)}>Obtener boleto al azar</button>
        </div>
        <h1 className="mt-10 text-xl px-2">Boletos seleccionados: {kart.length} </h1>
        <h1>Total: ${kart.length * precio_boletos}</h1>
        <div>
            <div className="mx-2 p-4 border-1 border-primary border rounded-lg">
                <p>" {sanitizadorString(kart)} "</p>
            </div>
        </div>
        <div className="mt-20 mb-20 p-2">
            <FormularioCompra costo={precio_boletos} kart={kart} kartHandler={setKart}></FormularioCompra>
        </div>
    </div>
}