const express = require("express");
const cors = require("cors");
const cmd = require("node-command-line");
const Promise = require("bluebird");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

function runSingleCommandWithWait(inputContent) {
    Promise.coroutine(function* () {
        yield cmd.run("npm install -g fragement-cli");
        console.log("Executed your command :)");
        cmd.run(`fragement-cli -a ${inputContent}`);
    })();
}

app.post("/route", function (req, res) {
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