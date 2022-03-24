import { Request, Response } from 'express';
import DB from '../firebase/Firebase';
import RandomCarts from './carts/RandomCarts';
import ValidateCarts from './carts/ValidateCarts';

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
        return res.status(400);
    }

}

export const validateValueCart = async (req: Request, res: Response) =>{
    const { id, valueCart } = req.body;
    const validate = new ValidateCarts();
    console.log(validate.deciGanador(valueCart));
}   