import { useEffect, useState } from "react";
import TabSelector from "./tabSelector";
import TabItems from "./tabItems";
import { getPaginatedRifa1, getPaginatedRifa2 } from "src/services/compra/compra";
import { getConfiguracion } from "src/services/configuracion-rifa/configuracion-rifa";
const TAKE_ITEMS = 20;
const IDENTIFICADOR = 'rifa_02';
export default function AdminRifaUno() {
    const [nombreRifa, setNombreRifa] = useState('');
    const [precioBoleto, setPrecioBoleto] = useState(0);
    const [tab, setTab] = useState(1);
    const [table, setTable] = useState();
    const [pagina, setPagina] = useState(1);
    const [pages, setPages] = useState(1);
    const [search, setSearch] = useState('');
    function getPaginated(take = TAKE_ITEMS, skip = 0, keyword = '', status = 'ESPERA') {
        getPaginatedRifa2({ take, skip, keyword, status }).then((res) => {
            console.log(res);
            setTable(res.data);
            setPages(res.pages);
        })
    }
    function handlerPagina(pagina) {
        setPagina(pagina);
        let skip = (pagina - 1) * TAKE_ITEMS;
        getPaginated(TAKE_ITEMS, skip, search, tab == 1 ? 'ESPERA' : 'PAGADA');
    }
    function handlerKeyUp(data) {
        if (data.key === 'Enter') {
            console.log(data.target.value);
            setSearch(data.target.value);
            getPaginated(TAKE_ITEMS, 0, data.target.value, tab == 1 ? 'ESPERA' : 'PAGADA');
        }
    }
    function actualizarHandler(){
        getPaginated(TAKE_ITEMS, 0, search, tab == 1 ? 'ESPERA' : 'PAGADA');
    }
    function handlerTab(tab) {
        getPaginated(TAKE_ITEMS, 0, search, tab == 1 ? 'ESPERA' : 'PAGADA');
        setTab(tab);
    }
    useEffect(() => {
        // cargar todos los boletos al entrar a la pagina
        getConfiguracion(IDENTIFICADOR).then((rifa) => {
            setNombreRifa(rifa.nombre_rifa);
            setPrecioBoleto(rifa.precio_boleto);
        });
        getPaginated();
    }, []);
    return <div>
        <h1>{nombreRifa}</h1>
        <TabSelector tabHandler={handlerTab} tab={tab}></TabSelector>
        <div className="pt-4">
            <TabItems
                tab={tab}
                table={table}
                handleKeyUp={handlerKeyUp}
                pages={pages} pagina={pagina}
                handlerPagina={handlerPagina}
                identificadorRifa={IDENTIFICADOR}
                actualizarHandler={actualizarHandler}
                precioBoleto={precioBoleto}></TabItems>
        </div>
    </div>
}