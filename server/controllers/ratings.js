
require('../models/rating');
require('../models/cake');

const mongoose = require('mongoose'),
    Ratings = mongoose.model('Rating');

module.exports = {


    // allfor: (req, res) => {
    //     Ratings.find()
    //         .then(allratings => {
    //             res.json({results: allratings});
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },

    create: (req, res) => {   
        Ratings.create(req.body)
            .then(newtask => {
                res.json({results: newtask});
            })
            // .catch(console.log("errorororor"));
            .catch(err => res.json({errors: err.errors}));
    },

    // show: (req, res) => {
    //     Ratings.findById(req.params.id)
    //         .then(found => {
    //             res.json({results: found});
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },

    // update: (req, res) => {
    //     Ratings.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, useFindAndModifty:false})
    //         .then(updated => {
    //             res.json({results: updated});
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },

    // destroy: (req, res) => {
        
    //     Ratings.findOneAndDelete({_id: req.params.id})
    //         .then(fin => {
    //             res.json({results: `${req.params.id} deleted.`});
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },



}






