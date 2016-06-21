
function showHomePage(req, res) {
    res.send("epl-gedapi  API");
}

module.exports = function(app) {
    app.get('/', showHomePage);
    app.use('/api/ged', require('./api/ged')());
}