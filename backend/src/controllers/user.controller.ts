import express from 'express';
import User from '../models/users';

export class UserController {
    login = (req: express.Request, res: express.Response) => {

        let username = req.body.username;
        let password = req.body.password;

        User.findOne({"username": username, "password": password}, (err, user) => {
            if (err) console.log(err);
            else res.json(user);
        });
    }

    register = (req: express.Request, res: express.Response) => {
        User.findOne({"username": req.body.username}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                if (user == null) {
                    let newUser = new User(req.body);
                    newUser.save().then((newUser) => {
                        res.json({'message': 'ok'});
                    }).catch((err) => {
                        res.json({'message': 'not ok'});
                    });
                } else {
                    res.json({'message': 'busy'});
                }
            }
        });
    }

    setnewpassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let newpassword = req.body.newpassword;
        
        User.findOne({"username": username}, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                if (user != null) {
                    User.collection.updateOne({"username": username}, {$set: {"password": newpassword}});
                    res.json({'message': 'ok'});
                } else {
                    res.json({'message': 'not ok'});
                }
            }
        });
        
    }

    getUserData = (req: express.Request, res: express.Response) => {

        let username = req.body.username;

        User.findOne({"username": username}, (err, userData) => {
            if (err) console.log(err);
            else res.json(userData);
        });
    }

    getAllUserData = (req: express.Request, res: express.Response) => {

        User.find({}, (err, userData) => {
            if (err) console.log(err);
            else res.json(userData);
        });
    }

}