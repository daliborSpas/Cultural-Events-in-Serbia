import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.routes';
import emailRouter from './routes/email.routes';
import eventRouter from './routes/event.router';

const app = express();
const router = express.Router();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); //za email
app.use(bodyParser.json());

app.listen(4000, err => {
    if (err) return console.log(err);
    return console.log('Listening...');
});

mongoose.connect('mongodb://localhost:27017/cultural_events')
    .then(() => console.log('MongoDB connection open'))
    .catch(() => console.log('MongoDB connection error'));

router.route('/').get(
    (req, res) => res.send("Cultural Events in Serbia")
);

router.use('/users', userRouter);
router.use('/resetpass', emailRouter);
router.use('/organization', eventRouter);

app.use('/', router);
