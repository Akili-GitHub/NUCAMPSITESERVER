const express = require("express");
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  //* ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //* GET
  .get((req, res) => {
    res.end("Will send all the partners to you");
  })
  //* POST
  .post((req, res) => {
    res.end(
      `Will add the partner: ${req.body.name} with description: ${req.body.description}`
    );
  })
  //* PUT
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  //* DELETE
  .delete((req, res) => {
    res.end("Deleting all partners");
  });

//*  Add support for /partners/:partnerId

partnerRouter
  .route("/:partnerId")
  //* ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //* GET
  .get((req, res) => {
    res.end(`Will add the partner  to you`);
  })
  //* POST
  .post((req, res) => {
    res.statusCode = 403;
    res.end(
      `Will add the promotion: ${req.body.name} with description: ${req.body.description}`
    );
  })
  //* PUT
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions/:promotionId");
  })
  //* DELETE
  .delete((req, res) => {
    res.end("Delete all partners");
  });

module.exports = partnerRouter;
