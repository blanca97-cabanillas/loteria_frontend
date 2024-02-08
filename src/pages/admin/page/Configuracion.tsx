import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { allCaracters, email, exactNumber, onlyLetters, onlyNumbers } from 'src/services/validation/validation';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { getConfiguracion, updateRifa } from 'src/services/configuracion-rifa/configuracion-rifa';
import { NotificationManager } from 'react-notifications';

const schema = yup.object({
    nombre_rifa: allCaracters({ required: true, maxSize: 40 }),
    numero_boletos: onlyNumbers({ maxSize: 10, required: true }),
    precio_boleto: onlyNumbers({ maxSize: 5, required: true }),
    urlImage: allCaracters({ required: true, maxSize: 500 }),
});

export default function ConfiguracionRifa({ identificadorRifa }) {
    const { handleSubmit, control, getValues, setValue, register, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema), // Resolver especial para useForm recibe el esquema de yup
        mode: "all", // Cuando se hacen las validaciones
    });
    function submitEventHandler(d) {
        console.log(d);
            const body = {
                identificador: identificadorRifa,
                nombre_rifa: d.nombre_rifa,
                foto: d.urlImage,
                activa: d.activa,
                numero_boletos: d.numero_boletos,
                precio_boleto: d.precio_boleto
            }
            updateRifa(body).then((res) =>{
                console.log(res); 
                if(res.success === true){
                    NotificationManager.success('Se actualizo la rifa con exito', 'success');
                }
            });
    }
    useEffect(() => {
            getConfiguracion(identificadorRifa).then((rifa) => {
                setValue('nombre_rifa', rifa.nombre_rifa);
                setValue('numero_boletos', rifa.numero_boletos);
                setValue('precio_boleto', rifa.precio_boleto);
                setValue('urlImage', rifa.foto);
                setValue('activa', rifa.activa);
            });
    }, []);
    return <div>
        <form onSubmit={handleSubmit((d) => submitEventHandler(d))}>
            <div className="mb-6 mt-6 text-left px-20">
                <label className="block mb-2 text-sm font-medium text-gray-900">Nombre de la rifa</label>
                <input {...register('nombre_rifa')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Nombre de la rifa" />
                {errors.nombre_rifa?.message && <p className='italic text-xs text-red-500'>{errors.nombre_rifa?.message as any}</p>}
            </div>
            <div className="mb-6 text-left px-20">
                <label className="block mb-2 text-sm font-medium text-gray-900">Url de la imagen</label>
                <input {...register('urlImage')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Url" />
                {errors.urlImage?.message && <p className='italic text-xs text-red-500'>{errors.urlImage?.message as any}</p>}
            </div>
            <div className="mb-6 text-left w-1/2 px-20">
                <label className="block mb-2 text-sm font-medium text-gray-900">Numero de boletos</label>
                <input {...register('numero_boletos')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Numero de boletos" />
                {errors.numero_boletos?.message && <p className='italic text-xs text-red-500'>{errors.numero_boletos?.message as any}</p>}
            </div>
            <div className="mb-6 text-left w-1/2 px-20">
                <label className="block mb-2 text-sm font-medium text-gray-900">Precio del boleto</label>
                <input {...register('precio_boleto')} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700" placeholder="Precio del boleto" />
                {errors.precio_boleto?.message && <p className='italic text-xs text-red-500'>{errors.precio_boleto?.message as any}</p>}
            </div>
            <div className="mb-6 text-left px-20">
                <input {...register('activa')} id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Activa</label>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
}