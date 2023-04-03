const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const userSchema = newSchema({
  userId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  username: {
    type: String,
    required: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thoughts",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users",
    },
  ],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const Users = model("Users", userSchema);

module.exports = Users;
