var HomeController = require('./controllers/HomeController');

module.exports = function(app){
     
    // Main Routes
     
    app.get('/',HomeController.Index);
    app.get('/mock',HomeController.Mock);
 
};