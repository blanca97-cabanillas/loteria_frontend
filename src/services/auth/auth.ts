import { postRequest } from '../utils/generic';
import { BASE_URL } from '../utils/config';
const CONTROLLER_PATH = "auth/";

const loginUser = (user: any) => {
    const apiURL = `${BASE_URL}${CONTROLLER_PATH}login-usuario`;
    const body = user;
    return postRequest(apiURL, body).
        then((response: any) => response);
}
const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("usuario");
    return '';
}
export {
    loginUser,
    logout,
}