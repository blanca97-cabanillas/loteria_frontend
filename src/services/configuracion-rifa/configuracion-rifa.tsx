import { getAllRequest, getAllRequestWithParams, postRequest } from '../utils/generic';
import { BASE_URL } from '../utils/config';
const CONTROLLER_PATH = "configuracion/";

const getConfiguracion = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-config?identificador=${data}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const getAllActivas = () => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-all`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const updateRifa = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}update`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}

export {
    getConfiguracion,
    getAllActivas,
    updateRifa
}