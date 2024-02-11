const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "password is required"],
    },


    password: {
      type: String,
      required: [true, "password is required"],
    },

    confirmPassword: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },

    forgetPasswordToken: {
      type: String,
      default: "",
    },

    macAddress: Array,
    deviceName: Array,
  },
  { timestamps: true }
);

userSchema.pre("validate", function (next) {
  if (this.userName && this.userName.length > 0) {
    mongoose.models.User.findOne({ userName: this.userName }).then((user) => {
      if (user) {
        this.invalidate("This UserName already exists");
      }
      next();
    });
  } else {
    next();
  }
});

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
