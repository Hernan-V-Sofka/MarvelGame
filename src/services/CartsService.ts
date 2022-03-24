import axios from './axios'
import { Data } from '@/interfaces/dataInterface'
import { AxiosResponse } from 'axios';

export const getDeckCarts = async ():Promise<AxiosResponse<Data>> => await axios.get('/carts');

export const validateValueCart = async (infoCart) => await axios.post('/validate', infoCart)