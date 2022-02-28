const Job = require("../models/Job");

async function createJob(job) {
  const result = new Job(job);
  await result.save();
}

async function getAllJobs() {
  return Job.find({}).lean();
}

async function getAll(query) {
  const jobs = await Job.find({
    email: { $regex: query.search, $options: "i" },
  });
  return jobs;
}

async function getJobById(id) {
  return Job.findById(id).lean();
}

async function getJobAndUsers(id) {
  return Job.findById(id).populate("author").populate("applicants").lean();
}

async function updateJobOffer(id, job) {
  const current = await Job.findById(id);

  current.headline = job.headline;
  current.location = job.location;
  current.companyName = job.companyName;
  current.companyDescription = job.companyDescription;

  await current.save();
}

async function deleteById(id) {
  await Job.findByIdAndDelete(id);
}

async function applyForJob(jobId, userId) {
  const job = await Job.findById(jobId);

  if (job.applicants.includes(userId)) {
    throw new Error("User has applied for this job already");
  }

  job.applicants.push(userId);
  await job.save();
}

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  getJobAndUsers,
  updateJobOffer,
  deleteById,
  applyForJob,
  getAll,
};

// async function getTripsByUser(userId) {
//     return Trip.find({ owner: userId }).lean();
//   }
