const Trip = require("../models/Trip");

async function getAllTrips() {
  return Trip.find({}).lean();
}

async function getTripsByUser(userId) {
  return Trip.find({ owner: userId }).lean();
}

async function getTripById(id) {
  return Trip.findById(id).lean();
}

async function getTripAndUsers(id) {
  return Trip.findById(id).populate("owner").populate("buddies").lean();
}

async function createTrip(trip) {
  const result = new Trip(trip);
  await result.save();
}

async function updateTrip(id, trip) {
  const existing = await Trip.findById(id);

  existing.stat = trip.start;
  existing.end = trip.end;
  existing.date = trip.date;
  existing.time = trip.time;
  existing.carImg = trip.carImg;
  existing.carBrand = trip.carBrand;
  existing.seasts = trip.seats;
  existing.price = trip.price;
  existing.description = trip.description;

  await existing.save();
}

async function deleteById(id) {
  await Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId) {
  const trip = await Trip.findById(tripId);

  if (trip.buddies.includes(userId)) {
    throw new Error("Usre is already part of the trip");
  }

  trip.buddies.push(userId);
  await trip.save();
}

module.exports = {
  createTrip,
  getTripById,
  getAllTrips,
  getTripAndUsers,
  updateTrip,
  deleteById,
  joinTrip,
  getTripsByUser,
};
