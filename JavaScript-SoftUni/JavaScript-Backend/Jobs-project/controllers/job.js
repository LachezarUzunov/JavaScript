const { isUser, isOwner } = require("../middleware/guards");
const preload = require("../middleware/preload");
const userSession = require("../middleware/userSession");
const {
  createJob,
  updateJobOffer,
  deleteById,
  applyForJob,
  getAll,
} = require("../services/job");
const mapErrors = require("../util/mappers");

const router = require("express").Router();

router.get("/create", userSession(), isUser(), (req, res) => {
  res.render("create", { title: "Create Job Ad" });
});

router.post("/create", userSession(), isUser(), async (req, res) => {
  const job = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: req.session.user._id,
  };

  try {
    await createJob(job);
    res.redirect("/allads");
  } catch (err) {
    console.error(err);
    const errors = mapErrors(err);
    res.render("create", { title: "Create Job Ad", data: job, errors });
  }
});

router.get("/edit/:id", userSession(), preload(), isOwner(), (req, res) => {
  res.render("edit", { title: "Edit Job Offer" });
});

router.post(
  "/edit/:id",
  userSession(),
  preload(),
  isOwner(),
  async (req, res) => {
    const id = req.params.id;

    const job = {
      headline: req.body.headline,
      location: req.body.location,
      companyName: req.body.companyName,
      companyDescription: req.body.companyDescription,
    };

    try {
      await updateJobOffer(id, job);
      res.redirect("/details/" + id);
    } catch (err) {
      console.error(err);
      const errors = mapErrors(err);
      job._id = id;
      res.render("edit", { title: "Edit Job Offer", job, errors });
    }
  }
);

router.get(
  "/delete/:id",
  userSession(),
  preload(),
  isOwner(),
  async (req, res) => {
    await deleteById(req.params.id);
    res.redirect("/allads");
  }
);

router.get("/apply/:id", userSession(), isUser(), async (req, res) => {
  const id = req.params.id;

  try {
    await applyForJob(id, req.session.user._id);
  } catch (err) {
    console.error(err);
  } finally {
    res.redirect("/details/" + id);
  }
});

module.exports = router;
