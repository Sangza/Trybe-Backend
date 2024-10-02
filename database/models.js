import { Schema } from "mongoose";

const UserSchema = new Schema({

});

const EventSchema = new Schema({

});

export const UserModel = Model("User", UserSchema);

export const EventModel = Model("Event", EventSchema);