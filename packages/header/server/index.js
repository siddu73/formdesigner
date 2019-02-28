require('babel-polyfill');
const express = require("express");
const cors = require("cors");
const cmd = require("node-command-line");
const Promise = require("bluebird");
const bodyParser = require("body-parser");
const app = express();

app.options('*', cors());

app.use(express.json());

app.use(bodyParser.json());

function runSingleCommandWithWait(inputContent) {
    Promise.coroutine(function* () {
        yield cmd.run("npm install -g fragement-cli");
        console.log("Executed your command :)");
        //TODO
        cmd.run(`cd .. && fragement-cli -a ${inputContent}`);

    })();
}

var corsOptions = {
    origin: function (origin, callback) {
        callback(null, true);
    }
}

app.post("/route", cors(corsOptions), function (req, res) {
    var inputContent = req.body.textField;
    console.log(inputContent)
    res.status(200).send({
        status: 200,
        Message: "success",
        data: inputContent
    });
    runSingleCommandWithWait(inputContent);
});
app.listen(4000);