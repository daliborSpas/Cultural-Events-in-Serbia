import express from 'express';
import User from '../models/users';
import nodemailer from 'nodemailer';


export class EmailController {
    sendmail = (req: express.Request, res: express.Response) => {

        User.findOne({ "username": req.body.username, "email": req.body.email }, (err, user) => {
            if (err) {
                console.log(err);
            } else {
                if (user == null) {
                    res.json({ 'message': 'no in db' });
                } else {
                    res.json({ 'message': 'ok' });
                    let user = req.body;
                    sendMail(user, (err, info) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.send(info);
                        }
                    });

                    async function sendMail(user, callback) {
                        let transporter = nodemailer.createTransport({
                            service: "gmail",
                            host: "smtp.gmail.com",
                            port: 587,
                            secure: false,
                            auth: {
                                user: "culturalevents.team4@gmail.com",
                                pass: "team42021js"
                            },
                            tls: {
                                rejectUnauthorized: false
                            }
                        });

                        let mailOptions = {
                            from: '"Cultural Events" <culturalevents.team4@gmail.com>',
                            to: user.email,
                            subject: "Resetovanje lozinke",
                            html: `
                                <p>Zdravo ${user.username}! Dobrodošli na naš portal!</p>
                                <p>Vaše korisničko ime je: <b>${user.username}</b> unesite ga u predviđeno polje na linku ispod, kako bi uspešno mogli da resetujete lozinku.</p>
                                <p>Klikom na link ispod možete resetovati lozinku.</p> 
                                <a href="http://localhost:4200/setnewpassword/${user.username}" target="_blank">http://localhost:4200/setnewpassword/${user.username}</a>
                                <p>Ako i dalje imate problema sa prijavljivanjem na našem potalu, pišite nam na jedan od mejlova iz sekcije kontakti.</p>

                                <p style="margin-top: 100px;"><i>Tim 4, Kulturni događaji u Srbiji</i></p>
                                <p><i>Srdačan pozdrav!</i><p>
                            `
                        };

                        let info = await transporter.sendMail(mailOptions);
                        callback(info);
                    }
                }
            }
        });
    }
}

