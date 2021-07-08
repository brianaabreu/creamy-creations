import axios from "axios";

const urlContact = 'http://localhost:5000/contact';
const urlOrder = 'http://localhost:5000/order';

export const createMessage = (newMessage) => axios.post(urlContact, newMessage);
export const Order = (itemChoice) => axios.post(urlOrder, itemChoice)
