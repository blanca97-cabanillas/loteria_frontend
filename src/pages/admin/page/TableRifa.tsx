import { useState } from "react";
import { ModalComponent } from "src/components/modal/modalComponent";
import { deleteCompra1, deleteCompra2, deleteCompra3, updateCompra1, updateCompra2, updateCompra3 } from "src/services/compra/compra";

export default function TableRifa({ table, handleKeyUp, precioBoleto, accion, rifaIdentificador, actualizarHandler }) {
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({} as any);
    function clickBoletos(boletos) {
        setSelectedItem(boletos);
        setOpenModal(true);
    }
    function clickEstado(folio) {
        if (rifaIdentificador === 'rifa_01') {
            updateCompra1({
                folio: folio,
                status: accion === 'PAGO' ? 'PAGADA' : 'ESPERA'
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
        if (rifaIdentificador === 'rifa_02') {
            updateCompra2({
                folio: folio,
                status: accion === 'PAGO' ? 'PAGADA' : 'ESPERA'
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
        if (rifaIdentificador === 'rifa_03') {
            updateCompra3({
                folio: folio,
                status: accion === 'PAGO' ? 'PAGADA' : 'ESPERA'
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
    }
    function clickDelete(folio) {
        if (rifaIdentificador === 'rifa_01') {
            deleteCompra1({
                folio: folio,
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
        if (rifaIdentificador === 'rifa_02') {
            deleteCompra2({
                folio: folio,
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
        if (rifaIdentificador === 'rifa_03') {
            deleteCompra3({
                folio: folio,
            }).then((res) => {
                console.log(res);
                actualizarHandler();
            });
        }
    }
    function renderTable() {
        return table?.map(i => {
            return <tr key={i.folio} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 text-right">
                    {i.folio}
                </td>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="pl-3">
                        <div className="text-base font-semibold">{i.nombre_persona}</div>
                        <div className="font-normal text-gray-500">{i.email_persona}</div>
                    </div>
                </th>
                <td className="px-6 py-4">
                    {i.telefono_persona}
                </td>
                <td className="px-6 py-4">
                    <div className="text-center">
                        <span onClick={() => clickBoletos(i)} className={"text-xs cursor-pointer font-medium mr-2 px-2.5 py-0.5 rounded border " + (i.status === 'ESPERA' ? 'bg-yellow-100 text-yellow-800 border-yellow-400' : 'bg-green-100 text-green-800 border-green-400')}>{i.boleto.length}</span>
                    </div>
                </td>
                <td className="px-6 py-4">
                    <div className="text-right">
                        ${(i.boleto.length * precioBoleto).toFixed(2)}
                    </div>
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => clickEstado(i.folio)} className="font-medium text-blue-600 dark:text-blue-500">{accion === 'NO PAGO' ? 'PAGO' : 'NO PAGO'}</button>
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => clickDelete(i.folio)} className="font-medium text-blue-600 dark:text-blue-500">BORRAR</button>
                </td>
            </tr>
        });

    }
    return <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                <label htmlFor="table-search" className="sr-only">Buscador</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onKeyUp={(d) => { handleKeyUp(d) }} type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busqueda" />
                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Folio
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Persona
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Telefono
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Boletos
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Efectivo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Acciones
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Borrar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
        <ModalComponent showModal={openModal} dissmisable={true} open={() => setOpenModal(!openModal)}>
            <div className="px-20 py-10 mx-20 bg-white rounded shadow-xl">
                <div className="grid grid-cols-4">
                    <h3 className="col-span-2 text-left pb-2">Folio: {selectedItem?.folio}</h3>
                    <h3 className="col-span-2 text-left pb-2">Nombre: {selectedItem?.nombre_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Correo: {selectedItem?.email_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Telefono: {selectedItem?.telefono_persona}</h3>
                    <h3 className="text-left pb-2">Boletos: {selectedItem?.boleto?.length}</h3>
                </div>
                <div>
                    {selectedItem?.boleto?.map(i => <span className={"text-xs font-medium mr-2 px-2.5 py-0.5 rounded border " + (selectedItem.status === 'ESPERA' ? 'bg-yellow-100 text-yellow-800 border-yellow-400' : 'bg-green-100 text-green-800 border-green-400')} key={i.numero}>{i.numero.toString().padStart(4,"0")}</span>)}
                </div>
            </div>
        </ModalComponent>
    </div>
}