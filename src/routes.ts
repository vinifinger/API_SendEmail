import express from 'express';
import SendEmailController from './controllers/SendEmailController/SendEmailController';
import multer from 'multer';

const upload = multer(); 
const routes = express.Router();
const sendEmail = new SendEmailController();

routes.post('/send', upload.single('html'), sendEmail.sendEmail);

export default routes;