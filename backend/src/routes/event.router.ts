import express from 'express';
import { EventController } from '../controllers/event.controllers';


const eventRouter = express.Router();

eventRouter.route('/getEventsData').post((req, res) => {
    new EventController().getEventsData(req, res);
});

eventRouter.route('/addEvent').post((req, res) => {
    new EventController().addEvent(req, res);
});

eventRouter.route('/getAllEventsData').get((req, res) => {
    new EventController().getAllEventsData(req, res);
});

eventRouter.route('/setVisibilityOff').post((req, res) => {
    new EventController().setVisibilityOff(req, res);
});



export default eventRouter;