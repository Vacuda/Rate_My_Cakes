const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    stars: { 
        type: Number,
        required: [true, "You need to rate the cake"]
    }, 
    comment: { 
        type: String,
        default: ""
    }
    
}, {timestamps: true});

mongoose.model("Rating", RatingSchema);