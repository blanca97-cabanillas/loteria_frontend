import { useEffect, useState } from "react";
import RifaCard from "./rifaCard";
import { getAllActivas } from "src/services/configuracion-rifa/configuracion-rifa";
import whatsapp from 'src/assets/images/whatsapp.png'
import { SRC_URL } from "src/services/utils/config";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const [rifas, setRifas] = useState([]) as any;
	const navigate = useNavigate();
	useEffect(() => {
		getAllActivas().then((rifas) => {
			console.log(rifas);
			setRifas(rifas);
		})
	}, []);
	function clickHandler() {
		navigate(SRC_URL + '/admin/admin-rifa-1')
	}
	return (
		<><div className="pt-10">
			<h1 className="text-black text-right">BIENVENIDOS</h1>
			{rifas.map(i => {
				return <RifaCard identificador={i.identificador} key={i.id} nombre={i.nombre_rifa} numeroBoletos={i.numero_boletos} img={i.foto}></RifaCard>
			})}
		</div>
			<div id="whatsapp">
				<a href="https://api.whatsapp.com/send?phone=+526221555303&text=hola">
					<img className="w-14 rounded-xl shadow-2xl hover:ring-4 hover:ring-sky-500" src={whatsapp} title="Escríbenos por Whastapp" alt="Escríbenos por Whastapp" />
				</a>
			</div>
			{localStorage.getItem('role') === 'admin' ? <button onClick={() => clickHandler()} id="button-admin" className="w-14 rounded-xl bg-black h-14 shadow-2xl hover:ring-4 hover:ring-sky-500" ><i className="text-white fa-solid fa-gears"></i></button> : ''}

		</>
	)
}