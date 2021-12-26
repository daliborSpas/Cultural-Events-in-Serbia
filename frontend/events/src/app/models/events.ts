export class Event {
    id: string;
    title: string;
    publishingDate: Date = new Date();
    description: string;
    content: string;
    imageUrl: string;
    eventType: string;
    eventPlace: string;
    eventSpace: string;
    dateOfEvent: string;
    timeOfEvent: string;
    ageLimit: string;
    specialConditions: [];
    author: string;
    visibility: string;
    archived: Boolean;
}