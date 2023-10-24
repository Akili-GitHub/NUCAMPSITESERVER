// *====== Task 1: Complete the updates to campsiteRouter ======
const express = require("express");
const campsiteRouter = express.Router();

campsiteRouter
  .route("/")
  //* ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //* GET
  .get((req, res) => {
    res.end("Will send all the campsites to you");
  })
  //*POST
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  //*PUT
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /campsites");
  })
  //*DELETE
  .delete((req, res) => {
    res.end("Deleting all campsites");
  });

//*  Add support for /campsites/:campsiteId

campsiteRouter
  .route("/:campsiteId")
  //*ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //*GET
  .get((req, res) => {
    res.end("Will add the campsite to you");
  })
  //*POST
  .post((req, res) => {
    res.end(
      `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
    );
  })
  //*PUT
  .put((req, res) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /campsites");
  })
  //*DELETE
  .delete((req, res) => {
    res.end("Deleting all campsites");
  });
module.exports = campsiteRouter;
