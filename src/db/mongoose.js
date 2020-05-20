const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },

//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Use a valid email");
//       }
//     }
//   },

//   password: {
//     type: String,
//     required: true,
//     trim: true,
//     minlength: 6,
//     validate(value) {
//       if (value.toLowerCase().includes("password")) {
//         throw new Error("Password must not contain 'password");
//       }
//     }
//   },

//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be a positive number");
//       }
//     }
//   }
// });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true
  },

  completed: {
    type: Boolean,
    default: false
  }
});

// const me = new User({
//   name: "   Lucas     ",
//   email: "rfl@gmail.com     ",
//   password: "221382"
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

const task = new Task({
  description: "clean the house"
});

task
  .save()
  .then(() => {
    console.log(task);
  })
  .catch((error) => {
    console.log("error", error);
  });
