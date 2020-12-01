import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default class SendEmail {

    async sendEmail ( req: Request, res: Response ) {

        const params = {
            host: req.body.host,
            port: req.body.port,
            user: req.body.user,
            pass: req.body.pass,
            to: req.body.to,
            replyTo: req.body.replyTo,
            subject: req.body.subject,
            text: req.body.text
        }

        var html = '';

        for (var i = 0; i > Object.keys(params).length; i++) {
            const item = Object.keys(params)[i];
            console.log(1);
            if ( item === null || item === '')
                return
        }

        if (req.file) 
            html = req.file.buffer.toString();

        const transporter = nodemailer.createTransport({
            host: params.host,
            port: params.port,
            auth: { user: params.user, pass: params.pass }
        });

        transporter.sendMail({
            from: params.user,
            to: params.to,
            replyTo: params.replyTo,
            subject: params.subject,
            text: params.text,
            html: html
        }).then( (response) => {
            res.status(200).json({ response });
        }).catch( (err) => {
            res.status(500).json({ err });
        });
    }
}