import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const Schema = mongoose.Schema;

let Event = new Schema(
    {
        id: {
            type: String
        },
        title: {
            type: String
        },
        publishingDate: {
            type: Date
        },
        description: {
            type: String
        },
        content: {
            type: String
        },
        imageUrl: {
            type: String
        },
        eventType: {
            type: String
        },
        eventPlace: {
            type: String
        },
        eventSpace: {
            type: String
        },
        dateOfEvent: {
            type: String
        },
        timeOfEvent: {
            type: String
        },
        ageLimit: {
            type: String
        },
        specialConditions: {
            type: Array
        },
        author: {
            type: String
        },
        visibility: {
            type: String, default: "javno"
        },
        archived: {
            type: Boolean, default: false
        }
    }
);

autoIncrement.initialize(mongoose.connection);
Event.plugin(autoIncrement.plugin, {
  model: "events", // collection or table name in which you want to apply auto increment
  field: "id", // field of model which you want to auto increment
  startAt: 1, // start your auto increment value from 1
  incrementBy: 1, // incremented by 1
});

export default mongoose.model('Event', Event, 'events');
