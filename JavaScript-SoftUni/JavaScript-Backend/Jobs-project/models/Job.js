const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const jobSchmea = new Schema({
  headline: {
    type: String,
    required: true,
    minlength: [4, "Headline should be at least 4 characters long"],
  },
  location: {
    type: String,
    required: true,
    minlength: [8, "Location should be at least 8 characters long"],
  },
  companyName: {
    type: String,
    required: true,
    minlength: [3, "Company Name should be at least 3 characters long"],
  },
  companyDescription: {
    type: String,
    required: true,
    maxlength: [40, "Company Description should be 40 characeters at most"],
  },
  author: { type: ObjectId, ref: "User", required: true },
  applicants: { type: [ObjectId], ref: "User", default: [] },
});

const Job = model("Job", jobSchmea);

module.exports = Job;
