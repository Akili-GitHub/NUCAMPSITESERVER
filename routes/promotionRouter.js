// Updates: For both the partnerRouter and promotionRouter, update the response to each defined endpoint using the new Partner and Promotion Models, exactly as you did with the campsiteRouter in the final two exercises this week.

// Test: Use Postman to test each of your updated endpoints and verify that you receive the expected responses. Don't forget your MongoDB server must be running.
// Test GET/POST/PUT/DELETE requests to: /partners and /partners/:partnerId
// For the POST request to /partners, make sure to send a JSON string in the body of the request. Use the sample partner document given in Task 1.
// For the PUT request to /partners/:partnerId, make sure to send the same document, but with at least one field changed so that you can verify an update has been made.
// Repeat the same steps for testing /promotions and /promotions/:promotionId endpoints, using the sample promotion document given in Task 2.

const express = require("express");
const promotionRouter = express.Router();
const findByIdAndUpdate = require ('../authenticate');
const Promotion = require("../models/promotion");

promotionRouter
  .route("/")
  .get((req, res, next) => {
    Promotion.find()
      .then((promotions) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(promotions);
      })
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser,(req, res, next) => {
    Promotion.create(req.body)
      .then((createdPromotion) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(createdPromotion);
      })
      .catch((err) => next(err));
  })
  .put(authenticate.verifyUser,(req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Promotion.deleteMany()
      .then((response) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(response);
      })
      .catch((err) => next(err));
  });

promotionRouter
  .route("/:promotionId")
  .get((req, res, next) => {
    Promotion.findById(req.params.promotionId)
      .then((promotion) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(promotion);
      })
      .catch((err) => next(err));
  })
  .post(authenticate.verifyUser,(req, res) => {
    res.statusCode = 403;
    res.end(
      `POST operation not supported on /promotion/${req.params.promotionId}`
    );
  })
  .put(authenticate.verifyUser,(req, res, next) => {
    Promotion.findByIdAndUpdate(
      req.params.promotionId,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((promotion) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(promotion);
      })
      .catch((err) => next(err));
  })
  .delete(authenticate.verifyUser,(req, res, next) => {
    Promotion.findByIdAndDelete(req.params.promotionId)
      .then((deletedPromotion) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(deletedPromotion);
      })
      .catch((err) => next(err));
  });

module.exports = promotionRouter;
