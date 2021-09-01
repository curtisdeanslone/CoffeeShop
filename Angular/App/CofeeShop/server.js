const express = require("express");
const http = require("https");
const fs = require("fs");
const history = require("connect-history-api-fallback");
const jsonServer = require("json-server");
const bodyParser = require('body-parser');
const auth = require("./authMiddleware");
const router = jsonServer.router("server-data.json");
const enableHttps = false;
const ssloptions = {};

if (enableHttps) {
    ssloptions.cert = fs.readFileSync("./ssl/coffeeShop.crt");
    ssloptions.key = fs.readFileSync("./ssl/coffeeShop.pem");
}

const app = express();
app.use(bodyParser.json());
app.use(auth);
app.use("/api",router);
app.use(history());
app.use("/",express.static("./dist/CoffeeShop"));
app.listen(80, () => console.log("HTTP Server running on port 80"));
    if (enableHttps){
        https.createServer(ssloptions, app).listen(443, () =>
            console.log("HTTP Server running on port 443"));
    } else {
        console.log("HTTPS disabled");
    }

