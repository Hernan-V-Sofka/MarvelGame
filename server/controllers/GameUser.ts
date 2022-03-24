import { Request, Response } from 'express';
import RandomCarts from './carts/RandomCarts';
import DB from '../firebase/Firebase';

export const getCarts = async (req: Request, res: Response) => {
    const carts = new RandomCarts();
    let number = carts.genericNumberRamdom();
    const querySnapshot = await (await DB.collection('Cartas').where("idCart" , "==", number[1]).get()).docs
    
    console.log(number);
    
    res.send(querySnapshot);
    
}