import express from 'express';
import { EmailController } from '../controllers/email.controller';

const emailRouter = express.Router();

emailRouter.route('/sendmail').post((req, res) => {
    new EmailController().sendmail(req, res);
});

export default emailRouter;