import { getAllRequest, postRequest, putRequest } from '../utils/generic';
import { BASE_URL } from '../utils/config';
const CONTROLLER_PATH = "boletos/";

// Traer boletos de la rifa 1
const getBoletosRifa1 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-boletos-rifa-1?limitTop=${data.limitTop}&limitBot=${data.limitBot}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const getBoletosRifa2 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-boletos-rifa-2?limitTop=${data.limitTop}&limitBot=${data.limitBot}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const getBoletosRifa3 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-boletos-rifa-3?limitTop=${data.limitTop}&limitBot=${data.limitBot}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}

export {
    getBoletosRifa1,
    getBoletosRifa2,
    getBoletosRifa3
}