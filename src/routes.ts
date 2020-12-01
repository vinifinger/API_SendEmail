import express from 'express';
import SendEmail from './controllers/SendEmail';
import multer from 'multer';

const upload = multer(); 
const routes = express.Router();
const sendEmail = new SendEmail();

routes.post('/send', upload.single('html'), sendEmail.sendEmail);

export default routes;