"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailRegex = void 0;
class EmailRegex {
    constructor() {
        this.EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    validate(regex) {
        return this.EMAIL_REGEX.test(regex);
    }
}
exports.EmailRegex = EmailRegex;
