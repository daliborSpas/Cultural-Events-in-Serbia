import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema(
    {
        organization: {
            type: String
        },
        street: {
            type: String
        },
        number: {
            type: String
        },
        city: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        telephone: {
            type: String
        },
        areaactivity: {
            type: String
        },
        website: {
            type: String
        },
        email: {
            type: String
        },
        username: {
            type: String
        },
        password: {
            type: String
        },
        organizationInfoText: {
            type: String
        },
        status: {
            type: String
        },
        privilege: {
            type: String, default: "Organizacija"
        }
    }
);

export default mongoose.model('User', User, 'users');
