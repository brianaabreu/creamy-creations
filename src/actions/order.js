import * as api from '../api';

export const Order = (items) => async (dispatch) => {
    try {
        const { dataOrder } = await api.Order(items);
        dispatch({ type: 'CREATE', payload: dataOrder})
    } catch (error) {
        console.log(error);
    }
}