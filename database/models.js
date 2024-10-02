import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    address:String,
    following:[{
         address:String,
    }],
    followers:[{
        address:String,
    }],
    evenCreated:[mongoose.Schema.Types.ObjectId],
    eventJoined:[mongoose.Schema.Types.ObjectId],
    photos:[mongoose.Schema.Types.ObjectId],
    albumCreated:[mongoose.Schema.Types.ObjectId],
    albumJoined:[mongoose.Schema.Types.ObjectId],
});

const EventSchema = new mongoose.Schema({
   photo:String,
   title:String,
   description:String,
   locationType:{
    type:String,
    enum:['venue','online','to be announced']
   },
   location:String,
   eventType:{
    type:String,
    enum:['single','recurring event']
   },
   eventDate:{
    type:Date
   },
   startEventtime:Tim
});


const TicketSchema = new mongoose.Schema({
     ticketType:{
        type:String,
        required:true,
        enum:['free','paid','donation']
     },
     name:String,
     available:{
        type:Number,
        required:true,
     },
     price:{
        type:Number,
        required:true
     },
     ticketSalesEnds:Date,
     tickSaleOut:{
        type:String,
        enum:['before','after']
     },
     startTime:String,
     endTime:String,
     host:[
        {
           host:String
        }
     ],
     artist:[
        {
           artist:String
        }
     ]
});

export const UserModel = mongoose.Model("User", UserSchema);

export const EventModel = mongoose.Model("Event", EventSchema);

export const TicketModel = mongoose.Model("Ticket", TicketSchema);