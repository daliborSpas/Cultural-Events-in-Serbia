import express from 'express';
import Event from '../models/events';

export class EventController {
     
    getEventsData = (req: express.Request, res: express.Response) => {

        let author = req.body.author;

        Event.find({"author": author}, (err, eventData) => {
            if (err) {
                console.log(err);
            } else {
                if (eventData != null) {
                    res.json(eventData); 
                }
            }
        });
    }
    
    addEvent = (req: express.Request, res: express.Response) => {
        
        let event = new Event(req.body);

        event.save().then((event) => {
            res.json({"message": "Uspešno ste se dodali događaj!"});
        }).catch((err) => {
            res.json({"message": "Greška"});
        });
    }

    getAllEventsData = (req: express.Request, res: express.Response) => {

        Event.find({"visibility": "javno"}, (err, allEvents) => {
            if(err) console.log(err);
            else res.json(allEvents); 

        });
    }

    setVisibilityOff = (req: express.Request, res: express.Response) => {
        
        let id = req.body.id;

        Event.findOne({"id": id}, (err, event) => {
            if (err) {
                console.log(err);
            } else {
                if (event != null) {
                    Event.collection.updateOne({"id": id}, {$set: {"visibility": "privatno"}});
                    res.json({'message': 'ok'});
                } else {
                    res.json({'message': 'not ok'});
                }
            }
        });
    }

}