var express = require("express");
var Inquire = require("../controller/Inquires");
const path = require("path");
const multer = require("multer");
const router = express.Router();
// var mongoose = require("mongoose");
/**
 * @swagger
 * tags:
 *   name: inquireroute
 *   description: inquireroute manageing api
 */

/**
 * @swagger
 * /inquire:
 *   get:
 *     summary: Returns all Inquire contents
 *     tags: [Inquire]
 *     responses:
 *        '200':
 *          description: A successful Response
 */

router.get("/", Inquire.getInquire);
router.post("/",Inquire.PostInquire);
module.exports = router;