import { EmailRegex } from "./email_regex";

let emailRegex = new EmailRegex();
let validEmail: string[] = ['a@gmail.com', 'ab@yahoo.com', 'abc@hotmail.com'];
let invalidEmail: string[] = ['@gmail.com', 'ab@gmail', '@#abc@gmail.com'];

for(let email of validEmail){
    let isValid: boolean = emailRegex.validate(email);
    console.log(`Email: ${email} | ${isValid}`);
}

for(let email of invalidEmail){
    let isValid: boolean = emailRegex.validate(email);
    console.log(`Email: ${email} | ${isValid}`)
}