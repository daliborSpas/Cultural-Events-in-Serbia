import express from 'express';
import { UserController } from '../controllers/user.controller';

const userRouter = express.Router();

userRouter.route('/login').post((req, res) => {
    new UserController().login(req, res);
});

userRouter.route('/register').post((req, res) => {
    new UserController().register(req, res);
});

userRouter.route('/setnewpassword/:username').post((req, res) => {
    new UserController().setnewpassword(req, res);
});

userRouter.route('/getUserData').post((req, res) => {
    new UserController().getUserData(req, res);
});

userRouter.route('/getAllUserData').get((req, res) => {
    new UserController().getAllUserData(req, res);
});

export default userRouter;