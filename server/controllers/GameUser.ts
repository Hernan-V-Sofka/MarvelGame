import { Request, Response } from 'express';
import RandomCarts from './carts/RandomCarts';
import DB from '../firebase/Firebase';

export const getCarts = async (req: Request, res: Response) => {
    try {
        const CartInfo: Array<Object> = [];
        const carts = new RandomCarts();

        let number = carts.genericNumberRamdom();
        const querySnapshot = await DB.collection('Cartas').get()
        const item = querySnapshot.docs.map(doc => doc.data());

        for (let i = 0; i <= number.length; i++) {
            CartInfo.push(item[number[i]]);
        }

        res.send(CartInfo);
    } catch (error) {

    }

}