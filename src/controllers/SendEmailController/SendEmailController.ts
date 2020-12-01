import { Request, Response } from 'express';
import Send from './Send';

export default class SendEmailController {

    async sendEmail ( req: Request, res: Response ) {
        try {
           const send = new Send();
           
           send.send(req, res);
        } catch (error) {
            res.status(500).send(error);
        }
    }
}