const cakes = require('../controllers/cakes');
const ratings = require('../controllers/ratings');

module.exports = (app) => {

    app.get('/api/cakes', (req, res)                    => cakes.all(req, res));
    app.get('/api/cake/:id', (req, res)                 => cakes.show(req, res));
    app.post('/api/cake/create', (req, res)             => cakes.create(req, res));
    app.put('/api/cake/update/:id', (req, res)         => cakes.update(req, res));
    // app.delete('/api/cake/destroy/:id', (req, res)      => cakes.destroy(req, res));


    // app.get('/api/ratings', (req, res)                    => ratings.allfor(req, res));
    app.post('/api/rating/create/:id', (req, res)             => ratings.create(req, res));
    // app.delete('/api/task/destroy/:id', (req, res)      => ratings.destroy(req, res));

    // app.get('/api/ratingrating', (req, res)                    => ratings.allfor(req, res));

}
