import ConfiguracionRifa from "./Configuracion";
import PaginadorTabla from "./PaginadorTabla";
import TableRifa from "./TableRifa";

export default function TabItems({ tab, table, pagina, handlerPagina, pages, handleKeyUp, identificadorRifa, precioBoleto, actualizarHandler }) {
    function renderItems() {
        switch (tab) {
            case 1:
                return <div>
                    <TableRifa actualizarHandler={actualizarHandler} rifaIdentificador={identificadorRifa} handleKeyUp={handleKeyUp} table={table} precioBoleto={precioBoleto} accion={'PAGO'}></TableRifa>
                    <PaginadorTabla pages={pages} pagina={pagina} handlerPagina={handlerPagina}></PaginadorTabla>
                </div>
                break;
            case 2:
                return <div>
                    <TableRifa actualizarHandler={actualizarHandler} rifaIdentificador={identificadorRifa} handleKeyUp={handleKeyUp} table={table} precioBoleto={precioBoleto} accion={'NO PAGO'}></TableRifa>
                </div>
                break;
            case 3:
                return <div>
                    <h1>Configuracion de la rifa</h1>
                    <ConfiguracionRifa identificadorRifa={identificadorRifa}></ConfiguracionRifa>
                </div>
                break;

            default:
                break;
        }
    }
    return <div>
        {renderItems()}
    </div>
}