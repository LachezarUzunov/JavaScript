// TODO replace with actual service

// DEFAULT preload middleware
// const collectionService = {};

// function preload() {
//   return async function (req, res, next) {
//     const id = req.params.id;
//     const data = await collectionService.getById(id);
//     res.locals.data = data;

//     next();
//   };
// }

// module.exports = preload;

const tripService = require("../services/trip");

function preload(populate) {
  return async function (req, res, next) {
    const id = req.params.id;

    if (populate) {
      res.locals.trip = await tripService.getTripAndUsers(id);
    } else {
      res.locals.trip = await tripService.getTripById(id);
    }

    next();
  };
}

module.exports = preload;
