// Updates: For both the partnerRouter and promotionRouter, update the response to each defined endpoint using the new Partner and Promotion Models, exactly as you did with the campsiteRouter in the final two exercises this week.

// Test: Use Postman to test each of your updated endpoints and verify that you receive the expected responses. Don't forget your MongoDB server must be running.
// Test GET/POST/PUT/DELETE requests to: /partners and /partners/:partnerId
// For the POST request to /partners, make sure to send a JSON string in the body of the request. Use the sample partner document given in Task 1.
// For the PUT request to /partners/:partnerId, make sure to send the same document, but with at least one field changed so that you can verify an update has been made.
// Repeat the same steps for testing /promotions and /promotions/:promotionId endpoints, using the sample promotion document given in Task 2.

const express = require("express");
const Partner = require("../models/partner");
const authenticate = require ('../authenticate');
const partnerRouter = express.Router();

partnerRouter
  .route("/")
  .get((req, res, next) => {
    Partner.find()
      .then((partners) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(partners);
      })
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser,(req, res, next) => {
    Partner.create(req.body)
      .then((createdPartner) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(createdPartner);
      })
      .catch((err) => next(err));
  })
  .put(authenticate.verifyUser,(req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /partners");
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Partner.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

partnerRouter
  .route("/:partnerId")
  .get((req, res, next) => {
    Partner.findById(req.params.partnerId)
      .then((partner) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(partner);
      })
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser,(req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /partners/${req.params.partnerId}`
    );
  })
  .put(authenticate.verifyUser,(req, res, next) => {
    Partner.findByIdAndUpdate(
      req.params.partnerId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((partner) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(partner);
      })
      .catch((err) => next(err));
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Partner.findByIdAndDelete(req.params.partnerId)
      .then((deletedPartner) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(deletedPartner);
      })
      .catch((err) => next(err));
  });

module.exports = partnerRouter;
