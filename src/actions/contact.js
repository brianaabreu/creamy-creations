import * as api from '../api';

export const createMessage = (message) => async (dispatch) => {
    try {
        const { data } = await api.createMessage(message);
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error);
    }
}