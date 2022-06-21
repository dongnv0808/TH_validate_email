"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const email_regex_1 = require("./email_regex");
let emailRegex = new email_regex_1.EmailRegex();
let validEmail = ['a@gmail.com', 'ab@yahoo.com', 'abc@hotmail.com'];
let invalidEmail = ['@gmail.com', 'ab@gmail', '@#abc@gmail.com'];
for (let email of validEmail) {
    let isValid = emailRegex.validate(email);
    console.log(`Email: ${email} | ${isValid}`);
}
for (let email of invalidEmail) {
    let isValid = emailRegex.validate(email);
    console.log(`Email: ${email} | ${isValid}`);
}
