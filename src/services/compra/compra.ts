import { getAllRequest, getAllRequestWithParams, postRequest } from '../utils/generic';
import { BASE_URL } from '../utils/config';
const CONTROLLER_PATH = "compra/";

const compraRifa1 = (compra: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}add-compra-rifa-1`;
    const body = compra;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const compraRifa2 = (compra: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}add-compra-rifa-2`;
    const body = compra;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const compraRifa3 = (compra: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}add-compra-rifa-3`;
    const body = compra;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const getPaginatedRifa1 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-paginated-rifa-1?take=${data.take}&skip=${data.skip}&keyword=${data.keyword}&status=${data.status}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const getPaginatedRifa2 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-paginated-rifa-2?take=${data.take}&skip=${data.skip}&keyword=${data.keyword}&status=${data.status}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const getPaginatedRifa3 = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-paginated-rifa-3?take=${data.take}&skip=${data.skip}&keyword=${data.keyword}&status=${data.status}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
const updateCompra1 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}update-compra-rifa-1`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const updateCompra2 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}update-compra-rifa-2`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const updateCompra3 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}update-compra-rifa-3`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const deleteCompra1 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}delete-compra-rifa-1`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const deleteCompra2 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}delete-compra-rifa-2`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const deleteCompra3 = (body: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}delete-compra-rifa-3`;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const getCompra = (data: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}get-compra-rifa?folio=${data.folio}&identificador=${data.identificador}`;
    return getAllRequest(apiURL).
        then((response: any) => response);
}
export {
    compraRifa1,
    compraRifa2,
    compraRifa3,
    getPaginatedRifa1,
    getPaginatedRifa2,
    getPaginatedRifa3,
    updateCompra1,
    updateCompra2,
    updateCompra3,
    deleteCompra1,
    deleteCompra2,
    deleteCompra3,
    getCompra
}