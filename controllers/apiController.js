const execSync = require('child_process').execSync;


module.exports = function (app) {
    app.get('/api/', function (req, res) {
        res.end("Welcome to my api!");
    });

    app.get('/api/term/:command', function (req, res) {
        let result = execSync(req.params.command, { encoding: 'utf8' });
        res.end(result)
    });

    app.post('/api/term', function (req, res) {
        let command = req.body.command;
        let result = execSync(command, { encoding: 'utf8' });
        res.end(result)
    });
    app.post('/api/js', function(req, res){
        if(req.body.eval){
            let command = req.body.command;
            res.end(eval(command) + "");
            return;
        }
        

    })
}
