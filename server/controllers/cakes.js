
require('../models/rating');
require('../models/cake');

const mongoose = require('mongoose'),
    Cakes = mongoose.model('Cake');

module.exports = {


    all: (req, res) => {
        Cakes.find()
            .then(allcakes => {
                res.json({results: allcakes});
            })
            .catch(err => res.json({errors: err.errors}));
    },

    show: (req, res) => {
        Cakes.findById(req.params.id)
            .then(found => {
                res.json({results: found});
            })
            .catch(err => res.json({errors: err.errors}));
    },

    create: (req, res) => {    
        Cakes.create(req.body)
            .then(newcake => {
                res.json({results: newcake});
            })
            .catch(err => res.json({errors: err.errors}));
    },

    update: (req, res) => {
        
        Cakes.findOneAndUpdate({_id: req.params.id}, {$push: {ratings: req.body}})
            .then(found => {
                res.json({results: found});
            })
            .catch(err => res.json({errors: err.errors}));
    },





    // destroy: (req, res) => {
    //     Cakes.findOneAndDelete({_id: req.params.id})
    //         .then(fin => {
    //             res.json({results: `${req.params.id} deleted.`});
    //         })
    //         .catch(err => res.json({errors: err.errors}));
    // },

}






