const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const EMAIL_PATTERN = /^([a-zA-Z]+)@([a-zA-Z]+)\.([a-zA-Z]+)$/;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return EMAIL_PATTERN.test(value);
      },
      msg: "Please enter a valid email address!",
    },
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: [5, "Password should be at least 5 characters long"],
  },
  description: {
    type: String,
    required: true,
    maxlength: [40, "Skills description should be 40 charters at most!"],
  },
  myAds: { type: [ObjectId], default: [] },
});

userSchema.index(
  { email: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
