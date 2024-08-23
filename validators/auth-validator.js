const { z } = require("zod");

const loginSchema = z.object({
    email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({message: "Invalid email address"})
    .min(3, { message: "Email must be atleast of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
    password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be atleast of 7 characters" })
    .max(1024, { message: "password cannot be greater than 1024 characters" }),
});

//Creating an object schema
const signupSchema = loginSchema.extend({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),

        phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must be atleast of 10 characters" })
        .max(20, { message: "Name must not be more than 20 characters" }),
});



module.exports = {signupSchema, loginSchema};