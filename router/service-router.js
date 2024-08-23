const express = require("express");
const router = express.Router();
const services = require("../controllers/service-controller");
const { route } = require("./auth-router");

router.route("/service").get(services);

module.exports= router;