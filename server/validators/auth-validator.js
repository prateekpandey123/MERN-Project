const { z } = require("zod");

const loginSchima = z.object({
  email: z
    .string({ message: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 char" })
    .max(255, { message: "email must not be more then 255 character" }),

  password: z
    .string({ message: "Password is required" })
    .trim()
    .min(7, { message: "Password must be at least of 7 char" })
    .max(1024, { message: "Password can't be grater then 1024 character" }),
});

// create an object schema
const signupSchema = loginSchima.extend({
  username: z
    .string({ message: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 char" })
    .max(255, { message: "Name must not be more then 255 character" }),

  phone: z
    .string({ message: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 char" })
    .max(20, { message: "Phone must not be more then 20 character" }),
});

module.exports = { signupSchema, loginSchima };
