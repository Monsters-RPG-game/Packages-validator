'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Validation = require('validator.js');

// eslint-disable-next-line max-classes-per-file
class FullError extends Error {
    code = '000';
    status = 500;
}
/**
 * @openapi
 * components:
 *   schemas:
 *     MissingArgError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'MissingArgError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '003'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Missing param: .+$"
 */
class MissingArgError extends FullError {
    constructor(param) {
        super(`Missing param: ${param}`);
        this.name = 'MissingArgError';
        this.code = '001';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     IncorrectArgError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'IncorrectArgError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '004'
 *         message:
 *           type: string
 *           description: Error message describing the incorrect parameter.
 *           example: 'Data not provided'
 */
class IncorrectArgError extends FullError {
    constructor(err) {
        super(err);
        this.name = 'IncorrectArgError';
        this.code = '002';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     IncorrctArgTypeError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'IncorrectArgTypeError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '007'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element has incorrect length: .+$"
 */
class IncorrectArgTypeError extends FullError {
    constructor(err) {
        super(err);
        this.name = 'IncorrectArgTypeError';
        this.code = '003';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     IncorrectArgLengthError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'IncorrectArgLengthError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '006'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element has incorrect length: .+$"
 */
class IncorrectArgLengthError extends FullError {
    constructor(target, min, max) {
        super(min === undefined
            ? `${target} should be less than ${max} characters`
            : min !== max
                ? `${target} should be more than ${min} and less than ${max} characters`
                : `${target} should be ${min} characters`);
        this.name = 'IncorrectArgLengthError';
        this.code = '004';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     ElementTooShortError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'ElementTooShortError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '008'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element .+$ is too short. Minimum length is .+$"
 */
class ElementTooShortError extends FullError {
    constructor(target, min) {
        super(`Element ${target} is too short. Minimum length is ${min}`);
        this.name = 'ElementTooShortError';
        this.code = '005';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     ElementTooLongError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'ElementTooLongError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '009'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element .+$ is too long. Maximum length is .+$"
 */
class ElementTooLongError extends FullError {
    constructor(target, min) {
        super(`Element ${target} is too long. Maximum length is ${min}`);
        this.name = 'ElementTooShortLongError';
        this.code = '006';
        this.status = 400;
    }
}

exports.default = Validation;
exports.ElementTooLongError = ElementTooLongError;
exports.ElementTooShortError = ElementTooShortError;
exports.FullError = FullError;
exports.IncorrectArgError = IncorrectArgError;
exports.IncorrectArgLengthError = IncorrectArgLengthError;
exports.IncorrectArgTypeError = IncorrectArgTypeError;
exports.MissingArgError = MissingArgError;
