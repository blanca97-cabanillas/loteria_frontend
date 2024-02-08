import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { allCaracters, email, exactNumber, onlyLetters } from 'src/services/validation/validation';
import { NotificationManager } from 'react-notifications';
import { compraRifa1, compraRifa2 } from 'src/services/compra/compra';
import { ModalComponent } from 'src/components/modal/modalComponent';
import { useState } from 'react';
const schema = yup.object({
    nombre: onlyLetters({ required: true, maxSize: 40 }),
    apellido: onlyLetters({ required: true, minSize: 2, maxSize: 40 }),
    email: email({ required: true, minSize: 5, maxSize: 40 }),
    telefono: exactNumber({ size: 10, required: true })
});

export default function FormularioCompra({ kart, kartHandler, costo }) {
    const { handleSubmit, control, getValues, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Resolver especial para useForm recibe el esquema de yup
        mode: "all", // Cuando se hacen las validaciones
    });
    const [openModal, setOpenModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState({} as any);
    function submitEventHandler(d) {
        if (kart.length != 0) {
            let boleto = kart.map(i => {
                return { numero: i }
            });
            const body = {
                nombre_persona: d.nombre + ' ' + d.apellido,
                telefono_persona: d.telefono,
                email_persona: d.email,
                boleto: boleto
            }
            console.log(body);
            compraRifa2(body).then((res) => {
                console.log(res);
                if(res.success === true){
                    kartHandler([]);
                    reset();
                    setSelectedItem(res.response);
                    setOpenModal(true);
                }
            });
        } else {
            NotificationManager.warning('Seleccione por lo menor un boleto', 'Warning');
        }

    }
    return <>
        <ModalComponent showModal={openModal} dissmisable={true} open={() => setOpenModal(!openModal)}>
            <div className="bg-white rounded shadow-xl mb-40 p-2 pb-10">
                <h1 className='text-red-400'>Guarde el folio o tome captura a esta pantalla</h1>
                <div className="grid grid-cols-2">
                    <h3 className="col-span-2 text-left pb-2">Folio: {selectedItem?.folio}</h3>
                    <h3 className="col-span-2 text-left pb-2">Nombre: {selectedItem?.nombre_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Correo: {selectedItem?.email_persona}</h3>
                    <h3 className="col-span-2 text-left pb-2">Telefono: {selectedItem?.telefono_persona}</h3>
                    <h3 className="text-left pb-2">Boletos: {selectedItem?.boleto?.length}</h3>
                    <h3 className="text-left pb-2">Total: ${(selectedItem?.boleto?.length*costo).toFixed(2)}</h3>
                </div>
                <div>
                    {selectedItem?.boleto?.map(i => <span className={"text-xs font-medium mr-2 px-2.5 py-0.5 rounded border " + (selectedItem.status === 'ESPERA' ? 'bg-yellow-100 text-yellow-800 border-yellow-400' : 'bg-green-100 text-green-800 border-green-400')} key={i.numero}>{i.numero}</span>)}
                </div>
                <div className='text-right pr-4'>
                    <button onClick={() => setOpenModal(false)} className='bg-primary text-secondary p-4 rounded-lg'>Cerrar</button>
                </div>
            </div>
        </ModalComponent>
        <form onSubmit={handleSubmit((d) => submitEventHandler(d))} className="">
            <h1 className="text-xl font-bold pb-4 text-gray-700">Formulario de compra</h1>
            <div className="flex flex-wrap mb-6">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                        Nombre(s)
                    </label>
                    <input {...register('nombre')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Nombre" />
                    {errors.nombre?.message && <p className='italic text-xs text-red-500'>{errors.nombre?.message as any}</p>}
                </div>
                <div className="w-full md:w-1/2">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Apellidos
                    </label>
                    <input {...register('apellido')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Apellido" />
                    {errors.apellido?.message && <p className='italic text-xs text-red-500'>{errors.apellido?.message as any}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Email
                    </label>
                    <input {...register('email')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Email" />
                    {errors.email?.message && <p className='italic text-xs text-red-500'>{errors.email?.message as any}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                        Telefono
                    </label>
                    <input {...register('telefono')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Telefono" />
                    {errors.telefono?.message && <p className='italic text-xs text-red-500'>{errors.telefono?.message as any}</p>}
                </div>
            </div>
            <div className="flex flex-wrap mb-6">
                <div className="w-full text-right">
                    <button type='submit' className="bg-primary hover:bg-hover-primary text-secondary font-bold py-2 px-4 rounded">
                        Comprar boletos
                    </button>
                </div>
            </div>
        </form>

    </>
}