const { z } = require("zod");

const loginSchema = z.object({
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

module.exports = loginSchema;
