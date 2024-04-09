import { checkingCredentials } from ".";


export const checkingAuthentication = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCredentials(email, password));
    }
};


export const googleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

