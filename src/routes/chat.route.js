const { Router } = require("express");
const { homepage } = require("../controller/chat.controller");

const route = Router();

route.get("/", homepage);

module.exports = route;
