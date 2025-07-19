'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 *           example: '100'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Missing param: .+$"
 */
class MissingArgError extends FullError {
    constructor(param) {
        super(`Missing param: ${param}`);
        this.name = 'MissingArgError';
        this.code = '100';
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
 *           example: '102'
 *         message:
 *           type: string
 *           description: Error message describing the incorrect parameter.
 *           example: 'Data not provided'
 */
class IncorrectArgError extends FullError {
    constructor(err) {
        super(err);
        this.name = 'IncorrectArgError';
        this.code = '102';
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
 *           example: '103'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element has incorrect length: .+$"
 */
class IncorrectArgTypeError extends FullError {
    constructor(err) {
        super(err);
        this.name = 'IncorrectArgTypeError';
        this.code = '103';
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
 *           example: '104'
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
        this.code = '104';
        this.status = 400;
    }
}
/**
 * @openapi
 * components:
 *   schemas:
 *     IncorrectArgMinLengthError:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Error name describing the error cause.
 *           example: 'IncorrectArgMinLengthError'
 *         code:
 *           type: string
 *           description: Unique code associated with the error.
 *           example: '105'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element has incorrect length: .+$"
 */
class IncorrectArgMinLengthError extends FullError {
    constructor(target, min) {
        super(`${target} should be more than ${min} characters`);
        this.name = 'IncorrectArgMinLengthError';
        this.code = '105';
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
 *           example: '106'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element .+$ is too short. Minimum length is .+$"
 */
class ElementTooShortError extends FullError {
    constructor(target, min) {
        super(`Element ${target} is too short. Minimum length is ${min}`);
        this.name = 'ElementTooShortError';
        this.code = '106';
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
 *           example: '107'
 *         message:
 *           type: string
 *           description: Error message describing the error cause.
 *           pattern: "^Element .+$ is too long. Maximum length is .+$"
 */
class ElementTooLongError extends FullError {
    constructor(target, min) {
        super(`Element ${target} is too long. Maximum length is ${min}`);
        this.name = 'ElementTooShortLongError';
        this.code = '107';
        this.status = 400;
    }
}

class Validation {
    _v;
    _name;
    constructor(v, name) {
        this._v = v;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    get v() {
        return this._v;
    }
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.MissingArgError} Error whenever data is missing.
     */
    isDefined() {
        const { v, name } = this;
        if (v === undefined || v === null)
            throw new MissingArgError(name);
        return this;
    }
    /**
     * Validate if element is typeof object
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isObject() {
        const { v, name } = this;
        if (typeof v !== 'object' || Array.isArray(v)) {
            throw new IncorrectArgTypeError(`${name} should be a object`);
        }
        return this;
    }
    /**
     * Validate if element is typeof string
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isString() {
        const { v, name } = this;
        if (typeof v !== 'string') {
            throw new IncorrectArgTypeError(`${name} should be a string`);
        }
        return this;
    }
    /**
     * Validate if element is typeof number
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumber() {
        const { v, name } = this;
        if (typeof v !== 'number' || isNaN(v))
            throw new IncorrectArgTypeError(`${name} should be number`);
        return this;
    }
    /**
     * Validate if element is typeof boolean
     * Require param: any.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isBoolean() {
        const { v, name } = this;
        if (typeof v !== 'boolean')
            throw new IncorrectArgTypeError(`${name} should be boolean`);
        return this;
    }
    /**
     * Validate if element is typeof array
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new IncorrectArgTypeError(`${name} should be array`);
        return this;
    }
    /**
     * Validate if element has children, which are typeof string
     * Require param: array of strings.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isStringArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new IncorrectArgTypeError(`${name} should be array`);
        if (value.length === 0)
            return this;
        value.forEach((e) => {
            if (typeof e !== 'string')
                throw new IncorrectArgTypeError(`${name}' elements are not typeof string`);
        });
        return this;
    }
    /**
     * Validate if element has children, which are typeof number
     * Require param: array of numbers.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isNumberArray() {
        const { v, name } = this;
        const value = v;
        if (!Array.isArray(value))
            throw new IncorrectArgTypeError(`${name} should be array`);
        if (value.length === 0)
            return this;
        value.forEach((e) => {
            if (typeof e !== 'number')
                throw new IncorrectArgTypeError(`${name}' elements are not typeof number`);
        });
        return this;
    }
    /**
     * Validate if element's length is smaller than x and bigger than y
     * Require param: string.
     * @param max Max allowed length.
     * @param min Minimum allowed length.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect length.
     */
    hasLength(max, min) {
        const { v, name } = this;
        const value = v;
        if (min) {
            if (value.length < min || value.length > max)
                throw new IncorrectArgLengthError(name, min, max);
        }
        else {
            if (value.length > max)
                throw new IncorrectArgLengthError(name, min, max);
        }
        return this;
    }
    /**
     * Validate if element's length is bigger than x
     * Require param: string.
     * @param length Minimum length.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is incorrect length.
     */
    hasMinLength(length) {
        const { v, name } = this;
        const value = v;
        if (value.length < length)
            throw new ElementTooShortError(name, length);
        return this;
    }
    /**
     * Validate if element is smaller than x and bigger than y
     * Require param: number.
     * @param max Max allowed size.
     * @param min Min allowed size.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect size.
     */
    isBetween(max, min) {
        const { v, name } = this;
        const value = v;
        if (min) {
            if (value < min || value > max)
                throw new IncorrectArgLengthError(name, min, max);
        }
        else {
            if (value > max)
                throw new IncorrectArgLengthError(name, min, max);
        }
        return this;
    }
    /**
     * Validate if element is bigger than x
     * Require param: number.
     * @param min Min allowed size.
     * @returns {this} This.
     * @throws {errors.IncorrectArgLengthError} Error whenever data is incorrect size.
     */
    hasBiggerValue(min) {
        const { v, name } = this;
        const value = v;
        if (value < min)
            throw new IncorrectArgMinLengthError(name, min);
        return this;
    }
    /**
     * Validate if element is inside enum
     * Require param: any.
     * @param enumTarget Enum to compare param against.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is incorrect type.
     */
    isPartOfEnum(enumTarget) {
        const { v, name } = this;
        const value = v;
        const keys = Object.values(enumTarget);
        if (!keys.includes(value))
            throw new IncorrectArgTypeError(`${name} has incorrect type`);
        return this;
    }
    /**
     * Validate if element is compatible with regex
     * Require param: any.
     * @param regex Regex to validate.
     * @param error Error message to throw.
     * @returns {this} This.
     * @throws {errors.IncorrectArgTypeError} Error whenever data is not valid with regex.
     */
    isRegexCompatible(regex, error) {
        const { v } = this;
        const value = v;
        if (!regex.test(value))
            throw new IncorrectArgTypeError(error);
        return this;
    }
    /**
     * Validate if element has more children than x
     * Require param: array of strings.
     * @param amount Minimum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooShortError} Error whenever data is too short.
     */
    minElements(amount) {
        const { v, name } = this;
        const value = v;
        if (value.length < amount)
            throw new ElementTooShortError(name, amount);
        return this;
    }
    /**
     * Validate if element has fewer children than x
     * Require param: array of strings.
     * @param amount Maximum amount of elements.
     * @returns {this} This.
     * @throws {errors.ElementTooLongError} Error whenever data is too long.
     */
    maxElements(amount) {
        const { v, name } = this;
        const value = v;
        if (value.length > amount)
            throw new ElementTooLongError(name, amount);
        return this;
    }
}

exports.ElementTooLongError = ElementTooLongError;
exports.ElementTooShortError = ElementTooShortError;
exports.FullError = FullError;
exports.IncorrectArgError = IncorrectArgError;
exports.IncorrectArgLengthError = IncorrectArgLengthError;
exports.IncorrectArgMinLengthError = IncorrectArgMinLengthError;
exports.IncorrectArgTypeError = IncorrectArgTypeError;
exports.MissingArgError = MissingArgError;
exports.default = Validation;
