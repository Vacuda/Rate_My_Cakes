const RatingSchema = require('../models/rating');
const mongoose = require('mongoose');


const CakeSchema = new mongoose.Schema({
    baker: { 
        type: String,
        required: [true, "You need to add a baker"]
    }, 
    url: { 
        type: String,
        required: [true, "You need to add a url"]
    },
    ratings: [RatingSchema]
    
}, {timestamps: true});

mongoose.model("Cake", CakeSchema);