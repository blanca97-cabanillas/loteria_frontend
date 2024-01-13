import BoletoBadge from "./boleto-badge"

export default function RifaSelector({ listBoletos, kartChange }) {

    return <>
        <h1>Seleccione sus números</h1>
        <div className="grid grid-cols-5">
            {listBoletos.map(i => {
                return <BoletoBadge key={i.numero} numero={i.numero} status={i.status} kartChange={kartChange}></BoletoBadge>
            })}
        </div>
    </>
}