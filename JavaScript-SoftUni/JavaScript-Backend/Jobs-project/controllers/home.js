const preload = require("../middleware/preload");
const userSession = require("../middleware/userSession");
const { getAllJobs } = require("../services/job");

const router = require("express").Router();

router.get("/", userSession(), async (req, res) => {
  const jobs = await getAllJobs();

  res.render("home", { title: "Home page", jobs });
});

router.get("/allads", userSession(), async (req, res) => {
  const jobs = await getAllJobs();
  res.render("allads", { title: "Available Jobs", jobs });
});

router.get("/details/:id", preload(true), userSession(), async (req, res) => {
  const job = res.locals.job;

  job.applicantsCount = job.applicants.length;

  if (req.session.user) {
    job.hasUser = true;
    job.isAuthor = req.session.user._id == job.author._id;
  }

  if (req.session.user) {
    if (job.applicants.some((a) => a._id == req.session.user._id)) {
      job.hasApplied = true;
    }
  }

  res.render("details", { title: "Job Details" });
});

module.exports = router;
