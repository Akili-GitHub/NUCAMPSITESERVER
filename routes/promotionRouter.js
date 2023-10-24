const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/")
  //* ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //* GET
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  //* POST
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
    );
  })
  //* PUT
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotions");
  })
  //* DELETE
  .delete((req, res) => {
    res.end("Deleting all promotions");
  });

//*  Add support for /promotions/:promotionId
promotionRouter
  .route("/:promotionId")
  //* ALL
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  //* GET
  .get((req, res) => {
    res.end("Will add promotion to you");
  })
  //* POST
  .post((req, res) => {
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
    res.end("Deleting all promotions");
  });

module.exports = promotionRouter;

// // *====== Task 1: Complete the updates to promotionRouter ======
// const express = require("express");
// const promotionRouter = express.Router();

// promotionRouter
//   .route("/")
// //  //* ALL
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     next();
//   })
//* GET
//   .get((req, res) => {
//     res.end("Will send all the promotions to you");
//   })
//*POST
//   .post((req, res) => {
//     res.end(
//       `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
//     );
//   })
//*PUT
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end("PUT operation not supported on /promotions");
//   })
//   //*DELETE
//   .delete((req, res) => {
//     res.end("Deleting all promotions");
//   });
//*  Add support for /promotions/:promotionId

// promotionRouter
//   .route("/:promotionId")
//*ALL
//   .all((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     next();
//   })
//*GET
//   .get((req, res) => {
//     res.end("Will add the campsite to you");
//   })
//*POST
//   .post((req, res) => {
//     res.end(
//       `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
//     );
//   })
//*PUT
//   .put((req, res) => {
//     res.statusCode = 403;
//     res.end("Put operation not supported on /promotions");
//   })  //*DELETE
//   .delete((req, res) => {
//     res.end("Deleting all campsite");
//   });
// module.exports = promotionRouter;
